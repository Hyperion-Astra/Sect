import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Site = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="governance-page">
      {/* Header bar */}
      <br />
      <div className="market-header">
        <h2>Site Security Services</h2>
        <br />
        <img src="./logo.png" alt="Logo" />
      </div>

      {/* Main content section */}
      <section className="governance-section" style={sectionStyle}>
        <div data-aos="fade-right" className="governance-image" style={imageContainerStyle}>
          <img src="./site.jpg" alt="Site Security" style={imageStyle} />
        </div>
        <div data-aos="fade-left" className="governance-content" style={contentStyle}>
          <h1 style={titleStyle}>
            Site Security <span className="highlight" style={highlightStyle}>Services</span>
          </h1>
          <p style={paragraphStyle}>
            At MBACAL SECURITY & INVESTIGATION, we recognize the importance of safeguarding your site against potential threats.
            Our site security services are tailored to meet the unique needs of various environments, including construction sites,
            warehouses, and corporate facilities. Our skilled security personnel provide comprehensive monitoring, access control,
            and incident response to ensure the safety of your assets and personnel. With a focus on risk assessment and proactive measures,
            we create a secure environment that allows your operations to run smoothly. Trust us to protect your site, so you can
            concentrate on your business’s success.
          </p>
        
        </div>
      </section>
    </div>
  );
};

// Styles for layout and aesthetics
const sectionStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '50px 5%',
  backgroundColor: '#f8f9fa',
  gap: '30px',
};

const imageContainerStyle = {
  flex: 1,
};

const imageStyle = {
  width: '100%',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  border: '8px solid #000080',
};

const contentStyle = {
  flex: 1.5,
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '20px',
};

const highlightStyle = {
  color: '#000080',
};

const paragraphStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.8',
  color: '#555',
  marginBottom: '30px',
};
export default Site;
