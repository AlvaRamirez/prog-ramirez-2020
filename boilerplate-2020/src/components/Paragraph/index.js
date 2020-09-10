import React from 'react'
import Paragraphsty from './styled'

const Paragraph = ({children, ...props}) =>{
    return(
    <Paragraphsty
    primary={props.primary}
    >
        {children}
        
        </Paragraphsty>
    )
}

export default Paragraph