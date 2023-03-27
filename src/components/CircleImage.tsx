import styled from "styled-components";

type CircleImageProps = {vanish: boolean;};

const CircleImage = styled('img')<CircleImageProps>`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 20px;

    @media(max-width: 600px) {
        margin: 20px calc(50vw - 100px);
        margin-bottom: 0px;
        margin-top: 10px;
    }

    @media(max-width: 799px) and (min-width: 600px) {
        display: ${(props) => (props.vanish ? "none" : "block")};
    }
`

export default CircleImage