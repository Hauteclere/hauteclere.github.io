import styled from "styled-components";
import { ColourScheme } from "../assets/colours"; 

type StyledOutputBlockProps = {
    bordercolour: string
}

const StyledOutputBlock = styled('div')<StyledOutputBlockProps>`
    padding: 2em;
    width: calc(50% - 2em);
    margin: 1em;
    border-style: solid;
    border-radius: 10px;
    border-color: ${props => (props.bordercolour)};
    @media(max-width:900px){
        width: 100%;
        margin: 0em;
    } 
`

export default StyledOutputBlock;