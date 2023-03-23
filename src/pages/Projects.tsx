import MainHeading from "../components/MainHeading";
import StyledBody from "../components/PageBody";
import StyledSection from "../components/Section";
import StyledSectionContainer from "../components/SectionContainer";
import StytledUL from "../components/StyledUL";

export interface ProjectsPageProps {}

const ProjectsPage: React.FC<ProjectsPageProps> = props => {
    return (
        <StyledBody>
            <MainHeading text="My Work"></MainHeading>
            <StyledSectionContainer>
                <StyledSection>
                    <h2>Phractal</h2>
                    <StytledUL>
                        <li><a href="https://pypi.org/project/Phractal/">Pypi</a></li>
                        <li><a href="https://github.com/Hauteclere/phractal/">GitHub</a></li>
                    </StytledUL>
                    <br/>
                    <p> 
                        Phractal is a tool for creating documents programmatically with Python, powered by <a href="https://docs.pydantic.dev/">Pydantic</a> and <a href="https://jinja.palletsprojects.com/en/3.1.x/">Jinja2</a>. 
                    </p>
                    <br/>
                    <p>
                        Phractal solves the complexity that can arise when templating complex documents in Python by using <i>nesting</i>. Hence the name; a Phractal document is a fractal arrangement of simple components nested inside one another. 
                    </p>
                    <br/>
                    <p>    
                        Phractal is inspired by React.js's component-driven development style, with the additional utility of Typescript-like, Pydantic-enforced type-checking before the page is rendered, making debugging a breeze!
                    </p>
                    <br/>
                    <p>
                        In addition to building your own pages from the ground up, any package that produces HTML output can be integrated into your Phractal documents. For example, Plotly graphs can be inserted into your components with just a few lines of code.
                    </p>
                    <br/>
                    <p>
                        Phractal was originally designed to automatically generate bespoke templated statistical reports in the style of <a href="https://pypi.org/project/pandas-profiling/">pandas-profiling</a>. This is just the tip of the iceberg, though: anywhere you need to generate a document programmatically, Phractal is useful. Try creating invoices with it!
                    </p>
                    <br/>
                </StyledSection>
            </StyledSectionContainer>
            <StyledSectionContainer>
                <StyledSection>
                    <h2>Data Analysis</h2>
                    I work full-time as a data analyst.
                </StyledSection>
            </StyledSectionContainer>
            <StyledSectionContainer>
                <StyledSection>
                    <h2>Web Development</h2>
                    I'm a full-stack dev with five years experience.
                </StyledSection>
            </StyledSectionContainer>
            <StyledSectionContainer>
                <StyledSection>
                    <h2>She Codes</h2>
                    I am a mentor.
                </StyledSection>
            </StyledSectionContainer>
        </StyledBody>
    )
}

export default ProjectsPage



