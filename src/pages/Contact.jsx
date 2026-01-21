import React, { useState } from 'react';
import Button from '../components/common/Button';
import '../styles/pages.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting VARDA! We will get back to you soon.');
  };

  return (
    <div className="page-container">
      <section className="page-header">
        <h1>Get in Touch</h1>
        <p className="page-subtitle">
          We're Here to Serve You – Reach Out for Orders, Inquiries, or Support
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-item">
            <h3>📍 Factory Address</h3>
            <p>THAKURJII BEVERAGES</p>
            <p>B-10, Ground Floor</p>
            <p>Chandgad Road MIDC Industrial Area</p>
            <p>Halkarni MIDC, Kolhapur</p>
            <p>Maharashtra - 416507</p>
          </div>
          <div className="info-item">
            <h3>📍 Head Office</h3>
            <p>CENTRUM, 3rd Floor</p>
            <p>SY NO. 98/4, Airport Road</p>
            <p>Hubballi, Dharwad</p>
            <p>Karnataka - 580030</p>
          </div>
          <div className="info-item">
            <h3>📞 Phone</h3>
            <p><strong>Customer Care Executive:</strong> +91 7353550555</p>
          </div>
          <div className="info-item">
            <h3>✉️ Email</h3>
            <p><strong>General Inquiry:</strong> buyasaqua@gmail.com</p>
          </div>
          <div className="info-item">
            <h3>🕒 Business Hours</h3>
            <p><strong>Customer Service:</strong></p>
            <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
            <p>Sunday: 10:00 AM - 5:00 PM</p>
            <p className="note">For emergency orders outside business hours, call our 24/7 helpline</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <p className="form-intro">
            Have a question, feedback, or special request? Fill out the form below and our team 
            will respond within 24 hours. For urgent matters, please call us directly.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <Button type="submit" variant="primary">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
