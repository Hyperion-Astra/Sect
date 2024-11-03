import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './MarketPage.css';

const SecurityPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="market-page">
      {/* Header bar */}
      <div className="market-header">
        <h2>Security Training Services</h2>
      </div>

      {/* Main content section */}
      <section className="market-content-section">
        <div data-aos="fade-right" className="market-image-container">
          <img src="./secure.jpg" alt="Market Survey Services" className="market-image" />
        </div>
        <div data-aos="fade-left" className="market-details">
          <h1>
            Security Training <span className="highlight">Services</span>
          </h1>
          <p>
          Providing comprehensive security training, we offer courses for guard card 
          certification and firearm permits. Our programs are designed to equip 
          security personnel with essential skills and knowledge, ensuring they meet 
          state requirements and are fully prepared for their roles in safeguarding 
          people and property.
          </p>
          

        </div>
      </section>
    </div>
  );
};

export default SecurityPage;
