exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
  
    const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  
    return graphql(`
      {
        allMdx(filter: {fileAbsolutePath: {regex: "/markdown-pages/"}}) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }
  
      return result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
          path: `/blog/${node.slug}`,
          component: blogPostTemplate,
          context: {
            // additional data can be passed via context
            id: node.id 
          },
        })
      })
    })
  }