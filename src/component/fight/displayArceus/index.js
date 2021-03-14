import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import ProgressBar from "../progressBar.js";
import { motion } from 'framer-motion';

const DisplayArceus = ({arceus, arceusLife, arceusMaxLife, animate}) => {


    return (
        <div>
            <ItemContainer  key={arceus?.name} >
                    <ProgressBar value={arceusLife} max={arceusMaxLife}/>
                  <ImgContainer variants={variantImgContainer} animate={animate} src={`${arceus?.sprites?.other["official-artwork"]?.front_default}`} />
                
            </ItemContainer>
                
        </div>
    );
};


const ImgContainer =  styled(motion.img)`
  width: 200px;
  position: center;
`
const variantImgContainer = {
  initial: {x: 0, y:0},
  animated: {x: 5, y:-5},
  attack: {x: -120, y:120}
}

  
const ItemContainer = styled.div`
  width: 95%;
  height: 300px;
  position:center;
  font-size: 20px;
  text-align: right;
  `

export default DisplayArceus;