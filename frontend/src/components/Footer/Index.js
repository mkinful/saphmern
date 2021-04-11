import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink } from './FooterElement';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo style={{ textDecoration: 'none', color: 'white', fontSize: '1.5rem' }} to="/">Sapphire Pharmacy <i className="fas fa-file-prescription"></i></SocialLogo>
                         <div className="links">
                              <ul className="list-unstyled">
                                  <li><Link to='/'>Home</Link></li>
                                  <li><Link to='/pharmacy'>Pharmacy</Link></li>
                                  <li><Link to='/homescreen'>Products</Link></li>
                                  <li><Link to='/Login'>My Account</Link></li>
                                  <li><Link to='/about'>About Us</Link></li>
                              </ul>
                         </div>
              <SocialIcons>
                <SocialIconLink href='/' target='_blank' aria-label='Facebook' rel='noopener noreferrer'><FaFacebook /></SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Instagram' rel='noopener noreferrer'><FaInstagram /></SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Youtube' rel='noopener noreferrer'><FaYoutube /></SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Twitter' rel='noopener noreferrer'><FaTwitter /></SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    );
  };
  
  export default Footer;