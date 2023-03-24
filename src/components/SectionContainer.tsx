import styled from "styled-components";


const StyledSectionContainer = styled('div')`
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-top: 20px;
    max-width: 1200px;
    @media(max-width:1240px){
        margin-left: 20px;
        margin-right: 20px;
    } 
`
export default StyledSectionContainer;