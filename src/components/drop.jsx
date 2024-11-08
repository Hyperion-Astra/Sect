import React from 'react'
import './drop.css'

export default function Drop() {
  return (
    <div className='dropdownContainerStyle'>
  <h2>Select a Service:</h2>
  
  <div className='dropdownStyle'>
    <h3>Mbacal Security & Investigation</h3>
    <ul className='listStyle'>
      <li><a href="/event-security">Event Security</a></li>
      <li><a href="/site-security">Site Security Services</a></li>
      <li><a href="/private-investigation">Private Investigation Services</a></li>
      <li><a href="/body-guard">Body Guard Service</a></li>
      <li><a href="/security-training">Security Training Service</a></li>
      <li><a href="/live-scan">Live Scan Services</a></li>
    </ul>
  </div>
  
  <div className='dropdownStyle'>
    <h3>Integrated Financial & Legal Consult</h3>
    <ul className='listStyle'>
      <li><a href="/accounting">Accounting & Bookkeeping Services</a></li>
      <li><a href="/overdue-account-recovery">Overdue Account Recovery Services</a></li>
      <li><a href="/insurance">Insurance Services</a></li>
      <li><a href="/notary">Notary Services</a></li>
      <li><a href="/market-survey">Market Survey Services</a></li>
    </ul>
  </div>
</div>

  )
}
