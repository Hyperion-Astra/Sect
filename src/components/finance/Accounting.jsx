import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './Overdue.css'

const Accounting = () => {
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
          Accounting & Book Keeping <span className="highlight" style={highlightStyle}>Services</span>
        </h1>
        <p style={paragraphStyle}>
        We offer comprehensive accounting and bookkeeping services designed to support your business’s financial health and streamline your operations. Our experienced professionals leverage advanced tools and techniques to ensure accurate financial reporting and compliance.
        </p>
        <div className="key-features">
          <h2>Key Features of Our Service:</h2>
          <ul>
            <li><strong>Accurate Book Keeping:</strong> We maintain meticulous records of all financial transactions, ensuring that your books are always up-to-date and precise.</li>
            <li><strong>Finanacial Reporting:</strong>  Our team prepares detailed financial statements and reports, providing you with valuable insights into your business performance.</li>
            <li><strong>Tax Complaince:</strong> We handle all aspects of tax preparation and filing, ensuring compliance with current regulations while maximizing deductions and minimizing liabilities.</li>
            <li><strong>Budgeting and Forecasting:</strong> We assist in creating budgets and financial forecasts, helping you plan for the future and make informed business decisions.</li>
            <li><strong>Tailored Solutions:</strong> Our services are customized to meet the unique needs of your business, whether you’re a small startup or a larger enterprise.</li>
          </ul>
          <p>Let us take the complexity out of accounting and bookkeeping, so you can focus on what you do best—growing your business. Partner with us for reliable, efficient, and transparent financial management.</p>
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

export default Accounting;
