import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'; 
import DisplayPokemons from '../displayPokemons'

    const GetPokemons = () => {
        const [basePokemons, setBasePokemons] = useState([]);
        const [pokemons, setPokemons] = useState([]);
        const [offSet, setOffSet] = useState(0)
        const history = useHistory();
        const [favorites, setFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [] );
        const [isLoading, setLoading] = useState(true);
        

        const getPokemons = () =>{
            axios({
                method: 'get',
                url: "https://pokeapi.co/api/v2/pokemon",
                params: {
                'limit': 20,
                'offset': offSet
                }
            })
            .then(res =>{
                setBasePokemons(res.data.results);
                setLoading(false);
                
            }).catch(err => {
                console.log(err);
                setLoading(false);
            })
        }

        const getPokemonsDetail = async () =>{
            const promisepokemons = Promise.all(
                basePokemons.map(pokemon => (
                    getPokemonDetail(pokemon.url)
                ))
            )
            const cleanpokemons = await Promise.resolve(promisepokemons);
            setPokemons([...cleanpokemons])
        }

        const getPokemonDetail = (u) =>{
            return axios({
                method: 'get',
                url: u,
                params: {
                }
            })
            .then(res =>{
                console.log(res.data);
                return res.data;
            
            }).catch(err => {
                console.log(err);
            })
        }


        const addFav = (pokemon) => {
            const checkId = favorites.filter(e => e.name === pokemon.name)
            console.log(checkId);
            if (favorites.length >=6 && checkId.length === 0){
                alert("Attention !! Votre équipe est déjà complète.");
                return
            }

            if (checkId.length === 0 && favorites.length <= 6) {
                setFavorites([...favorites, {'name': pokemon.name, 'sprites': pokemon.sprites, 'life': pokemon?.stats[0]?.base_stat, 'maxLife':pokemon?.stats[0]?.base_stat, "power": pokemon?.stats[1]?.base_stat}]);
                
            }
            else{
                const newFavorites = favorites.filter(h => h.name !==  pokemon.name);
                setFavorites(newFavorites);
                    
            }
        }

        const decrease = () => {
            setOffSet(offSet - 20)
        }
        
        const increase = () => {
            setOffSet(offSet + 20)
        }
        
        useEffect(() => {
            getPokemons();
        }, [offSet])

        useEffect( () => {
           getPokemonsDetail();
        }, [basePokemons])



        useEffect(()=>{
            localStorage.setItem('favorites', JSON.stringify(favorites));

        }, [favorites])

    return (
        <>
            <DisplayPokemons pokemons={pokemons} favorites={favorites} history={history}  addFav={addFav} offSet={offSet} decrease={decrease} increase={increase} />
        </>
    );
};

export default GetPokemons;