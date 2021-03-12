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
    const [pokemonWhoFightLife, setPokemonWhoFightLife] = useState(0)
    const [pokemonWhoFightMaxLife, setPokemonWhoFightMaxLife] = useState(0)
    const [FightIsFinish, setFightIsFinish] = useState(false);
    



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
        setArceusLife(arceusLife - pokemonWhoFight.power);

        setPokemonWhoFightLife(pokemonWhoFightLife - arceus?.stats[1]?.base_stat)
    }

    const updateFavorites = async () => {
        favorites.map(pokemon => {
            if (pokemon?.name === pokemonWhoFight?.name) {
                console.log(pokemon?.name);
                pokemon.life = pokemonWhoFightLife;
            }
        })
    }

    useEffect(() => {
        updateFavorites();

     }, [pokemonWhoFightLife])


    useEffect( () => {
        getArceus();
     }, [])

     useEffect( () => {
        setArceusLife(arceus?.stats[0]?.base_stat)
        setArceusMaxLife(arceus?.stats[0]?.base_stat)
     }, [arceus])

     useEffect( () => {
        setPokemonWhoFightLife(pokemonWhoFight.life);
        setPokemonWhoFightMaxLife(pokemonWhoFight.maxLife);
     }, [pokemonWhoFight])

    return (
        <div>
            <DisplayArceus arceus={arceus} arceusLife={arceusLife} arceusMaxLife={arceusMaxLife} />
            <DisplayTeams pokemonWhoFight={pokemonWhoFight}  favorites={favorites} changePokemonWhoFight={changePokemonWhoFight} pokemonWhoFightLife={pokemonWhoFightLife} pokemonWhoFightMaxLife={pokemonWhoFightMaxLife} />
            {pokemonWhoFight?.life > 0 ? 
                (<ButtonFight onClick={()=>itIsTimeToFight()}> Attaque </ButtonFight> ) :
                (<ButtonFight disabled onClick={()=>itIsTimeToFight()}> Attaque </ButtonFight>)
            }
        </div>
    );
};

const ButtonFight = styled.button`
    text-align:center;
    width: 25%;
`
export default Fight;