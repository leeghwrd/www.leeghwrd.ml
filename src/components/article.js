import React from "react";
import PropTypes from "prop-types";

const Article = ({ post }) => (
  <>
    <div className="post-thumbnail">
      <img
        src={post.node.frontmatter.thumbnail.childImageSharp.fluid.src}
        alt="post"
      ></img>
    </div>
    <div className="post-title">{post.node.frontmatter.title}</div>
    <span className="post-date">
      <time>{post.node.frontmatter.date}</time>
    </span>
  </>
);
export default Article;

Article.propTypes = {
  post: PropTypes.object,
};
