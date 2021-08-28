import React from 'react'
import RewardsOption from '../RewardsOption/RewardsOption'
import Styled from 'styled-components'



const AboutPage = () => {
    return (
        <StyledWrapper>
            <StyledArticle >
                <h2>About this Project</h2>
                <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates
                    your screen to a more comfortable viewing height. Placing your monitor at eye level has
                    the potential to improve your posture and make you more comfortable while at work,
                    helping you stay focused on the task at hand. </p>
                <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below
                    your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
            </StyledArticle>
            <RewardsOption />
        </StyledWrapper>

    )
}

export default AboutPage

const StyledWrapper = Styled.div`
width:100%;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const StyledArticle = Styled.article`
display:flex;
justify-content:center;
align-items:flex-start;
flex-direction:column;
margin:2rem;
line-height: 2rem;

`
