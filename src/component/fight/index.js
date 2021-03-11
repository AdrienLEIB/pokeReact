import React, {useState, useEffect} from 'react';
import axios from "axios";
import DisplayArceus from './displayArceus'
import DisplayTeams from './displayTeams'
import styled from 'styled-components'

const Fight = () => {
    const [arceus, setArceus] = useState();
    const [arceusMaxLife, setArceusMaxLife] = useState(100);
    const [arceusLife, setArceusLife] =  useState(100);
    const [favorites, setFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [] );
    const [isLoading, setLoading] = useState(true);
    const [pokemonWhoFight, setPokemonWhoFight] = useState(favorites[0])
    



    const getArceus = () => {
        axios({
            method: 'get',
            url: "https://pokeapi.co/api/v2/pokemon/arceus",
        })
        .then(res =>{
            setArceus(res.data);
            setLoading(false);
            
        }).catch(err => {
            console.log(err);
            setLoading(false);
        })
    }
    const changePokemonWhoFight = (pokemon) => {
        setPokemonWhoFight(pokemon);
    }

    const itIsTimeToFight = () => {
        setArceusLife(arceusLife - 10);
    }

    useEffect( () => {
        getArceus();
     }, [])

     useEffect( () => {
        console.log(arceus);
        setArceusLife(arceus?.stats[0]?.base_stat)
        setArceusMaxLife(arceus?.stats[0]?.base_stat)
     }, [arceus])

    return (
        <div>
            <DisplayArceus arceus={arceus} arceusLife={arceusLife} arceusMaxLife={arceusMaxLife} />
            <DisplayTeams pokemonWhoFight={pokemonWhoFight}  favorites={favorites} changePokemonWhoFight={changePokemonWhoFight}/>
            <ButtonFight onClick={()=>itIsTimeToFight()}> Attaque </ButtonFight>
        </div>
    );
};

const ButtonFight = styled.button`
    text-align:center;
    width: 25%;
`
export default Fight;