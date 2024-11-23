import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './MarketPage.css';

const Insurance = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="market-page">
      {/* Header bar */}
      <div className="market-header">
        <h2>Insurance Services</h2>
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
          Insurance <span className="highlight">Services</span>
          </h1>
          <p>
          We provide a wide range of insurance services tailored to protect your assets and ensure peace of mind. Our team of experts is dedicated to understanding your unique needs and helping you navigate the complexities of insurance coverage.
          </p>
          <div className="key-features">
            <h2>Key Features of Our Service:</h2>
            <ul>
            <li><strong>Comprehensive Coverage Options:</strong> Various products, including business, liability, property, and personal insurance, to ensure complete protection.</li>
            <li><strong>Risk Assessment:</strong> Our specialists conduct thorough assessments to identify potential risks and recommend appropriate coverage.</li>
            <li><strong>Customized Solutions:</strong> We work closely with you to develop insurance strategies that align with your goals and budget.</li>
            <li><strong>Claims Support:</strong> Dedicated assistance throughout the claims process for a smooth resolution.</li>
            <li><strong>Ongoing Reviews:</strong> Regular policy reviews to adapt to any changes, ensuring you always have optimal coverage.</li>
            </ul>
            <p>
            Trust us to safeguard your future with reliable insurance services that protect what matters most.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};


export default Insurance;


