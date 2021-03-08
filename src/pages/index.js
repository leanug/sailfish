import React from 'react'
import Contact from '../components/Contact'
import Layout from '../components/Layout'
import PricingTables from '../components/PricingTables'
import SEO from '../components/SEO'
import { setColor } from '../styles'
import styled from 'styled-components'
import Title from '../components/Title'
import Image from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'

const query = graphql`
  {
    img1: file(relativePath: {eq: "test1.jpg"}) {
        childImageSharp {
            img1: fluid(quality: 100, maxWidth: 600) {
             ...GatsbyImageSharpFluid
            }
        }
    }
    img2: file(relativePath: {eq: "test2.png"}) {
        childImageSharp {
            img2: fluid(quality: 100, maxWidth: 600) {
             ...GatsbyImageSharpFluid
            }
        }
    }
  }
`


const IndexPage = () => {
    const {
        img1: {
          childImageSharp: { img1 },
        },
        img2: {
            childImageSharp: { img2 },
          },
    } = useStaticQuery( query )
    return (
    

    <Layout>
        <SEO 
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, suscipit?"
            title="Home"
        />
        <Wrapper>
            <div id="section-1" className="section container">
                <div>
                    <p>With optional Free hosting</p>
                    <p className="display-1">Fast single page / multi-page websites</p>
                    <Link className="btn dark-button" to="/">Find out more</Link>
                </div>
                <Image fluid={img1} alt="default text" />
            </div>
            
            <div className="section-bg">
                <div id="section-1" className="section container">
                    <Image fluid={img2} alt="default text" />
                    <div>
                        <p>With optional Free hosting</p>
                        <p className="display-1">Fast single page / multi-page websites</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, facilis!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, facilis!</p>
                        <b><Link to="/">Link one</Link></b>
                    </div>
                </div>
            </div>
            
            <div id="section-3" className="container vh-100 p-y">
                <Title 
                    title="Choose the option that’s right for you"
                    text="We adapt to every budget"
                    textAlign="center"
                />
                <PricingTables />
            </div>

            <div className="section-bg gamma">
                <div id="section-1" className="section container">
                    <div>
                        <p>With optional Free hosting</p>
                        <p className="display-1">Fast single page / multi-page websites</p>
                        <Link className="btn light-button" to="/">Find out more</Link>
                    </div>
                    <Image fluid={img1} alt="default text" />
                </div>
            </div>

            <div className="container p-y">
                <Title 
                    title="get in touch."
                    text="Send us an email or message with your ideas and we will reply as soon as possible"
                />
                <Contact />
            </div>
        </Wrapper>
       
    </Layout>
)}

const Wrapper = styled.div`
    .section {
        align-items: center;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 4rem;
        justify-content: center;
        min-height: 100vh;
    }

    .section-bg {
        background-color: ${ setColor.tau };
        width: 100%;
    }

    .gamma {
        background-color: ${ setColor.gamma };
        color: ${ setColor.sigma };
    }
`

export default IndexPage