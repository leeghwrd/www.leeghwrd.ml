---
title: "React Conditional Rendering"
path: /articles/react-conditional-rendering
thumbnail: "./react.png"
tags: ["javascript", "react"]
date: 2019-03-10
yearSlug: "2019"
description: >
  How I use conditional rendering of prev and next links,
  for my own personal site. 
---
Using GatsbyJS for my personal site has been a pleasure. It's built on top of React. So pretty much most React documetation also apply to whats under the hood of GatsbyJS.


Conditional rendering is very handy. Below is a snippet of code from my sites post template.

<div class="filename">src/templates/blog-post.js</div>

```jsx
<div className="pn-container">
      {prev === false ? null : (
        <div className="prev">
        {prev && <> <Link to={prev.frontmatter.path}>
            <button type="button" className="pn-button pn-button-left">&laquo;</button>
            </Link>
             <p className="pn-title pn-title-left">{prev.frontmatter.title}</p>
             </>
        }
        
          </div>
      )}
      {next === false ? null : (
          <div className="next">
        {next && <> <p className="pn-title pn-title-right">{next.frontmatter.title}</p>

<Link to={next.frontmatter.path}>
              <button type="button" className="pn-button pn-button-right">&raquo;</button>
            </Link>
            </>
          }
           
          </div>
      )}
      </div>
```
