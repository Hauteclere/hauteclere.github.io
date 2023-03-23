import styled from "styled-components";
import { ColourScheme } from "../assets/colours"; 

const StyledBody = styled('main')`
    color: white;
    @media(min-width:701px){
        position: relative;
        bottom: 66px;
    }
    @media(max-width:900px){
        bottom: 50px;
    }
`

export default StyledBody;
