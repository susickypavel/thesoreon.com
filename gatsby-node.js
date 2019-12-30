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

  createPage({
    path: "/",
    component: path.resolve(`./src/templates/main-page.tsx`),
    context: {},
  })
}
