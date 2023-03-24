import MainHeading from "../components/MainHeading";
import StyledBody from "../components/PageBody";
import StyledSection from "../components/Section";
import StyledSectionContainer from "../components/SectionContainer";
import StyledSubHeading from "../components/SubHeading";

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = props => {
    return (
        <StyledBody>
            <MainHeading text="About Me"></MainHeading>
            <StyledSectionContainer>
                <StyledSection>
                    <StyledSubHeading>Hi!</StyledSubHeading>
                    <br />
                    <p>I'm Oliver.</p>
                    <br />
                    <p>I'm a developer, data analyst, mentor, rock-climber, and star-gazer based in Meanjin.</p>
                    <br />
                </StyledSection>
            </StyledSectionContainer>
            <StyledSectionContainer>
                <StyledSection>
                    <StyledSubHeading>Look At Me Go</StyledSubHeading>
                    <br />
                    <p>Here I am doing stuff.</p>
                    <br />
                </StyledSection>
            </StyledSectionContainer> 
            <StyledSectionContainer>
                <StyledSection>
                    <StyledSubHeading>Tragically Born Without Gorm</StyledSubHeading>
                    <br />
                    <p>But I'm friendly and I make an effort.</p>
                    <br />
                </StyledSection>
            </StyledSectionContainer> 
        </StyledBody>
    )
}

export default HomePage