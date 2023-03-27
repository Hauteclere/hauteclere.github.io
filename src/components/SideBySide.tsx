import styled from "styled-components";

const SideBySide = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1200px;
    justify-content: stretch; 
    margin: auto;
    margin-bottom: 0.5em;
    margin-top: 0.7em;
    @media(max-width:1240px){
        margin-left: 20px;
        margin-right: 20px;
    } 
    @media(max-width:900px){
        margin-left: 10px;
        margin-right: 10px;
    } 
`

export default SideBySide;