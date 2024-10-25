import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const NotaryPage = () => {
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
          <img src="./legal.webp" alt="Site Security" style={imageStyle} />
        </div>
        <div data-aos="fade-left" className="governance-content" style={contentStyle}>
          <h1 style={titleStyle}>
            Notary <span className="highlight" style={highlightStyle}>Services</span>
          </h1>
          <p style={paragraphStyle}>
            We offer professional notary services to ensure that your important documents are executed with authenticity
            and legal validity. Our licensed notaries are committed to providing efficient and reliable service, making
            the notarization process seamless for you.
          </p>
          <div className="key-features">
            <h2>Key Features of Our Service:</h2>
            <ul>
              <li><strong>Document Verification:</strong> We verify the identity of signers and witness the signing of documents, ensuring compliance with all legal requirements.</li>
              <li><strong>Wide Range of Documents:</strong> Our notary services cover various documents, including contracts, affidavits, wills, and power of attorney, catering to both personal and business needs.</li>
              <li><strong>Mobile Notary Options:</strong> For your convenience, we offer mobile notary services, coming to your location to facilitate notarization at your preferred time and place.</li>
              <li><strong>Confidentiality Assurance:</strong> We prioritize your privacy and handle all documents with the utmost discretion and security.</li>
              <li><strong>Timely Service:</strong> Our team is dedicated to providing quick and efficient notarization, helping you meet deadlines and keep your processes moving smoothly.</li>
            </ul>
            <p>
              Choose Mbacal INTEGRATED FINANCIAL & LEGAL CONSULT for reliable notary services that ensure your important
              documents are properly executed and legally binding. Let us help you navigate your notarization needs with
              professionalism and ease.
            </p>
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

export default NotaryPage;
