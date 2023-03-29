import styled from "styled-components";

type ColourSchemeButtonProps = {
    background: string,
    foreground: string,
    highlight: boolean
}

const ColourSchemeButton = styled('button')<ColourSchemeButtonProps>`
    background-color: ${props => props.background};
    color: ${props => props.foreground};
    padding: 10px;
    font-size: xxx-large;
    border-radius: 50%;
    box-shadow: ${props => props.highlight ? "5px 5px" : "none" };
    height: 90px;
    width: 90px;
    border: none;
    @media(max-width:600px){
        padding: 5px;
        font-size: x-large;
        height: 45px;
        width: 45px;
    }
`

export default ColourSchemeButton