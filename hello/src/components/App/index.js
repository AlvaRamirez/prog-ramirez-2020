import React from 'react';
import '../App/index.css';
import Header from '../Header';
import Footer from '../Footer';
import Wrapper from '../Wrapper';
import Fecha from '../Fecha'

function App() {
    return (
        <div className="App">
            <Header />
            <Wrapper />
            <Footer texto="jai" fecha=""/>
        </div>
    );
}
export default App;


