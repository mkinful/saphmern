import { useSelector } from 'react-redux';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({click}) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    };

    return (
        <nav className="navbar">
            <div className="navbar__logo">
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: '1.5rem' }} to="/">Sapphire Pharmacy</Link>
            </div>

            <ul className="navbar__links">
                <li>
                    <Link to="/">
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="/pharmacy">
                    Pharmacy
                    </Link>
                </li>
                <li>
                    <Link to="/homescreen">
                    Products
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                    Account
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                    About Us
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                        </span>
                     <span className="cartlogo__badge">{getCartCount()}</span>
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
