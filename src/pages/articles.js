import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SearchQuery from "../components/searchQuery";
import nginixBrand from '../images/nginx.png'

export default function Index({ data }) {
  
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>

      <SearchQuery />
      <section className="list">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => (
         
              <Link to={post.frontmatter.path} key={post.id} className="post">
        <div className="post-thumbnail">
          <img src={nginixBrand} alt="post"></img>
        </div>
          <div className="post-title">{post.frontmatter.title}</div>
  <span className="post-date"><time>{post.frontmatter.date}</time></span>
              </Link>
        ))}
      </section>
    </Layout>
  )
}

Index.propTypes = {
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___path] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`