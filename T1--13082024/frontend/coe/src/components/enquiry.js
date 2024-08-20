import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../App.css'; // Import your updated CSS file
import axios from 'axios'; // Import Axios for making HTTP requests

const EnquiryForm = ({ showForm, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    services: [],
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    contactNumber: '',
    email: '',
  });

  const validateField = (name, value) => {
    let errorMsg = '';

    if (name === 'name') {
      const namePattern = /^[A-Za-z\s]+$/;
      if (!namePattern.test(value)) {
        errorMsg = 'Name should contain only letters and spaces.';
      }
    }

    if (name === 'contactNumber') {
      const contactPattern = /^\d+$/;
      if (!contactPattern.test(value)) {
        errorMsg = 'Contact number should contain only digits.';
      } else if (value.length !== 10) {
        errorMsg = 'Contact number should be exactly 10 digits.';
      }
    }

    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        errorMsg = 'Please enter a valid email address.';
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'services') {
      const selectedServices = Array.from(e.target.selectedOptions, (option) => option.value);
      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedServices,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      // Validate as user types
      validateField(name, value);
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      services: checked
        ? [...prevData.services, value]
        : prevData.services.filter((service) => service !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate all fields before submission
    Object.keys(formData).forEach((field) => validateField(field, formData[field]));

    if (!Object.values(errors).some((error) => error)) {
      try {
        // Send form data to Flask backend
        const response = await axios.post('http://localhost:5000/api/send-enquiry', formData);
        if (response.status === 200) {
          alert('Form submitted successfully!');
        } else {
          alert('Failed to submit the form.');
        }
      } catch (error) {
        console.error('There was an error submitting the form:', error);
      }

      // Clear form data if needed
      setFormData({
        name: '',
        contactNumber: '',
        email: '',
        services: [],
        message: '',
      });
    }
  };

  if (!showForm) return null; // If not showing, render nothing

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ backgroundColor: "white" }}>
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>NAME</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              isInvalid={!!errors.name}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formContactNumber">
            <Form.Label>CONTACT NUMBER</Form.Label>
            <Form.Control
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              isInvalid={!!errors.contactNumber}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.contactNumber}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>EMAIL ID</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              isInvalid={!!errors.email}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formServices" style={{ marginTop: "5%" }}>
            <Form.Label>SERVICES</Form.Label>
            {['RESEARCH PROJECTS', 'PATHWAY INTERNSHIP', 'PRORESUME CRAFTING', 'CAREERGUIDE CONSULTING', 'ALL THE ABOVE'].map((service) => (
              <Form.Check
                key={service}
                type="checkbox"
                id={`formService${service}`}
                label={service}
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleCheckboxChange}
              />
            ))}
          </Form.Group>

          <Form.Group controlId="formMessage" style={{ marginTop: "5%" }}>
            <Form.Label>MESSAGE</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ marginTop: "5%" }}>Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default EnquiryForm;
