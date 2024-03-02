import React from "react";
import { BlogPost } from "../components";
import { posts } from "../data/data";

import './styles/Blog.css';

const Blog = () => {
  return (
    <div className="blog-wrapper">
      <div className="blog-content">
        {posts.map((post, index) => (
          <BlogPost key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
