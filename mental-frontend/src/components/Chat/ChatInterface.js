import React, { useState, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';
import './Chat.css';

const ChatInterface = ({ messages, onSendMessage }) => {
  return (
    <div className="chat-interface">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
      </div>
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default ChatInterface;
