import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
//import ProjectWithUs from "../components/Contact/ProjectWithUs"

const Index = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" description={data.site.siteMetadata.description} />
      <StyledHero home img={data.homeImage.childImageSharp.fluid}>
        <Banner
          title={data.site.siteMetadata.title}
          info="Web Developer"
        ></Banner>
      </StyledHero>
      <h4 style={{'text-align':'right'}}>Image Credit: <a href="https://dribbble.com/shots/3339732-Horizon" style={{'color':'#5fcde5'}}>Horizon</a> by <a href="https://dribbble.com/mrbrownjeremy" style={{'color':'#5fcde5'}}>Jeremy Brown</a></h4>

      <Services />

      {/*<ProjectWithUs />*/}
    </Layout>
  )
}

export const getHomeImage = graphql`
  query {
    homeImage: file(relativePath: { eq: "index-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default Index
