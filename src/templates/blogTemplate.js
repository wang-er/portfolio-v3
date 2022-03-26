import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.markdownRemark holds our post data
  const { frontmatter, html} = mdx
  return (
    <Layout>
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        hita
        <MDXRenderer frontmatter={frontmatter}>
              {html}
            </MDXRenderer>
        {/* <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        /> */}
      </div>
    </div>
    </Layout>
  )
}


// export const pageQuery = graphql`
//   query($id: String) {
//     mdx(id: { eq: $id }) {
//       html
//       id
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//       }
//     }
//   }
// `