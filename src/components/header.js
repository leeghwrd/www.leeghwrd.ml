import React from 'react'
import brandImg from '../images/brand.png'

const Header = ({ siteTitle }) => (
  <nav class="nav">
        <div class="nav-container">
            <div class="brand">
                <a href="/"><img src={brandImg} class="brand-icon"></img><span>Lee Howard</span></a>
            </div>
            <div class="links">
                    <a href="/about/">About me</a>
                    <a href="/articles/">Articles</a>
                    <a href="/resources/">Newsletter</a>
            </div>
            <div class="extra">
            <a href="https://github.com/lghoward" class="nav-icon" target="_blank">
                <i class="icon-github"></i>
            </a>
            <a href="https://github.com/lghoward" class="nav-icon" target="_blank">
                <i class="icon-twitter"></i>
            </a>
            <a href="https://github.com/lghoward" class="nav-icon" target="_blank">
                <span class="blue"><i class="icon-linkedin-sign"></i></span>
            </a>
            </div>
        </div>
    </nav>
)

export default Header
