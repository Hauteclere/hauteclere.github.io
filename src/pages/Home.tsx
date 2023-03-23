import MainHeading from "../components/MainHeading";
import StyledBody from "../components/PageBody";
import StyledSection from "../components/Section";
import StyledSectionContainer from "../components/SectionContainer";

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = props => {
    return (
        <StyledBody>
            <MainHeading text="About Me"></MainHeading>
            <StyledSectionContainer>
                <StyledSection>
                    <h2>Hi!</h2>
                    <br />
                    <p>I'm Oliver.</p>
                    <br />
                    <p>I'm a developer, data analyst, mentor, rock-climber, and star-gazer based in Meanjin.</p>
                    <br />
                </StyledSection>
            </StyledSectionContainer>
            <StyledSectionContainer>
                <StyledSection>
                    <h2>Look At Me Go</h2>
                    <br />
                    <p>Here I am doing stuff.</p>
                    <br />
                </StyledSection>
            </StyledSectionContainer> 
            <StyledSectionContainer>
                <StyledSection>
                    <h2>Tragically Born Without Gorm</h2>
                    <br />
                    <p>Just because I'm good at a lot of things doesn't mean I'm photogenic.</p>
                    <br />
                </StyledSection>
            </StyledSectionContainer> 
        </StyledBody>
    )
}

export default HomePage