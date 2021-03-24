import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="product">
            <img src="https://www.sprouts.com/wp-content/uploads/2017/11/e4-multi-1.jpg"/>

            <div className="product__info">
                <p className="product__name">Product 1</p>
                <p className="product__decscription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <p className="product__price">$11.99</p>

                <Link to={`/product/${1111}`}className="btn__info">View</Link>
            </div>
        </div>
    );
};

export default Product;