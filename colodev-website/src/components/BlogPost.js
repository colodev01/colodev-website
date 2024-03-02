import React from "react";

import './styles/BlogPost.css';

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post" key={post.id}>
      <img src={post.image} alt={`Imagen de ${post.title}`} />
      <h2>{post.title}</h2>
      <h3>{post.subtitle}</h3>
      <button>
        <a href={post.url}>Read More →</a>
      </button>
    </div>
  );
};

export default BlogPost;
