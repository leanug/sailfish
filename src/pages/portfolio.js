import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Portfolio from '../components/Portfolio'
import SEO from '../components/SEO'
import styled from 'styled-components'
import Title from '../components/Title'

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {in: "portfolio"}}}) {
      nodes {
        id
        frontmatter {
          title
          category
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const PortfolioPage = ({ data }) => {
  const { allMdx: { nodes: projects } } = data

  return (
    <Layout>
       <SEO 
          description="A selection of our latest projects"
          title="Our Projects"
        />
        <Wrapper>
            <div className="container">
              <Title 
                  title="Projects" 
                  left
              />
              <Portfolio portfolio={ projects } />
          </div>
        </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
    margin: 14rem 0;
`

export default PortfolioPage