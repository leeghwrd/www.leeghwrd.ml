import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
      <section className="section">
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
    </section>
)

export default PostLink