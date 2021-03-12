import React, {useState, useEffect} from "react";
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
    const [favorites, setFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [] );

    return(
        <Router>
            <Header favorites={favorites} setFavorites={setFavorites} />
            <Switch>
                <Route exact path="/"  component={() => <GetPokemons favorites={favorites} setFavorites={setFavorites}/>} />
                <Route path="/fight" component={() => <Fight favorites={favorites} setFavorites={setFavorites} />} />
                <Route path="/teams" component={() => <Teams favorites={favorites} setFavorites={setFavorites} />} />
                <Redirect to="/" component={() => <GetPokemons favorites={favorites} setFavorites={setFavorites}/>} ></Redirect>
            </Switch>
        </Router>
    )
}

export default Routes;