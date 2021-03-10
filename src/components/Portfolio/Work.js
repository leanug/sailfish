import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { setRadius } from '../../styles/'

const Work = ({ frontmatter }) => {
  const { title, image, url } = frontmatter

  return (
    <Wrapper>
      <a href={ url } title={ title } className="link">
          <Image fluid={ image.childImageSharp.fluid } className="img" />
      </a>
      <p>
          <a href={ url } title={ title } className="link">{ title }</a>
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    a {
        cursor: pointer;
        font-weight: 500;
    }

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

export default Work