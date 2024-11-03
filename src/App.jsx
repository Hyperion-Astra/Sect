import './App.css'
import Home from "./components/pages/Home";
import Nservices from './components/pages/Nservices';
import Portfolio from './components/pages/Portfolio';
import Foltlab from './components/pages/Foltlab';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Loss from './components/pages/sub-pages/loss';
import InvestigationPage from './components/pages/sub-pages/Invest';
import MarketPage from './components/pages/sub-pages/MarketPage'
import Bodyguard from './components/pages/sub-pages/bodyguard'
import NotaryPage from './components/pages/sub-pages/NotaryPage'
import Site from './components/pages/sub-pages/site'
import Insure from './components/pages/sub-pages/Insure';
import Roving from './components/pages/sub-pages/Roving'
import Account from './components/pages/sub-pages/Account'
import Over from './components/pages/sub-pages/Over'
import Event from './components/pages/sub-pages/Event'
import LivePage from './components/pages/sub-pages/LivePage'
import SecurityPage from './components/pages/sub-pages/SecurityPage';

function App() {
  const name = 'Mbacal'
  return (
    <div>
      <Router>
      <Header />
        <main>
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/services' element={<Nservices />} />
        <Route path='/about' element={<Portfolio />} />
        <Route path='/contact' element={<Foltlab />} />
        <Route path= '/loss-prevention' element={<Loss />} />
        <Route path= '/market-services' element={<MarketPage />} />
        <Route path= '/bodyguard-services' element={<Bodyguard />} />
        <Route path= '/insurance' element={<Insure />} />
        <Route path= '/accounting-services' element={<Account />} />
        <Route path= '/security-training-services' element={<SecurityPage />} />
        <Route path= '/live-scan-services' element={<LivePage />} />
        <Route path= '/roving-patrol-services' element={<Roving />} />
        <Route path= '/recovery-services' element={<Over />} />
        <Route path= '/event-security-services' element={<Event />} />
        <Route path= '/notary-services' element={<NotaryPage />} />
        <Route path= '/site-security-services' element={<Site />} />
        <Route path='/private-investigation'element={<InvestigationPage />} />
        <Route render={() => <h1>404: page not found</h1>} />
        </Routes>
        </main>
        <Footer />
      </Router>
      
    </div>
    
    );
}

export default App;
