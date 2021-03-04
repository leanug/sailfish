import React from 'react';
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { setGridGap, setRadius, setBreakpoint } from '../styles';

const query = graphql`
    {
        erica:file(relativePath: {eq: "erica.jpg"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

const About = () => {
    const {
        erica: {
          childImageSharp: { fluid },
        },
    } = useStaticQuery( query )

    return (
        <Wrapper>
            <Image fluid={ fluid } alt="Erica Legrand" />
            <div className="text">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                    Mustache kogi next level, lo-fi lyft keffiyeh live-edge fixie.
                </p>
                <p>
                    Sriracha selvage shaman copper mug air plant seitan fixie fingerstache lyft live-edge typewriter paleo tote bag enamel pin. 
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia voluptatem enim optio odio soluta. Aspernatur.</p>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: ${ setGridGap.gridGapGamma };

    @media screen and ( max-width: ${ setBreakpoint.small } ) {
        display: block;
    }

    h3 {
        margin-bottom: 2rem;
    }

    img {
        border-radius: ${ setRadius.radiusBeta };
    }

    .gatsby-image-wrapper {
        margin-bottom: 5rem;
    }
`

export default About;