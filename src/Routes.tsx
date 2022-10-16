import Navbar from "components/Navbar";
import Home from "Pages/home";
import SearchPage from "Pages/SearchPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search-page">
                <SearchPage />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;