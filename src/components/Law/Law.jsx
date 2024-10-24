import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

const Law = () => {

    useEffect(() => {
        Aos.init({duration: 1200})
    }, []);


    return (
    <section className='serve'>
        <div data-aos = "fade-right" className="left-sec">
            <h1>Law Enforcement<span className='enterprise'> Services</span></h1>
            <p>At MBACAL SECURITY & INVESTIGATION, we collaborate with law enforcement agencies to enhance community safety and security. Our experienced security professionals, many of whom have backgrounds in law enforcement, provide valuable support in various capacities, including crime prevention, community outreach, and emergency response coordination. By bridging the gap between private security and public safety, we help foster trust and communication within the community. Whether it’s providing on-site security for events or assisting with investigations, our mission is to create a safer environment for everyone.</p>
            <div className="rep">
            <Link to="/services"><button>Explore Law Enforcement Services</button></Link>
            </div>

        </div>
        <div data-aos = "fade-left" className="right-sec">
            <img src="./law.jpg" alt="llt" style={{border: '8px solid #000080'}} />

        </div>
    </section>
    )
}

export default Law
