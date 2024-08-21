from flask import Flask, request, jsonify
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os
from dotenv import load_dotenv
from flask_cors import CORS

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins":"https://cool-gen-work-task.vercel.app"}})

@app.route('/send-enquiry', methods=['POST','GET'])
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

@app.route('/')
def index():
    return "Welcome to the backend!"