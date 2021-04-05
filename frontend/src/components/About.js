import React from 'react'
import './About.css';
import AboutUs from '../assets/aboutus2.jpg';
import Owner from '../assets/owner1.jpg';

export const About = () => {
    return (
        <div className="about-us">
            <h1 className="about-header">Who are we?</h1>
            <img src={AboutUs} alt="about" className="about-img"/>
            <p className="about-para">Like the precious gemstones we are named after, <strong>Sapphire Pharmacy</strong> is a precious commoditiy in the community of Tema. 
            Established in 2015, <strong>Sapphire Pharmacy</strong> has been a staple in the Downtown Region of Tema by catering to every customer's medical needs. It quickly rose to the ranks due to 
            strong word of mouth, and an even stronger commitment to customer satisfaction. Come visit us our friendly and knowledgeable staff. We're looking forward to servicing your needs. 
            </p>
        <br />
            <div className="leader">
            <h1 className="lead-1">Meet Our Founder</h1>
            <img src={Owner} alt="owner" className="owner-img"/>
            <p className="lead-2">Despite her young age and difficulties faced in starting a pharmacy located in Tema, our founder Juanita Ama Tagoe works hard everyday as the lead pharmacist 
                to ensure all her customers are satisfied. With a tireless work ethic and commitment to excellence, the next step is to take
                 Sapphire Pharmacy and spread it accross Ghana and beyond.</p>
            </div>
    
        </div>
    )
}