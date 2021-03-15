import React, { useEffect, useState } from 'react';
import Fightost from '../../../music/fightost.mp3';
import { FiVolumeX, FiVolume2 } from 'react-icons/fi'
import styled from 'styled-components';

const OstFight = () => {
    const [audio] = useState(new Audio(Fightost));
    const [playing, setPlaying] = useState(false);

    const set_unset_sound = () => {
        setPlaying(!playing);
    }

    useEffect( () =>{
        playing ? audio.play() : audio.pause();
    }, [playing])

    return (
    
    <ButtonSound onClick={() => set_unset_sound()}>
        {playing ? (<OnSound/>) : (<OffSound/>)
        }
    </ButtonSound>
        
        
        );
};

const ButtonSound = styled.button`
  text-decoration: none;
  border: none;
  background-color: transparent;
  outline: none;
  color: none;
  border-color: none;
`

const OnSound = styled(FiVolume2)`
    color: #ffffff;
    width: 19px;
    height: 19px;
`
const OffSound = styled(FiVolumeX)`
    color: #ffffff;
    width: 19px;
    height: 19px;
`

export default OstFight;