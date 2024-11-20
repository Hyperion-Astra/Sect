import React, { useEffect } from 'react';
import './Box.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Training = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <section className='box-section' style={sectionStyle}>
      <div data-aos="fade-right" className="box-image" style={imageContainerStyle}>
        <img src="./secure.jpg" alt="Security Training" style={imageStyle} />
      </div>
      <div data-aos="fade-left" className="box-content" style={contentStyle}>
        <h1 style={titleStyle}>
           Security Training <span className='highlight' style={highlightStyle}>Services</span>
        </h1>
        <p style={paragraphStyle}>
        Providing comprehensive security training, we offer courses for guard card 
        certification and firearm permits</p>
        <div className="explore-button" style={buttonContainerStyle}>
          <Link to="/security-training-services">
            <button style={buttonStyle}>Explore Security Training Services</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Styles for layout and aesthetics
const sectionStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '50px 5%',
  backgroundColor: '#f4f4f9',
  gap: '40px',
  flexWrap: 'wrap-reverse',
};

const imageContainerStyle = {
  flex: 1,
  textAlign: 'center',
};

const imageStyle = {
  width: '100%',
  maxWidth: '500px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  border: '8px solid #004080',
};

const contentStyle = {
  flex: 1,
  textAlign: 'left',
};

const titleStyle = {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
};

const highlightStyle = {
    color: '#004080',
};

const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#555',
    marginBottom: '30px',
};

const buttonContainerStyle = {
    marginTop: '20px',
};

const buttonStyle = {
    backgroundColor: '#004080',
    color: '#fff',
    padding: '12px 25px',
    fontSize: '1rem',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};

buttonStyle[':hover'] = {
    backgroundColor: '#002060',
};

export default Training;
