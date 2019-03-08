import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export default class ArticleIndex extends Component {
 
  render() {
    const { data } = this.props

    const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>

     <h1>Articles</h1>
      <section className="list">
      
      {posts.map((post) => (
              <Link to={post.node.frontmatter.path} key={post.id} className="post">
        <div className="post-thumbnail">
          <img src={post.node.frontmatter.thumbnail.childImageSharp.fluid.src} alt="post"></img>
        </div>
          <div className="post-title">{post.node.frontmatter.title}</div>
        <span className="post-date"><time>{post.node.frontmatter.date}</time></span>
              </Link>
        ))}

      </section>
    </Layout>
  )
        }
}

ArticleIndex.propTypes = {
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query ArticleIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
            yearSlug
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
    }
  }
`