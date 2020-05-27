// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/Layout"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
// import styles from "../css/blog.module.css"
// import Title from "../components/Title"
// import Card from "../components/Common/Card"
// import SEO from "../components/SEO"

// import StyledHero from "../components/StyledHero"
// import styled from "styled-components"
// import RichTextDisplay from "../components/Blog/RichTextDisplay"

// // const BlogListTemplate = props => {
// //   const { currentPage, numPages } = props.pageContext
// //   const { data } = props
// //   // const {blogImage} = useStaticQuery(getBlogImage)

// //   const isFirst = currentPage === 1
// //   const isLast = currentPage === numPages
// //   const previousPage =
// //     currentPage - 1 === 1 ? `/resume` : `/resume/${currentPage - 1}`
// //   const nextPage = `/resume/${currentPage + 1}`

// //   return (
// //     <Layout>
// //       <SEO title="Resume" />
// //       <section className={styles.blog}>
// //         <Title title="Resume" subtitle="" />
// //         {!(isFirst && isLast) && (
// //           <section className={styles.links}>
// //             {!isFirst && (
// //               <AniLink fade to={previousPage} className={styles.link}>
// //                 Previous
// //               </AniLink>
// //             )}
// //             {Array.from({ length: numPages }, (_, i) => {
// //               return (
// //                 <AniLink
// //                   key={i}
// //                   fade
// //                   to={`/resume/${i === 0 ? "" : i + 1}`}
// //                   className={
// //                     i + 1 === currentPage
// //                       ? `${styles.link} ${styles.active}`
// //                       : `${styles.link}`
// //                   }
// //                 >
// //                   {i + 1}
// //                 </AniLink>
// //               )
// //             })}
// //             {!isLast && (
// //               <AniLink fade to={nextPage} className={styles.link}>
// //                 Next
// //               </AniLink>
// //             )}
// //           </section>
// //         )}
// //         {/* <div className={styles.center} data-cy="post-list">
// //           {data.posts.edges.map(({ node }) => {
// //             return <Card key={node.id} node={node} />
// //           })}
// //         </div> */}
// //         <article className={styles.post}>
// //           <RichTextDisplay json={json} />
// //         </article>

// //       </section>
// //     </Layout>
// //   )
// // }

// // export const query = graphql`
// //   query getPosts($skip: Int!, $limit: Int!) {
// //     posts: allContentfulBlogArticle(
// //       skip: $skip
// //       limit: $limit
// //       sort: { fields: date, order: DESC }
// //     ) {
// //       edges {
// //         node {
// //           id: contentful_id
// //           title
// //           slug
// //           date
// //           category {
// //             name
// //             slug
// //           }
// //           image {
// //             fluid {
// //               ...GatsbyContentfulFluid
// //             }
// //           }
// //         }
// //       }
// //     }
// //   }
// // `

// const BlogTemplate =  data  => {
//   console.log(data)
//   const {
//     title,
//     date: published,
//     content: { json },
//     //richText: { json },
//     image,
//   } = data.post

//   return (
//     <Layout>
//       <SEO title={title} />
//       <BlogWrapper>
//         <StyledHero img={image.fluid} className="post-image" />
//         <div className="post-container">
//           {/* <AniLink fade to="/blog" className="btn-primary">
//             All the articles
//           </AniLink> */}
//           <div className="content-container">
//             <h1 className="content-title">{title}</h1>
//             {/* <h4 className="content-published">
//               Published: {moment(published).format(`MMMM DD, YYYY`)}
//             </h4> */}
//             <hr />
//             <article className={styles.post}>
//               <RichTextDisplay json={json} />
//             </article>
//           </div>
//         </div>
//       </BlogWrapper>
//     </Layout>
//   )
// }

// const BlogWrapper = styled.article`
//   .post-image {
//     margin: 0 auto;
//     width: 90%;
//   }

//   .post-container {
//     padding: 1rem;
//     margin: 0 auto;

//     a.btn-primary {
//       font-size: 0.8rem;
//       display: block;
//       text-align: center;
//     }

//     .content-container {
//       margin-top: 3rem;

//       .content-title {
//         font-size: 2.3rem;
//         font-weight: 600;
//         text-align: center;
//         word-break: break-all;
//       }

//       .content-published {
//         text-transform: capitalize;
//       }
//     }
//   }

//   @media (min-width: 760px) {
//     .post-container {
//       padding: 4rem;
//       width: 80vw;

//       a.btn-primary {
//         font-size: 1rem;
//         display: inline;
//       }
//     }
//   }
// `

// export const getPost = graphql`
//   query getPostNew($id: String!) {
//     post: contentfulBlogArticle(contentful_id: { eq: $id }) {
//       title
//       date
//       content {
//         json
//       }
//       image {
//         fluid(maxWidth: 2048) {
//           ...GatsbyContentfulFluid
//         }
//       }
//     }
//   }
// `

// //export default BlogListTemplate
// export default BlogTemplate
