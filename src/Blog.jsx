import { useState } from "react";

const Blog = ({ addBlog }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const submitBlog = (e) => {
        e.preventDefault();
        if (!title) {

            alert("Please input a blog title!");
            return;

        }
        else if (!body) {
            alert("Please input a blog body!");
            return;
        }
        else {
            addBlog({ title, body })
            setTitle("");
            setBody("");
        }
    }
    return (
        <div>
            <h3>Hello Blog</h3>

            <form action="" className="flex flex-col bg-slate-300 p-4 w-4/6">

                <label htmlFor="">Blog Title</label>
                <input type="text" placeholder="Write the blog title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="outline-none rounded-md py-4 text-left focus:border-1 focus:border-blue-400"
                />

                <label htmlFor="">Write your blog</label>
                <textarea name="" id="" cols="30" rows="10" placeholder="Write your Blog here"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="rounded-md text-left outline-none"
                ></textarea>
                <button onClick={submitBlog} className="bg-slate-700 text-yellow-500 py-4 rounded-md my-4">Post Blog</button>
            </form>
        </div>
    );
}

export default Blog;