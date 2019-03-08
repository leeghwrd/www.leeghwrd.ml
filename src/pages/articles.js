import React from "react"
import PropTypes from "prop-types"
import { Link , graphql } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article";

export default class ArticleIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,20)});
  }

  render() {
    const { data } = this.props

    const { edges: posts } = data.allMarkdownRemark
    
    let filteredPosts = posts.filter(
      (post)=> {
        return post.node.frontmatter.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      } 
    );

  return (

    <Layout>

     <h1>Articles</h1>
      <section className="list">
      <input type="text"
      placeholder="Search Articles"
      value={this.state.search}
      onChange={this.updateSearch.bind(this)}
      />
      {filteredPosts.map((post) => {
           return <Link to={post.node.frontmatter.path} key={post.node.id}><Article post={post} key={post.node.id}/> </Link>
  
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