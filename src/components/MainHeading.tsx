import styled from "styled-components";
import { ColourScheme } from "../assets/colours"; 

type HeadingProps = {
    text: string;
};

const StyledHeading = styled('h1')`
    color: ${ColourScheme.activeText};
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

const HeadingContainer = styled('div')`
    background-color: ${ColourScheme.headerBackground};
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
    return (
        <HeadingContainer>
            <StyledHeading>{props.text}</StyledHeading>
        </HeadingContainer>
    )
}

export default MainHeading;
