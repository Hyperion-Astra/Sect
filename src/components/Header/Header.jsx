import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
    const location = useLocation();
    const [menuOpened, setMenuOpened] = useState(false);

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" };
        }
    };

    const handleDropdownChange = (e) => {
        if (e.target.value) {
            window.location.href = e.target.value;
        }
    };

    return (
        <div>
            <section className="h-wrapper">
                <div id="contain" className="flexCenter paddings innerWidth h-container">
                    <Link to="/">
                        <img src="/mbacal.png" alt="Logo" width={300} />
                    </Link>
                    <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                        <Link to="/services"><span>Services</span></Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact Us!</Link>

                        {/* Dropdown Menu for Services */}
                        <select onChange={handleDropdownChange} style={{ marginLeft: '20px', padding: '5px' }}>
                            <option value="">Select a Service</option>
                            <optgroup label="Mbacal Security & Investigation">
                                <option value="/event-security-services">Event Security</option>
                                <option value="/site-security-services">Site Security Services</option>
                                <option value="/private-investigation">Private Investigation Services</option>
                                <option value="/bodyguard-services">Bodyguard Service</option>
                                <option value="/security-training-services">Security Training Service</option>
                                <option value="/live-scan-services">Live Scan Services</option>
                            </optgroup>
                            <optgroup label="Integrated Financial & Legal Consult">
                                <option value="/accounting-services">Accounting & Bookkeeping Services</option>
                                <option value="/recovery-services">Overdue Account Recovery Services</option>
                                <option value="/insurance">Insurance Services</option>
                                <option value="/notary-services">Notary Services</option>
                                <option value="/market-survey-services">Market Survey Services</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                        <BiMenuAltRight size={30} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;
