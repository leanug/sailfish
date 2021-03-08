import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { setRadius } from '../../styles/'

const Wrapper = styled.div`
  .img {
    border-radius: ${setRadius.radiusBeta};
    margin-bottom: 1rem;
    height: 30rem;
  }

  .category {
    display: inline-block;
    margin-bottom: 1rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  h4 {
    margin: 2rem 0 1rem 0;
    text-transform: initial;
  }

  .link:hover {
    
  }

  footer {
    margin: 1rem 0;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  @media (min-width: 600px) {
    .img {
      height: 20rem;
    }
  }
  @media (min-width: 800px) {
    .img {
      height: 25rem;
    }
  }
  @media (min-width: 992px) {
    & {
      
      .img {
        height: 100%;
        max-height: 30rem;
      }
    }
  }
`

const Work = ({ frontmatter }) => {
  const { title, image, slug, category } = frontmatter

  return (
    <Wrapper>
      <Link to={`/portfolio/${slug}`} className="link">
        <Image fluid={ image.childImageSharp.fluid } className="img" />
      </Link>
      <div className="info">
      <Link to={`/portfolio/${slug}`} className="link">
          <h4>{ title }</h4>
        </Link>
        <footer>
          <span className="date">
            { category.split( ',' ).map( ( singleCat, index )=> {
              return <span key={ index }>{ singleCat }</span>
            } ) }
          </span>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Work