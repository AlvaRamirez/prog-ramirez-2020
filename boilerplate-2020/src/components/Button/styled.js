import styled from 'styled-components'

const Container = styled.button`
    background-color:${props => props.primary ? '#blue': '#eeeee'};
    border:1px solid #0000;
    margin-top:20px;
    padding:20px 20px;
    transition:0.3s;
    color: ${props => props.primary ? '#fffff': '#00000'};
    outline:none;
    :hover{
        background-color:blue;
        transition:0.3s;
    }

`

export default Container