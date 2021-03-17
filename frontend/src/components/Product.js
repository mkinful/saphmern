import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="product">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWc6G4SeVFNWdycQAdCXKx5NVdIBydoEoWrE3SgQyAl4rhqW-83_NNNj5RouBdJahKKgjIimH&usqp=CAc=80"/>

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