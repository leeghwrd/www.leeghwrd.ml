import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import { Link, graphql } from "gatsby"

import Layout from "../components/baseLayoutOverrideForBlogPost"

export default function Template({ data, pageContext }) {

  const { markdownRemark: post } = data
  const { prev, next } = pageContext
  
  return (
    <Layout>
      <Helmet title={`Lee Howard | ${post.frontmatter.title}`} />
      <article className="article">

      <div className="container">
      <header className="single-header">
        <img alt="Post Graphics" width="64" height="64" src={post.frontmatter.thumbnail.childImageSharp.fluid.src}/>
        <h1>{post.frontmatter.title}</h1>
        <time className="post-page-date">{post.frontmatter.date}</time>
      </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </article>

      <section className="section">
      <div className="container">
      <div className="pn-container">
      {prev === false ? null : (
        <div className="prev">
        {prev && <> <Link to={prev.frontmatter.path}>
              <h4 className="pn-header">Previous</h4>
             <p className="pn-title pn-title-left">
             &#8592; {prev.frontmatter.title}</p>
             </Link>
             </>
        }
        
          </div>
      )}
      {next === false ? null : (
          <div className="next">
        {next && <> 
        <Link to={next.frontmatter.path}>
        <h4 className="pn-header pn-header-right">Next</h4>
        <p className="pn-title pn-title-right">
        {next.frontmatter.title} &#8594;</p> 
            </Link>
            </>
          }
           
          </div>
      )}
      </div>
      </div>
      </section>
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.any,
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