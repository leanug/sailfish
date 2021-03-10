import React from "react"
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import styled from 'styled-components'
import { setBreakpoint } from '../styles'

const AboutPage = () => {
  return (
    <Layout>
        <SEO 
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, suscipit?"
            title="About"
        />
        <Wrapper className="section container">
            <div>
                <p className="display-3">About Sailfish:</p>
                <p className="display-2">
                  Hi, we are a web development studio based in Uruguay.
                  </p>
                <p className="display-3">
                  We specialize in websites with a clean and minimalist design optimized for SEO that perform well on Google's 
                  PageSpeed Insights.
                </p>
            </div>
        </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
    align-items: center;
    display: grid;
    min-height: 100vh;
    
    @media screen and ( min-width: ${ setBreakpoint.small } ) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 4rem;
        justify-content: center;
    }

    .display-2 {
        margin: 2rem 0;
    }
`

export default AboutPage