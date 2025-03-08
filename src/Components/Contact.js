import React, { useState } from 'react';
import '../App.css';
import { db } from '../firebase'; // Import Firestore
import { collection, addDoc } from 'firebase/firestore';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const handleMobileChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 10);
    if (/[^0-9]/.test(value)) {
      setMobileError('Only numeric digits are allowed.');
    } else {
      setMobileError('');
    }
    setMobileNumber(numericValue);
  };

  const handleMobileBlur = () => {
    if (mobileNumber.length > 0 && mobileNumber.length < 10) {
      setMobileError('Mobile number must be exactly 10 digits.');
    } else if (mobileNumber.length === 10) {
      setMobileError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mobileNumber.length !== 10) {
      setMobileError('Mobile number must be exactly 10 digits.');
      return;
    }

    try {
      const contactData = {
        name,
        email,
        mobileNumber,
        message,
        timestamp: new Date().toISOString()
      };
      
      await addDoc(collection(db, 'contacts'), contactData);
      setSubmitStatus('Thank you! Your message has been sent.');
      setName('');
      setEmail('');
      setMobileNumber('');
      setMessage('');
      setMobileError('');
    } catch (error) {
      console.error('Error saving to Firebase:', error);
      setSubmitStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="input-group">
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={handleMobileChange}
              onBlur={handleMobileBlur}
              required
              maxLength="10"
              className="form-input"
            />
            {mobileError && <span className="error-message">{mobileError}</span>}
          </div>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="form-textarea"
          ></textarea>
          <button type="submit" className="cta-button">Send Message</button>
          {submitStatus && <p className="submit-status">{submitStatus}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;