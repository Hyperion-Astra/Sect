import React, { useState } from 'react';

const ServiceApplication = () => {
  const [formData, setFormData] = useState({
    officersNeeded: '',
    timeOfDay: '',
    frequency: '',
    startDate: '',
    hiringDecision: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert('Failed to send email');
      }
    } catch (error) {
      console.error(error);
      alert('Error occurred');
    }
  };

  return (
    <div style={containerStyle}>
      <br /><br /><br />
      <h2 style={titleStyle}>Apply for Our Security Services</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        
        <label style={labelStyle}>How many security officers do you need?</label>
        <select name="officersNeeded" value={formData.officersNeeded} onChange={handleChange} style={selectStyle}>
          <option value="">Select</option>
          <option value="1">Just 1</option>
          <option value="2-4">2-4</option>
          <option value="5-9">5-9</option>
          <option value="10-14">10-14</option>
          <option value="15 or more">15 or more</option>
        </select>

        <label style={labelStyle}>Which times of the day do you require security services?</label>
        <select name="timeOfDay" value={formData.timeOfDay} onChange={handleChange} style={selectStyle}>
          <option value="">Select</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
          <option value="Night">Night</option>
          <option value="24/7">24/7</option>
        </select>

        <label style={labelStyle}>How often would you need these Officers?</label>
        <select name="frequency" value={formData.frequency} onChange={handleChange} style={selectStyle}>
          <option value="">Select</option>
          <option value="One specific date">One specific date</option>
          <option value="On going services">On going services</option>
          <option value="Weeks">Weeks</option>
          <option value="Monthly">Monthly</option>
          <option value="Weekend Only">Weekend Only</option>
          <option value="Over several days">Over several days</option>
        </select>

        <label style={labelStyle}>Effective date for officers to start work:</label>
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} style={inputStyle} />

        <label style={labelStyle}>How early are you likely to make hiring decisions?</label>
        <select name="hiringDecision" value={formData.hiringDecision} onChange={handleChange} style={selectStyle}>
          <option value="">Select</option>
          <option value="I am ready to hire now">I am ready to hire now</option>
          <option value="I am likely to hire soon">I am likely to hire soon</option>
          <option value="I am planning and researching">I am planning and researching</option>
        </select>

        <button type="submit" style={buttonStyle}>Submit Application</button>
      </form>
    </div>
  );
};

// Inline Styles for layout consistency
const containerStyle = {
  maxWidth: '600px',
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

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  marginBottom: '10px',
  color: '#555',
  fontWeight: 'bold',
};

const selectStyle = {
  marginBottom: '20px',
  padding: '8px',
  borderRadius: '5px',
  border: '1px solid #ddd',
};

const inputStyle = {
  marginBottom: '20px',
  padding: '8px',
  borderRadius: '5px',
  border: '1px solid #ddd',
};

const buttonStyle = {
  backgroundColor: '#000080',
  color: '#fff',
  padding: '12px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
};

export default ServiceApplication;
