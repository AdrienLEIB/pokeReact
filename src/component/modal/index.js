import React from 'react'
import styled from 'styled-components'

import {useSelector, useDispatch} from 'react-redux'

import {modal as modalActions} from '../../actions'

const Modal = () => {
    const dispatch = useDispatch()
    const modal = useSelector(state => state.modal.modal)
    
    if (!modal.title && !modal.description){
        return null
    }

    return(
        <ModalBackground  >   
        <ModalContainer>
        <Container><h1>
        {modal.title}    
        </h1></Container>
        <Container>
            <p>{modal.content}</p>
        </Container>
        <button onClick={() => dispatch(modalActions.display_modal({title: '', content:''}))}>Fermer</button>
        </ModalContainer>
        </ModalBackground>     
    )
}

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
`

const ModalBackground = styled.div`
    display: 'flex';
    position:absolute;
    width: 100%;
    justify-content:center;
    align-items: center;
    background-color: #00000063;
    height: 100vh;
    z-index: 9999;
`

const ModalContainer = styled.div`
    padding:12px;
    background-color: white;
    display: flex;
    width:400px;
    flex-direction: column;

    height:400px;
    
`


export default Modal