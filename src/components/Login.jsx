import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ handleLogin }) => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="w-3/6 absolute mt-20 text-center">
            <h3>Login Here</h3>
            <form action="" className="bg-slate-200 flex flex-col w-4/5 p-4 my-4 rounded-md border-2 border-slate-400">
                <input type="text" value={username} onChange={(e) => setUserName(e.value.target)} placeholder="Enter Username" className="outline-none p-2 my-2 border-2 border-slate-400 rounded-md" />
                <input type="text" value={password} onChange={(e) => setPassword(e.value.target)} placeholder="Enter Password" className="outline-none p-2 my-2 border-2 border-slate-400 rounded-md" />
                <button onClick={handleLogin} className="outline-none py-2 my-2 bg-pink-600 rounded-md text-slate-200">Login</button>
                <div className="flex flex-row">
                    <h3>Don't have an account</h3> <Link to="/signup" className="mx-2 text-blue-500">Signup</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;