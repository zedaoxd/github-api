import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
    return (
        <nav className="navbar bg-primary main-nav">
            <Link to="/" className="container">
                <span className="container">Github API</span>
            </Link>
        </nav>
    );
};

export default Navbar;