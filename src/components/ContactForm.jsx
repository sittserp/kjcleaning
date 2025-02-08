import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data using EmailJS
    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, e.target, import.meta.env.VITE_EMAILJS_USER_ID)
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Your message has been sent successfully!');
          setFormData({
            from_name: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
          });
        },
        (error) => {
          console.error(error.text);
          setStatus('There was an error sending your message. Please try again later.');
        }
      );
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="from_name">Your Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="reply_to">Email</label>
          <input
            type="email"
            id="reply_to"
            name="reply_to"
            value={formData.reply_to}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default ContactForm;

