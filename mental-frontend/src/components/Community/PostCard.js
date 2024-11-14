import React from 'react';
import './Community.css';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p><small>By {post.author}</small></p>
    </div>
  );
};

export default PostCard;
