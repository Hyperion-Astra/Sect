import React from 'react';
import './Tabs.css'; // Ensure to add the CSS for styling

const Tabs = () => {
    return (
        <section className="tabs-section">
            <div className="tabs-container">
                {/* Tab 1 */}
                <div className="tab">
                    <div className="tab-icon">
                        <img src="/path-to-icon1.png" alt="Icon 1" />
                    </div>
                    <h2>Service 1</h2>
                    <p>Brief description of the first service or feature offered.</p>
                    <button>Learn More</button>
                </div>

                {/* Tab 2 */}
                <div className="tab">
                    <div className="tab-icon">
                        <img src="/path-to-icon2.png" alt="Icon 2" />
                    </div>
                    <h2>Service 2</h2>
                    <p>Brief description of the second service or feature offered.</p>
                    <button>View Details</button>
                </div>

                {/* Tab 3 */}
                <div className="tab">
                    <div className="tab-icon">
                        <img src="/path-to-icon3.png" alt="Icon 3" />
                    </div>
                    <h2>Service 3</h2>
                    <p>Brief description of the third service or feature offered.</p>
                    <button>Explore More</button>
                </div>
            </div>
        </section>
    );
}

export default Tabs;
