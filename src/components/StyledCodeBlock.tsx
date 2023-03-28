import styled from "styled-components";
import { ColourScheme } from "../assets/colours"; 
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import StyledWrapper from "./SideBySideWrapper";

type CodeContentProps = {codecontent: string; titletext: string; language: string;};
type CodeBlockProps = { language: string; }

const StyledCodeBlock = styled(SyntaxHighlighter)<CodeBlockProps>`
    background-color: ${ColourScheme.codeBackground};
    color: white;
    margin: 1em;
    padding: 1em;
    border-radius: 10px;
    font-size: small;
    overflow: scroll;
    @media(max-width:900px){
        width: 100%;
        margin: 0em;
    } 
`
const StyledCodeContent: React.FC<CodeContentProps> = props => {
    return (
        <StyledWrapper>
        <h3>{props.titletext}</h3>
        <StyledCodeBlock language={props.language} style={a11yDark} customStyle={{
            borderRadius: "5px", 
            backgroundColor: ColourScheme.codeBackground,
            color: "white",
            marginTop: "1em",
            padding: "1em",
            fontSize: "small",
            overflow: "scroll",
        }}>{props.codecontent}</StyledCodeBlock>
        </StyledWrapper>
    );
}

export default StyledCodeContent;