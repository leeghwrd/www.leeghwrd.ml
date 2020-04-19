import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { FaBeer } from "react-icons/fa";

export default function HomeIndex({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <section className="section">
        <h2>
          Latest Articles
          <Link className="view-all" to="/articles/">
            view all
          </Link>
        </h2>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => (
            <Link to={post.frontmatter.path} key={post.id} className="post">
              <div className="post-thumbnail">
                <img
                  src={post.frontmatter.thumbnail.childImageSharp.fluid.src}
                  alt="post"
                ></img>
              </div>
              <div className="post-title">{post.frontmatter.title}</div>
              <span className="post-date">
                <time>{post.frontmatter.date}</time>
              </span>
            </Link>
          ))}
      </section>

      <section id="projects" className="section">
        <h2>
          Projects
          <a
            className="view-all"
            href="https://github.com/leeghwrd?tab=repositories"
          >
            view all
          </a>
        </h2>
        <a className="post" href="https://github.com/leeghwrd/CocktailsDB">
          <div className="post-thumbnail">
            <FaBeer />
          </div>
          <div className="post-title">CocktailsDB</div>
          <div className="post-description">
            iOS/Swift4 app - generates a random drink with the press of a
            button.
          </div>
        </a>
      </section>
    </Layout>
  );
}

HomeIndex.propTypes = {
  data: PropTypes.object
};

export const pageQuery = graphql`
  query HomeIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
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
`;
