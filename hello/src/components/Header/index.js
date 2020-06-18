import React from 'react';
import '../Header/index.css'
import Boton from '../Boton'

const Header = props => {
    return(

        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>
                Edit <code>src/App.js</code> and save to reload. <Boton caption='riki'/>
    </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
    </a>
        </header>

    )
}

export default Header