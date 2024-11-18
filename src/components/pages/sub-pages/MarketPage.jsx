import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './MarketPage.css';

const MarketPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="market-page">
      {/* Header bar */}
      <div className="market-header">
        <h2>Market Survey Services</h2>
      </div>

      {/* Main content section */}
      <section className="market-content-section">
        <div data-aos="fade-right" className="market-image-container">
          <img src="./legal.webp" alt="Market Survey Services" className="market-image" />
          {/* Button directly below the image */}
          <Link to="/application">
            <button className="request-button">Request for our Services</button>
          </Link>
        </div>
        <div data-aos="fade-left" className="market-details">
          <h1>
            Market Survey <span className="highlight">Services</span>
          </h1>
          <p>
            We specialize in comprehensive market survey services that provide valuable insights to drive your business
            decisions. Our expert team employs a variety of methodologies to gather and analyze data, helping you
            understand market trends, customer preferences, and competitive dynamics.
          </p>
          <div className="key-features">
            <h2>Key Features of Our Service:</h2>
            <ul>
              <li>
                <strong>Tailored Survey:</strong> We design custom surveys that target your specific objectives, ensuring
                relevant and actionable insights for your business.
              </li>
              <li>
                <strong>Data Collection:</strong> Utilizing both quantitative and qualitative methods, we gather data
                through various channels, including online surveys, interviews, and focus groups.
              </li>
              <li>
                <strong>In-Depth Analysis:</strong> Our team analyzes the collected data to identify key trends,
                patterns, and opportunities that can inform your strategy.
              </li>
              <li>
                <strong>Actionable Insights:</strong> We provide clear, actionable recommendations based on the survey
                findings, enabling you to make informed decisions to enhance your market position.
              </li>
              <li>
                <strong>Ongoing Support:</strong> We offer continuous support to help you implement the insights gained
                from the survey and track the impact on your business performance.
              </li>
            </ul>
            <p>
              Partner with Mbacal INTEGRATED FINANCIAL & LEGAL CONSULT for market survey services that empower you to
              make strategic decisions with confidence. Let us help you navigate your market landscape effectively and
              drive your business growth.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default MarketPage;
