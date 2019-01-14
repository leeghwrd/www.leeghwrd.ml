import React from 'react'
import { Link } from "gatsby"
import brandImg from '../images/brand.png'
import Headroom from 'react-headroom'

const Header = ({ siteTitle }) => (

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
            <a href="https://github.com/lghoward" className="nav-icon" target="_blank" rel="noopener noreferrer">
                <i className="icon-github"></i>
            </a>
            <a href="https://twitter.com/lghwrd" className="nav-icon" target="_blank" rel="noopener noreferrer">
                <i className="icon-twitter"></i>
            </a>
            <a href="https://github.com/lghoward" className="nav-icon" target="_blank" rel="noopener noreferrer">
                <span className="blue"><i className="icon-linkedin-sign"></i></span>
            </a>
            </div>
        </div>
    </nav>
</Headroom>

)

export default Header
