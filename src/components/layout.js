import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

import "../scss/layout.scss";

import ThemeContext from "../context/ThemeContext";

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div className={theme.dark ? "dark" : "light"}>
          <Helmet
            title={site.siteMetadata.title}
            meta={[
              { name: "description", content: "Home of Lee Howard" },
              {
                name: "keywords",
                content: "development, c, c++, javascript, react,",
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header siteTitle={site.siteMetadata.title} />
          <main id="main-content">
            <div className="container">{children}</div>
          </main>

          <Footer />
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
