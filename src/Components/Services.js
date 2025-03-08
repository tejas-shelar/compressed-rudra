import React from 'react';
import '../App.css';

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Premium Services</h2>
        <div className="services-grid">
          <div 
            className="service-item" 
            style={{backgroundImage: 'url(https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}
          >
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="2">
              <path d="M12 2L2 7h20L12 2zm0 5v15m-8-8h16" />
            </svg>
            <h3>Industrial Oil Filtration</h3>
            <p>High-capacity filtration for industrial applications</p>
          </div>
          <div 
            className="service-item" 
            style={{backgroundImage: 'url(https://images.unsplash.com/photo-1584060245918-3bb6fbcf2f7b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}
          >
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="2">
              <path d="M12 2a10 10 0 0 0-10 10h4v6h12v-6h4A10 10 0 0 0 12 2z" />
            </svg>
            <h3>Mobile Filtration Units</h3>
            <p>On-site oil purification services</p>
          </div>
          <div 
            className="service-item" 
            style={{backgroundImage: 'url(https://images.unsplash.com/photo-1565660467558-2cc40ad3066b?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}
          >
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="2">
              <path d="M12 2v20M2 12h20M4 4l16 16M4 20L20 4" />
            </svg>
            <h3>Oil Analysis</h3>
            <p>Detailed oil condition monitoring</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;