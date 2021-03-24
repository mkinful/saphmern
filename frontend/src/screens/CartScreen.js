import './CartScreen.css';
import CartItem from '../components/CartItem';

const CartScreen = () => {
    return <div className="cartscreen">
        <div className="cartscreen__left">
            <h2>Shopping Cart</h2>

            <CartItem />
        </div>
        <div className="cartscreen__right">
            <div className="cart__info">
                <p>Subtotal (0) items</p>
                <p>$11.99</p>
            </div>
            <div>
                <button>Checkout</button>
            </div>
        </div>
    </div>;
    };

export default CartScreen;