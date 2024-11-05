import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './Invest.css'; // Import CSS file for specific styles

const InvestigationPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="investigation-page">
      {/* Header bar */}
      <div className="investigation-header">
        <h2>Private Investigation Services</h2>
        <br />
        <img src="./logo.png" alt="Logo" />
      </div>

      {/* Main content section */}
      <section className="investigation-content-section">
        <div data-aos="fade-right" className="investigation-image-container">
          <img src="./investigation.jpg" alt="Investigation Services" className="investigation-image" />
        </div>
        <div data-aos="fade-left" className="investigation-details">
          <h1>
            Private Investigation <span className="highlight">Services</span>
          </h1>
          <p>
            At MBACAL SECURITY & INVESTIGATION, we offer comprehensive and, more importantly, discreet investigation
            services to uncover the truth and provide clarity in complex situations. Our team of experienced
            investigators utilizes advanced techniques and technology to conduct thorough inquiries, whether for
            corporate fraud, background checks, or personal matters. With a commitment to confidentiality and
            professionalism, we deliver detailed reports and actionable insights to help you make informed decisions.
            Trust us to handle your investigative needs with discretion and expertise, ensuring you have the information
            you need to move forward confidently.
          </p>
        </div>
      </section>
    </div>
  );
};

export default InvestigationPage;
