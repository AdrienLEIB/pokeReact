import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import NoFight from '../../img/noFight.png'
import YesFight from '../../img/yesFight.png'
import { useHistory } from 'react-router-dom'
import {favorites as favoritesActions} from '../../actions' 
import {useDispatch, useSelector} from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites.pokemons)
    const setFavorites = fav => dispatch(favoritesActions.set_unset_favorite(fav))
       
    const history = useHistory();
    const [readyToFight, setReadyToFight] = useState(false)

    const redirectToPokemons = () => {
        history.push('/');
    }
    
    const redirectToTeams = () => {
        history.push('/teams')
    }

    const redirectToFight = () => {
        history.push('/fight')
    }

    const impossibleToFight = () => {
        alert("Il vous faut au moins un pokemon dans votre équipe pour combattre !")
    }
    
    useEffect( () =>{
        if(favorites.length > 0 ){
            setReadyToFight(true);
        }
        else{
            setReadyToFight(false);
        }

    }, [favorites])


    return (
        <HeaderContainer>
            <AllPokemonsAndTeamsButtonsContainer>
                <AllPokemonsButtons onClick={redirectToPokemons}> Liste des Pokémons </AllPokemonsButtons>
                <TeamsButtons onClick={redirectToTeams}> Ton équipe </TeamsButtons>
            </AllPokemonsAndTeamsButtonsContainer>
            <FightContainer>
                <FightButtons >
                    {readyToFight ? ( <ImgHeader onClick={redirectToFight} src={YesFight}/>) : 
                    ( <ImgHeader onClick={impossibleToFight} src={NoFight}/>)}
                    
                </FightButtons>
            </FightContainer>
            <Hollow>
                
            </Hollow>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    background: linear-gradient(#ed1717, 10%, #fd9090);
    width: 100%;
    height: 50px;
    display: flex;
`

const AllPokemonsButtons = styled.button`
    background-color: transparent;
    color: white;
`

const TeamsButtons = styled.button`
    background-color: transparent;
    color: white;
`
const FightButtons = styled.button`
    background-color: transparent;
    color: white;
`


const ImgHeader = styled.img`
  height: 40px;
`

const AllPokemonsAndTeamsButtonsContainer = styled.div`
    display: flex;
    flex:1;
    
`
const FightContainer = styled.div`


`

const Hollow = styled.div`
    display: flex;
    flex:1;
`

export default Header;