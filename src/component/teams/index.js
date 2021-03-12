import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'; 
import DisplayTeams from './displayTeams'
import TeamPokemon from '../../img/teamPokemon.png';
import NoTeamPokemon from '../../img/noTeamPokemon.png';

const Teams = (props) => {

    const [pokemons, setPokemons] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [] );
    const history = useHistory();

    useEffect(()=>{
      localStorage.setItem('favorites', JSON.stringify(pokemons));

    }, [pokemons])

    const removeFav = (pokemon) => {
        const newFavorites = pokemons.filter(h => h.name !==  pokemon.name);
        setPokemons(newFavorites);
    }

    return (
        <>
            <DisplayTeams pokemons={pokemons} removeFav={removeFav} />
        </>
    );
};

export default Teams;