const BlogCard = ({ blog }) => {

    return (
        <div className="bg-slate-300 my-4 p-4 rounded-md">
            <h2 className="text-3xl text-blue-600">{blog.title}</h2>
            <p>{blog.body}</p>
        </div>
    )
}

export default BlogCard;