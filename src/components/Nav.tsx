import { useState, useEffect,} from "react";
import { Link, useLocation, } from "react-router-dom";
import styled from "styled-components";
import { ColourScheme } from "../assets/colours"; 
import ProjectsPage from "../pages/Projects";

type NavbarProps = {
    extend: boolean;
};

const NavbarContainer = styled("nav")<NavbarProps>`
    width: 100%;
    height:${(props)=>(props.extend? "100vh": "70px")};
    display: flex;
    flex-direction: column;
    background-color: ${ColourScheme.dark3};
    @media(min-width:700px){
        height: 60px;
    }
`
const NavbarLinkContainer = styled.div`
    display: flex;
`

const NavbarLink = styled(Link)`
    font-size: x-large;
    text-decoration: none;
    margin: 10px;
    color: ${ColourScheme.light3};
    &:hover,
    &:active,
    &:focus{
        color: ${ColourScheme.light1};
    }
    @media(max-width: 700px) {
        display: none;
    };
`

const ButtonImage = styled("img")<NavbarProps>`
    width: 50px;
    height: 50px; 
    background-color: ${ColourScheme.dark3};
    transform: rotate(${props => props.extend ? `-90deg` : `0deg`});
`

const ButtonLink = styled("button")<NavbarProps>`
    width: 50px;
    height: 70px;
    background-repeat: no-repeat;
    background-size: 50px 50px;
    border: none;
    font-size: 45px;
    cursor: pointer;
    @media(min-width: 700px) {
        display: none;
    };
    font-size: medium;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    
`
const ButtonText = styled("p")`
    background-color: ${ColourScheme.dark3};
    color: ${ColourScheme.light1};
    width: 50px;
    height: 20px;
`

const ExtendedNavbar = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width:700px){
        display: none;
}
`

const NavbarLinkExtended= styled(Link)`
    font-size: x-large;
    text-decoration: none;
    margin: 10px;
    color: ${ColourScheme.light3};
    &:hover,
    &:active,
    &:focus{
        color: ${ColourScheme.light1};
    }
`

const Navbar: React.FC<NavbarProps> = props => {
    const [extendNavbar, setExtendNavbar] = useState(false)

    const location = useLocation();
    
    useEffect(() => {
        setExtendNavbar(false);
    }, [location]);

    return (
        <NavbarContainer extend={extendNavbar}>
            <NavbarLinkContainer>
                <NavbarLink className="nav-link active" to="/">About Me</NavbarLink>
                <NavbarLink className="nav-link" to="/projects">Projects</NavbarLink>
                <NavbarLink className="nav-link" to="/cv">Curriculum Vitae</NavbarLink>
                <ButtonLink extend={extendNavbar} onClick={()=>{setExtendNavbar((curr)=>!curr)}} ><ButtonImage src="src/assets/logo1/logo1.png" extend={extendNavbar} /><ButtonText>Menu</ButtonText></ButtonLink>
            </NavbarLinkContainer>
            {extendNavbar && (
                <ExtendedNavbar>
                    <NavbarLinkExtended className="nav-link active" to="/">About Me</NavbarLinkExtended>
                    <NavbarLinkExtended className="nav-link" to="/projects">Projects</NavbarLinkExtended>
                    <NavbarLinkExtended className="nav-link" to="/cv">Curriculum Vitae</NavbarLinkExtended>
                </ExtendedNavbar>
            )}
        </NavbarContainer>
    )
}

export default Navbar;