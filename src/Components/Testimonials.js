import React from 'react';
import '../App.css';

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-slider">
          <div className="testimonials-track">
            <div className="testimonial-item">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="John Smith" 
                className="testimonial-image"
              />
              <div className="rating">
                <span>★★★★★</span>
              </div>
              <p>"Rudra Electropower transformed our industrial operations with their top-notch filtration systems. Highly recommend!"</p>
              <h4>John Smith</h4>
              <span>Manufacturing Director</span>
            </div>
            <div className="testimonial-item">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Sarah Johnson" 
                className="testimonial-image"
              />
              <div className="rating">
                <span>★★★★☆</span>
              </div>
              <p>"The mobile filtration units saved us time and money. Exceptional service and results!"</p>
              <h4>Sarah Johnson</h4>
              <span>Operations Manager</span>
            </div>
            <div className="testimonial-item">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Mike Chen" 
                className="testimonial-image"
              />
              <div className="rating">
                <span>★★★★★</span>
              </div>
              <p>"Their oil analysis service helped us prevent costly downtime. Professional and reliable."</p>
              <h4>Mike Chen</h4>
              <span>Maintenance Lead</span>
            </div>
            <div className="testimonial-item">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Emily Davis" 
                className="testimonial-image"
              />
              <div className="rating">
                <span>★★★★★</span>
              </div>
              <p>"Outstanding customer support and innovative solutions. Rudra Electropower is a game-changer!"</p>
              <h4>Emily Davis</h4>
              <span>Plant Supervisor</span>
            </div>
            {/* Duplicate items for seamless looping */}
            <div className="testimonial-item">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="John Smith" 
                className="testimonial-image"
              />
              <div className="rating">
                <span>★★★★★</span>
              </div>
              <p>"Rudra Electropower transformed our industrial operations with their top-notch filtration systems. Highly recommend!"</p>
              <h4>John Smith</h4>
              <span>Manufacturing Director</span>
            </div>
            <div className="testimonial-item">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Sarah Johnson" 
                className="testimonial-image"
              />
              <div className="rating">
                <span>★★★★☆</span>
              </div>
              <p>"The mobile filtration units saved us time and money. Exceptional service and results!"</p>
              <h4>Sarah Johnson</h4>
              <span>Operations Manager</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;