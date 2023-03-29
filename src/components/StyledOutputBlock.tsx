import styled from "styled-components";
import { ColourScheme } from "../assets/colours"; 

const StyledOutputBlock = styled('div')`
    padding: 2em;
    width: calc(50% - 2em);
    margin: 1em;
    border-style: solid;
    border-radius: 10px;
    border-color: ${ColourScheme.highlightOnLight};
    @media(max-width:900px){
        width: 100%;
        margin: 0em;
    } 
`

export default StyledOutputBlock;