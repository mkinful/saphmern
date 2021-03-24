import './ProductScreen.css';

const ProductScreen = () => {
    return <div className="productscreen">
        <div className="productscreen__left">
            <div className="left__image">
            <img src="https://www.sprouts.com/wp-content/uploads/2017/11/e4-multi-1.jpg"/>
            </div>
        </div>

        <dib className="left__info">
            <p className="left__name">Product 1</p>
            <p>Price: $11.99</p>
            <p>Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </dib>
        <div className="productscreen__right">
            <div className="right__info">
                <p>
                    Price: <span>$11.99</span>
                </p>
                <p>
                    Status: <span>In Stock</span>
                </p>
                <p>
                    Quantity 
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </p>
                <p>
                    <button type="button">Add To Cart</button>
                </p>
            </div>
        </div>
    </div>;
};

export default ProductScreen;