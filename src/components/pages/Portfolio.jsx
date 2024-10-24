import React from 'react';
import './About.css'; // Custom styles for the about page

const Portfolio = () => {
    return (
        <section className="about-page">
            {/* Hero Section */}
            <div className="about-hero">
                <div className="container">
                    <div className="about-hero-content">
                        <h1>Dr. Diala Callistus Ugwumba</h1>
                        <h2>PhD, LLM, MBA, LLB</h2>
                    </div>
                </div>
            </div>

            {/* About Dr. Ugwumba Section */}
            <div className="about-section container">
                <div className="about-details">
                    <h2>About Dr. Ugwumba</h2>
                    <p>
                        Dr. Ugwumba holds a doctorate degree in Management (Corporate Finance) from Walden University, a Masters in Law (LLM) from Northeastern University, and an LLB Law degree from the National Open University of Nigeria. He also holds an MBA in Finance and a degree in Actuarial Science from the University of Lagos.
                    </p>
                    <p>
                        Dr. Ugwumba oversees several companies in the United States and Nigeria, offering services ranging from financial consultancy to legal support and security services.
                    </p>
                </div>

                {/* Company Information */}
                <div className="company-info">
                    <h3>Companies Overseen by Dr. Ugwumba</h3>
                    <div className="company-list">
                        <div className="company-item">
                            <h4>Mbacal Group LLC</h4>
                            <p>30 N Gould St #34769, Sheridan WY 82801</p>
                            <p>Tel: 209-827-2194</p>
                        </div>
                        <div className="company-item">
                            <h4>Integrated Financial & Legal Consult LIC 0106887</h4>
                        </div>
                        <div className="company-item">
                            <h4>Mbacal Auto & Dismantle LIC 06435</h4>
                        </div>
                        <div className="company-item">
                            <h4>Mbacal Securities Services LIC 2648619</h4>
                            <p>Suite B49, 1680 South ‘E’ Street, San Bernardino CA. 92408</p>
                            <p>Tel: 01-909-756-3139 / 01-760-953-4853</p>
                        </div>
                        <div className="company-item">
                            <h4>Mbacal Trust & Investment Limited</h4>
                        </div>
                        <div className="company-item">
                            <h4>Mbacal Properties Limited</h4>
                            <p>300 Oron Road, Uyo, Akwa Ibom State, Nigeria</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Services Section */}
            <div className="services-section container">
                <h2>Core Services</h2>
                <ul className="services-list">
                    <li>Consultancy in Financial & Legal Services</li>
                    <li>Accounting Services</li>
                    <li>Debt Resolution Services</li>
                    <li>Law Enforcement & Security Services</li>
                    <li>Auto Dealers (Used Cars)</li>
                </ul>
            </div>

            {/* Contact Section */}
            <div className="contact-section container">
                <h3>Get in Touch</h3>
                <a href="mailto:enquiries@ugwumbacdiala.com" className="contact-link">
                    enquiries@ugwumbacdiala.com
                </a>
            </div>
        </section>
    );
}

export default Portfolio;
