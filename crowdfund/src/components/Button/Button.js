import React, { useState } from 'react'
import Styled from 'styled-components'
import Theme from '../theme/Theme'
import iconBookmark from '../../images/icon-bookmark.svg'
import { Button } from 'antd'


export const SimpleButton = ({ className, name ,onClick }) => {

    return (
        <StyledButton className={className} onClick={onClick} >
            {name}
        </StyledButton>
    )

}

export const IconButton = ({ className, name }) => {
    let bgColor = Theme.primary.moderate;
    const [color, setColor] = useState(bgColor)
    const changeColor = () => {
        setColor(Theme.neutral.dark_gray)
    }
    return (
        <IconStyledButton className={className}>
            <img src={iconBookmark} alt="icon bookmark" />
            <ButtonWithIcon style={{ backgroundColor: color }} onClick={changeColor} >
                {name}
            </ButtonWithIcon>
        </IconStyledButton>
    )

}


const StyledButton = Styled(Button)`
background-color:${Theme.primary.moderate};

border: none;
color: white;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
font-weight:700;
width:10rem;
height:3rem;
border-radius:16px;

&:hover {
    background-color:${Theme.primary.dark_cyan};
}

`

const IconStyledButton = Styled.div`
display:flex;
justify-content:center;
flex-direction:row;
align-items:center;

`

const ButtonWithIcon = Styled(Button)`
border: none;
color: white;
text-align: center;
text-decoration: none;
font-size: 16px;
border-radius:16px;
font-weight:700;
width:10rem;
height:3rem;

@media ${Theme.mediaQueries.mobile}{
    display:none;
}

`
