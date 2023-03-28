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

import pythonLogo from "/third_party_logos/webdev/python-logo-only.svg";
import djangoLogo from "/third_party_logos/webdev/django-logo-negative.png";
import drfLogo from "/third_party_logos/webdev/drf_logo.png";
import flaskLogo from "/third_party_logos/webdev/460px-Flask_logo.svg.png";
import jinjaLogo from "/third_party_logos/webdev/Jinja_software_logo.svg";
import jsLogo from "/third_party_logos/webdev/JavaScript-logo.png";
import typescriptLogo from "/third_party_logos/webdev/Typescript_logo_2020.svg.png";
import reactLogo from "/third_party_logos/webdev/React-icon.svg.png";
import gitLogo from "/third_party_logos/webdev/Git-Icon-1788C.svg";
import githubLogo from "/third_party_logos/webdev/github-mark.png";
import postgresLogo from "/third_party_logos/webdev/PostgreSQL_logo.3colors.120x120.png";
import mongodbLogo from "/third_party_logos/webdev/MongoDB_Logo.svg";
import linuxLogo from "/third_party_logos/webdev/linux_tux.svg";
import ubuntuLogo from "/third_party_logos/webdev/Ubuntu_and_Ubuntu_Server_Icon.png";
import awsLogo from "/third_party_logos/webdev/Amazon_Web_Services_Logo.svg";
import jupyterLogo from "/third_party_logos/analysis/Jupyter_logo.svg";
import pandasLogo from "/third_party_logos/analysis/pandas.svg";
import scikitLogo from "/third_party_logos/analysis/260px-Scikit_learn_logo_small.svg.png";
import ydataLogo from "/third_party_logos/analysis/ydata-logo.png";
import networkxLogo from "/third_party_logos/analysis/networkx_logo.svg";
import powerbiLogo from "/third_party_logos/analysis/600px-New_Power_BI_Logo.svg.png";
import impactLogo from "/third_party_logos/analysis/4impact-orbit-logo-rgb-500px-225w.png";
import emuLogo from "/third_party_logos/analysis/LOGO-EMUDATA-170x165.png";
import coderLogo from "/third_party_logos/teaching/Coder_Academy_iteration_23-12.png";
import shecodesLogo from "/third_party_logos/teaching/She{Codes}_2.png";

import meSpeaking from "/images/me_speaking.jpg";
import meProfessional from "/images/me_professional.jpg";
import meHiking from "/images/me_hiking.jpg";
import meHappy from "/images/me_happy.jpg";
import meClimbing from "/images/me_climbing.jpg";
import theMoon from "/images/the_moon.jpg";
import meGormless from "/images/me_gormless.jpg";

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
                <CircleImage vanish={false} src={meProfessional} />
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
                <CircleImage vanish={false} src={meSpeaking} />
                <ThreeColumns>
                    <StyledSection>
                        <StyledSubHeading>Web Developmer</StyledSubHeading>
                        <StyledPara>Front-end, back-end, databases, cloud architecting and even a little bit of dev-ops. I'm like if da Vinci was bad at painting.</StyledPara>
                        <LogoJumble>
                            <ThirdPartyLogo src={pythonLogo} />
                            <ThirdPartyLogo src={djangoLogo} />
                            <ThirdPartyLogo src={drfLogo} />
                            <ThirdPartyLogo src={flaskLogo} />
                            <ThirdPartyLogo src={jinjaLogo} />
                            <ThirdPartyLogo src={jsLogo} />
                            <ThirdPartyLogo src={typescriptLogo} />
                            <ThirdPartyLogo src={reactLogo} />
                            <ThirdPartyLogo src={gitLogo} />
                            <ThirdPartyLogo src={githubLogo} />
                            <ThirdPartyLogo src={postgresLogo} />
                            <ThirdPartyLogo src={mongodbLogo} />
                            <ThirdPartyLogo src={linuxLogo} />
                            <ThirdPartyLogo src={ubuntuLogo} />
                            <ThirdPartyLogo src={awsLogo} />
                        </LogoJumble>
                    </StyledSection>
                </ThreeColumns>
            </SideBySide>
            <SideBySide reverse={true}>
                <CircleImage vanish={false} src={meHiking} />
                <ThreeColumns>
                    <StyledSection>
                        <StyledSubHeading>Data Analyst</StyledSubHeading>
                        <p>Analysis, schema design, pipelining, visualisation and custom tooling. Your data won't know what hit it.</p>
                        <LogoJumble>
                            <ThirdPartyLogo src={jupyterLogo} />
                            <ThirdPartyLogo src={pandasLogo} />
                            <ThirdPartyLogo src={scikitLogo} />
                            <ThirdPartyLogo src={ydataLogo} />
                            <ThirdPartyLogo src={networkxLogo} />
                            <ThirdPartyLogo src={powerbiLogo} />
                            <ThirdPartyLogo src={impactLogo} />
                            <ThirdPartyLogo src={emuLogo} />
                        </LogoJumble>
                    </StyledSection>
                </ThreeColumns>
            </SideBySide>
            <SideBySide reverse={false}>
                <CircleImage vanish={false} src={meHappy} />
                <ThreeColumns>
                <StyledSection>
                    <StyledSubHeading>Educator</StyledSubHeading>
                    <p>I've taught and written full-stack web development and computer science courses for adults, both at the tertiary level and in bootcamps.</p>
                    <LogoJumble>
                        <ThirdPartyLogo src={coderLogo} />
                        <ThirdPartyLogo src={shecodesLogo} />
                    </LogoJumble>
                </StyledSection>
                </ThreeColumns>
            </SideBySide>
            <SideBySide reverse={true}>
                <CircleImage vanish={false} src={meClimbing} />
                <ThreeColumns>
                <StyledSection>
                    <StyledSubHeading>Rock Climber</StyledSubHeading>
                    <p>I am good at all the least credible bits of rock climbing: dynamic movement, throws, indoor bouldering... My slab technique is lousy, I have no endurance, and I can't toe-hook to save my life. At least I'm getting better at crack climbing. I still climb lead as often as I can, though, because it's nice to be terrified every once in a while.</p>
                </StyledSection>
                </ThreeColumns>
            </SideBySide>
            <SideBySide reverse={false}>
                <CircleImage vanish={false} src={theMoon} />
                <ThreeColumns>
                <StyledSection>
                    <StyledSubHeading>Stargazer</StyledSubHeading>
                    <p>Back when we were all locked down, <a href="https://en.wikipedia.org/wiki/Starlink">Starlink</a> satellites were beginning to be launched, and there was a small community of astronomers who were concerned that these new satellites might become the brightest objects in the sky, drowning out the stars. The thought of not seeing the Milky way again was horrifying to me, and I made a resolution to get outside of light pollution and see the night sky as often as I could. I've followed through, and regularly go camping/comet hunting with my friends. We took this photo of the moon! Elon Musk sucks.</p>
                </StyledSection>
                </ThreeColumns>
            </SideBySide>
            <SideBySide reverse={true}>
                <CircleImage vanish={false} src={meGormless} />
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