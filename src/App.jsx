import { useState } from 'react'
import { Blog, Blogs } from './index'

const App = () => {
  const [blogs, setBlogs] = useState([
    {
      id:1,
      text:"Home is the best"
    }
  ]);
  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
    console.log(blog);
  }
  return (
    <div>
      <h3 className='text-2xl text-red-500'>Hello</h3>
      <Blog addBlogs={addBlog} />
      <Blogs />
    </div>

  )
}

export default App
