import React from 'react';
import { BsArrowRight } from "react-icons/bs"
import projects from '../constants/projects'
import { setBreakpoint, setColor } from '../styles'
import styled from 'styled-components'

const Projects = () => {
    return (
        <Wrapper>
            {projects.map( project => {
                return(
                    <div key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.info}</p>
                        <div className="link-btn">
                            <a href="https://github.com/leanug/gatsby-portfolio-template" title={project.title}>Source <BsArrowRight /></a>
                        </div>
                    </div>
                )
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    div {
        display: grid;
        grid-template-columns: 25rem 1fr auto;
        grid-gap: 5rem;
        margin-bottom: 3rem;

        @media screen and ( max-width: ${ setBreakpoint.small } ) {
            display: block;
        }
    }

    svg {
        font-size: ;
        margin-left: 1rem;
    }

    h3 {
        margin-bottom: 1rem;
    }

    .link-btn {
        background-color: ${ setColor.colorPi_1 };
        display: inline-block;
        height: 5rem;
        padding: 1rem 2rem;
    }
`

export default Projects;