import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  // Sample initial messages for demonstration
  useEffect(() => {
    setMessages([
      { text: 'Hello! How can I assist you today?', sender: 'bot', timestamp: new Date() }
    ]);
  }, []);

  // Scroll to the bottom of chat on new message
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user', timestamp: new Date() }]);
      setInput('');
      // Simulate chatbot response
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: 'Sure, let me find that information for you.', sender: 'bot', timestamp: new Date() }]);
      }, 1000);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-header">
        <div className="chat-avatar">
          <img src="/path/to/chatbot-avatar.png" alt="Chatbot Avatar" />
        </div>
        <div className="chat-title">MentalSynch Assistant</div>
      </div>
      <div className="chat-body">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}-message`}>
            <div className="message-bubble">{message.text}</div>
            <div className="message-timestamp">{message.timestamp.toLocaleTimeString()}</div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="chat-footer">
        <input
          type="text"
          className="chat-input"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="send-button" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
