const path = require("path")

function createSlug(title) {
  return `/blog/${title.replace(/\s/g, "-").toLowerCase()}`
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    createNodeField({
      name: "slug",
      node,
      value: createSlug(node.frontmatter.title),
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post-page.tsx`),
      context: { id: node.id },
    })
  })

  createPage({
    path: "/",
    component: path.resolve(`./src/templates/main-page.tsx`),
    context: {},
  })
}
