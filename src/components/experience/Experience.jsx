import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <section className="experience-section" style={sectionStyle}>
      <div data-aos="fade-right" className="experience-content" style={contentStyle}>
        <h1 style={titleStyle}>
          BodyGuard<span className="highlight" style={highlightStyle}> Services</span>
        </h1>
        <p style={paragraphStyle}>
          At MBACAL SECURITY & INVESTIGATION, we provide elite bodyguard services to ensure the safety and security of individuals in high-risk situations. Our highly trained professionals offer personalized protection tailored to your specific needs, whether for executives, celebrities, or high-profile events. With a focus on threat assessment, tactical planning, and discreet surveillance, our bodyguards are equipped to handle any situation with confidence and professionalism. You can trust us to provide peace of mind, allowing you to focus on your engagements without worry.
          <br /><br />
          Every person and situation requires different security measures and systems to prevent targeted attacks. We conduct a thorough threat and risk assessment to provide a personal protection service that is bespoke to you, your needs, and requirements.
        </p>
        <div className="explore-button" style={buttonContainerStyle}>
          <Link to="/services">
            <button style={buttonStyle}>Explore Bodyguard Services</button>
          </Link>
        </div>
      </div>
      <div data-aos="fade-left" className="experience-image" style={imageContainerStyle}>
        <img src="./body.jpg" alt="Bodyguard Services" style={imageStyle} />
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

export default Experience;
