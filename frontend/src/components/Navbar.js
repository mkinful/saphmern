import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({click}) => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h2>Sapphire Pharmacy</h2>
            </div>

            <ul className="navbar__links">
                <li>
                    <Link to="/">
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    Pharmacy
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    Products
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    Account
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    About Us
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                        </span>
                     <span className="cartlogo__badge">0</span>
                    </Link>
                </li>
            </ul>

            <div className="hamburger__menu" onClick={click}>
               <div></div> 
               <div></div>
               <div></div>
            </div>
        </nav>
    )
}

export default Navbar
