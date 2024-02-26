import { BlogCard } from "../index";

const Blogs = ({ blogs }) => {
    return (
        <div className="grid grid-cols-3 gap-2">
            {blogs.map((blog) => {
                return <BlogCard key={blog.title} blog={blog} />
            })}
        </div>
    );
}

export default Blogs;