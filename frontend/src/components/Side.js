import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Side.css'

const Side = ({show, click}) => {
    const sideClass = ["side"];

    if(show) {
        sideClass.push("show");
    }

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    };

    return (
        <div className={sideClass.join(" ")}>
            <ul className="side__links" onClick={click}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pharmacy">Pharmacy</Link></li>
                <li><Link to="/homescreen">Products</Link></li>
                <li><Link to="/login">Account</Link></li>
                <li><Link to="/about">About Us</Link></li>

                <li><Link to="/cart"><i className="fas fa-shopping-cart"></i>
                    <span>Cart <span className="side__cartbadge">{getCartCount()}</span></span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Side;