import MainHeading from "../components/MainHeading";
import StyledBody from "../components/PageBody";
import StyledSection from "../components/Section";
import StyledSectionContainer from "../components/SectionContainer";
import StyledSubHeading from "../components/SubHeading";
import StyledPara from "../components/StyledPara";

export interface CVPageProps {}

const CVPage: React.FC<CVPageProps> = props => {
    return (
        <StyledBody>
            <MainHeading text="Oliver Lavers"></MainHeading>
            <StyledSectionContainer>
                <StyledSection>
                    <StyledSubHeading>Contact</StyledSubHeading>
                    <StyledPara><i className="fa fa-phone"></i> (+61) 0447 768 719</StyledPara>
                    <StyledPara><i className="fa fa-envelope"></i> <u>hauteclere.code@gmail.com</u></StyledPara>
                    <StyledPara><i className="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/hauteclere/">LinkedIn</a></StyledPara>
                    <StyledPara><i className="fa fa-github"></i> <a href="https://github.com/Hauteclere/">GitHub</a></StyledPara>
                </StyledSection>
            </StyledSectionContainer>
        </StyledBody>
    )
}

export default CVPage