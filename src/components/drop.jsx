import React from 'react'
import { Link } from 'react-router-dom';

import './drop.css'

export default function Drop() {
  return (
    <div className='dropdownContainerStyle'>
  <h2>Select a Service:</h2>
  
  <div className='dropdownStyle'>
    <h3>Mbacal Security & Investigation</h3>
    <ul className='listStyle'>
      <li><Link to="/event-security-services">Event Security</Link></li>
      <li><Link to="/site-security-services">Site Security Services</Link></li>
      <li><Link to="/private-investigation">Private Investigation Services</Link></li>
      <li><Link to="/bodyguard-services">Body Guard Service</Link></li>
      <li><Link to="/security-training-services">Security Training Service</Link></li>
      <li><Link to="/live-scan-services">Live Scan Services</Link></li>
    </ul>
  </div>
  
  <div className='dropdownStyle'>
    <h3>Integrated Financial & Legal Consult</h3>
    <ul className='listStyle'>
      <li><Link to="/accounting-services">Accounting & Bookkeeping Services</Link></li>
      <li><Link to="/recovery-services">Overdue Account Recovery Services</Link></li>
      <li><Link to="/insurance">Insurance Services</Link></li>
      <li><Link to="/notary-services">Notary Services</Link></li>
      <li><Link to="/market-services">Market Survey Services</Link></li>
    </ul>
  </div>
</div>

  )
}
