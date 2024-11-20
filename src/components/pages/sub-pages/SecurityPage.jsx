import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const SecurityPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="notary-page">
      {/* Header bar */}
      <br /><br /><br />

      {/* Main content section */}
      <section className="governance-section" style={sectionStyle}>
        <div data-aos="fade-right" className="governance-image" style={imageContainerStyle}>
          <img src="./secure.jpg" alt="Site Security" style={imageStyle} />
        </div>
        <div data-aos="fade-left" className="governance-content" style={contentStyle}>
          <h1 style={titleStyle}>
            Security Training <span className="highlight" style={highlightStyle}>Services</span>
          </h1>
          <p style={paragraphStyle}>
          Mbacal Security & Investigations is a specialized company dedicated to empowering 
          individuals and organizations in the security sector through professional training 
          and certification. The company offers comprehensive programs in Guard Card 
          Training, Firearms Training, and Baton Training, ensuring that security personnel 
          have the skills and knowledge required to excel in their roles.
          </p>
          <div className="key-features">
            <h2>Key Features of Our Service:</h2>
            <ul>
              <li><strong>Guard Card Training:</strong>This program prepares individuals to meet state requirements for becoming licensed security guards. It covers essential topics like legal responsibilities, conflict resolution, emergency response, and professional ethics, enabling trainees to perform their duties confidently and competently.</li>
              <li><strong>Firearms Training:</strong>Tailored for those seeking to carry firearms as part of their security responsibilities, this program emphasizes safety, proper handling, maintenance, and tactical use. It also includes legal considerations to ensure compliance with state and federal regulations.</li>
              <li><strong>Baton Training:</strong>This hands-on course teaches the proper use of batons in defensive situations, emphasizing techniques that maximize safety and effectiveness while minimizing risk. The training includes situational awareness, self-defence tactics, and legal use-of-force protocols.</li>
              </ul>
          
          </div>
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

export default SecurityPage;
