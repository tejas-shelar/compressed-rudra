import React, { useState } from 'react';
import '../App.css';

function Contact() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [mobileError, setMobileError] = useState('');

  const handleMobileChange = (e) => {
    const value = e.target.value;
    // Allow only numeric input and limit to 10 digits
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 10);
    
    // Check if the original input contains non-numeric characters
    if (/[^0-9]/.test(value)) {
      setMobileError('Only numeric digits are allowed.');
    } else {
      setMobileError('');
    }

    setMobileNumber(numericValue);
  };

  const handleMobileBlur = () => {
    // Validate length on blur
    if (mobileNumber.length > 0 && mobileNumber.length < 10) {
      setMobileError('Mobile number must be exactly 10 digits.');
    } else if (mobileNumber.length === 10) {
      setMobileError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length !== 10) {
      setMobileError('Mobile number must be exactly 10 digits.');
      return;
    }
    // Proceed with form submission logic here (e.g., API call)
    console.log('Form submitted:', { mobileNumber });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="Name" required className="form-input" />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" required className="form-input" />
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
          <textarea placeholder="Message" required className="form-textarea"></textarea>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;