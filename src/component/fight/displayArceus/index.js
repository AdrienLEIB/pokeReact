import React, {} from 'react';
import styled from 'styled-components'
import ProgressBar from "../progressBar.js";

const DisplayArceus = ({arceus, arceusLife, arceusMaxLife}) => {


    return (
        <div>
            <ItemContainer key={arceus?.name} >
                    <ProgressBar value={arceusLife} max={arceusMaxLife}/>
                  <ImgContainer src={`${arceus?.sprites?.other["official-artwork"]?.front_default}`} />
                
            </ItemContainer>
                
        </div>
    );
};



const ImgContainer = styled.img`
  width: 150px;
  position: center;
`

  
const ItemContainer = styled.div`
  width: 95%;
  height: 300px;
  position:center;
  font-size: 20px;
  text-align: right;
  margin: 10px
  `

export default DisplayArceus;