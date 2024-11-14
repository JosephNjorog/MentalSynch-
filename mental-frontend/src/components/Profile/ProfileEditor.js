import React, { useState } from 'react';
import './Profile.css';

const ProfileEditor = ({ user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [avatar, setAvatar] = useState(user.avatar);

  const handleSave = () => {
    onSave({ name, bio, avatar });
  };

  return (
    <div className="profile-editor">
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name" 
      />
      <textarea 
        value={bio} 
        onChange={(e) => setBio(e.target.value)} 
        placeholder="Bio"
      />
      <input 
        type="text" 
        value={avatar} 
        onChange={(e) => setAvatar(e.target.value)} 
        placeholder="Avatar URL" 
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ProfileEditor;
