import { useState } from "react"
import BlogList from "./BlogList"

const App = () => {
  const [blogs, setBlogs] = useState([
    {title:"My new website", body: 'lorem epsum,,,,,,,', author: 'Rafsan',id :1},
    {title:"Welcome party vhia", body: 'lorem epsum,,,,,,,', author: 'Jani',id :2},
    {title: "web dev needed", body: 'lorem epsum,,,,,,,', author: 'Skib',id :3},
  ])



  return (
    <div className="home">
      <BlogList blog = {blogs} title = "All Blogs!!"/>
    </div>
  )
}

export default App
