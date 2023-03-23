import MainHeading from "../components/MainHeading";
import StyledBody from "../components/PageBody";
import StyledSection from "../components/Section";
import StyledSectionContainer from "../components/SectionContainer";

export interface CVPageProps {}

const CVPage: React.FC<CVPageProps> = props => {
    return (
        <StyledBody>
            <MainHeading text="Oliver Lavers"></MainHeading>
            <StyledSectionContainer>
                <StyledSection>
                    <p>CV Page goes here</p>
                </StyledSection>
            </StyledSectionContainer>
        </StyledBody>
    )
}

export default CVPage