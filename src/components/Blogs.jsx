
import blogPosts from '../data/blogPosts.json';

export default function Blogs() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">My Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              <a href={post.medium_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                {post.title}
              </a>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{post.date}</p>
            <p className="text-gray-700 dark:text-gray-300">{post.summary}</p>
          </div>
        ))}
      </div>
      {blogPosts.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">No blog posts yet. Check back soon!</p>
      )}
    </div>
  );
}