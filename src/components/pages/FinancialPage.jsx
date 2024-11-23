import React from 'react';
import Accounting from '../finance/Accounting';
import Insurance from '../finance/Insurance'
import Notary from '../finance/Notary'
import Market from '../finance/Market'



const LegalServices = () => {
    return (
        <div style={containerStyle}>
            <br /><br /><br />
            <h1 style={titleStyle}>Integrated Financial & Legal Consult Services</h1>
            <p style={paragraphStyle}>Our range of professional financial and legal services includes:</p>
            <br />
            <Accounting />
            <Insurance />
            <Notary />
            <Market />
        </div>
    );
};
const containerStyle = {
    margin: '0 auto',
    padding: '40px 20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333',
};

const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#555',
    marginBottom: '30px',
};

export default LegalServices;
