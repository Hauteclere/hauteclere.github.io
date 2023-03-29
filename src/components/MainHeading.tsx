import styled from "styled-components";
import { ColourScheme } from "../assets/colours"; 
import useColourStore from "./ColourScheme";

type HeadingProps = {
    text: string;
};

type HeadingContainerProps = {
    backgroundColour: string;
}

type StyledHeadingProps = {
    colour: string;
}

const StyledHeading = styled('h1')<StyledHeadingProps>`
    color: ${props => (props.colour)};
    text-align:center;
    min-width: 350px;
    font-size: calc(18px + 3vw);
    @media(min-width:701px){
        position: relative;
        left: -7%;
    }
    @media(max-width:700px){
        padding-top: 2vw;
    }
    @media(min-width:701px){
        bottom: calc(8vw - 65px);
    }
`

const HeadingContainer = styled('div')<HeadingContainerProps>`
    background-color: ${props => (props.backgroundColour)};
    width: 100%;
    height: 50px;
    @media(max-width:700px){
        height: 90px;
        padding-top: 10px;
    }
    @media(min-width:701px){
        position: relative;
        width: 87%;
        left: 13%;
    }
    @media(min-width:901px){
        margin-bottom: 40px;
    }
`

const MainHeading: React.FC<HeadingProps> = props => {
    
    let highlightOnDark = useColourStore((state) => state.highlightOnDark)
    let mainDark = useColourStore((state) => state.mainDark)
    
    return (
        <HeadingContainer backgroundColour={mainDark}>
            <StyledHeading colour={highlightOnDark}>{props.text}</StyledHeading>
        </HeadingContainer>
    )
}

export default MainHeading;
