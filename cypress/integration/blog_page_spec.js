/// <reference types="Cypress" />
const graphqlFixture = require("../fixtures/graphql")

describe("Test dynamic blog", function() {
  let posts

  before(() => {
    const query = `{
      posts: allContentfulBlogArticle(
        skip: 0
        limit: 9
        sort: { fields: date, order: DESC }
      ) {
        edges {
          node {
            id: contentful_id
            title
            slug
            category {
              slug
            }
          }
        }
      }
    }`

    cy.request({
      url: graphqlFixture.graphqlEndpoint,
      method: "POST",
      body: { query },
      failOnStatusCode: false,
    }).then(res => {
      posts = res.body.data.posts.edges
    })

    cy.visit("/resume")
  })

  it("Load right number of posts", () => {
    cy.get('[data-cy="post-list"]')
      .children()
      .should("have.length", posts.length)
  })

  it("Load the right items", function() {
    posts.forEach(({ node }) => {
      cy.findByText(node.title)
      cy.get("[data-cy='portfolio-item']")
        .should("have.attr", "href")
        .and("include", `/${node.category.slug}/${node.slug}`)
    })
  })
})

describe("Test resume page", function() {
  before(() => {
    cy.visit("/resume")
  })

  it("Successfully loads the resume page", function() {
    cy.url().should("contain", "/resume")
  })

  it("Title is correct", function() {
    cy.title().should("contain", "Resume")
  })
})
