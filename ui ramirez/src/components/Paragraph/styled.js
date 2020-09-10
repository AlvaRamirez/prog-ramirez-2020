import styled,  {css} from 'styled-components'

const Paragraphsty = styled.p`
    background-color:${props => props.primary ? '#blue': '#eeeee'};
    border:1px solid #0000;
    margin-top:20px;
    color: ${props => props.primary ? '#fffff': '#00000'};
    outline:none;
    width:40%;
    line-height:1.5;
    font-style:oblique;
    font-family: 'Nunito Sans', sans-serif;
    font-size:13px

    ${props =>
    props.primary
    }


`

export default Paragraphsty