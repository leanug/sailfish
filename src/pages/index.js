import React from 'react'
import Contact from '../components/Contact'
import Image from 'gatsby-image'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import PricingTables from '../components/PricingTables'
import SEO from '../components/SEO'
import { setColor, setBreakpoint } from '../styles'
import styled from 'styled-components'
import Title from '../components/Title'
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    img1: file(relativePath: {eq: "testmar9.png"}) {
        childImageSharp {
            img1: fluid( quality: 100, maxWidth: 800 ) {
             ...GatsbyImageSharpFluid
            }
        }
    }
    img2: file(relativePath: {eq: "test2.png"}) {
        childImageSharp {
            img2: fluid( quality: 100, maxWidth: 800 ) {
             ...GatsbyImageSharpFluid
            }
        }
    }
    img3: file(relativePath: {eq: "fiverr.jpg"}) {
        childImageSharp {
            img3: fluid( quality: 100, maxWidth: 800 ) {
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
        img3: {
            childImageSharp: { img3 },
        },
    } = useStaticQuery( query )
    return (
    

    <Layout>
        <SEO 
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, suscipit?"
            title="Home"
        />
        <Wrapper>
            <section id="section-1" className="section container p-y">
                <div className="col-1">
                    <p>We help our clients by developing</p>
                    <p className="display-1">Fast single page and multi-page websites</p>
                    <Link className="btn dark-button" to="/portfolio">Work</Link>
                </div>
                <Image className="col-2" fluid={img1} alt="default text" />
            </section>
            
            <section className="section-bg ">
                <div id="section-2" className="section container">
                    <Image className="col-1" fluid={img2} alt="default text" />
                    <div className="col-2">
                        <p>Online Presence.</p>
                        <p className="display-1">Your website adaptable to any device</p>
                        <p><b>Promote your business</b></p>
                        <p><b>Start a personal website</b></p>
                        <p><b>Show potential clients or employers what you can do for them</b></p>
                    </div>
                </div>
            </section>
            
            <section className="section-bg gamma">
                <div id="section-4" className="section container">
                    <div className="col-1">
                        <p>Easily Hire Us</p>
                        <p className="display-1">
                            We are on Fiverr.com<br />
                        </p>
                        <p className="display-3">See our WordPress, Wix and other websites development gigs</p>
                        <Link className="btn light-button" to="/">See our gigs</Link>
                    </div>
                    <Image className="col-2" fluid={ img3 } alt="default text" />
                </div>
            </section>

            <section id="section-5" className="container p-y">
                <Title 
                    title="get in touch."
                    text="Send us a message with your ideas."
                />
                <Contact />
            </section>
        </Wrapper>
    </Layout>
)}

const Wrapper = styled.div`
    .section {
        display: grid;
        padding: 10rem 0;
    }

    .col-1 {
        order: 2;
        margin-top: 3rem;
    }

    .col-2 {
        order: 1;
    }

    @media screen and ( min-width: ${ setBreakpoint.medium } ) {
        .section {
            align-items: center;
            grid-template-columns: 1fr 1fr;
            grid-gap: 2rem;
            justify-content: center;
            min-height: 100vh;
        }

        .col-1 {
            order: 1;
        }

        .col-2 {
            margin-top: 0;
            order: 2;
        }
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