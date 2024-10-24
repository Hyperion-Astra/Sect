import React from 'react';
import './Contact.css'; // Custom styles for the contact page

const Foltlab = () => {
    return (
        <section className="contact-page">
            {/* Contact Hero */}
            <div className="contact-hero">
                <div className="container">
                    <div className="contact-hero-content">
                        <h1>Contact Us</h1>
                        <p>We'd love to hear from you. Get in touch with us for inquiries, partnerships, or any other questions.</p>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="contact-section container">
                <div className="contact-form">
                    <h2>Get In Touch</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" placeholder="Write your message"></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque malesuada augue, non sagittis est luctus eget.</p>
                    <ul>
                        <li>Email: info@example.com</li>
                        <li>Phone: (123) 456-7890</li>
                        <li>Address: 1234 Main St, City, Country</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Foltlab;
