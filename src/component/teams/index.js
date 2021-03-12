import React, {} from 'react';
import DisplayTeams from './displayTeams'
import {useDispatch, useSelector} from 'react-redux'
import {favorites as favoritesActions} from '../../actions' 

const Teams = ({}) => {
    
 const dispatch = useDispatch()
 const favorites = useSelector(state => state.favorites.pokemons)
 const setFavorites = fav => dispatch(favoritesActions.set_unset_favorite(fav))

    return (
        <>
            <DisplayTeams favorites={favorites} removeFav={setFavorites} />
        </>
    );
};

export default Teams;