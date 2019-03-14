import React from 'react'
import { Link } from "gatsby"
import brandImg from '../images/brand.png'
import Headroom from 'react-headroom'

import ThemeContext from '../context/ThemeContext'

const Header = ({ siteTitle }) => (
<ThemeContext.Consumer>
    {theme => (
<Headroom style={{
    position: "fixed"   // overrides default 'relative postion' - caused jumping nav.
}}>
  <nav className="nav">
  
        <div className="nav-container">
            <div className="brand">
                <Link to="/"><img src={brandImg} className="brand-icon" alt="brand"/><span>{siteTitle}</span></Link>
            </div>
            <div className="links">
                    <Link to="/about/">About me</Link>
                    <Link to="/articles/">Articles</Link>
                    <Link to="/resources/">Resources</Link>
            </div>
            <div className="extra">
            <button className="dark-switcher" onClick={ theme.toggleDark }>
            {theme.dark ? <span> ☀ </span> : <span> ☾ </span>}
          </button>
            <a href="https://github.com/leeghwrd" aria-label="github" className="nav-icon" target="_blank" rel="noopener noreferrer">
                <i className="icon-github"></i>
            </a>
            <a href="https://twitter.com/leeghwrd" aria-label="twitter" className="nav-icon" target="_blank" rel="noopener noreferrer">
                <i className="icon-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/leeghwrd" aria-label="linkedin" className="nav-icon" target="_blank" rel="noopener noreferrer">
                <i className="icon-linkedin-sign" style={{
                    color: `#0077b5`
                }}></i>
            </a>
            </div>
        </div>
    </nav>
</Headroom>
 )}
 </ThemeContext.Consumer>

)

export default Header
