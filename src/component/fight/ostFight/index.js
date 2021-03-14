import React, { useEffect, useState } from 'react';
import Fightost from '../../../music/fightost.mp3';
import { BsFillPlayFill, BsFillPauseFill} from "react-icons/bs";
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
        {playing ? (<OffSound/>) : (<OnSound/>)
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

const OnSound = styled(BsFillPlayFill)`
`
const OffSound = styled(BsFillPauseFill)`
`

export default OstFight;