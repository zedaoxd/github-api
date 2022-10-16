import axios from 'axios';
import BasicButtom from 'components/BasicButtom';
import { useState } from 'react';
import { UserModel } from 'types/UserModel';
import LineInfo from './LineInfo';
import SearchLoader from './SearchLoader';
import './styles.css';

type FormData = {
    username: string;
}

const SearchPage = () => {

    const [userGit, setUserGit] = useState<UserModel>();
    const [formData, setFormData] = useState<FormData>({ username: '' });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const username = event.target.name;
        const value = event.target.value;
        setFormData( { ...formData, [username]:value } );
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        axios.get(`https://api.github.com/users/${formData.username}`)
            .then(response => setUserGit(response.data))
            .catch(error => setUserGit(undefined))
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="container">
            <div className="s-container">
                <h1>Encontre um perfil Github</h1>
                <form className="form-container" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Usuário Github" 
                        value={formData.username} 
                        name="username"
                        onChange={handleChange}
                    />
                    <BasicButtom text="Encontrar" />
                </form>
            </div>
            {
                isLoading ? <SearchLoader /> :
                userGit &&
                <div className="s-result-container">
                    <div className="s-result">
                        <div className="s-result-img">
                            <img src={userGit?.avatar_url} alt="" />
                        </div>
                        <div className="s-result-info">
                            <h4>Informações</h4>
                            <LineInfo ask="Perfil" text={userGit.url} isLink={true}/>
                            <LineInfo ask="Seguidores" text={userGit.followers.toString()}/>
                            <LineInfo ask="Localidade" text={userGit.location}/>
                            <LineInfo ask="Nome" text={userGit.name}/>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default SearchPage;