import React from 'react';
import backgroundDex from '../../../img/pokedex2.png'
import styled from 'styled-components'
import TeamPokemon from '../../../img/teamPokemon.png';
import NoTeamPokemon from '../../../img/noTeamPokemon.png'

const DisplayTeams = ({favorites, removeFav}) => {
    return (
        <DisplayPokemonContainer>
            <DataContainer>
              {favorites.map(pokemon => (
                  <ItemContainer key={pokemon?.name} >
                    <ImgContainer src={`${pokemon?.sprites?.other["official-artwork"]?.front_default}`} />
                    <ButtonTeam onClick={()=>removeFav(pokemon)}>
                      {favorites.filter(e => e.name === pokemon?.name).length === 0 ? 
                        (<ImgTeamPokemon src={NoTeamPokemon} />) : 
                        (<ImgTeamPokemon src={TeamPokemon}/>)
                        }
                    </ButtonTeam>
                  
                  </ItemContainer>
                  
              ))}
          </DataContainer>
        </DisplayPokemonContainer>
    );
};

const ImgContainer = styled.img`
  width: 150px;
  position: center;
`

const ImgTeamPokemon = styled.img`
  width: 20px;
`

const DisplayPokemonContainer = styled.div`
  background-image: url(${backgroundDex});
  background-size: cover;

`

const DataContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
  justify-content: space-between;
  
`
  
const ItemContainer = styled.div`
  width: 100%;
  height: 300px;
  position:center;
  font-size: 20px;
  text-align: center;
  margin: 10px
  `


const ButtonTeam = styled.button`
  text-decoration: none;
  border: none;
  background-color: transparent;
  outline: none;
  color: none;
  border-color: none;
`

export default DisplayTeams;