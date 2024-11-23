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
                        <h2>BSC, LLB, MBA, LLM, PhD</h2>
                    </div>
                </div>
            </div>

            {/* About Dr. Ugwumba Section */}
            <div className="about-section container">
                <div className="about-details">
                    <h2>About Dr. Diala Ugwumba</h2>
                    <img src="./ugwumba.jpg" alt="Dr. Diala Callistus Ugwumba" className="about-image"
                style={{ width: "150px", height: "auto", marginRight: "20px" }} />
                    <p>
                        Dr. Diala Ugwumba holds a doctorate degree in Management (Corporate Finance) from Walden University, a Masters in Law (LLM) from Northeastern University, a B.Sc and an LLB Law degree from the National Open University of Nigeria. He also holds an MBA in Finance and a BSC in Actuarial Science from the University of Lagos Business School.
                    </p>
                    <p>
                        Dr. Diala Ugwumba oversees several companies in the United States and Nigeria, offering services ranging from financial consultancy to legal support and security services.
                    </p>
                </div>

                {/* Company Information */}
                <div className="company-info">
                    <h3>Mbacal Group LLC</h3>
                    <div className="company-list">
                        <div className="company-item">
                            <h4>Mbacal Group LLC</h4>
                            <p>1712 Pioneer Ave, Suite 101 WY 82001</p>
                            <p>Tel: 1(209)-822-2194</p>
                        </div>
                        <div className="company-item">
                            <h4>Integrated Financial & Legal Consult LIC 0106887 & 2447853</h4>
                            <p>1680 South East Street, Suite 49. San Bernardino CA. 92408</p>
                            <p>Tel: 760-953-4853</p>
                            <p>Email: integratedflc@gmail.com</p>
                        </div>
                        <div className="company-item">
                            <h4>Mbacal Auto & Dismantle LIC 06435</h4>
                            <p>Tel: 760-953-4853</p>
                        </div>
                        <div className="company-item">
                            <h4>Mbacal Security and Investigations LIC 122308</h4>
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
            <div className="services-section container">
                <h2>Get in Touch</h2>
                <a href="mailto:enquiries@ugwumbacdiala.com" className="contact-link">
                enquiries@ugwumbacdiala.com
                </a>
            </div>
        </section>
    );
}

export default Portfolio;
