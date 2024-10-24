import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './Overdue.css'

const Insurance = () => {
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
          Insurance <span className="highlight" style={highlightStyle}>Services</span>
        </h1>
        <p style={paragraphStyle}>
        We provide a wide range of insurance services tailored to protect your assets and ensure peace of mind. Our team of experts is dedicated to understanding your unique needs and helping you navigate the complexities of insurance coverage.
        </p>
        <div className="key-features">
          <h2>Key Features of Our Service:</h2>
          <ul>
            <li><strong>Comprehensive Coverage Options:</strong> We offer a variety of insurance products, including business, liability, property, and personal insurance, ensuring you have the protection you need.</li>
            <li><strong>Risk Assessment:</strong> Our specialists conduct thorough assessments to identify potential risks and recommend appropriate coverage to mitigate them.</li>
            <li><strong>Customised Solutions:</strong> We work closely with you to develop personalized insurance strategies that align with your specific goals and budget.</li>
            <li><strong>Claims Support:</strong> Our team provides dedicated assistance throughout the claims process, ensuring you receive the support you need for a smooth resolution.</li>
            <li><strong>Ongoing Reviews:</strong> We regularly review your insurance policies to adapt to changes in your business or personal circumstances, ensuring you always have optimal coverage.</li>
          </ul>
          <p>Trust us to safeguard your future with our reliable and comprehensive insurance services. Let us help you find the right coverage to protect what matters most.</p>
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

export default Insurance;
