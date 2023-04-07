import { useState, useEffect,} from "react";
import { Link, useLocation, } from "react-router-dom";
import styled from "styled-components"; 
import useColourStore from "./ColourScheme";

type NavbarProps = {
    extend: boolean,
    backgroundColour: string
};

const NavbarContainer = styled("nav")<NavbarProps>`
    width: 100%;
    height:${(props)=>(props.extend ? "100vh": "70px")};
    display: flex;
    flex-direction: row;
    background-color: ${(props) => (props.backgroundColour)};
    @media(min-width:701px){
        height: 12vw;
    }
    @media(max-width:700px){
        position: absolute;
        padding-top: 2vw;
        padding-left: 2vw;
        width: ${(props)=>(props.extend ? "100vw" : "50px;")};
        min-width: ${(props)=>(props.extend ? "180px" : "55px")};
    }
`
const NavbarLinkContainer = styled.div`
    display: flex;
    width: 86vw;
    justify-content: space-around;
    align-items: top;
    @media(max-width: 700px) {
        display: none;
    };
`

type NavbarLinkProps = {
    colour: string,
    focuscolour: string
}

const NavbarLink = styled(Link)<NavbarLinkProps>`
    font-size: x-large;
    text-decoration: none;
    margin: 10px;
    color: ${(props) => (props.colour)};
    &:hover,
    &:active,
    &:focus{
        color: ${(props) => (props.focuscolour)};
        text-decoration: underline;
    }
    @media(max-width: 700px) {
        display: none;
    };
    @media(max-width: 900px) {
        font-size: large;
    };
`

type LogoProps = {
    backgroundColour: string,
    darkColour: string,
    highlightColour: string,
    height: string,
    width: string,
    padding: string,
    extend: boolean,
    wrapperColour: string
}

type LogoBoxProps = {
    height: string,
    width: string,
    padding: string,
    extend: boolean,
    wrapperColour: string
}

const LogoWrapper = styled('div')<LogoBoxProps>`
    height: ${props => props.width};
    width: ${props => props.height};
    padding: ${props => props.padding};
    @media(max-width: 700px) {
        display: none;
        width: 0vw;
        height: 0vw;
    };
`

const ColouredLogo: React.FC<LogoProps> = props => {
    return (
        <LogoWrapper height={props.height} width={props.width} padding={props.padding} extend={false} wrapperColour={props.wrapperColour}>
            <svg version="1.1" id="svg5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 200 200">
                <g id="triangle">
                    <path fill={props.highlightColour} fillOpacity="1" fillRule="evenodd" id="triangletop" d="M 13,50 187,50 100,201 z" clipPath="none" />
                </g>
                <g id="rectanglebackground">
                    <path fill={props.backgroundColour} fillOpacity="1" fillRule="evenodd" id="path9821" d="M 40,105 160,105 160,127 40,127 z" clipPath="none" />
                </g>
                <g id="rectangle">
                    <path fill={props.darkColour} fillOpacity="1" fillRule="evenodd" id="path9821" d="M 58,105 142,105 142,127 58,127 z" clipPath="none" />
                </g>
                <g id="background" >
                    
                    <path fill={props.backgroundColour} fillOpacity="1" fillRule="evenodd" strokeWidth="1" id="path141" d="M 13.39746,50 a 100,100 0 0 0 86.60254,150 z" />
                    <path fill={props.backgroundColour} fillOpacity="1" fillRule="evenodd" strokeWidth="1" id="path141" d="M 186.60254,50 a 100,100 0 0 1 -86.60254,150 z" />
                    <path fill={props.darkColour} fillOpacity="1" fillRule="evenodd" strokeWidth="1" id="path141" d="M 13.39746,50 a 100,100 0 0 1 173.20508,0 z" />
                </g>
            </svg>
        </LogoWrapper>
    )
}

const ButtonImageWrapper = styled('div')<LogoBoxProps>`
    height: ${props => props.width};
    width: ${props => props.height};
    padding: ${props => props.padding};
    transform: rotate(${props => props.extend ? `-90deg` : `0deg`});
    background-color: ${props => props.wrapperColour};
`

const ButtonImage: React.FC<LogoProps> = props => {
    return (
        <ButtonImageWrapper height={props.height} width={props.width} padding={props.padding} extend={props.extend} wrapperColour={props.wrapperColour}>
            <svg version="1.1" id="svg5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 200 200">
            <g id="triangle">
                    <path fill={props.highlightColour} fillOpacity="1" fillRule="evenodd" id="triangletop" d="M 13,50 187,50 100,201 z" clipPath="none" />
                </g>
                <g id="rectanglebackground">
                    <path fill={props.backgroundColour} fillOpacity="1" fillRule="evenodd" id="path9821" d="M 40,105 160,105 160,127 40,127 z" clipPath="none" />
                </g>
                <g id="rectangle">
                    <path fill={props.darkColour} fillOpacity="1" fillRule="evenodd" id="path9821" d="M 58,105 142,105 142,127 58,127 z" clipPath="none" />
                </g>
                <g id="background" >
                    
                    <path fill={props.backgroundColour} fillOpacity="1" fillRule="evenodd" strokeWidth="1" id="path141" d="M 13.39746,50 a 100,100 0 0 0 86.60254,150 z" />
                    <path fill={props.backgroundColour} fillOpacity="1" fillRule="evenodd" strokeWidth="1" id="path141" d="M 186.60254,50 a 100,100 0 0 1 -86.60254,150 z" />
                    <path fill={props.darkColour} fillOpacity="1" fillRule="evenodd" strokeWidth="1" id="path141" d="M 13.39746,50 a 100,100 0 0 1 173.20508,0 z" />
                </g>
            </svg>
        </ButtonImageWrapper>
    )
}

const ButtonLink = styled("button")`
    width: 50px;
    height: 70px;
    background-repeat: no-repeat;
    background-size: 50px 50px;
    border: none;
    font-size: 45px;
    cursor: pointer;
    @media(min-width: 701px) {
        display: none;
    };
    font-size: medium;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
`

type ButtonTextProps = {
    backgroundColour: string,
    colour: string,
    borderColour: string
}

const ButtonText = styled("p")<ButtonTextProps>`
    background-color: ${(props) => (props.backgroundColour)};
    color: ${(props) => (props.colour)};
    width: 50px;
    height: 20px;
    border-color: ${(props) => (props.borderColour)};
    border-width: 1px;
    border-style: solid;
`

const ExtendedNavbar = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    @media (min-width:701px){
        display: none;
    }
`

const NavbarLinkExtended= styled(Link)<NavbarLinkProps>`
    font-size: x-large;
    text-decoration: none;
    margin: 10px;
    color: ${(props) => (props.colour)};
    &:hover,
    &:active,
    &:focus{
        color: ${(props) => (props.focuscolour)};
    }
`

const Navbar: React.FC<NavbarProps> = props => {
    const [extendNavbar, setExtendNavbar] = useState(false)

    const location = useLocation();
    
    useEffect(() => {
        setExtendNavbar(false);
    }, [location]);

    let mainDark = useColourStore(state => (state.mainDark))
    let mainLight = useColourStore(state => (state.mainLight))
    let highlightOnDark = useColourStore(state => (state.highlightOnDark))
    let logoBackground = useColourStore(state => (state.logoBackground))
    let logoForeground = useColourStore(state => (state.logoForeground))
    let logoDark = useColourStore(state => (state.logoDark))

    return (
        <NavbarContainer backgroundColour={mainDark} extend={extendNavbar}>
            <ButtonLink onClick={()=>{setExtendNavbar((curr)=> !curr)}} ><ButtonImage backgroundColour={logoBackground} darkColour={logoDark} highlightColour={logoForeground} height="50px" width="50px" padding="0px" extend={extendNavbar} wrapperColour={mainDark}/><ButtonText colour={mainLight} backgroundColour={mainDark} borderColour={mainDark}>Menu</ButtonText></ButtonLink>
            <ColouredLogo backgroundColour={logoBackground} darkColour={logoDark} highlightColour={logoForeground} height="12vw" width="12vw" padding="1vw" extend={false} wrapperColour="none"/>
            <NavbarLinkContainer>
                    <NavbarLink colour={mainLight} focuscolour={highlightOnDark} className="nav-link active" to="/">Home</NavbarLink>
                    <NavbarLink colour={mainLight} focuscolour={highlightOnDark} className="nav-link" to="/projects">Projects</NavbarLink>
                    <NavbarLink colour={mainLight} focuscolour={highlightOnDark} className="nav-link" to="/cv">My CV</NavbarLink>
            </NavbarLinkContainer>
            {extendNavbar && (
                <ExtendedNavbar>
                    <NavbarLinkExtended colour={mainLight} focuscolour={highlightOnDark} className="nav-link active" to="/">Home</NavbarLinkExtended>
                    <NavbarLinkExtended colour={mainLight} focuscolour={highlightOnDark} className="nav-link" to="/projects">Projects</NavbarLinkExtended>
                    <NavbarLinkExtended colour={mainLight} focuscolour={highlightOnDark} className="nav-link" to="/cv">My CV</NavbarLinkExtended>
                </ExtendedNavbar>
            )}
        </NavbarContainer>
    )
}

export default Navbar;