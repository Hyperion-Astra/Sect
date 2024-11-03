import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './MarketPage.css';

const LivePage = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="market-page">
      {/* Header bar */}
      <div className="market-header">
        <h2>Live Scan Services</h2>
      </div>

      {/* Main content section */}
      <section className="market-content-section">
        <div data-aos="fade-right" className="market-image-container">
          <img src="./live.jpg" alt="Market Survey Services" className="market-image" />
        </div>
        <div data-aos="fade-left" className="market-details">
          <h1>
            Live Scan <span className="highlight">Services</span>
          </h1>
          <p>
          Offering fast, reliable live scan fingerprinting services, our team 
          specializes in background checks for individuals and businesses. 
          We securely process and submit fingerprints directly to the Department of 
          Justice (DOJ), ensuring compliance and swift results for employment, 
          licensing, and other verification needs.
          </p>

        </div>
      </section>
    </div>
  );
};

export default LivePage;
