import MainHeading from "../components/MainHeading";
import StyledBody from "../components/PageBody";
import StyledSection from "../components/Section";
import StyledSubHeading from "../components/SubHeading";
import StyledPara from "../components/StyledPara";
import SideBySide from "../components/SideBySide";
import CircleImage from "../components/CircleImage";
import ThreeColumns from "../components/ThreeColumns";
import LogoJumble from "../components/LogoJumble";
import ThirdPartyLogo from "../components/ThirdPartyLogo";


export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = props => {
    return (
        <StyledBody>
            <MainHeading text="Oliver Lavers"></MainHeading>
            <SideBySide reverse={false}>
                <ThreeColumns>
                    <StyledSection>
                        <StyledSubHeading>Hi!</StyledSubHeading>
                        <br />
                        <p>I'm Oliver.</p>
                        <br />
                        <p>I'm a developer, data analyst, mentor, rock-climber, and star-gazer based in Meanjin.</p>
                        <br />
                    </StyledSection>
                </ThreeColumns>
                <CircleImage vanish={false} src="./static/images/me_professional.jpg" />
                <ThreeColumns>
                    <StyledSection>
                        <StyledSubHeading>Contact Me</StyledSubHeading>
                        <StyledPara><i className="fa fa-phone"></i> (+61) 0447 768 719</StyledPara>
                        <StyledPara><i className="fa fa-envelope"></i> <u>hauteclere.code@gmail.com</u></StyledPara>
                        <StyledPara><i className="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/hauteclere/">LinkedIn</a></StyledPara>
                        <StyledPara><i className="fa fa-github"></i> <a href="https://github.com/Hauteclere/">GitHub</a></StyledPara>
                    </StyledSection>
                </ThreeColumns>
            </SideBySide>
            <SideBySide reverse={false}>
                <CircleImage vanish={false} src="./static/images/me_speaking.jpg" />
                <ThreeColumns>
                    <StyledSection>
                        <StyledSubHeading>Web Developmer</StyledSubHeading>
                        <StyledPara>Front-end, back-end, databases, cloud architecting and even a little bit of dev-ops. I'm like if da Vinci was bad at painting.</StyledPara>
                        <LogoJumble>
                            <ThirdPartyLogo src="./static/third_party_logos/webdev/python-logo-only.svg" />
                            <ThirdPartyLogo src="./static/third_party_logos/webdev/django-logo-negative.png" />
                            <ThirdPartyLogo src="./static/third_party_logos/webdev/drf_logo.png" />
                            <ThirdPartyLogo src="./static/third_party_logos/webdev/460px-Flask_logo.svg.png" />
                            <ThirdPartyLogo src="./static/third_party_logos/webdev/Jinja_software_logo.svg" />
                            <ThirdPartyLogo src="./static/third_party_logos/webdev/JavaScript-logo.png" />
                            <ThirdPartyLogo src="./static/third_party_logos/webdev/Typescript_logo_2020.svg.png" />
                            <ThirdPartyLogo src="./static/third_party_logos/webdev/React-icon.svg.png" />
                            <ThirdPartyLogo src="./static/third_party_logos/webdev/Git-Icon-1788C.svg" />
                            <ThirdPartyLogo src="./static/third_party_logos/webdev/github-mark.png" />
                            <ThirdPartyLogo src="./static/third_party_logos/webdev/PostgreSQL_logo.3colors.120x120.png" />
                            <ThirdPartyLogo src="./static/third_party_logos/webdev/MongoDB_Logo.svg" />
                            <ThirdPartyLogo src="./static/third_party_logos/webdev/linux_tux.svg" />
                            <ThirdPartyLogo src="./static/third_party_logos/webdev/Ubuntu_and_Ubuntu_Server_Icon.png" />
                            <ThirdPartyLogo src="./static/third_party_logos/webdev/Amazon_Web_Services_Logo.svg" />
                        </LogoJumble>
                    </StyledSection>
                </ThreeColumns>
            </SideBySide>
            <SideBySide reverse={true}>
                <CircleImage vanish={false} src="./static/images/me_hiking.jpg" />
                <ThreeColumns>
                    <StyledSection>
                        <StyledSubHeading>Data Analyst</StyledSubHeading>
                        <p>Analysis, schema design, pipelining, visualisation and custom tooling. Your data won't know what hit it.</p>
                        <LogoJumble>
                            <ThirdPartyLogo src="./static/third_party_logos/analysis/Jupyter_logo.svg" />
                            <ThirdPartyLogo src="./static/third_party_logos/analysis/pandas.svg" />
                            <ThirdPartyLogo src="./static/third_party_logos/analysis/260px-Scikit_learn_logo_small.svg.png" />
                            <ThirdPartyLogo src="./static/third_party_logos/analysis/ydata-logo.png" />
                            <ThirdPartyLogo src="./static/third_party_logos/analysis/networkx_logo.svg" />
                            <ThirdPartyLogo src="./static/third_party_logos/analysis/600px-New_Power_BI_Logo.svg.png" />
                            <ThirdPartyLogo src="./static/third_party_logos/analysis/4impact-orbit-logo-rgb-500px-225w.png" />
                            <ThirdPartyLogo src="./static/third_party_logos/analysis/LOGO-EMUDATA-170x165.png" />
                        </LogoJumble>
                    </StyledSection>
                </ThreeColumns>
            </SideBySide>
            <SideBySide reverse={false}>
                <CircleImage vanish={false} src="./static/images/me_happy.jpg" />
                <ThreeColumns>
                <StyledSection>
                    <StyledSubHeading>Educator</StyledSubHeading>
                    <p>I've taught and written full-stack web development and computer science courses for adults, both at the tertiary level and in bootcamps.</p>
                    <LogoJumble>
                        <ThirdPartyLogo src="./static/third_party_logos/teaching/Coder_Academy_iteration_23-12.png" />
                        <ThirdPartyLogo src="./static/third_party_logos/teaching/She{Codes}_2.png" />
                    </LogoJumble>
                </StyledSection>
                </ThreeColumns>
            </SideBySide>
            <SideBySide reverse={true}>
                <CircleImage vanish={false} src="./static/images/me_climbing.jpg" />
                <ThreeColumns>
                <StyledSection>
                    <StyledSubHeading>Rock Climber</StyledSubHeading>
                    <p>I am good at all the least credible bits of rock climbing: dynamic movement, throws, indoor bouldering... My slab technique is lousy, I have no endurance, and I can't toe-hook to save my life. At least I'm getting better at crack climbing. I still climb lead as often as I can, though, because it's nice to be terrified every once in a while.</p>
                </StyledSection>
                </ThreeColumns>
            </SideBySide>
            <SideBySide reverse={false}>
                <CircleImage vanish={false} src="./static/images/the_moon.jpg" />
                <ThreeColumns>
                <StyledSection>
                    <StyledSubHeading>Stargazer</StyledSubHeading>
                    <p>Back when we were all locked down, <a href="https://en.wikipedia.org/wiki/Starlink">Starlink</a> satellites were beginning to be launched, and there was a small community of astronomers who were concerned that these new satellites might become the brightest objects in the sky, drowning out the stars. The thought of not seeing the Milky way again was horrifying to me, and I made a resolution to get outside of light pollution and see the night sky as often as I could. I've followed through, and regularly go camping/comet hunting with my friends. We took this photo of the moon! Elon Musk sucks.</p>
                </StyledSection>
                </ThreeColumns>
            </SideBySide>
            <SideBySide reverse={true}>
                <CircleImage vanish={false} src="./static/images/me_gormless.jpg" />
                <ThreeColumns>
                <StyledSection>
                    <StyledSubHeading>Tragically Born Without Gorm</StyledSubHeading>
                    <br />
                    <p>But I stay chipper and I make an effort.</p>
                    <br />
                </StyledSection>
                </ThreeColumns>
            </SideBySide>
        </StyledBody>
    )
}

export default HomePage