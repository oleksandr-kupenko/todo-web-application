import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Favicon from 'react-favicon';
import favicon from './assets/images/favicon.png'

ReactDOM.render(
    <div>
        <Favicon url={favicon} />
        <App />
    </div>,
    document.getElementById('root')
)