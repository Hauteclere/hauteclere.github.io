import styled from "styled-components";
import { ColourScheme } from "../assets/colours"; 

type StyledH3Props = {
    colour: string
}

const StyledH3 = styled('h3')<StyledH3Props>`
    color: ${props => (props.colour)};
    font-size: large;
`

export default StyledH3;