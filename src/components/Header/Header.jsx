import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" };
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
                        {/* Services Dropdown */}
                        <div 
                            className="dropdown" 
                            onMouseEnter={() => setDropdownOpen(true)} 
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <span className="dropdown-title">Services</span>
                            {dropdownOpen && (
                                <div className="dropdown-content">
                                    <Link to="/security-services">Security & Investigations</Link>
                                    <Link to="/financial-services">Integrated Financial & Legal Consult</Link>
                                </div>
                            )}
                        </div>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact Us!</Link>
                        <Link to="/application"><button>Request for our Services</button></Link>
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
