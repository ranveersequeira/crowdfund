import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './components/theme/GlobalStyle'

ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('root')
)
