import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer'
import Services from '../Services/Services';
import Box from '../Box/Box';
import Growth from '../Growth/Growth';
import Governance from '../Governance/Governance';
import Experience from '../experience/Experience';
import Investigation from '../investigation/Investigation'
import Overdue from '../finance/Overdue'
import Accounting from '../finance/Accounting';
import Insurance from '../finance/Insurance'
import Notary from '../finance/Notary'
import Market from '../finance/Market'
import Live from '../finance/Live'
import Security from '../finance/Security'

const Nservices = () => {
  return (
    <div>
      <Header />
      <div style={{paddingTop: "150px"}}>
        <Services />
        <Overdue />
        <Box />
        <Accounting />
        <Growth />
        <Insurance />
        <Governance />
        <Notary />
        <Experience />
        <Market />
        <Security />
        <Live />
        <Investigation />
    </div>

    </div>
  )
}

export default Nservices
