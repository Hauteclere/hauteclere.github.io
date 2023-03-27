import MainHeading from "../components/MainHeading";
import StyledBody from "../components/PageBody";
import StyledSection from "../components/Section";
import NarrowStyledSectionContainer from "../components/SectionContainerNarrow";
import StyledSubHeading from "../components/SubHeading";
import StyledPara from "../components/StyledPara";
import SideBySide from "../components/SideBySide";
import CircleImage from "../components/CircleImage";


export interface CVPageProps {}

const CVPage: React.FC<CVPageProps> = props => {
    return (
        <StyledBody>
            <MainHeading text="Curriculum Vitae"></MainHeading>
            
        </StyledBody>
    )
}

export default CVPage