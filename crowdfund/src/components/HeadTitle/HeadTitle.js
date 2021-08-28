import React,{useState} from 'react'
import Styled from 'styled-components'
import masterLogo from '../../images/logo_master.svg'
import Theme from '../theme/Theme'
import {IconButton , SimpleButton} from '../Button/Button'
import RewardModal from '../RewardModal/RewardModal'

const HeadTitle = () => {
    const [open,setOpen] = useState(false)

    const closeModal = () => {
        setOpen(false)
    }

    const showModal = () => {
        setOpen(true)
    }


    return (
        <>
        {open && <RewardModal closeModal={closeModal} />}
        <SectionWrapper>
        <MastercraftLogo>
            <img src={masterLogo} alt="mastercraft logo" />
        </MastercraftLogo>
        <div>
            <h2>Mastercraft Bamboo Monitor Riser</h2>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        </div>
        <ButtonDiv>
            <SimpleButton
                    className="className"
                    name="Back this Project"
                    onClick={showModal}
            >
            </SimpleButton>
            <IconButton
                className="className"
                name="Bookmark"
            >
            </IconButton>
        </ButtonDiv>
        </SectionWrapper>
        </>
    )
}

export default HeadTitle

const SectionWrapper = Styled.section`
display:flex;
flex-direction:column;
justify-content:space-around;
width:100%;
background-color:white;
margin-bottom:1rem;
height:20rem;
text-align:center;
position:relative;

`
const MastercraftLogo = Styled.span`
position:absolute;
top:-8%;
text-align:center;
left:40%;
right:40%;

@media ${Theme.mediaQueries.desktop}{
position:absolute;
top:-8%;
left:40%;
right:40%;
}
`

const ButtonDiv = Styled.div`
display:flex;
justify-content:space-around;

`
