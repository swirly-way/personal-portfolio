import { useState } from "react";
import { blogs } from "../data/blogs";

export default function ITBlog() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="itblog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">IT Blog</h2>

        <div className="space-y-6">
          {blogs.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelected(selected === index ? null : index)}
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-200 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {selected === index ? (
                <p className="text-gray-700">{post.content}</p>
              ) : (
                <p className="text-gray-500 italic">Click to read more...</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
