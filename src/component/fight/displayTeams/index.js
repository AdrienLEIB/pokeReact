import React from 'react';
import styled from 'styled-components'
import ProgressBar from '../progressBar'
import TeamPokemon from '../../../img/teamPokemon.png';
import NoTeamPokemon from '../../../img/noTeamPokemon.png'


const DisplayTeams = ({pokemonWhoFight, favorites, changePokemonWhoFight}) => {
    return (
        <TeamsContainer>
            <PokemonContainer>
                <ImgContainer src={`${pokemonWhoFight?.sprites?.back_default}`} />
                <ProgressBar value={100} max={100}/>
            </PokemonContainer>
            <PokemonsContainer>
              {favorites.map(pokemon => (

                  <ListTeams onClick={()=>changePokemonWhoFight(pokemon)}>
                    {favorites.filter(e => e.name === pokemon?.name).length === 0 ? 
                      (<ImgTeamPokemon src={NoTeamPokemon} />) : 
                      (<ImgTeamPokemon src={TeamPokemon}/>)
                      }
                  </ListTeams>
            
                
              ))}
            </PokemonsContainer>
        </TeamsContainer>
    );
};

const TeamsContainer = styled.div`
  display: inline;
  width:100%;
  height: 400px;
`
const ImgContainer = styled.img`
  width: 200px;
  position: center;
`

const PokemonContainer = styled.div`
  height: 300px;
  text-align: left;
  display: inline;
`

const PokemonsContainer = styled.div`
  height: 300px;
  text-align: right;
  display: inline;
`
const ListTeams = styled.div`
`

const ImgTeamPokemon = styled.img`
  width: 20px;
`

export default DisplayTeams;