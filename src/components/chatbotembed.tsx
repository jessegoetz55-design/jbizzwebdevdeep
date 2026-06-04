"use client";
import React, { useState } from 'react';

const ChatbotEmbed: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gold text-black p-4 rounded-full shadow-lg hover:scale-110 transition-all"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-gray-900 rounded-2xl shadow-2xl border border-gold/30 overflow-hidden flex flex-col">
          <div className="bg-gold text-black p-4 flex justify-between items-center">
            <span className="font-bold">AI Lead Assistant</span>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70">✕</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-gray-800 rounded-lg p-3 max-w-[80%]">
              <p className="text-sm text-white">Hey! Want a free lead audit? 👋</p>
            </div>
          </div>
          <div className="p-4 border-t border-gray-800">
            <div className="flex gap-2">
              <input type="text" placeholder="Ask about pricing..." className="flex-1 px-3 py-2 bg-black border border-gray-700 rounded-lg text-sm text-white focus:border-gold focus:outline-none" />
              <button className="bg-gold text-black px-4 py-2 rounded-lg font-bold text-sm">Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotEmbed;