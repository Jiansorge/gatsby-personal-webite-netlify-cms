import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/blog.module.css"
import Title from "../components/Title"
//import Card from "../components/Common/Card"
import SEO from "../components/SEO"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

const BlogListTemplate = props => {
  const { currentPage, numPages } = props.pageContext
  const { data } = props
  const contentfulBlogArticle = data.contentfulBlogArticle.content.json
  //const {blogImage} = useStaticQuery(getBlogImage)

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const previousPage =
    currentPage - 1 === 1 ? `/resume` : `/resume/${currentPage - 1}`
  const nextPage = `/resume/${currentPage + 1}`
  console.log("contentfulBlogArticle", contentfulBlogArticle)

  console.log("Render 1", data.category.richText)
  console.log(
    "Render 2",
    documentToReactComponents(data.category.richText.content["en-US"])
  )

  const Text = ({ children }) => <p className="styles.center">{children}</p>

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (contentfulBlogArticle, children) => (
        <Text>{children}</Text>
      ),
    },
  }
  console.log(
    "Render 3",
    documentToReactComponents(data.category.richText.json, options)
  )
  // contentfulBlogArticle {
  //   content {
  //     json
  //   }
  // }
  console.log(
    "Render 3",
    documentToReactComponents(data.contentfulBlogArticle.content.json, options)
  )

  var MarkdownIt = require("markdown-it"),
    md = new MarkdownIt()
  // var HTML = md.render(contentfulBlogArticle);
  // console.log(HTML)

  return (
    <Layout>
      <SEO title="Resume" />
      <section className={styles.blog}>
        <Title title="Resume" subtitle="" />
        {!(isFirst && isLast) && (
          <section className={styles.links}>
            {!isFirst && (
              <AniLink fade to={previousPage} className={styles.link}>
                Previous
              </AniLink>
            )}
            {Array.from({ length: numPages }, (_, i) => {
              return (
                <AniLink
                  key={i}
                  fade
                  to={`/resume/${i === 0 ? "" : i + 1}`}
                  className={
                    i + 1 === currentPage
                      ? `${styles.link} ${styles.active}`
                      : `${styles.link}`
                  }
                >
                  {i + 1}
                </AniLink>
              )
            })}
            {!isLast && (
              <AniLink fade to={nextPage} className={styles.link}>
                Next
              </AniLink>
            )}
          </section>
        )}
        {/* <div className={styles.center} data-cy="post-list">
          {data.posts.edges.map(({ node }) => {
            return <Card key={node.id} node={node} />
          })}
        </div> */}
        {documentToReactComponents(data.category.richText["en-US"])}
        {documentToReactComponents(data.category.richText.json, options)}
        <div className={styles.template} data-cy="post-list">
          {/* {console.log(data.category.richText.content.map)} */}

          {/* {data.category.richText.content.map(value => {
            return <p >{value.content[0].value}</p>
          })} */}

          {documentToReactComponents(
            data.contentfulBlogArticle.content.json,
            options
          )}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    contentfulBlogArticle {
      content {
        json
      }
    }
    posts: allContentfulBlogArticle(
      skip: $skip
      limit: $limit
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          id: contentful_id
          title
          slug
          date
          category {
            name
            slug
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    category: contentfulBlogArticleCategory {
      richText {
        content {
          content {
            value
          }
        }
      }
    }
  }
`

export default BlogListTemplate
