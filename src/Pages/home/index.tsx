import BasicButtom from 'components/BasicButtom';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
    return (
        <div className="container h-container">
            <h1>Desafio Github API</h1>
            <h2>Bootcamp Spring React - DevSuperior</h2>
            <Link to="/search-page">
                <BasicButtom text="Começar"/>
            </Link>
            
        </div>
    );
};

export default Home;