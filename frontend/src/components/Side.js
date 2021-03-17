import './Side.css'
import { Link } from 'react-router-dom';

const Side = ({show, click}) => {
    const sideClass = ["side"];

    if(show) {
        sideClass.push("show");
    }

    return (
        <div className={sideClass.join(" ")}>
            <ul className="side__links" onClick={click}>
                <li>
                    <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart <span className="side__cartbadge">0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">Shop</Link>
                </li>
            </ul>
        </div>
    );
};

export default Side;