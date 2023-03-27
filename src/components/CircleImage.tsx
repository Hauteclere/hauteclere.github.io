import styled from "styled-components";

const CircleImage = styled('img')`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 20px;

    @media(max-width: 600px) {
        display: none;
    }
`

export default CircleImage