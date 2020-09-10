import React from 'react'
import Container from './styled'

const Button = ({children, ...props}) =>{
    return(
    <Container
    primary={props.primary}
    >
        {children}
        
        </Container>
    )
}

export default Button