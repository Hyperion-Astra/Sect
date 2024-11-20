import React from 'react';
import './Tabs.css';
import { Link } from 'react-router-dom';

const Tabs = () => {
    return (
        <section className="tabs-section">
            <h1 className='size'>OUR SERVICES</h1>
            <div className="tabs-container">
                {/* Tab 1 */}
                <div className="tab">
                    <div className="tab-icon">
                        <img src="./sect.jpeg" alt="Icon 1" />
                    </div>
                    <h2>MBACAL Security & Investigations</h2>
                    <p>We prioritize brand integrity through proactive security measures and thorough investigations.</p>
                    <Link to="/security-services"><button>View Details</button></Link>
                </div>

                {/* Tab 2 */}
                <div className="tab">
                    <div className="tab-icon">
                        <img src="./legal.png" alt="Icon 2" />
                    </div>
                    <h2>Integrated Finanacial & Legal Consult</h2>
                    <p>Providing expert legal consultation for businesses and individuals alike.</p>
                    <Link to="/financial-services"><button>View Details</button></Link>
                </div>

                {/* Tab 3 */}
                <div className="tab">
                    <div className="tab-icon">
                        <img src="./car.png" alt="Icon 3" />
                    </div>
                    <h2>Auto Dealers(Used Car)</h2>
                    <p>We offer a large Variety of Automobiles to suit any specific need.</p>
                    <Link to="/security-services"><button>View Details</button></Link>
                </div>
            </div>
        </section>
    );
}

export default Tabs;
