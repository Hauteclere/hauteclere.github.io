import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";


import MainHeading from "../components/MainHeading";
import StyledBody from "../components/PageBody";
import StyledSection from "../components/Section";
import StyledSectionContainer from "../components/SectionContainer";
import StytledUL from "../components/StyledUL";
import StyledSubHeading from "../components/SubHeading";
import StyledPara from "../components/StyledPara";
import StyledCodeContent from "../components/StyledCodeBlock";
import SideBySide from "../components/SideBySide";
import StyledOutputBlock from "../components/StyledOutputBlock";
import useColourStore from "../components/ColourScheme";

export interface ProjectsPageProps {}

const reactCode = `
/* ---------------------------------------------
ShoppingList.tsx 
--------------------------------------------- */

type ShoppingItemProps = { itemName: string; };

const ShoppingItem: React.FC<ShoppingItemProps> = props => {
    return (
        <li>{props.itemName}</li>
    )
}

type ShoppingListProps = { listItems: string[]; listName: string; };

const ShoppingList: React.FC<ShoppingListProps> = props => {
    return (
        <div>
            <h1>{props.listName}</h1>
            <ul>
                {props.listItems.map((item: string)=> (<ShoppingItem itemName={item}/>))}
            </ul>
        </div>
    )
}

export default ShoppingList;



/* ---------------------------------------------
App.tsx 
--------------------------------------------- */

import ShoppingList from "../components/ShoppingList";

/* ... */

<ShoppingList listName="My List" listItems={["beans", "rice", "hotsauce"]}/>

/* ... */
`

const pythonCode = `
# ----------------------------------------------
# main.py
# ----------------------------------------------

from Phractal import Phraction, ValidatedCachedProperty

class ListItem(Phraction):
    template = "<li>{{ item }}</li>"
    item: str

class ShoppingList(Phraction):
    template = '''
        <div>
            <h1>{{ list_name }}</h1>
            <ul>
                {% for item in list_items %}
                    {{ item }}
                {% endfor %}
            </ul>
        </div>
    '''

    list_name: str
    items: list[str]    

    @ValidatedCachedProperty
    def list_items(self) -> list[ListItem]:
        return [
            ListItem(
                item=item_name
            ) for item_name in self.items
        ]

print(ShoppingList(list_name="My List", items=["beans", "rice", "hotsauce"]))






`

const htmlCode = `
<div>
    <h1>My List</h1>
    <ul>
        <li>beans</li>
        <li>rice</li>
        <li>hotsauce</li>
    </ul>
</div>
`

const ProjectsPage: React.FC<ProjectsPageProps> = props => {

    let highlightOnLight = useColourStore(state => (state.highlightOnLight))

    return (
        <StyledBody>
            <MainHeading text="My Work"></MainHeading>
            <StyledSectionContainer>
                <StyledSection>
                    <StyledSubHeading colour={highlightOnLight}>Phractal</StyledSubHeading>
                    <br/>
                    <StytledUL>
                        <li><FontAwesomeIcon icon={faLink} /> <a href="https://pypi.org/project/Phractal/">Pypi</a></li>
                        <li><FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/Hauteclere/phractal/">GitHub</a></li>
                    </StytledUL>
                    <StyledPara> 
                        Phractal is a tool for creating documents programmatically with Python, powered by <a href="https://docs.pydantic.dev/">Pydantic</a> and <a href="https://jinja.palletsprojects.com/en/3.1.x/">Jinja2</a>. It is designed, built, packaged and distributed by yours truly.
                    </StyledPara>
                    <StyledPara>
                        I created Phractal because I needed a faster way of generating data quality reports for my work as a data analyst. Often I would be handed a table with hundreds of columns, and asked to create a PDF summarising the same six metrics for each variable.
                    </StyledPara>
                    <StyledPara>    
                        <a href="https://pypi.org/project/pandas-profiling/">Pandas-profiling</a> wasn't giving me the measures I wanted, and building documents manually in the Office suite was taking me longer than the analysis itself. Jinja2 would let me create HTML documents that I could then convert to PDF, but this was time-consuming and fiddly. I needed more power! 
                    </StyledPara>
                    <StyledPara>
                        I was dreaming of a Python library that gave me the component-driven development style and type-checking that I was used to from React+Typescript on the front-end. Phractal is the realisation of that dream. 
                    </StyledPara>
                    <StyledPara>
                        Behold: a side-by-side of Phractal vs Typescript/React...
                    </StyledPara>
                    <SideBySide reverse={false}>
                        <StyledCodeContent titletext="Python" language="python" codecontent={pythonCode} />
                        <StyledCodeContent titletext="React" language="react" codecontent={reactCode} />
                    </SideBySide>
                    And the output of both:
                    <SideBySide reverse={false}>
                    <StyledCodeContent titletext="HTML" language="html" codecontent={htmlCode} />
                    <StyledOutputBlock bordercolour={highlightOnLight}>
                        <h1>My List</h1>
                        <ul>
                            <li>beans</li>
                            <li>rice</li>
                            <li>hotsauce</li>
                        </ul>
                    </StyledOutputBlock>
                    </SideBySide>
                </StyledSection>
            </StyledSectionContainer>
            <StyledSectionContainer>
                <StyledSection>
                    <StyledSubHeading colour={highlightOnLight}>Data Analysis</StyledSubHeading>
                    I work full-time as a data analyst.
                </StyledSection>
            </StyledSectionContainer>
            <StyledSectionContainer>
                <StyledSection>
                    <StyledSubHeading colour={highlightOnLight}>Web Development</StyledSubHeading>
                    I'm a full-stack dev with five years experience.
                </StyledSection>
            </StyledSectionContainer>
            <StyledSectionContainer>
                <StyledSection>
                    <StyledSubHeading colour={highlightOnLight}>She Codes</StyledSubHeading>
                    I am a mentor.
                </StyledSection>
            </StyledSectionContainer>
        </StyledBody>
    )
}

export default ProjectsPage



