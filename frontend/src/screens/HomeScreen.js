import './HomeScreen.css';
import Product from '../components/Product';

const HomeScreen = () => {
    return <div className="homescreen">
       <h2 className="homes__title">Current Products</h2> 

       <div className="home__products">
           <Product />
           <Product />
           <Product />
           <Product />
           <Product />
           <Product />
           <Product />
           <Product />
           <Product />
           <Product />
           <Product />
           <Product />
       </div>
    </div>;
};

export default HomeScreen;
