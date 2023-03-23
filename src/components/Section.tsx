import styled from "styled-components";
import { ColourScheme } from "../assets/colours"; 

const StyledSection = styled('section')`
    background-color: ghostwhite;
    color: ${ColourScheme.dark1};
    border-radius: 10px;
    padding: 20px;
    /* margin: auto;
    margin-top: 20px;
    padding: 20px;
    max-width: 800px;
    @media(max-width:840px){
        margin-left: 20px;
        margin-right: 20px;
    }  */
`
export default StyledSection;