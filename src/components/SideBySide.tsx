import styled from "styled-components";

type SideBySideProps = {reverse: boolean;};

const SideBySide = styled('div')<SideBySideProps>`
    display: flex;
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
    flex-wrap: wrap;
    max-width: 1200px;
    justify-content: stretch; 
    margin: auto;
    align-items: stretch;
    @media(max-width:600px){
        justify-content: center;
    } 
`

export default SideBySide;