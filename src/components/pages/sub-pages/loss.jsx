import React from 'react';
import './Loss.css'; // Import CSS specific to the Box page layout

const Loss = () => {
    return (
        <div className="box-page">
            {/* Header bar */}
            <div className="box-header">
                <h2>Our Services</h2>
            </div>

            {/* Main content section */}
            <div className="box-content">
                <h3>Key Features of Our Service</h3>
                <ul>
                    <li><strong>Comprehensive Assessment:</strong> We conduct a thorough review of your accounts to identify overdue payments and assess the best recovery approach.</li>
                    <li><strong>Customized Recovery Plans:</strong> Our experts develop personalized strategies that align with your business goals and customer relationships.</li>
                    <li><strong>Legal Support:</strong> With a strong legal foundation, we ensure compliance with regulations while pursuing collections, protecting your interests throughout the process.</li>
                    <li><strong>Negotiation and Mediation:</strong> We engage in effective communication with debtors, aiming for amicable resolutions that facilitate timely payments.</li>
                    <li><strong>Ongoing Monitoring:</strong> Our team provides continuous follow-up and support, ensuring that recovery efforts remain on track.</li>
                </ul>
                <p>Partner with us to regain control over your finances and improve your overdue account recovery rates. Let us help you turn challenges into opportunities for growth.</p>
            </div>
        </div>
    );
};

export default Loss;
