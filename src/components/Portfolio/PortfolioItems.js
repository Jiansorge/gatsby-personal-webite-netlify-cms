import React from "react"
import Title from "../Title"
import { graphql, useStaticQuery } from "gatsby"
import PortfolioList from "./PortfolioList"

const PortfolioItems = () => {
  const { items } = useStaticQuery(getPortfolioItems)
  const itemNodes = items.edges.map(x => x.node)

  return (
    <section>
      <Title title="Jian's" subtitle="Projects" />
      <PortfolioList items={itemNodes} />
    </section>
  )
}

const getPortfolioItems = graphql`
  {
    items: allContentfulPortfolioItem {
      edges {
        node {
          id: contentful_id
          slug
          title
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          category {
            slug
          }
        }
      }
    }
  }
`

export default PortfolioItems
