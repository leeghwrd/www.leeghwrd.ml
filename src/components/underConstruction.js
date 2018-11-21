import React from 'react'
import { Link } from 'gatsby'

const UnderConstruction = () => (
    <section className="section">
    <h1 style={{
      color: `#d3d3d3`,
      textAlign: `center`,
      fontWeight: `bold`
    }}
  >
  Under Construction...
  </h1>
  <p style={{
    fontSize: 26,
      color: `#d3d3d3`,
      textAlign: `center`,
      textShadow: `-1 0 #d3d3d3`
    }}
  >
    Thank You for visiting! Have a look around, and please come back soon.
  </p>

  <div style={{
      display: `flex`,
      margin: `0 auto`,
      padding: 0,
      justifyContent: `center`,
    }}
  >
  <Link to="/about"><button style={{
      backgroundColor: `#d3d3d3`,
      color: `#111`,
      width: 100,
      height: `auto`,
      margin: `0 20px`,
      padding: 10,
      border: `1px solid #f3f3f3`,
      borderRadius: 40
    }}
  >About Me</button></Link>
  
  <Link to="/articles"><button style={{
      backgroundColor: `#d3d3d3`,
      color: `#111`,
      width: 100,
      height: `auto`,
      margin: `0 20px`,
      padding: 10,
      border: `1px solid #f3f3f3`,
      borderRadius: 40
    }}
  >Artciles</button></Link>
  </div>
  </section>
)

export default UnderConstruction
