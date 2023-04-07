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
                <defs id="defs2" />
                <g id="layer1" >
                <path fill={props.backgroundColour} fillOpacity="1" fillRule="evenodd" strokeWidth="0.264583" id="path141" transform="rotate(90)" d="m 200,-100.02923 a 100,100 0 0 1 -55.32548,89.495354 100,100 0 0 1 -104.781631,-9.54657" />
                <path fill={props.darkColour} fillOpacity="1" fillRule="evenodd" strokeWidth="0.264583" id="path141-5" transform="rotate(-150)" d="M -37.320435,-24.641611 A 100,100 0 0 1 -86.60154,49.999425 100,100 0 0 1 -175.883,55.359656 l 39.28046,-91.962195 z" />
                <path fill={props.backgroundColour} fillOpacity="1" fillRule="evenodd" strokeWidth="0.264583" id="path141-1" transform="rotate(-30)" d="M 135.88434,124.63908 A 100,100 0 0 1 91.701621,220.05367 100,100 0 0 1 -13.39895,223.20422 L 36.602539,136.60254 Z" />
                <path fill={props.highlightColour} fillOpacity="1" fillRule="evenodd" strokeWidth="0.99996" stroke={props.highlightColour} strokeMiterlimit="4" strokeDasharray="none" strokeOpacity="1" id="path9821" d="m 258.72842,152.63949 -8.86421,15.35326 -8.86421,15.35327 -8.86421,-15.35327 -8.86421,-15.35326 17.72842,0 z" transform="matrix(4.3023589,0,0,4.9679381,-936.8685,-715.8196)" clipPath="none" />
                </g>
                <g id="layer2">
                <rect fill={props.backgroundColour} fillOpacity="1" stroke="#00acab" strokeWidth="0" strokeMiterlimit="4" strokeDasharray="none" strokeOpacity="1" id="rect12155" width="108.48437" height="26.665998" x="45.444" y="93.333" />
                <rect fill={props.darkColour} fillOpacity="1" stroke="#00acab" strokeWidth="0" strokeMiterlimit="4" strokeDasharray="none" strokeOpacity="1" id="rect12394" width="80" height="26.666" x="60" y="93.333" />
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
                <defs id="defs2" />
                <g id="layer1" >
                <path fill={props.backgroundColour} fillOpacity="1" fillRule="evenodd" strokeWidth="0.264583" id="path141" transform="rotate(90)" d="m 200,-100.02923 a 100,100 0 0 1 -55.32548,89.495354 100,100 0 0 1 -104.781631,-9.54657" />
                <path fill={props.darkColour} fillOpacity="1" fillRule="evenodd" strokeWidth="0.264583" id="path141-5" transform="rotate(-150)" d="M -37.320435,-24.641611 A 100,100 0 0 1 -86.60154,49.999425 100,100 0 0 1 -175.883,55.359656 l 39.28046,-91.962195 z" />
                <path fill={props.backgroundColour} fillOpacity="1" fillRule="evenodd" strokeWidth="0.264583" id="path141-1" transform="rotate(-30)" d="M 135.88434,124.63908 A 100,100 0 0 1 91.701621,220.05367 100,100 0 0 1 -13.39895,223.20422 L 36.602539,136.60254 Z" />
                <path fill={props.highlightColour} fillOpacity="1" fillRule="evenodd" strokeWidth="0.99996" stroke={props.highlightColour} strokeMiterlimit="4" strokeDasharray="none" strokeOpacity="1" id="path9821" d="m 258.72842,152.63949 -8.86421,15.35326 -8.86421,15.35327 -8.86421,-15.35327 -8.86421,-15.35326 17.72842,0 z" transform="matrix(4.3023589,0,0,4.9679381,-936.8685,-715.8196)" clipPath="none" />
                </g>
                <g id="layer2">
                <rect fill={props.backgroundColour} fillOpacity="1" stroke="#00acab" strokeWidth="0" strokeMiterlimit="4" strokeDasharray="none" strokeOpacity="1" id="rect12155" width="108.48437" height="26.665998" x="45.444" y="93.333" />
                <rect fill={props.darkColour} fillOpacity="1" stroke="#00acab" strokeWidth="0" strokeMiterlimit="4" strokeDasharray="none" strokeOpacity="1" id="rect12394" width="80" height="26.666" x="60" y="93.333" />
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

    return (
        <NavbarContainer backgroundColour={mainDark} extend={extendNavbar}>
            <ButtonLink onClick={()=>{setExtendNavbar((curr)=> !curr)}} ><ButtonImage backgroundColour="#086375" darkColour="#3c1642" highlightColour="#affc41" height="50px" width="50px" padding="0px" extend={extendNavbar} wrapperColour={mainDark}/><ButtonText colour={mainLight} backgroundColour={mainDark} borderColour={mainDark}>Menu</ButtonText></ButtonLink>
            <ColouredLogo backgroundColour="#086375" darkColour="#3c1642" highlightColour="#affc41" height="12vw" width="12vw" padding="1vw" extend={false} wrapperColour="none"/>
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