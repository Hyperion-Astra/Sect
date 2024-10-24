import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './Overdue.css'

const Market = () => {
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
         Market Survey <span className="highlight" style={highlightStyle}>Services</span>
        </h1>
        <p style={paragraphStyle}>
        We specialize in comprehensive market survey services that provide valuable insights to drive your business decisions. Our expert team employs a variety of methodologies to gather and analyze data, helping you understand market trends, customer preferences, and competitive dynamics.
        </p>
        <div className="key-features">
          <h2>Key Features of Our Service:</h2>
          <ul>
            <li><strong>Tailored Survey:</strong> We design custom surveys that target your specific objectives, ensuring relevant and actionable insights for your business.</li>
            <li><strong>Data Collection:</strong>  Utilizing both quantitative and qualitative methods, we gather data through various channels, including online surveys, interviews, and focus groups.</li>
            <li><strong>In-Depth Analysis:</strong> Our team analyzes the collected data to identify key trends, patterns, and opportunities that can inform your strategy.</li>
            <li><strong>Actionable Insights:</strong> We provide clear, actionable recommendations based on the survey findings, enabling you to make informed decisions to enhance your market position.</li>
            <li><strong>Ongoing Support:</strong> We offer continuous support to help you implement the insights gained from the survey and track the impact on your business performance.</li>
          </ul>
          <p>Partner with Mbacal INTEGRATED FINANCIAL & LEGAL CONSULT for market survey services that empower you to make strategic decisions with confidence. Let us help you navigate your market landscape effectively and drive your business growth.</p>
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

export default Market;
