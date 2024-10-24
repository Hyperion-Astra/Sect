import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './Overdue.css'

const Overdue = () => {
    useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <section className="governance-section" style={sectionStyle}>
      <div data-aos="fade-right" className="governance-image" style={imageContainerStyle}>
        <img src="./legal.webp" alt="Site Security" style={imageStyle} />
      </div>
      <div data-aos="fade-left" className="governance-content" style={contentStyle}>
        <h1 style={titleStyle}>
          Overdue Account Recovery <span className="highlight" style={highlightStyle}>Services</span>
        </h1>
        <p style={paragraphStyle}>
        We specialize in integrated financial and legal solutions to help you effectively manage and recover overdue accounts. Our dedicated team combines financial expertise with legal acumen to create tailored strategies that enhance your cash flow and minimize losses.
        </p>
        <div className="key-features">
          <h2>Key Features of Our Service:</h2>
          <ul>
            <li><strong>Comprehensive Assessment:</strong> We conduct a thorough review of your accounts to identify overdue payments and assess the best recovery approach.</li>
            <li><strong>Customized Recovery Plans:</strong> Our experts develop personalized strategies that align with your business goals and customer relationships.</li>
            <li><strong>Legal Support:</strong> With a strong legal foundation, we ensure compliance with regulations while pursuing collections, protecting your interests throughout the process.</li>
            <li><strong>Negotiation and Mediation:</strong> We engage in effective communication with debtors, aiming for amicable resolutions that facilitate timely payments.</li>
            <li><strong>Ongoing Monitoring:</strong> Our team provides continuous follow-up and support, ensuring that recovery efforts remain on track.</li>
          </ul>
          <p>Partner with us to regain control over your finances and improve your overdue account recovery rates. Let us help you turn challenges into opportunities for growth.</p>
        </div>
        <div className="explore-button" style={buttonContainerStyle}>
          <Link to="/services">
            <button style={buttonStyle}>
              Explore Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

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

const buttonContainerStyle = {
  marginTop: '20px',
};

const buttonStyle = {
  backgroundColor: '#000080',
  color: '#fff',
  padding: '12px 25px',
  fontSize: '1rem',
  borderRadius: '30px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

buttonStyle[':hover'] = {
  backgroundColor: '#004080',
};

export default Overdue;
