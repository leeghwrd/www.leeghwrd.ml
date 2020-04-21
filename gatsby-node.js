const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
    graphql(`
      {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                path
                title
              }
            }
          }
        }
      }
    `).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }
      const posts = result.data.allMarkdownRemark.edges;
      // Create blog posts pages.
      posts.forEach(({ node }, index) => {
        const path = node.frontmatter.path;
        createPage({
          path,
          component: blogPostTemplate,
          context: {
            prev: index === 0 ? null : posts[index - 1].node,
            next: index === posts.length - 1 ? null : posts[index + 1].node,
          },
        });
      });
      resolve();
    });
  });
};
