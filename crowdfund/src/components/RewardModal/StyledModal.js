

import Styled from 'styled-components'
import Theme from '../theme/Theme'

export const StyledWrapper = Styled.div`
display:flex;
background-color:white;

flex-direction:column;
margin:20%;
padding:10px;
border:1px solid gray;
border-radius:12px;

`
export const FlexTitle = Styled.div`
display:flex;
justify-content:space-between;
& button {
    background:none;
    border:none;
}

`
export const ModalOverlay = Styled.div`
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    bottom:0;

    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    /* justify-content: center;
    align-items: center; */
`
export const ModalContainer = Styled.div`
    background-color: rgba(0, 0, 0, 0.15);
    padding: 20px;
    border-radius: 2px;
    width: 100%;
    box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    z-index:1000;
    font-style: normal;
    height: auto;
    overflow:auto;

`

export const StyledSection = Styled.section`
    border:1px #147b74 solid;
    border-radius:12px;
    margin:20px;
    padding:20px;

`

export const StyledTitle = Styled.div`
display:flex;
justify-content:space-between;
align-items:center;

    & span {
        color:${Theme.primary.dark_cyan};
}

    @media ${Theme.mediaQueries.mobile}{
        flex-direction:column;
}

`

export const StyledContainer = Styled.div`
display:flex;
flex-direction:column;
& p {
    align-self:center;
}

`
export const StyledDiv = Styled.div`
display:flex;
justify-content:space-between;
align-items:center;

& span{
    margin:10px;
    padding:10px;

}
& Input {
    width:4rem;
    height:2rem;
    border-radius:20px;
    font-size:1.5rem;
    outline:none;
}
@media ${Theme.mediaQueries.mobile}{
    /* flex-direction:column; */
    flex-wrap:wrap;
}


`
