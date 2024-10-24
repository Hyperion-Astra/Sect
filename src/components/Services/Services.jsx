import React, { useEffect } from 'react';
import './Services.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Services = () => {

    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, []);

    return (
        <section className='services-section' style={sectionStyle}>
            <div data-aos="fade-right" className="services-content" style={contentStyle}>
                <h1 style={titleStyle}>
                    Event Security <span className='highlight' style={highlightStyle}>Services</span>
                </h1>
                <p style={paragraphStyle}>
                    We understand that a successful event goes beyond just the experience; it requires a safe and secure environment.
                    <br /> Our dedicated event security team specializes in comprehensive security solutions tailored to your specific needs, whether it's a corporate gathering, concert, or private celebration.
                    <br /> We provide trained personnel, access control, crowd management, and emergency response planning to ensure that every aspect of your event runs smoothly.
                    <br /> Trust us to safeguard your attendees and create a welcoming atmosphere, allowing you to focus on what matters most—making your event a success.
                </p>
                <div className="explore-button" style={buttonContainerStyle}>
                    <Link to="/services">
                        <button style={buttonStyle}>Explore Event Security Services</button>
                    </Link>
                </div>
            </div>
            <div data-aos="fade-left" className="services-image" style={imageContainerStyle}>
                <img src="./event.jpg" alt="Event Security" style={imageStyle} />
            </div>
        </section>
    );
};

// Inline styles for the layout and aesthetics
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

export default Services;
