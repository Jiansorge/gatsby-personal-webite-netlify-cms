import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Banner from "../components/Banner"
import EmailContact from "../components/Contact/EmailContact"
import styled from "styled-components"
import MapContact from "../components/Contact/MapContact"
//import ProjectWithUs from "../components/Contact/ProjectWithUs"
import SEO from "../components/SEO"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" description={"Contact Me!"} />
      {/* <StyledHero img={data.contactImage.childImageSharp.fluid}>
        <Banner title="Contact Me!" />
      </StyledHero> */}
      <ContactWrapper>
    {/*<EmailContact />*/}
        <MapContact />
      </ContactWrapper>
      {/* <ProjectWithUs /> */}
    </Layout>
  )
}

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;

  padding: 2rem;
`

export const getContactImage = graphql`
  query {
    contactImage: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
