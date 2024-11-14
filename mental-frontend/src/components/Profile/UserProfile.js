import React from 'react';
import './Profile.css';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <img src={user.avatar || '/assets/images/avatar-placeholder.png'} alt="User Avatar" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserProfile;
