import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

    const Layout=({children}) =>{
        console.log("hola");
    return(
        <div className="App">
            <Header />
           {children}
            <Footer />
        </div>
    
    )

}


export default Layout