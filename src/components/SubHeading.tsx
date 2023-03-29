import styled from "styled-components";
import { ColourScheme } from "../assets/colours"; 

type StyledSubHeadingProps = {
    colour: string
}

const StyledSubHeading = styled('h2')<StyledSubHeadingProps>`
    color: ${props => (props.colour)};
    font-size: x-large;
`

export default StyledSubHeading;