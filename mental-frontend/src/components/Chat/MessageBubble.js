import React from 'react';
import './Chat.css';

const MessageBubble = ({ message }) => {
  return (
    <div className={`message-bubble ${message.isUser ? 'user' : 'bot'}`}>
      {message.text}
    </div>
  );
};

export default MessageBubble;
