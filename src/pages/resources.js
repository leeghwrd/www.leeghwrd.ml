import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Resources = () => (
  <Layout>
    <div id="resources">
   <h1>Resources</h1>
      <h2>Tools</h2>
        <ul>
          <li><Link to="https://www.google.com">Google</Link> - Everyone needs to search for something from time to time.</li>
          <li><Link to="https://code.visualstudio.com">VSCode</Link> - Great code editor, I use this for web development on mac.</li>
        </ul>
   <h2>Music</h2>
   <ul>
     <li><Link to="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=video&cd=3&cad=rja&uact=8&ved=0ahUKEwj-05XvqNjfAhXLs1QKHTGrBFMQtwIIMDAC&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZKFwQFBwQFU&usg=AOvVaw1M5izB06eTUvBqPALCUU4z">50 Famous Pieces Of Classical Music</Link> - Helps me concentrate.</li>
   </ul>
   <h2>Books</h2>
   <ul>
   <li><Link to="https://docs.swift.org/swift-book/TheSwiftProgrammingLanguageSwift42.epub">Swift programming language</Link> - Apple's awesome programming language.</li>
   </ul>
   </div>
  </Layout>
)

export default Resources
