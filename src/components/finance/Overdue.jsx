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
        We specialize in integrated financial and legal solutions to help you effectively manage and recover overdue accounts.
        </p>
        <div className="explore-button" style={buttonContainerStyle}>
          <Link to="/recovery-services">
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
