import MainHeading from "../components/MainHeading";
import StyledBody from "../components/PageBody";
import StyledSection from "../components/Section";
import StyledSectionContainer from "../components/SectionContainer";
import StyledSubHeading from "../components/SubHeading";
import NarrowStyledSectionContainer from "../components/SectionContainerNarrow";
import StyledPara from "../components/StyledPara";
import SideBySide from "../components/SideBySide";
import CircleImage from "../components/CircleImage";


export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = props => {
    return (
        <StyledBody>
            <MainHeading text="Oliver Lavers"></MainHeading>
            <SideBySide>
                <NarrowStyledSectionContainer>
                    <StyledSection>
                        <StyledSubHeading>Hi!</StyledSubHeading>
                        <br />
                        <p>I'm Oliver.</p>
                        <br />
                        <p>I'm a developer, data analyst, mentor, rock-climber, and star-gazer based in Meanjin.</p>
                        <br />
                    </StyledSection>
                </NarrowStyledSectionContainer>
                <CircleImage src="./src/assets/me_happy.jpg" />
            </SideBySide>
            <SideBySide>
                <CircleImage src="./src/assets/me_professional.jpg" />
                <NarrowStyledSectionContainer>
                    <StyledSection>
                        <StyledSubHeading>Contact Me</StyledSubHeading>
                        <StyledPara><i className="fa fa-phone"></i> (+61) 0447 768 719</StyledPara>
                        <StyledPara><i className="fa fa-envelope"></i> <u>hauteclere.code@gmail.com</u></StyledPara>
                        <StyledPara><i className="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/hauteclere/">LinkedIn</a></StyledPara>
                        <StyledPara><i className="fa fa-github"></i> <a href="https://github.com/Hauteclere/">GitHub</a></StyledPara>
                    </StyledSection>
                </NarrowStyledSectionContainer>
            </SideBySide>
            <SideBySide>
                <NarrowStyledSectionContainer>
                    <StyledSection>
                        <StyledSubHeading>Web Developer</StyledSubHeading>
                        <StyledPara>Lorem ipsum dolor sit amet, euismod voluptua ea vis, et his aeque affert. Eos debet tantas at, nec modus dicant te, sed et reque atomorum. Quidam deserunt an pri, his modus graecis an. Sit agam vide possim ei. Vim ad consul diceret, eum ea quot tibique accusam, sed vide minimum singulis ne. Eu meis putant has, an vitae laboramus ius, cu velit ludus persius vix.</StyledPara>
                    </StyledSection>
                </NarrowStyledSectionContainer>
                <CircleImage src="./src/assets/me_speaking.jpg" />
            </SideBySide>
            <SideBySide>
                <CircleImage src="./src/assets/me_hiking.jpg" />
                <NarrowStyledSectionContainer>
                    <StyledSection>
                        <StyledSubHeading>Look At Me Go</StyledSubHeading>
                        <br />
                        <p>Here I am doing stuff.</p>
                        <br />
                    </StyledSection>
                </NarrowStyledSectionContainer>
                
            </SideBySide>
            <SideBySide>
                <NarrowStyledSectionContainer>
                <StyledSection>
                    <StyledSubHeading>Tragically Born Without Gorm</StyledSubHeading>
                    <br />
                    <p>But I stay chipper and I make an effort.</p>
                    <br />
                </StyledSection>
                </NarrowStyledSectionContainer>
                <CircleImage src="./src/assets/me_gormless.jpg" />
            </SideBySide>
        </StyledBody>
    )
}

export default HomePage