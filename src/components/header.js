import React from "react";
import { Link } from "gatsby";
import brandImg from "../images/brand.jpg";
import Headroom from "react-headroom";
import ThemeContext from "../context/ThemeContext";
import PropTypes from "prop-types";

import { FaSun, FaMoon, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Header = ({ siteTitle }) => (
  <ThemeContext.Consumer>
    {(theme) => (
      <Headroom upTolerance={4} downTolerance={4}>
        <nav className="nav">
          <div className="nav-container">
            <div className="brand">
              <Link to="/">
                <img src={brandImg} className="brand-icon" alt="brand" />
                <span>{siteTitle}</span>
              </Link>
            </div>
            <div className="links">
              <Link to="/about/">About me</Link>
              <Link to="/articles/">Articles</Link>
              <Link to="/resources/">Resources</Link>
            </div>
            <div className="extra">
              <button
                className="dark-switcher"
                aria-label="dark switcher"
                onClick={theme.toggleDark}
              >
                {theme.dark ? (
                  <FaSun className="sun-icon" />
                ) : (
                  <FaMoon className="moon-icon" />
                )}
              </button>
              <a
                href="https://github.com/leegibsonhoward"
                aria-label="github"
                className="nav-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="github-icon" />
              </a>
              <a
                href="https://twitter.com/leegibsonhoward"
                aria-label="twitter"
                className="nav-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="twitter-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/leeghwrd"
                aria-label="linkedin"
                className="nav-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="linkedin-icon" />
              </a>
              <div></div>
            </div>
          </div>
        </nav>
      </Headroom>
    )}
  </ThemeContext.Consumer>
);

export default Header;

Header.propTypes = {
  siteTitle: PropTypes.string,
};
