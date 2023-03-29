import { useState, useEffect,} from "react";
import { Link, useLocation, } from "react-router-dom";
import styled from "styled-components";
import { ColourScheme } from "../assets/colours"; 
import useColourStore from "./ColourScheme";
import logoUrl from "/logo1/logo1.png"

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

const NavbarImg = styled("img")`
    padding: 1vw;
    width: 12vw;
    height: 12vw;
    @media(max-width: 700px) {
        display: none;
        width: 0vw;
        height: 0vw;
    };
`

const ButtonImage = styled("img")<NavbarProps>`
    width: 50px;
    height: 50px; 
    background-color: ${(props) => (props.backgroundColour)};
    transform: rotate(${props => props.extend ? `-90deg` : `0deg`});
`

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
            <ButtonLink onClick={()=>{setExtendNavbar((curr)=> !curr)}} ><ButtonImage backgroundColour={mainDark} src={logoUrl} extend={extendNavbar} /><ButtonText colour={mainLight} backgroundColour={mainDark} borderColour={mainDark}>Menu</ButtonText></ButtonLink>
            <NavbarImg src={logoUrl}/>
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