import { Link } from "react-router-dom";
import { Login, Signup, Blog } from "./index"
import { FiLogIn } from "react-icons/fi";
import { IoPersonAddOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { IoHomeOutline } from "react-icons/io5";
import { GrBlog } from "react-icons/gr";

const Navbar = ({ showBlog, handleShowBlog, handleShowLogin, showLogin, handleShowSubmit, showSignup, handleLogin, addBlog }) => {
    return (
        <nav className="flex flex-row justify-evenly py-4">
            <Link to="/" className="mx-2 bg-transparent text-slate-200 px-8 py-2 rounded-md border border-slate-100 flex flex-row items-center hover:text-slate-100 hover:scale-105 duration-150">Home <IoHomeOutline className="mx-2" /></Link>

            <Link to="/blogs" className="mx-2 bg-transparent text-slate-200 px-8 py-2 rounded-md border border-slate-100 flex flex-row items-center hover:text-slate-100 hover:scale-105 duration-150">Blogs <GrBlog className="mx-2" /></Link>
            {/* <div>
                <Link to="/login" className="mx-2 bg-blue-500 px-8 py-2 rounded-md border-2" onClick={handleShowLogin}>Login</Link>
                <Link to="/signup" onClick={handleShowSubmit}>Signup</Link>
            </div> */}
            <button onClick={handleShowBlog} className="mx-2 bg-transparent text-slate-200 px-8 py-2 rounded-md border border-slate-100 flex flex-row items-center hover:text-slate-100 hover:scale-105 duration-150">Write New Blog <TfiWrite className="mx-2" /></button>
            <button onClick={handleShowLogin} className="mx-2 bg-transparent text-slate-100 px-8 py-2 rounded-md border border-slate-100 flex flex-row items-center hover:text-slate-100 hover:scale-105 duration-150">Login <FiLogIn className="mx-2" /></button>
            <button onClick={handleShowSubmit} className="mx-2 bg-transparent text-slate-200 px-8 py-2 rounded-md border border-slate-100 flex flex-row items-center hover:text-slate-100 hover:scale-105 duration-150">Signup <IoPersonAddOutline className="mx-2" /></button>
            {showBlog && <Blog addBlog={addBlog} />}
            {showLogin && <Login handleLogin={handleLogin} />}
            {showSignup && <Signup />}
        </nav>
    );
}

export default Navbar;