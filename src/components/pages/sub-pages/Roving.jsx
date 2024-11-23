import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './MarketPage.css';

const Roving = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="experience-page">
      {/* Header bar */}
      <br />
      <div className="market-header">
        <h2>MBACAL SECURITY & INVESTIGATIONS</h2>
        <br />
        <img src="./logo.png" alt="Logo" />
      </div>

      {/* Main content section */}
      <section className="experience-section" style={sectionStyle}>
        <div data-aos="fade-right" className="experience-content" style={contentStyle}>
          <h1 style={titleStyle}>
            Roving Patrol<span className="highlight" style={highlightStyle}> Services</span>
          </h1>
          <p style={paragraphStyle}>
          At MBACAL SECURITY & INVESTIGATIONS, we offer proactive roving patrol services designed to enhance security and deter potential threats. Our highly trained security personnel conduct regular, unpredictable patrols throughout your property, ensuring comprehensive coverage and rapid response to any incidents. By maintaining a visible presence, we not only help prevent criminal activity but also provide peace of mind for employees, customers, and visitors. Whether it’s a commercial facility, residential area, or event venue, our roving patrols are a reliable solution for creating a safer environment and enhancing overall security.
          </p>

        </div>
        <div data-aos="fade-left" className="experience-image" style={imageContainerStyle}>
          <img src="./roving.jpg" alt="Roving Patrol Services" style={imageStyle} />
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

export default Roving;
