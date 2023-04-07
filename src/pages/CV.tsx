import MainHeading from "../components/MainHeading";
import StyledBody from "../components/PageBody";
import StyledSection from "../components/Section";


export interface CVPageProps {}




const CVPage: React.FC<CVPageProps> = props => {
    
    return (
        <StyledBody>
            <MainHeading text="Curriculum Vitae"></MainHeading>
            
        </StyledBody>
    )
}

export default CVPage