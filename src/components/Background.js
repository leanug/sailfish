import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Background = ({ children, image, styleClass }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  console.log('image1: ', image);
  console.log('image2: ', fluid);
  return (
      <BackgroundImage
        Tag="div"
        fluid={ image || fluid }
        className={ styleClass || "bcg"}
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
  )
}

export default Background
