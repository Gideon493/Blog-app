import { Link } from "react-router-dom";
import { Login, Signup, Blog } from "./index"

const Navbar = ({ showBlog, handleShowBlog, handleShowLogin, showLogin, handleShowSubmit, showSignup, handleLogin, addBlog }) => {
    return (
        <nav className="flex flex-row justify-evenly py-4">
            <Link to="/">Home</Link>

            <Link to="/blogs">Blogs</Link>
            {/* <div>
                <Link to="/login" className="mx-2 bg-blue-500 px-8 py-2 rounded-md border-2" onClick={handleShowLogin}>Login</Link>
                <Link to="/signup" onClick={handleShowSubmit}>Signup</Link>
            </div> */}
            <button onClick={handleShowBlog} className="mx-2 bg-blue-500 px-8 py-2 rounded-md border-2">Write New Blog</button>
            <button onClick={handleShowLogin} className="mx-2 bg-blue-500 px-8 py-2 rounded-md border-2">Login</button>
            <button onClick={handleShowSubmit} className="mx-2 bg-blue-500 px-8 py-2 rounded-md border-2">Signup</button>
            {showBlog && <Blog addBlog={addBlog} />}
            {showLogin && <Login handleLogin={handleLogin} />}
            {showSignup && <Signup />}
        </nav>
    );
}

export default Navbar;