import React from 'react'
import Header from './components/Header/Header'
import Styled from 'styled-components'
import DashBoard from './components/DashBoard/DashBoard'


const Container = Styled.div`

    height: 100vh;

`

const App = () => {
    return (
        <Container>
            < Header />
            <DashBoard />
        </Container>
    )
}

export default App;
