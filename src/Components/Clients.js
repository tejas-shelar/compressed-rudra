import React from 'react';
import '../App.css';

function Clients() {
  return (
    <section id="clients" className="clients">
      <div className="container">
        <h2>Our Esteemed Clients</h2>
        <div className="clients-grid">
          <img 
            src="https://1000logos.net/wp-content/uploads/2017/03/Hilton-Logo-500x281.png" 
            alt="Hilton Logo" 
            className="client-logo"
          />
          <img 
            src="https://1000logos.net/wp-content/uploads/2017/06/Marriott-Logo-500x281.png" 
            alt="Marriott Logo" 
            className="client-logo"
          />
          <img 
            src="https://1000logos.net/wp-content/uploads/2022/08/Hyatt-Logo-500x281.png" 
            alt="Hyatt Logo" 
            className="client-logo"
          />
          <img 
            src="https://1000logos.net/wp-content/uploads/2021/06/Four-Seasons-logo-500x281.png" 
            alt="Four Seasons Logo" 
            className="client-logo"
          />
        </div>
      </div>
    </section>
  );
}

export default Clients;