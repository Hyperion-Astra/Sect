import React, { useState, useEffect } from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            title: 'MBACAL SECURITY & INVESTIGATIONS',
            description: 'We prioritize brand integrity through proactive security measures and thorough investigations.',
            img: '/security.jpg',
            buttonText: 'Learn more',
        },
        {
            title: 'INTEGRATED FINANCIAL & LEGAL CONSULT',
            description: 'Providing expert financial and legal consultation for businesses and individuals alike.',
            img: '/legal.webp',
            buttonText: 'Learn More',
        },
    ];

    useEffect(() => {
        Aos.init({ duration: 1200 });
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="hero-wrapper" data-aos="fade-right">
            <div className="hero-container">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        <div className="hero-content">
                            <div className="hero-text">
                                <div className="hero-title">
                                    <h1>{slide.title}</h1>
                                </div>
                                <div className="hero-des">
                                    <span className="secondaryText">{slide.description}</span><br />
                                    <Link to="/services">
                                        <div className="button">{slide.buttonText}</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="hero-image">
                                <img src={slide.img} alt="hero" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
