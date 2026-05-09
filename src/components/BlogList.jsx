import BlogCard from "./BlogCard";

function BlogList({ blogs }) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          author={blog.author}
          date={blog.date}
          content={blog.content}
        />
      ))}
    </div>
  );
}

export default BlogList;