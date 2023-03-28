import styled from "styled-components";
import { ColourScheme } from "../assets/colours"; 

const StyledSection = styled('section')`
    background-color: ${ColourScheme.sectionBackground};
    color: ${ColourScheme.textColour};
    border-radius: 10px;
    padding: 20px;
    width: 100%;
`
export default StyledSection;