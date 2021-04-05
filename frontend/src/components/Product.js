import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({imageUrl, name, price, description, productId}) => {
    return (
        <div className="product">
            <img src={imageUrl} alt={name}/>

            <div className="product__info">
                <p className="product__name">{name}</p>
                <p className="product__decscription">{description.substring(0, 100)}...</p>

                <p className="product__price">${price}</p>

                <Link to={`/product/${productId}`}className="btn__info">View</Link>
            </div>
        </div>
    );
};

export default Product;