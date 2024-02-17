import { BlogCard } from "./index";

const Blogs = ({ blogs }) => {
    return (
        <div>
            {blogs.map((blog) => {
                return <BlogCard key={blog.title} blog={blog} />
            })}
        </div>
    );
}

export default Blogs;