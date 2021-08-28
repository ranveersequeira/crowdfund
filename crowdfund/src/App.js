import React from 'react'
import Header from './components/Header/Header'
import DashBoard from './components/DashBoard/DashBoard'
import FundProvider from './components/Context/FundContext'



const App = () => {
    return (
        <FundProvider>
            < Header />
            <DashBoard />
        </FundProvider>
    )
}

export default App;
