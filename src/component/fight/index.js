import React, {useState, useEffect} from 'react';
import axios from "axios";
import DisplayArceus from './displayArceus';
import DisplayTeams from './displayTeams';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {favorites as favoritesActions, modal} from '../../actions';
import OstFight from './ostFight';
import CombatDraw from '../../img/backgroundfight.png';

const Fight = () => {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites.pokemons)
    const setFavorites = fav => dispatch(favoritesActions.set_unset_favorite(fav))
    const [tempFav, setTempFav] = useState(favorites)
    const [arceus, setArceus] = useState();
    const [arceusMaxLife, setArceusMaxLife] = useState();
    const [arceusLife, setArceusLife] =  useState();
    const [isLoading, setLoading] = useState(true);
    const [pokemonWhoFight, setPokemonWhoFight] = useState(favorites[0]);
    
    const [animateTeams, setAnimateTeams] = useState('initial');

    const [animateArceus, setAnimateArceus] = useState('initial');




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
        setAnimateTeams('attack');
        const newArceusLife = arceusLife - pokemonWhoFight.power
        if (newArceusLife <= 0 ){
            setArceusLife(0)
        }
        else{
            setArceusLife(newArceusLife);
            pokemonWhoFight.life = pokemonWhoFight.life - arceus?.stats[1]?.base_stat
            if(pokemonWhoFight.life <= 0){
                pokemonWhoFight.life = 0
            }
            setPokemonWhoFight(pokemonWhoFight);
        }
        // setAnimateTeams('initial');
        

    }

    const updateFavorites = async () => {
        favorites.map(pokemon => {
            if (pokemon?.name === pokemonWhoFight?.name) {
                pokemon.life = pokemonWhoFight.life;
                setPokemonWhoFight(pokemon);
            }
        })
        console.log(favorites)
        setTempFav(favorites);
    }

    const healAllpokemons = () =>{
        console.log(favorites);
        favorites.map(pokemon => {
            pokemon.life = pokemon.maxLife;
        })
        setTempFav(favorites);
        setArceusLife(arceusMaxLife);
    }


    useEffect( () => {
        getArceus();
     }, [])
     
     useEffect( () => {
        setArceusLife(arceus?.stats[0]?.base_stat)
        setArceusMaxLife(arceus?.stats[0]?.base_stat)
     }, [arceus])

     useEffect( () => {
        updateFavorites();
     }, [pokemonWhoFight]);

     useEffect( () => {
        if (arceusLife <= 0 ) {
            dispatch(modal.display_modal({title: 'BRAVO', content: 'YES WE DID IT'}))
            // alert(" Vous avez gagné ");
        }

     }, [arceusLife])


    useEffect( () =>{
        localStorage.setItem('favorites', JSON.stringify(favorites));
    },[favorites])


    useEffect(() => {
        setTimeout(() =>{
          setAnimateArceus(animateArceus === 'initial' ? 'animated' : 'initial') 
        }, 500)
      }, [animateArceus])

      useEffect(() => {
        setTimeout(() =>{
          setAnimateTeams(animateTeams === 'initial' ? 'animated' : 'initial') 
        }, 500)
      }, [animateTeams])

      
    if (isLoading){
        return(<Chargement>Chargement en cours ...</Chargement>)
    }
    return (
        <>
        {arceus ? 
            <ContainerFight>
                <DisplayArceus arceus={arceus} arceusLife={arceusLife} arceusMaxLife={arceusMaxLife} animate={animateArceus} />
                <DisplayTeams pokemonWhoFight={pokemonWhoFight}  favorites={favorites} changePokemonWhoFight={changePokemonWhoFight} animate={animateTeams} />
                <ButtonFight disabled={pokemonWhoFight.life <= 0 || arceusLife <= 0} onClick={()=>itIsTimeToFight()}> Attaque </ButtonFight>
                <RestartFight disabled={tempFav.filter(e => e.life > 0).length > 0 && arceusLife !== 0 } onClick={()=>healAllpokemons()}> Recommencer </RestartFight>
                <OstFight />
            </ContainerFight>
            :
            <>
                <NoArceus> 
                <PNoArceus>L'appel api n'a pas fonctionné. </PNoArceus>
                <ButtonNoArceus onClick={getArceus}> Retry </ButtonNoArceus>
                </NoArceus>
            </>
            }
        </>
    );
};

const ButtonFight = styled.button`
    text-align:center;
    width: 30%;
    margin: 2px;
`

const RestartFight = styled.button`
    text-align:center;
    width: 30%;
`
const Chargement = styled.p`
  font-size: 20px;
  text-align: center;
`
const NoArceus = styled.div`
  text-align: center;
  `

const ContainerFight = styled.div`
    background-image: url(${CombatDraw});
    background-size: cover;
`

const PNoArceus = styled.p`
    text-align: center;
`
const ButtonNoArceus = styled.button`
`


export default Fight;