import React from 'react';
import styled from 'styled-components'
import TeamPokemon from '../../../img/teamPokemon.png';
import NoTeamPokemon from '../../../img/noTeamPokemon.png'
import backgroundDex from '../../../img/pokedex2.png'
import {AiFillCaretRight, AiFillCaretLeft} from "react-icons/ai";
import {useDispatch} from 'react-redux'
import {favorites as favoriteActions} from '../../../actions'

const DisplayPokemons = ({pokemons, favorites,  offSet, decrease, increase}) => {
  const dispatch = useDispatch()
  return (
        <DisplayPokemonContainer>
          <PaginationContainer>
              {offSet > 1 ? (<ArrowLeft onClick={decrease}> - </ArrowLeft>) : 
              ( <div> </div>)}
              <ParagrapheContainer>{offSet}</ParagrapheContainer>
                {pokemons.length >= 20 ? ( <ArrowRight onClick={increase}></ArrowRight>) : 
              ( <div> </div>)}
          </PaginationContainer>
          <DataContainer>
              {pokemons.map(pokemon => (
                  <ItemContainer key={pokemon?.name} >
                    <ImgContainer src={`${pokemon?.sprites?.other["official-artwork"]?.front_default}`} />
                    <ButtonTeam onClick={()=>dispatch(favoriteActions.set_unset_favorite(pokemon))}>
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


const ArrowRight = styled(AiFillCaretRight)`
  width: 20px;
  height: 20px;
  color: white;
`
const ArrowLeft = styled(AiFillCaretLeft)`
  width: 20px;
  height: 20px;
  color: white;
`

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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ParagrapheContainer = styled.div`
`

const ButtonTeam = styled.button`
  text-decoration: none;
  border: none;
  background-color: transparent;
  outline: none;
  color: none;
  border-color: none;
`
export default DisplayPokemons;