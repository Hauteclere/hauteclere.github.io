import styled from "styled-components";

const SideBySide = styled('div')`
    display: flex;
    flex-direction: row;
    @media(max-width:900px){
        flex-direction: column;
    }
    justify-content: space-around;
`

export default SideBySide;