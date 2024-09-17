from flask import Flask, request, jsonify, render_template
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os
from dotenv import load_dotenv
from flask_cors import CORS
import re
import long_responses as long
import mysql.connector

# Load environment variables from .env file
load_dotenv()

# Global variables for conversation state
name_collected = False
phone_collected = False
user_name = ""
user_number = ""

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins":[ "https://cool-gen-work-task.vercel.app","http://localhost:3000"]}})


# MySQL Database configuration
app.config['MYSQL_HOST'] = "localhost"
app.config['MYSQL_USER'] = "root"
app.config['MYSQL_PASSWORD'] = "Bhuvana01"
app.config['MYSQL_DB'] = "usersDetails"

# Database connection function
def connect_db():
    try:
        connection = mysql.connector.connect(
            host=app.config['MYSQL_HOST'],
            user=app.config['MYSQL_USER'],
            password=app.config['MYSQL_PASSWORD'],
            database=app.config['MYSQL_DB']
        )
        return connection
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return None

# COE Email integration
@app.route('/send-enquiry', methods=['POST', 'GET'])
def send_enquiry():
    try:
        # Get form data from request
        data = request.json
        name = data.get('name')
        contact_number = data.get('contactNumber')
        email = data.get('email')
        services = ', '.join(data.get('services', []))
        message = data.get('message')

        # Create the email message
        email_content = (
            f"Name: {name}\n"
            f"Contact Number: {contact_number}\n"
            f"Email: {email}\n"
            f"Services: {services}\n\n"
            f"Message:\n{message}"
        )

        msg = Mail(
            from_email=os.getenv('SENDGRID_SENDER_EMAIL'),
            to_emails=os.getenv('SENDGRID_RECIPIENT_EMAIL'),
            subject='Enquiry Form Submission',
            plain_text_content=email_content
        )

        # Initialize SendGrid client
        sg = SendGridAPIClient(os.getenv('SENDGRID_API_KEY'))

        # Send the email
        response = sg.send(msg)

        return jsonify({
            'status': 'success',
            'message': f'Enquiry form sent successfully! Status code: {response.status_code}'
        })
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

# Chatbot integration
def store_user_details(name, phone):
    conn = connect_db()
    if conn is None:
        return "Database connection failed."
    
    try:
        cur = conn.cursor()
        query = "INSERT INTO userdetails (name, phone) VALUES (%s, %s)"
        cur.execute(query, (name, phone))
        conn.commit()
    except Exception as e:
        print(f"Database error: {e}")
    finally:
        cur.close()
        conn.close()

def message_probability(user_message, recognised_words, single_response=False, required_words=[]):
    message_certainty = 0
    has_required_words = True

    for word in user_message:
        if word in recognised_words:
            message_certainty += 1

    percentage = float(message_certainty) / float(len(recognised_words))

    for word in required_words:
        if word not in user_message:
            has_required_words = False
            break

    if has_required_words or single_response:
        return int(percentage * 100)
    else:
        return 0

def check_all_messages(message):
    global name_collected, phone_collected, user_name, user_number

    if not name_collected:
        user_name = " ".join(message).strip()  # Capture the user's name
        if user_name:
            name_collected = True
            return f"Thank you, {user_name}! Could you please provide your phone number?"
        else:
            return "Hello! Before we continue, may I know your name?"

    elif name_collected and not phone_collected:
        user_number = " ".join(message).strip()  # Capture the user's phone number
        if re.match(r"^\d{10}$", user_number):  # Validating a 10-digit number
            phone_collected = True
            store_user_details(user_name, user_number)
            return f"Thank you, {user_name}! Now you can ask me about services or pricing."
        else:
            return "That doesn't seem like a valid phone number. Please enter a 10-digit number."

def normal_conversation(message):
    highest_prob_list = {}

    def response(bot_response, list_of_words, single_response=False, required_words=[]):
        nonlocal highest_prob_list
        highest_prob_list[bot_response] = message_probability(message, list_of_words, single_response, required_words)

    response('Hello!',['hello','hi','hey','helo','hello','heyo'], single_response= True)
    response('I\'m doing fine, and you?', ['how','are','you','doing'] , required_words=['how'])
    response('Thank you!',['i','love','cuberoots','thankyou'], required_words =['thankyou'])
    
    response('Goodbye!',['bye','goodbye','see','later'], single_response=True)
    response("I'm Groot created to assist you!",['who','are','you'], required_words=['who','you'])
    response('I can help you with a variety of tasks like answering questions, providing information, and more.', ['what','can','you','do'], required_words=['what','you','do'])
    response('I don\'t have feelings, but I\'m here to help!', ['how','are','you','feeling'], required_words=['how','you','feeling'])
    response('Sure! I can help with that.', ['can','you','help','me'], required_words=['you','help'])
    response('I like to think I\'m pretty smart!', ['are','you','smart'], required_words=['are','you','smart'])
    response('I was created by a team of CoolGen developers.', ['who','created','you'], required_words=['who','created','you'])
    response('My purpose is to assist and provide information.', ['what','is','your','purpose'], required_words=['your','purpose'])
    
    
    response("We offer the following services:<br>1. Internship<br>2. CV Writing<br>3. Career Guide Consulting<br>4. Research Projects<br>5. Literature Survey<br>6. Thesis Writing<br>7. Technical Writing",['What','are','the','services','offerings',], 
            single_response=True)
    
    
    
    response("We offer internships designed to give real-world experience in data science and AI. The cost is 10,000 INR per internship.",['internships', 'internship', 'intern'], 
            single_response=True)
    
    
    
    response("Our CV writing service helps craft professional CVs at just 750 INR.",['cv', 'writing', 'resume'], 
            single_response=True)
    
    response("Our Career Guide Consulting service offers personalized advice for 750 INR per session.",['career', 'consulting', 'guide'], 
            single_response=True)
    
    response("We assist students with research projects to help you with guidance and resources.",['research', 'projects'], 
            single_response=True)
    
    response("Our literature survey program guides you through the process of analyzing and synthesizing existing research.",['literature', 'survey'], 
            single_response=True)
    
    response("Our Thesis Writing service provides expert guidance for structuring, researching, and writing your thesis.",['thesis', 'writing', 'dissertation'], 
            single_response=True)
    
    response("We offer professional Technical Writing services to help you create clear and concise documentation, reports, or manuals.",['technical', 'writing', 'documentation'], 
            single_response=True)
        
    
    
    response("Here are our service prices:<br>\
        1. Internship: 10,000 INR<br>\
        2. CV Writing: 750 INR<br>\
        3. Career Guide Consulting: 750 INR per session<br>\
        4.  Whole Package : 21500 INR ",
            ['price', 'pricing', 'cost', 'charges', 'fee'], 
            single_response=True)
    
    
    response("You can contact us via email at hello@coolgentech.com ", ['contact','email', 'reach'], 
            single_response=True)
    
    response(long.R_EATING,['what','you','eat'], required_words =['you','eat'])
    

    best_match = max(highest_prob_list, key=highest_prob_list.get)

    return long.unknown() if highest_prob_list[best_match] < 1 else best_match

def get_response(user_input):
    global name_collected, phone_collected
    split_message = re.split(r'\s+|[,;?!.-]\s*', user_input.lower())

    if not name_collected or not phone_collected:
        return check_all_messages(split_message)
    else:
        return normal_conversation(split_message)

def reset_conversation():
    global name_collected, phone_collected, user_name, user_number
    name_collected = False
    phone_collected = False
    user_name = ""
    user_number = ""

@app.route("/")
def home():
    reset_conversation()
    return render_template("web.html")

@app.route("/get", methods=["POST", "GET"])
def chatbot_response():
    user_text = request.form["msg"]
    return jsonify({"response": get_response(user_text)})

if __name__ == "__main__":
    app.run(debug=True)
