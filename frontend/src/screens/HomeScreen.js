import './HomeScreen.css';
import Product from '../components/Product';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../redux/actions/ProductActions';

const HomeScreen = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

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
       </div>
    </div>;
};

export default HomeScreen;
