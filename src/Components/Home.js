import React from 'react';
import '../App.css';

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container">
        <h1>Premium Oil Filtration Services</h1>
        <p>Advanced technology for superior equipment performance</p>
        <a href="#contact" className="cta-button">Get a Quote</a>
      </div>
    </section>
  );
}

export default Home;