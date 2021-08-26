import React from 'react'
import AboutPage from '../AboutPage/AboutPage'
import FundDetails from '../FundDetails/FundDetails'
import HeadTitle from '../HeadTitle/HeadTitle'
import Styled from 'styled-components'



const DashBoard = () => {

    return (
        <HomeWrapperd>
            <HeadTitle />
            <FundDetails/>
            <AboutPage />
        </HomeWrapperd>
    )
}

export default DashBoard;

const HomeWrapperd = Styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-right:20vw;
    margin-left:20vw;
    margin-top:45vh;
    height:100vh
    background-color:white;
    position:relative;
    z-index:2;

`
