import { useState } from "react"

const App = () => {
  const [blogs, setBlogs] = useState([
    {title:"My new website", body: 'lorem epsum,,,,,,,', author: 'Rafsan',id :1},
    {title:"Welcome party vhia", body: 'lorem epsum,,,,,,,', author: 'Jani',id :2},
    {title: "web dev needed", body: 'lorem epsum,,,,,,,', author: 'Skib',id :3},
  ])



  return (
    <div className="home">
      {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
            


          </div>
      ))

      }
    </div>
  )
}

export default App
