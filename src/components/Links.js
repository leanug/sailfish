import React from 'react';
import links from '../constants/links'
import styled from 'styled-components'
import Scrollspy from 'react-scrollspy'

const Links = ({ styleClass }) => {
    return (
        <Wrapper>
         <Scrollspy 
            items={[
                'section-1', 
                'section-2', 
                'section-3', 
                'section-4',
                'section-5',
                'section-6',
                'section-7'
            ]} 
            currentClassName="is-current"
            offset={-300}
            componentTag="div"
            className={`${styleClass ? styleClass : ""}`}
            >
                
                {links.map( link => {
                const { url, title, id } = link
                return(
                    <a className="nav-link" key={ id } href={ url } title={ title }>{ title }</a>
                )
            })}
              </Scrollspy>

            
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, 1fr);

    .navbar-links {
        display: grid;
        grid-auto-flow: column;
        justify-content: right;

        a {
            margin: 0 0.5rem;
        }
    }

    .sidebar-links {
        grid-auto-flow: row;
        justify-content: left;
    }

    a {
        display: block;
        font-size: 1.3rem;
        letter-spacing: 1px;
        transition: all 0.2s ease-out;
    }

    a:hover {
        opacity: 0.6;
    }

    .is-current {
        font-weight: 700;
    }
`

export default Links;