import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import Modal from '../component/modal'
import Header from '../component/header';
import Fight from '../component/fight';
import Teams from '../component/teams';
import GetPokemons from '../component/Pokemons/getPokemons';
import PrivateRoute from '../component/utils/privateRoute';
import {useDispatch, useSelector} from 'react-redux';
import {favorites as favoritesActions} from '../actions';

const Routes = () => {
//  const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites.pokemons)
//  const setFavorites = fav => dispatch(favoritesActions.set_unset_favorite(fav))
    

    return(
        <Router>
            <Header />
            <Modal></Modal>
            <Switch>
                <Route exact path="/" component={() => <GetPokemons />} />
                <PrivateRoute path="/fight" favorites={favorites} component={() => <Fight />} />
                <Route path="/teams" component={() => <Teams />} />
                <Redirect to="/" component={() => <GetPokemons />} ></Redirect>
            </Switch>
        </Router>
    )
}

export default Routes;