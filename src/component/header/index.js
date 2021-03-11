import React, {useState} from 'react';
import styled from 'styled-components'
import NoFight from '../../img/noFight.png'
import YesFight from '../../img/yesFight.png'

const Header = () => {
    const [favorites, setFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [] );
    return (
        <HeaderContainer> 
            <AllPokemonsButtons> Liste des Pokémons </AllPokemonsButtons>
            <TeamsButtons> Ton équipe </TeamsButtons>
            <FightButtons>
                {favorites.length > 0 ? ( <ImgHeader src={YesFight}/>) : 
                ( <ImgHeader src={NoFight}/>)}
                
            </FightButtons>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    background: linear-gradient(#ed1717, 10%, #fd9090);
    width: 100%;
    height: 50px;
`

const AllPokemonsButtons = styled.button`
    width: 20%;
    height: 100%;

`

const TeamsButtons = styled.button`
    width: 20%;
    height: 100%;

`
const FightButtons = styled.button`
    width: 20%;
    height: 100%;
`


const ImgHeader = styled.img`
  width: 100%;
  height: 100%;
`

export default Header;