import React, { useState } from 'react';
import './Chat.css';

const ChatInput = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="chat-input">
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        placeholder="Type a message" 
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInput;
