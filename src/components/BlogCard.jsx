function BlogCard({ title, author, date, content }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>

      <p className="text-gray-500 text-sm mb-3">
        By {author} | {date}
      </p>

      <p className="text-gray-700">{content}</p>
    </div>
  );
}

export default BlogCard;