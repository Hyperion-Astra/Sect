import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './MarketPage.css';

const Account = () => {
  const [showMore, setShowMore] = useState(false); // State to control visibility of full content

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="market-page">
      <br />

      {/* Accounting & Bookkeeping Services Section */}
      <div className="market-header">
        <h2>Accounting & Book Keeping Services</h2>
      </div>
      <section className="market-content-section">
        <div data-aos="fade-right" className="market-image-container">
          <img
            src="./legal.webp"
            alt="Accounting & Bookkeeping Services"
            className="market-image"
          />
          <Link to="/application">
            <button className="request-button">Request for our Services</button>
          </Link>
        </div>
        <div data-aos="fade-left" className="market-details">
          <h1>
            Accounting & Book Keeping <span className="highlight">Services</span>
          </h1>
          <p>
            We offer comprehensive accounting and bookkeeping services designed
            to support your business’s financial health and streamline your
            operations. Our experienced professionals leverage advanced tools
            and techniques to ensure accurate financial reporting and
            compliance.
          </p>

          <div className="key-features">
            <h2>Key Features of Our Service:</h2>
            <ul>
              <li>
                <strong>Accurate Book Keeping:</strong> We maintain meticulous
                records of all financial transactions, ensuring that your books
                are always up-to-date and precise.
              </li>
              <li>
                <strong>Financial Reporting:</strong> Our team prepares detailed
                financial statements and reports, providing you with valuable
                insights into your business performance.
              </li>
              <li>
                <strong>Tax Compliance:</strong> We handle all aspects of tax
                preparation and filing, ensuring compliance with current
                regulations while maximizing deductions and minimizing
                liabilities.
              </li>
              <li>
                <strong>Budgeting and Forecasting:</strong> We assist in
                creating budgets and financial forecasts, helping you plan for
                the future and make informed business decisions.
              </li>
              <li>
                <strong>Tailored Solutions:</strong> Our services are customized
                to meet the unique needs of your business, whether you’re a
                small startup or a larger enterprise.
              </li>
            </ul>

            {/* Conditionally Render the Full Content */}
            {showMore && (
              <>
                <p>
                  Let us take the complexity out of accounting and bookkeeping,
                  so you can focus on what you do best—growing your business.
                  Partner with us for reliable, efficient, and transparent
                  financial management.
                </p>
                <br />
                <p>
                  We also specialize in integrated financial and legal solutions
                  to help you effectively manage and recover overdue accounts.
                  Our dedicated team combines financial expertise with legal
                  acumen to create tailored strategies that enhance your cash
                  flow and minimize losses.
                </p>
                <div className="key-features">
                  <h2>With the following Features:</h2>
                  <ul>
                    <li>
                      <strong>Comprehensive Assessment:</strong> We conduct a
                      thorough review of your accounts to identify overdue
                      payments and assess the best recovery approach.
                    </li>
                    <li>
                      <strong>Customized Recovery Plans:</strong> Our experts
                      develop personalized strategies that align with your
                      business goals and customer relationships.
                    </li>
                    <li>
                      <strong>Legal Support:</strong> With a strong legal
                      foundation, we ensure compliance with regulations while
                      pursuing collections, protecting your interests
                      throughout the process.
                    </li>
                    <li>
                      <strong>Negotiation and Mediation:</strong> We engage in
                      effective communication with debtors, aiming for amicable
                      resolutions that facilitate timely payments.
                    </li>
                    <li>
                      <strong>Ongoing Monitoring:</strong> Our team provides
                      continuous follow-up and support, ensuring that recovery
                      efforts remain on track.
                    </li>
                  </ul>
                  <p>
                    Partner with us to regain control over your finances and
                    improve your overdue account recovery rates. Let us help you
                    turn challenges into opportunities for growth.
                  </p>
                </div>
              </>
            )}

            {/* Read More / Read Less Button */}
            <button
              className="read-more-button"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
