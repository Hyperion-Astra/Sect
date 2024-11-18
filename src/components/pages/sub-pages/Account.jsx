import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './MarketPage.css';

const Account = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="market-page">
      {/* Header bar */}
      <div className="market-header">
        <h2>Accounting & Book Keeping Services</h2>
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
          Accounting & Book Keeping<span className="highlight">Services</span>
          </h1>
          <p>
          We offer comprehensive accounting and bookkeeping services designed to support your business’s financial health and streamline your operations. Our experienced professionals leverage advanced tools and techniques to ensure accurate financial reporting and compliance.
          </p>
          <div className="key-features">
            <h2>Key Features of Our Service:</h2>
            <ul>
              <li>
                <strong>Accurate Book Keeping :</strong>  We maintain meticulous records of all financial transactions, ensuring that your books are always up-to-date and precise.
              </li>
              <li>
                <strong>Financial Reporting:</strong>   Our team prepares detailed financial statements and reports, providing you with valuable insights into your business performance.
              </li>
              <li>
                <strong>Task Complaince:</strong>  We handle all aspects of tax preparation and filing, ensuring compliance with current regulations while maximizing deductions and minimizing liabilities.
              </li>
              <li>
                <strong>Budgeting and Forecasting:</strong> We provide clear, actionable recommendations based on the survey
                findings, enabling you to make informed decisions to enhance your market positionWe assist in creating budgets and financial forecasts, helping you plan for the future and make informed business decisions.
              </li>
              <li>
                <strong>Tailored Solution:</strong> Our services are customized to meet the unique needs of your business, whether you’re a small startup or a larger enterprise.
              </li>
            </ul>
            <p>
            Let us take the complexity out of accounting and bookkeeping, so you can focus on what you do best—growing your business. Partner with us for reliable, efficient, and transparent financial management.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Account;
