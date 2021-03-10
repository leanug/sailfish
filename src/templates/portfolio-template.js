import React from 'react'
import Background from '../components/Background'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const query = graphql`
  query GetSingleProject ($slug: String){
    mdx( frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        category
        slug
        image{
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

const PortfolioTemplate = ({ data }) => {
  const { 
    mdx: { 
      frontmatter: { title, category, image },
      body,
    }, 
  } = data

  return (
    <Layout>
        <Wrapper>
            <Background image={image.childImageSharp.fluid}>
                <div>
                    <h1>{title}</h1>
                    <h1>{category}</h1>
                    <p className="h1">Blockchain Software Developer</p>
                </div>
            </Background>
        </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
    article {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
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
`

export default PortfolioTemplate
