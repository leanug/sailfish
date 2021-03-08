import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Wrapper = styled.section`
  
  width: 90vw;
  margin: 0 auto;

  .project-info {
    margin: 2rem 0 2.4rem 0;

    p {
      display: flex;
      align-items: center;
    }

    .separator {
      font-size: 1rem;
    }

    span {
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
    }

    h1 {
      font-size: 4.8rem;
      margin-bottom: 3rem;
    }

    .gatsby-image-wrapper {
      margin-bottom: 6rem;
    }
  }

  .body {
    margin-top: 2.5rem;
  }
  
`

const PortfolioTemplate = ({ data }) => {
  const { 
    mdx: { 
      frontmatter: { title, category, image, date },
      body,
    }, 
  } = data

  return (
    <Layout>
        <Wrapper>
          <article>
            <div className="project-info">
              <p>{ category } <span className="separator">&#9679;</span> { date }</p>
              <h1>{ title }</h1>
            </div>
            <Image fluid={ image.childImageSharp.fluid } />
            <div className="body">
              <MDXRenderer>{ body }</MDXRenderer>
            </div>
          </article>
        </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject ($slug: String){
    mdx( frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        category
        date(formatString: "MMMM Do, YYYY")
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

export default PortfolioTemplate
