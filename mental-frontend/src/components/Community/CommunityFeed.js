import React from 'react';
import PostCard from './PostCard';
import CreatePost from './CreatePost';
import './Community.css';

const CommunityFeed = ({ posts, onCreatePost }) => {
  return (
    <div className="community-feed">
      <CreatePost onCreatePost={onCreatePost} />
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};

export default CommunityFeed;
