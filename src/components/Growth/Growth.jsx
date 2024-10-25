import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Growth = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div>
      <section className="growth-section" style={sectionStyle}>
        <div data-aos="fade-right" className="growth-content" style={contentStyle}>
          <h1 style={titleStyle}>
            Roving Patrol<span className="highlight" style={highlightStyle}> Services</span>
          </h1>
          <p style={paragraphStyle}>
            At MBACAL SECURITY & INVESTIGATION, we offer proactive roving patrol services designed to enhance security and deter potential threats. Our highly trained security personnel conduct regular, unpredictable patrols throughout your property, ensuring comprehensive coverage and rapid response to any incidents.
          </p>
          <div className="explore-button" style={buttonContainerStyle}>
            <Link to="/roving-patrol-services">
              <button style={buttonStyle}>Explore Roving Patrol Services</button>
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" className="growth-image" style={imageContainerStyle}>
          <img src="./roving.jpg" alt="Roving Patrol" style={imageStyle} />
        </div>
      </section>
    </div>
  );
};

// Inline styles for layout and aesthetics
const sectionStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '50px 5%',
  backgroundColor: '#f4f4f9',
  gap: '40px',
  flexWrap: 'wrap-reverse',
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

export default Growth;
