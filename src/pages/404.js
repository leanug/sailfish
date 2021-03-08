import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import SEO from "../components/SEO"

const NotFoundPage = () => (
    <Layout>
        <SEO 
          description="404 - Page not found"
          title="404 Page not found"
        />
        <Wrapper>
            <div className="container">
                <h1>404</h1>
                <h3>Sorry, the page you tried cannot be found</h3>
                <Link to="/" className="btn">back home</Link>
            </div>
        </Wrapper>
    </Layout>
)

const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;

    a {
        margin-top:3rem;
    }
`

export default NotFoundPage
