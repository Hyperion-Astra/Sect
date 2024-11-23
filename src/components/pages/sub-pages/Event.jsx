import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './MarketPage.css';
import { Link } from 'react-router-dom';

const Event = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="market-page">
      {/* Header bar */}
      <div className="market-header">
        <h2>MBACAL SECURITY & INVESTIGATIONS</h2>
        <br />
        <img src="./logo.png" alt="Logo" />
      </div>

      {/* Main content section */}
      <section className="market-content-section">
        <div data-aos="fade-right" className="market-image-container">
          <img src="./legal.webp" alt="Market Survey Services" className="market-image" />
          {/* Button directly below the image */}
          <Link to="/application">
            <button className="request-button">Request for our Services</button>
          </Link>
        </div>
        <div data-aos="fade-left" className="market-details">
          <h1>
            Event Security <span className="highlight">Services</span>
          </h1>
          <p>
            We understand that a successful event goes beyond just the experience; it requires a safe and secure environment.
            <br /> Our dedicated event security team specializes in comprehensive security solutions tailored to your specific needs, whether it's a corporate gathering, concert, or private celebration.
            <br /> We provide trained personnel, access control, crowd management, and emergency response planning to ensure that every aspect of your event runs smoothly.
            <br /> Trust us to safeguard your attendees and create a welcoming atmosphere, allowing you to focus on what matters most—making your event a success.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Event;
