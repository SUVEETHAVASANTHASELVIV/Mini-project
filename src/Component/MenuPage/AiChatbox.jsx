import React, { useState } from 'react';
import pic from '../../Picture/bot-pic4.png'

const AIChatbox = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (!input.trim()) return; // Prevent sending empty messages

    const response = await fetch('/api/ai-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });
    const data = await response.json();
    setMessages([...messages, { user: input, ai: data.reply }]);
    setInput(''); // Clear input after sending
  };

  return (
    <div className="flex flex-col h-[400px] w-[350px] bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
        <div className="text-sm font-semibold text-gray-700">Chat</div>
        <button onClick={onClose} className="text-gray-700 hover:text-gray-900">
          &#10005;
        </button>
      </div>
      
      {/* Chat area */}
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <img src={pic} alt="Smartbite Logo" className="mb-4 w-12 h-12" />
            <h2 className="text-lg font-semibold text-gray-700">SmartBite</h2>
            <p className="text-sm text-gray-500">Your everyday AI companion</p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white text-sm rounded-lg p-2 max-w-xs">
                  {msg.user}
                </div>
              </div>
              <div className="flex justify-start mt-2">
                <div className="bg-gray-200 text-gray-800 text-sm rounded-lg p-2 max-w-xs">
                  {msg.ai}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input area */}
      <div className="border-t border-gray-200 p-2 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-lg text-black focus:outline-none text-sm"
          placeholder="Ask me anything or type '@'"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AIChatbox;
