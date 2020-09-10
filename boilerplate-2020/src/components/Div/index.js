import React from 'react'
import Divsty from './styled'

const Div = ({children, ...props}) =>{
    return(
    <Divsty
    primary={props.primary}
    >
        {children}
        
        </Divsty>
    )
}

export default Div