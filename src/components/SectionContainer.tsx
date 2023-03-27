import styled from "styled-components";


const StyledSectionContainer = styled('div')`
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-top: 20px;
    max-width: 1200px;
    flex-grow: 1;
    @media(max-width:1240px){
        margin-left: 20px;
        margin-right: 20px;
    } 
    @media(max-width:900px){
        margin-left: 10px;
        margin-right: 10px;
    } 
`
export default StyledSectionContainer;