import React from 'react'
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Box from '../Box/Box';
import Growth from '../Growth/Growth';
import Governance from '../Governance/Governance';
import Experience from '../experience/Experience';
import Footer from '../Footer';
import Investigation from '../investigation/Investigation'
import Overdue from '../finance/Overdue'
import Accounting from '../finance/Accounting';
import Tabs from '../Hero/Tabs';

const Home = () => {

return (
<div>
    <div className="App">
    <div>
    <Header />
    <Hero />
    <Tabs />
    </div>
    <Services />
    <Overdue />
    <Box />
    <Accounting />
    <Growth />
</div>
</div>
)
}

export default Home
