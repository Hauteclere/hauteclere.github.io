import styled from "styled-components";

type ColourSchemeButtonProps = {
    background: string,
    foreground: string
}

const ColourSchemeButton = styled('button')<ColourSchemeButtonProps>`
    background-color: ${props => props.background};
    color: ${props => props.foreground};
    padding: 10px;
    font-size: xxx-large;
    border-radius: 50%;
    height: 90px;
    width: 90px;
    border: none;
    @media(max-width:600px){
        padding: 5px;
        font-size: xx-large;
        height: 50px;
        width: 50px;
    }
`

export default ColourSchemeButton