import styled from "styled-components";

type SideBySideProps = {reverse: boolean;};

const SideBySide = styled('div')<SideBySideProps>`
    display: flex;
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
    flex-wrap: wrap;
    max-width: 1200px;
    justify-content: stretch; 
    margin: auto;
    margin-bottom: 0.5em;
    margin-top: 0.7em;
    align-items: stretch;
    @media(max-width:1240px){
        margin-left: 20px;
        margin-right: 20px;
    } 
    @media(max-width:900px){
        margin-left: 10px;
        margin-right: 10px;
    } 
    @media(max-width:600px){
        justify-content: center;
    } 
`

export default SideBySide;