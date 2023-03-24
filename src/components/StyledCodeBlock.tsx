import styled from "styled-components";
import { ColourScheme } from "../assets/colours"; 

type CodeBlockProps = {codeContent: string; titleText: string;};

const StyledCodeBlock = styled('pre')<CodeBlockProps>`
    background-color: ${ColourScheme.dark2};
    width: 97.5%;
    color: white;
    margin-top: 1em;
    padding: 1em;
    border-radius: 10px;
    font-size: small;
    overflow: scroll;
    @media(max-width:900px){
        width: 100%;
    } 
`

const StyledCodeContent: React.FC<CodeBlockProps> = props => {
    return (
        <div>
        <h3>{props.titleText}</h3>
        <StyledCodeBlock codeContent={props.codeContent} titleText={props.titleText}>{props.codeContent}</StyledCodeBlock>
        </div>
    );
}

export default StyledCodeContent;