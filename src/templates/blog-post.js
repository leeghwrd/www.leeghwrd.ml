import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import { graphql } from "gatsby"

import Layout from "../components/baseLayoutOverrideForBlogPost"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Helmet title={`Lee Howard | ${post.frontmatter.title}`} />
      <article className="article">

      <div className="container">
      <header className="single-header">
        <img alt="Post Graphics" width="50" height="50" src={post.frontmatter.thumbnail.childImageSharp.fluid.src}/>
        <h1>{post.frontmatter.title}</h1>
        <time className="post-page-date">{post.frontmatter.date}</time>
      </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </article>
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date(formatString: "MMMM DD, YYYY")
        thumbnail {
          childImageSharp {
              id
            fluid {                 
              src                  
            }
          }
        }
      }
    }
  }
`