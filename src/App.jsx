import { useState } from 'react'
import { Blog, Blogs } from './index'

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
    console.log(blog);
  }
  return (
    <div className='p-4'>
      <h3 className='text-2xl text-red-500 my-4 font-bold'>Welcome to my Blogs</h3>
      <Blog addBlog={addBlog} />
      <Blogs blogs={blogs} />
    </div>

  )
}

export default App
