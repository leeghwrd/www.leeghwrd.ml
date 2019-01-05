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
        <h1>{post.frontmatter.title}</h1>
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
        date
      }
    }
  }
`