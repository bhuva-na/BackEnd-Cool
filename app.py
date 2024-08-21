from flask import Flask, request, jsonify
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os
from dotenv import load_dotenv
from flask_cors import CORS
import logging

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# CORS configuration
CORS(app, resources={r"/*": {"origins": "https://coe-ochre.vercel.app"}}, supports_credentials=True)

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# @app.route('/send-enquiry', methods=['POST'])
# def send_enquiry():
#     try:
#         # Get form data from request
#         data = request.json
#         if not data:
#             return jsonify({'status': 'error', 'message': 'No data provided'}), 400

#         name = data.get('name')
#         contact_number = data.get('contactNumber')
#         email = data.get('email')
#         services = ', '.join(data.get('services', []))
#         message = data.get('message')

#         # Check if required fields are provided
#         if not (name and contact_number and email):
#             return jsonify({'status': 'error', 'message': 'Missing required fields'}), 400

#         # Create the email message
#         email_content = (
#             f"Name: {name}\n"
#             f"Contact Number: {contact_number}\n"
#             f"Email: {email}\n"
#             f"Services: {services}\n\n"
#             f"Message:\n{message}"
#         )

#         # Create SendGrid Mail object
#         msg = Mail(
#             from_email=os.getenv('SENDGRID_SENDER_EMAIL'),
#             to_emails=os.getenv('SENDGRID_RECIPIENT_EMAIL'),
#             subject='Enquiry Form Submission',
#             plain_text_content=email_content
#         )

#         # Initialize SendGrid client
#         sendgrid_api_key = os.getenv('SENDGRID_API_KEY')
#         if not sendgrid_api_key:
#             raise ValueError('SendGrid API key not found in environment variables')

#         sg = SendGridAPIClient(sendgrid_api_key)

#         # Send the email
#         response = sg.send(msg)

#         logger.info(f'Email sent with status code: {response.status_code}')
#         return jsonify({
#             'status': 'success',
#             'message': f'Enquiry form sent successfully! Status code: {response.status_code}'
#         })

#     except Exception as e:
#         logger.error(f'Error sending email: {str(e)}')
#         return jsonify({
#             'status': 'error',
#             'message': 'An error occurred while sending the enquiry form. Please try again later.'
#         }), 500


@app.route('/send-enquiry', methods=['POST'])
def send_enquiry():
    try:
        data = request.json
        logger.info(f'Received data: {data}')  # Log received data

        # Process data...
        
    except Exception as e:
        logger.error(f'Error: {str(e)}')
        return jsonify({'status': 'error', 'message': 'An error occurred while sending the enquiry form. Please try again later.'}), 500

def test_sendgrid():
    try:
        msg = Mail(
            from_email=os.getenv('SENDGRID_SENDER_EMAIL'),
            to_emails=os.getenv('SENDGRID_RECIPIENT_EMAIL'),
            subject='Test Email',
            plain_text_content='This is a test email.'
        )

        sg = SendGridAPIClient(os.getenv('SENDGRID_API_KEY'))
        response = sg.send(msg)
        print(f'SendGrid response: {response.status_code} - {response.body}')
    except Exception as e:
        print(f'Error: {str(e)}')

test_sendgrid()