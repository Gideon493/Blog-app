import { useState } from 'react'
import { Blogs, Home, Navbar } from './index'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showBlog, SetShowBlog] = useState(false);
  const [login, setLogin] = useState(false);
  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
    console.log(blog);
    SetShowBlog(false);
  };
  const handleShowLogin = () => {

    setShowLogin(true);

  }
  const handleShowSubmit = () => {

    setShowSignup(true);

  }
  const handleShowBlog = () => {
    SetShowBlog(true)
  }
  const handleLogin = (e) => {
    e.prevntDefault();
    setLogin(false)
  }

  return (

    <div className='p-4'>
      <BrowserRouter>
        <Navbar
          showBlog={showBlog}
          handleShowBlog={handleShowBlog}
          addBlog={addBlog}
          handleLogin={handleLogin}
          handleShowLogin={handleShowLogin}
          showLogin={showLogin}
          handleShowSubmit={handleShowSubmit}
          showSignup={showSignup} />
        <Routes>
          <Route index element={<Home />} />

          <Route path='/blogs' element={<Blogs blogs={blogs} />} />
        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App