import './App.css'
import Home from "./components/pages/Home";
import Nservices from './components/pages/Nservices';
import Portfolio from './components/pages/Portfolio';
import Foltlab from './components/pages/Foltlab';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  const name = 'Folt Crest'
  return (
    <div>
      <Router>
        <main>
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/services' element={<Nservices />} />
        <Route path='/about' element={<Portfolio />} />
        <Route path='/contact' element={<Foltlab />} />
        
        <Route render={() => <h1>404: page not found</h1>} />
        </Routes>
        </main>
        <Footer />
      </Router>
    </div>
    
    );
}

export default App;
