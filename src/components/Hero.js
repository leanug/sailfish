import React from 'react';
import Background from './Background'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { BsChevronDown } from 'react-icons/bs'

const query = graphql`
  {
    file(relativePath: { eq: "home2.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
    const {
        file: {
          childImageSharp: { fluid },
        },
    } = useStaticQuery( query )

    return (
        <Wrapper>
            <Background
                image={ fluid }
            >
                <article className="fade-in">
                    <p>Hello, I'm Erica</p>
                    <p className="h1">Blockchain Software Developer</p>
                </article>
                <BsChevronDown className="icon" />
            </Background>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    article {
        width: 90vw;
        max-width: 80rem;
        text-align: center;
        
        p {
            font-size: 1.8rem;
        }

        .h1 {
            font-weight: 700;
            font-size: 2.5rem;
            line-height: 1.25;
            letter-spacing: 3px;
            margin: 2rem 0 3rem 0;
            text-transform: uppercase;
        }

        h4 {
          font-weight: 400;
        }

        @media (min-width: 800px) {
          h1 {
            letter-spacing: 5px;
          }
        }
    }

    .icon {
        margin: auto;
        display: block;
        font-size: 2rem;
        position: absolute;
        bottom: 5rem;

        -webkit-animation: action 1s infinite  alternate;
        animation: action 1s infinite  alternate;
        
        @-webkit-keyframes action {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
        }
        @keyframes action {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
        }
    }
`

export default Hero;