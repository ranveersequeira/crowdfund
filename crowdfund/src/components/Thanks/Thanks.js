import React from 'react'
import Styled from 'styled-components'
import checkLogo from '../../images/icon-check.svg'
import ReactDOM from 'react-dom'
import { SimpleButton } from '../Button/Button'

const Thanks = ({closeThanks}) => {
    return ReactDOM.createPortal (
        <ModalOverlay>
        <StyledWrapper>
            <img src={checkLogo} alt="check logo" />
            <h1>Thanks for your Support</h1>
            <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
            <SimpleButton name="Got it" onClick={closeThanks}></SimpleButton>
        </StyledWrapper>
        </ModalOverlay>,
        document.getElementById('portal')
    )
}

export default Thanks

const ModalOverlay = Styled.div`
    position: fixed;
    z-index: 1000;
    background-color:black;

    top: 0;
    bottom:0;

    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;


`

const StyledWrapper = Styled.div`

display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:400px;
width:400px;

border:1px solid gray;
padding:3rem;
color:white;


`
