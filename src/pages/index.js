import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function HomeIndex({ data }) {
  
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
     <section className="latest-post">
     <header className="latest-post-header">
      <h1>Latest Post</h1>
     </header>

      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => (
              <Link to={post.frontmatter.path} key={post.id}>
          <img src={post.frontmatter.thumbnail.childImageSharp.fluid.src} alt="post" width="50px" height="50px"></img>
          <h2>{post.frontmatter.title}</h2>
  <p><time>{post.frontmatter.date}</time></p>
  <p>{post.excerpt}</p>

              </Link>
        ))}
      </section>

      <h1>News</h1>
      <section className="section">
        <p>Reviewing a suitable plugin for, auto updated curated list of tech news. Something good for the geek like minds out there so I can wait on choosing the content.</p>
      </section>
    </Layout>
  )
}

HomeIndex.propTypes = {
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query HomeIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1
    ) {
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