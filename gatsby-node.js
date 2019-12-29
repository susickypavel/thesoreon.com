const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  createPage({
    path: "/",
    component: path.resolve(`./src/templates/main-page.tsx`),
    context: {},
  })
}
