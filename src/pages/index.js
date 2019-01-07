import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function HomeIndex({ data }) {
  
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
     
      <section className="list">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => (
              <Link to={post.frontmatter.path} key={post.id} className="post">
        <div className="post-thumbnail">
          <img src={post.frontmatter.thumbnail.childImageSharp.fluid.src} alt="post"></img>
        </div>
          <div className="post-title">{post.frontmatter.title}</div>
  <span className="post-date"><time>{post.frontmatter.date}</time></span>
              </Link>
        ))}
      </section>
    </Layout>
  )
}

HomeIndex.propTypes = {
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query HomeIndexQuery {
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