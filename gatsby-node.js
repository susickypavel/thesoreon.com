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

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/templates/blog-post-page.tsx`),
      context: { id: node.id },
    })
  })

  const allPosts = await graphql(`
    query {
      allMdx {
        totalCount
      }
    }
  `)

  const totalPostsCount = allPosts.data.allMdx.totalCount
  const postsPerPage = 3
  const totalPagesCount = Math.ceil(totalPostsCount / postsPerPage)

  Array.from({ length: totalPagesCount }).forEach((_, i) => {
    const slug = i === 0 ? "/" : `/${i}`

    createPage({
      path: slug,
      component: path.resolve(`./src/components/blog-post-previews-list/index.tsx`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        totalPagesCount,
        currentPage: i,
        slug,
      },
    })
  })
}
