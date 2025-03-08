// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* Header */}
//       <header className="header">
//         <div className="container">
//           <h1 className="logo">Rudra Electropower</h1>
//           <nav>
//             <ul>
//               <li><a href="#home">Home</a></li>
//               <li><a href="#services">Services</a></li>
//               <li><a href="#testimonials">Testimonials</a></li>
//               <li><a href="#contact">Contact</a></li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-overlay"></div>
//         <div className="container">
//           <h1>Premium Oil Filtration Services</h1>
//           <p>Advanced technology for superior equipment performance</p>
//           <button className="cta-button">Get a Quote</button>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="services">
//         <div className="container">
//           <h2>Our Premium Services</h2>
//           <div className="services-grid">
//             <div 
//               className="service-item" 
//               style={{backgroundImage: 'url(https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}
//             >
//               <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="2">
//                 <path d="M12 2L2 7h20L12 2zm0 5v15m-8-8h16" />
//               </svg>
//               <h3>Industrial Oil Filtration</h3>
//               <p>High-capacity filtration for industrial applications</p>
//             </div>
//             <div 
//               className="service-item" 
//               style={{backgroundImage: 'url(https://images.unsplash.com/photo-1584060245918-3bb6fbcf2f7b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}
//             >
//               <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="2">
//                 <path d="M12 2a10 10 0 0 0-10 10h4v6h12v-6h4A10 10 0 0 0 12 2z" />
//               </svg>
//               <h3>Mobile Filtration Units</h3>
//               <p>On-site oil purification services</p>
//             </div>
//             <div 
//               className="service-item" 
//               style={{backgroundImage: 'url(https://images.unsplash.com/photo-1565660467558-2cc40ad3066b?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}
//             >
//               <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="2">
//                 <path d="M12 2v20M2 12h20M4 4l16 16M4 20L20 4" />
//               </svg>
//               <h3>Oil Analysis</h3>
//               <p>Detailed oil condition monitoring</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="testimonials">
//         <div className="container">
//           <h2>What Our Clients Say</h2>
//           <div className="testimonials-slider">
//             <div className="testimonials-track">
//               <div className="testimonial-item">
//                 <img 
//                   src="https://1000logos.net/wp-content/uploads/2017/03/Hilton-Logo-500x281.png" 
//                   alt="Hilton Logo" 
//                   className="testimonial-image"
//                 />
//                 <div className="rating">
//                   <span>★★★★★</span>
//                 </div>
//                 <p>"Rudra Electropower transformed our industrial operations with their top-notch filtration systems."</p>
//                 <h4>Hilton Industries</h4>
//                 <span>Manufacturing Partner</span>
//               </div>
//               <div className="testimonial-item">
//                 <img 
//                   src="https://1000logos.net/wp-content/uploads/2017/06/Marriott-Logo-500x281.png" 
//                   alt="Marriott Logo" 
//                   className="testimonial-image"
//                 />
//                 <div className="rating">
//                   <span>★★★★☆</span>
//                 </div>
//                 <p>"The mobile filtration units saved us time and money. Exceptional service!"</p>
//                 <h4>Marriott Facilities</h4>
//                 <span>Operations Division</span>
//               </div>
//               <div className="testimonial-item">
//                 <img 
//                   src="https://1000logos.net/wp-content/uploads/2022/08/Hyatt-Logo-500x281.png" 
//                   alt="Hyatt Logo" 
//                   className="testimonial-image"
//                 />
//                 <div className="rating">
//                   <span>★★★★★</span>
//                 </div>
//                 <p>"Their oil analysis service helped us prevent costly downtime."</p>
//                 <h4>Hyatt Engineering</h4>
//                 <span>Maintenance Team</span>
//               </div>
//               <div className="testimonial-item">
//                 <img 
//                   src="https://1000logos.net/wp-content/uploads/2021/06/Four-Seasons-logo-500x281.png" 
//                   alt="Four Seasons Logo" 
//                   className="testimonial-image"
//                 />
//                 <div className="rating">
//                   <span>★★★★★</span>
//                 </div>
//                 <p>"Outstanding support and innovative solutions. A game-changer!"</p>
//                 <h4>Four Seasons Tech</h4>
//                 <span>Plant Management</span>
//               </div>
//               {/* Duplicate items for seamless looping */}
//               <div className="testimonial-item">
//                 <img 
//                   src="https://1000logos.net/wp-content/uploads/2017/03/Hilton-Logo-500x281.png" 
//                   alt="Hilton Logo" 
//                   className="testimonial-image"
//                 />
//                 <div className="rating">
//                   <span>★★★★★</span>
//                 </div>
//                 <p>"Rudra Electropower transformed our industrial operations with their top-notch filtration systems."</p>
//                 <h4>Hilton Industries</h4>
//                 <span>Manufacturing Partner</span>
//               </div>
//               <div className="testimonial-item">
//                 <img 
//                   src="https://1000logos.net/wp-content/uploads/2017/06/Marriott-Logo-500x281.png" 
//                   alt="Marriott Logo" 
//                   className="testimonial-image"
//                 />
//                 <div className="rating">
//                   <span>★★★★☆</span>
//                 </div>
//                 <p>"The mobile filtration units saved us time and money. Exceptional service!"</p>
//                 <h4>Marriott Facilities</h4>
//                 <span>Operations Division</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="contact">
//         <div className="container">
//           <h2>Contact Us</h2>
//           <form className="contact-form">
//             <input type="text" placeholder="Name" required />
//             <input type="email" placeholder="Email" required />
//             <textarea placeholder="Message" required></textarea>
//             <button type="submit" className="cta-button">Send Message</button>
//           </form>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="container">
//           <p>© 2025 Rudra Electropower. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import Clients from './Components/Clients';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;