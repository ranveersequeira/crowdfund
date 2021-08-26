import React from 'react'
import Styled from 'styled-components'
import masterLogo from '../../images/logo_master.svg'
import iconBookmark from '../../images/icon-bookmark.svg'

const HeadTitle = () => {
    return (
        <SectionWrapper>
        <span id="mastercraft_logo">
            <img src={masterLogo} alt="mastercraft logo" />
        </span>
        <div>
        <h2>Mastercraft Bamboo Monitor Riser</h2>
        <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        </div>
        <div>
            <button>Back this Project</button>
            <img src={iconBookmark} alt="icon Bookmark logo" />
        </div>
        </SectionWrapper>
    )
}

const SectionWrapper = Styled.section`
width:100%;
background-color:white;
margin-bottom:4rem;



`
const logoDiv = Styled.div`
position:absolute;
top:-15%;




`

export default HeadTitle
