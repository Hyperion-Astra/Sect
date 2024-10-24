import React, { useEffect } from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  const slides = [
    {
      title: 'SECURITY & INVESTIGATION',
      description:
        'We prioritize brand integrity through proactive security measures and thorough investigations.',
      link: '/services',
      buttonText: 'Learn more',
      image: '/security.jpg',
    },
    {
      title: 'INTEGRATED FINANCIAL & LEGAL CONSULT',
      description:
        'We specialize in integrated financial and legal solutions to help you effectively manage and recover overdue accounts.',
      link: '/services',
      buttonText: 'Explore Legal Services',
      image: '/legal.webp',
    },
  ];

  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        {/* Left Section - Text Content Carousel */}
        <div className="hero-left" data-aos="fade-right">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div className="hero-slide" key={index}>
                <div className="hero-title">
                  <div className="orange-circle" />
                  <h1>{slide.title}</h1>
                </div>
                <div className="hero-description">
                  <span className="secondaryText">{slide.description}</span>
                  <Link to={slide.link}>
                    <div className="hero-button">{slide.buttonText}</div>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Right Section - Image Carousel */}
        <div className="hero-right" data-aos="fade-left">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div className="carousel-image" key={index}>
                <img src={slide.image} alt={slide.title} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
