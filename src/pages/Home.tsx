import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPhone, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useRef, useEffect } from 'react'

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
import ImageWrapper from '../components/ImageWrapper';
import ColourPickerContainer from '../components/ColourPickerContainer';
import useColourStore from '../components/ColourScheme';
import ColourSchemeButton from '../components/ColourSchemeButton';
import { ColourScheme } from '../assets/colours';
import ColourButtonContainer from '../components/ColourButtonContainer';

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
import acsLogo from "/third_party_logos/teaching/acs-logo.png"

import meSpeaking from "/images/me_speaking.jpg";
import meProfessional from "/images/me_professional.jpg";
import meHiking from "/images/me_hiking.jpg";
import meHappy from "/images/me_happy.jpg";
import meClimbing from "/images/me_climbing.jpg";
import theMoon from "/images/the_moon.jpg";
import meGormless from "/images/me_gormless.jpg";


export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = props => {

    let subheadingText = useColourStore(state => state.subheadingText)
    let highlightOnLight = useColourStore(state => state.highlightOnLight)

    const changeToDarkRed = useColourStore(state => state.changeToDarkRed)
    const changeToDarkGreen = useColourStore(state => state.changeToDarkGreen)
    const changeToDarkBlue = useColourStore(state => state.changeToDarkBlue)
    const changeToLightRed = useColourStore(state => state.changeToLightRed)
    const changeToLightGreen = useColourStore(state => state.changeToLightGreen)
    const changeToLightBlue = useColourStore(state => state.changeToLightBlue)

    return (
        <StyledBody>
            <MainHeading text="HauteclereCode"></MainHeading>
            <SideBySide reverse={false}>
                <ThreeColumns>
                    <StyledSection>
                        <StyledSubHeading colour={subheadingText}>Hi!</StyledSubHeading>
                        <StyledPara>I'm Oliver.</StyledPara>
                        <StyledPara>I'm a developer, data analyst, mentor, rock climber, and star gazer based in Meanjin. </StyledPara>
                        <StyledPara>This is my portfolio website. Have a read about me, or look at the "Projects" page to see what I've been up to, or just... </StyledPara>
                        <br />
                        <StyledSubHeading colour={subheadingText}>Check out this fun colour scheme picker:</StyledSubHeading>
                        <ColourButtonContainer>
                            <ColourSchemeButton highlight={highlightOnLight===ColourScheme.lightBlue.highlightOnLight} background={ColourScheme.lightBlue.mainLight} foreground={ColourScheme.lightBlue.highlightOnLight} onClick={changeToLightBlue}><FontAwesomeIcon icon={faHeart} /></ColourSchemeButton>
                            <ColourSchemeButton highlight={highlightOnLight===ColourScheme.lightGreen.highlightOnLight} background={ColourScheme.lightGreen.mainLight} foreground={ColourScheme.lightGreen.highlightOnLight} onClick={changeToLightGreen}><FontAwesomeIcon icon={faHeart} /></ColourSchemeButton>
                            <ColourSchemeButton highlight={highlightOnLight===ColourScheme.lightRed.highlightOnLight} background={ColourScheme.lightRed.mainLight} foreground={ColourScheme.lightRed.highlightOnLight} onClick={changeToLightRed}><FontAwesomeIcon icon={faHeart} /></ColourSchemeButton>
                            <ColourSchemeButton highlight={highlightOnLight===ColourScheme.darkRed.highlightOnLight} background={ColourScheme.darkRed.mainLight} foreground={ColourScheme.darkRed.highlightOnLight} onClick={changeToDarkRed}><FontAwesomeIcon icon={faHeart} /></ColourSchemeButton>
                            <ColourSchemeButton highlight={highlightOnLight===ColourScheme.darkGreen.highlightOnLight} background={ColourScheme.darkGreen.mainLight} foreground={ColourScheme.darkGreen.highlightOnLight} onClick={changeToDarkGreen}><FontAwesomeIcon icon={faHeart} /></ColourSchemeButton>
                            <ColourSchemeButton highlight={highlightOnLight===ColourScheme.darkBlue.highlightOnLight} background={ColourScheme.darkBlue.mainLight} foreground={ColourScheme.darkBlue.highlightOnLight} onClick={changeToDarkBlue}><FontAwesomeIcon icon={faHeart} /></ColourSchemeButton>
                        </ColourButtonContainer>
                    </StyledSection>
                </ThreeColumns>
            </ SideBySide>
            <SideBySide reverse={true}>
                <ImageWrapper>
                    <CircleImage alt={"Me looking professional in a suit. I am smiling and holding a glass of water."} vanish={false} src={meProfessional} />
                </ImageWrapper>
                <ThreeColumns>
                    <StyledSection>
                        <StyledSubHeading colour={subheadingText}>Contact Me</StyledSubHeading>
                        <StyledPara><FontAwesomeIcon icon={faPhone} /> (+61) 0447 768 719</StyledPara>
                        <StyledPara><FontAwesomeIcon icon={faEnvelope} /> <u>hauteclere.code@gmail.com</u></StyledPara>
                        <StyledPara><FontAwesomeIcon icon={faLinkedin} /> <a href="https://www.linkedin.com/in/hauteclere/">LinkedIn</a></StyledPara>
                        <StyledPara><FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/Hauteclere/">GitHub</a></StyledPara>
                        <StyledPara><FontAwesomeIcon icon={faCoffee} /> <a href="https://calendly.com/oliver-lavers/30min">Calendly</a></StyledPara>
                    </StyledSection>
                </ThreeColumns>
            </SideBySide>
            <SideBySide reverse={false}>
                <ImageWrapper>
                    <CircleImage alt={"Me looking confident while public speaking. I am smiling and holding a microphone."} vanish={false} src={meSpeaking} />
                </ImageWrapper>
                <ThreeColumns>
                    <StyledSection>
                        <StyledSubHeading colour={subheadingText}>Web Developer</StyledSubHeading>
                        <StyledPara>Front-end, back-end, databases, cloud architecting and even a little bit of dev-ops. I'm a regular da Vinci over here. Just don't ask me to paint your chapel ceiling.</StyledPara>
                        <StyledPara>My first role in tech was as a web developer, and I've never stopped honing my skills. I coded this website in Typescript/React, and I've also written and distributed <a href="https://pypi.org/project/Phractal/">my own original library</a> for generating HTML from typed components in Python.</StyledPara>
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
                <ImageWrapper>
                    <CircleImage alt={"Me looking relaxed while bushwalking. I am standing in front of a waterfall."} vanish={false} src={meHiking} />
                </ImageWrapper>
                <ThreeColumns>
                    <StyledSection>
                        <StyledSubHeading colour={subheadingText}>Data Analyst</StyledSubHeading>
                        <StyledPara>Analysis, schema design, pipelining, visualisation and custom tooling. Your data won't know what hit it.</StyledPara>
                        <StyledPara>I currently work full-time as a Data Analyst for <a href="http://emudata.com.au/">Emu Data</a>. We are a small data consulting firm with big plans, based out of Meanjin!</StyledPara>
                        <StyledPara>I specialise in Trust and Quality analysis. Dirty data is interesting data.</StyledPara>
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
                <ImageWrapper>
                    <CircleImage alt={"Me looking elated in front of some greenery. I am looking up and to the left at something we cannot see."} vanish={false} src={meHappy} />
                </ImageWrapper>
                <ThreeColumns>
                <StyledSection>
                    <StyledSubHeading colour={subheadingText}>Educator</StyledSubHeading>
                    <StyledPara>Teaching turns out to be one of the things that gives me the most joy in my work.</StyledPara> 
                    <StyledPara>In addition to my data analysis work, I am currently the Lead Educator at <a href="https://shecodes.com.au/about/">She Codes Australia</a>, an NFP aimed at improving gender diversity in IT. In the past I have taught and written both certified diploma and bootcamp-style courses, and I am also available for masterclasses and other speaking engagements.</StyledPara>
                    <LogoJumble>
                        <ThirdPartyLogo src={coderLogo} />
                        <ThirdPartyLogo src={shecodesLogo} />
                        <ThirdPartyLogo src={acsLogo} />
                    </LogoJumble>
                </StyledSection>
                </ThreeColumns>
            </SideBySide>
            <SideBySide reverse={true}>
                <ImageWrapper>
                    <CircleImage alt={"Me looking determined while rock climbing. I am very high up and wearing a brightly coloured helmet."} vanish={false} src={meClimbing} />
                </ImageWrapper>
                <ThreeColumns>
                <StyledSection>
                    <StyledSubHeading colour={subheadingText}>Rock Climber</StyledSubHeading>
                    <StyledPara>Confession: the bits of rock climbing that I like are the bits that rock climbing snobs think are passé. </StyledPara>
                    <StyledPara>I'm good at dynamic jumps, big throws, and indoor bouldering. I don't care though, because rock climbing gives me a lot of joy, and I've decided there's no rule that says you need to be good at your hobbies. I'm getting better at crack climbing, and despite my shortcomings I still go outdoor lead climbing as often as I can, because it's nice to be terrified every once in a while.</StyledPara>
                </StyledSection>
                </ThreeColumns>
            </SideBySide>
            <SideBySide reverse={false}>
                <ImageWrapper>
                    <CircleImage alt={"A magnified photograph of the moon. It is yellow-white, and you can make out small craters on its surface."} vanish={false} src={theMoon} />
                </ImageWrapper>
                <ThreeColumns>
                <StyledSection>
                    <StyledSubHeading colour={subheadingText}>Star Gazer</StyledSubHeading>
                    <StyledPara>I took this photo of the moon!</StyledPara>
                    <StyledPara>Back when we were all locked down, <a href="https://en.wikipedia.org/wiki/Starlink">Starlink</a> satellites were beginning to be launched, and there was a small community of astronomers who were concerned that these new satellites might become the brightest objects in the sky, drowning out the stars. Boy does Elon Musk suck. The thought of not seeing the Milky Way again alarmed me, and I made a resolution to get outside of light pollution and see the night sky as often as I could. I've followed through, and regularly go camping/comet-hunting with my friends. </ StyledPara>
                </StyledSection>
                </ThreeColumns>
            </SideBySide>
            <SideBySide reverse={true}>
                <ImageWrapper>
                    <CircleImage alt={"Me looking goofy on top of a mountain. I am drinking out of the wrong side of a canned drink, and have a silly expression on my face."} vanish={false} src={meGormless} />
                </ImageWrapper>
                <ThreeColumns>
                <StyledSection>
                    <StyledSubHeading colour={subheadingText}>Occasionally Tragic</StyledSubHeading>
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