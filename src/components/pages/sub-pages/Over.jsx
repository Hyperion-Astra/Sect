import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './MarketPage.css';

const Over = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="market-page">
      {/* Header bar */}
      <div className="market-header">
        <h2>Overdue Account Recovery Services</h2>
      </div>

      {/* Main content section */}
      <section className="market-content-section">
        <div data-aos="fade-right" className="market-image-container">
          <img src="./legal.webp" alt="Market Survey Services" className="market-image" />
        </div>
        <div data-aos="fade-left" className="market-details">
          <h1>
            Overdue Account Recovery <span className="highlight">Services</span>
          </h1>
          <p>
          We specialize in integrated financial and legal solutions to help you effectively manage and recover overdue accounts. Our dedicated team combines financial expertise with legal acumen to create tailored strategies that enhance your cash flow and minimize losses.
          </p>
          <div className="key-features">
            <h2>Key Features of Our Service:</h2>
            <ul>
              <li>
                <strong>Comprehensive Assessment:</strong>  We conduct a thorough review of your accounts to identify overdue payments and assess the best recovery approach.
              </li>
              <li><strong>Customized Recovery Plans:</strong> Our experts develop personalized strategies that align with your business goals and customer relationships.</li>
            <li><strong>Legal Support:</strong> With a strong legal foundation, we ensure compliance with regulations while pursuing collections, protecting your interests throughout the process.</li>
            <li><strong>Negotiation and Mediation:</strong> We engage in effective communication with debtors, aiming for amicable resolutions that facilitate timely payments.</li>
            <li><strong>Ongoing Monitoring:</strong> Our team provides continuous follow-up and support, ensuring that recovery efforts remain on track.</li>
            </ul>
            <p>
            <p>Partner with us to regain control over your finances and improve your overdue account recovery rates. Let us help you turn challenges into opportunities for growth.</p>
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Over;
