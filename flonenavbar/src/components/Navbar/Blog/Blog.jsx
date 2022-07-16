import React from 'react'

const Blog = ({blog,openBlog,closeBlog}) => {
  return (
    <div className={blog ? "homecontainer" : "homecontainer active"} onMouseOver={openBlog} onMouseLeave={closeBlog}  >
    <div> 
        <ul>
            <li><a href="#"> Blog Standard</a></li>
            <li><a href="#"> Blog No Sidebar</a></li>
            <li><a href="#"> Blog Right Sidebar</a></li>
            <li><a href="#"> Blog Details Standard</a></li>
        </ul>
        </div>

  </div>
  )
}

export default Blog;