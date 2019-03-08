import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article";

export default class ArticleIndex extends React.Component {
 
  render() {
    const { data } = this.props

    const { edges: posts } = data.allMarkdownRemark
    
  return (
    <Layout>

     <h1>Articles</h1>
      <section className="list">
      {posts.map((post) => {
           return <Article post={post} key={post.node.id}/>   
        })
      }
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