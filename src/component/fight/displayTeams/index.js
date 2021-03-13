import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import ProgressBar from '../progressBar'
import TeamPokemon from '../../../img/teamPokemon.png';
import NoTeamPokemon from '../../../img/noTeamPokemon.png';
import { motion } from 'framer-motion';

const DisplayTeams = ({pokemonWhoFight, favorites, changePokemonWhoFight}) => {
  const [animate, setAnimate] = useState('initial');
  useEffect(() => {
    setInterval(() =>{
      setAnimate(animate === 'initial' ? 'animated' : 'initial') 
    })
  }, [animate]) 
  return (
        <TeamsContainer>
            <PokemonContainer>
                <ImgContainer variants={variantImgContainer} initial="initial" animate="animated" src={`${pokemonWhoFight?.sprites?.back_default}`} />
                <ProgressBar value={pokemonWhoFight.life} max={pokemonWhoFight.maxLife}/>
            </PokemonContainer>
            <PokemonsContainer>
              {favorites.map(pokemon => (
                  <ListTeams key={pokemon.name} onClick={()=>changePokemonWhoFight(pokemon)}>
                    {pokemon?.life <= 0 ? 
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
const ImgContainer =  styled(motion.img)`
  width: 200px;
  position: center;
`
const variantImgContainer = {
  initial: {x: -150000},
  animated: {x: 0}
}

const PokemonContainer = styled.div`
  height: 300px;
  text-align: left;
  display: inline;
`

const PokemonsContainer = styled.div`
  height: 300px;
  display: inline;
`
const ListTeams = styled.div`
  display: inline-block;
  position: right;
`

const ImgTeamPokemon = styled.img`
  width: 20px;
`



export default DisplayTeams;