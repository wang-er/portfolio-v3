exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
  
    const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  
    return graphql(`
      {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/markdown-pages/"}}) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }
  
      return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.slug,
          component: blogPostTemplate,
          context: {
            // additional data can be passed via context
            slug: node.frontmatter.slug,
          },
        })
      })
    })
  }