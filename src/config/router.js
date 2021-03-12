import React, {useState} from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import GetPokemons from '../component/pokemons/getPokemons';
import Header from '../component/header';
import Fight from '../component/fight';
import Teams from '../component/teams';

const Routes = () => {
    // const [isToken, setIsToken] = useState("")
    return(
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/"  component={GetPokemons} />
                <Route path="/fight" component={Fight} />
                <Route path="/teams" component={Teams} />
                <Redirect to="/"></Redirect>
            </Switch>
        </Router>
    )
}

export default Routes;