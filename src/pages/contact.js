import React from "react"
import Contact from '../components/Contact'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Title from '../components/Title'

const AboutPage = () => {
  return (
    <Layout>
        <SEO 
            description="About Sailfish Apps"
            title="About"
        />
        <section id="section-1" className="section container p-y">
            <Title 
                title="get in touch."
                text="Send us a message with your ideas."
            />
            <Contact />
        </section>
    </Layout>
  )
}

export default AboutPage