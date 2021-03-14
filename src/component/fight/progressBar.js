import React from "react";
import styled from 'styled-components'

const ProgressBar = (props) => {
    const { value, max } = props;


    return (
        <Container>
          <progress value={value} max={max} />
          <span> {value} PV</span>
        </Container>
    );
  };
  

const Container = styled.div`
  width: 100%;
  position:center;
  color: white;
`


export default ProgressBar;