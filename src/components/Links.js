import React from 'react';
import { Link } from 'gatsby'
import links from '../constants/links'
import styled from 'styled-components'
import { setGridGap } from '../styles';

const Links = ({ styleClass }) => {
    return (
        <Wrapper className={`${styleClass ? styleClass : ""}`}>
            {links.map( link => {
                const { url, title, id } = link
                return(
                    <Link activeClassName="active" key={ id } to={ url }>{ title }</Link>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-gap: ${ setGridGap.gridGapBeta };
    grid-template-columns: repeat(auto-fill, 1fr);

    &.navbar-links {
        grid-auto-flow: column;
        justify-content: right;
    }

    &.sidebar-links {
        grid-auto-flow: row;
        justify-content: left;
    }

    a {
        font-size: 1.4rem;
        letter-spacing: 1px;
        opacity: 0.7;
        transition: all 0.2s ease-out;
    }

    a:hover {
        opacity: 1;
    }

    .active {
        opacity: 1;
    }
`

export default Links;