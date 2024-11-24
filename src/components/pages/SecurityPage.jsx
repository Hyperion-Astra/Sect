import React from 'react';
import Services from '../Services/Services';
import Growth from '../Growth/Growth';
import Governance from '../Governance/Governance';
import Experience from '../experience/Experience';
import Security from '../finance/Security';
import Investigation from '../investigation/Investigation';
import Box from '../Box/Box'

const SecurityServices = () => {
    return (
        <div style={containerStyle}>
            <br /><br /><br />
            <h1 style={titleStyle}>Mbacal Security & Investigation Services</h1>
            <p style={paragraphStyle}>Explore our comprehensive security services:</p>
            <br />
            <Services />
            <Growth />
            <Box />
            <Governance />
            <Experience />
            <Security />
            <Investigation />
            
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

export default SecurityServices;
