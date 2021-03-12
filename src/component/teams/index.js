import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'; 
import DisplayTeams from './displayTeams'
import TeamPokemon from '../../img/teamPokemon.png';
import NoTeamPokemon from '../../img/noTeamPokemon.png';

const Teams = ({favorites, setFavorites}) => {
    
  const history = useHistory();

    useEffect(()=>{
      localStorage.setItem('favorites', JSON.stringify(favorites));

    }, [favorites])

    const removeFav = (pokemon) => {
        const newFavorites = favorites.filter(h => h.name !==  pokemon.name);
        setFavorites(newFavorites);
    }

    return (
        <>
            <DisplayTeams pokemons={favorites} removeFav={removeFav} />
        </>
    );
};

export default Teams;