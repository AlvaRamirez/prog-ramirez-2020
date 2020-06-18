import React from 'react';
import './index.css';

const Boton = props => {
    const {caption}=props
    const handleClick =(event) =>console.log('clicked')
    
    return (
        
        <button onClick= {handleClick}
        >
            {caption || 'A completar'}
            </button>
        
        )
       
    
}

export default Boton