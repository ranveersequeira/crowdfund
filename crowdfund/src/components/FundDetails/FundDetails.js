import React, { useContext } from 'react'
import { FundContext } from '../Context/FundContext'
import Styled from "styled-components"
import Theme from '../theme/Theme'
import ProgressBar from './Progress'



const FundDetails = () => {
    const funddata = useContext(FundContext);
    const progress = (funddata[0].money * 100) / (funddata[0].total_money)

    return (
        <StyledMain>
            <StyledSection>
                <StyledP>
                    <StyledSpan>${funddata[0].money}</StyledSpan> <br /> of ${funddata[0].total_money} backed
                </StyledP>
                <StyledP>
                    <StyledSpan>{funddata[0].backer}</StyledSpan> <br /> total backers
                </StyledP>
                <StyledP>
                    <StyledSpan>{funddata[0].days_left}</StyledSpan> <br /> days left
                </StyledP>

            </StyledSection>
            <StyledProgress>
                <ProgressBar bgcolor="orange" progress={progress} height={20} />
            </StyledProgress>
        </StyledMain>
    )
}

export default FundDetails

const StyledMain = Styled.section`
background-color:white;
margin-top:10px;
margin-left:5px;
margin-right:5px;
padding-left:5px;
padding-right:5px;
margin-bottom:2rem;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:100%;
text-align:center;

@media ${Theme.mediaQueries.desktop}{
    flex-direction:column;
    justify-content:space-around;
}
`

const StyledSection = Styled.section`
display:flex;
width:100%;
justify-content:space-around;
@media ${Theme.mediaQueries.mobile}{
    flex-direction:column;
    justify-content:space-around;
}

`

const StyledP = Styled.p``
const StyledProgress = Styled.div`
display:flex;
width:100%;
`

const StyledSpan = Styled.span`
font-size:2rem;
font-weight:700;
`
