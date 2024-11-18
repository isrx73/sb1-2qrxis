import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface ChatBoxProps {
  isOpen: boolean;
  onClose: () => void;
  recipientName: string;
}

export default function ChatBox({ isOpen, onClose, recipientName }: ChatBoxProps) {
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message sending logic here
    setMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-semibold">Chat with {recipientName}</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="h-64 p-4 overflow-y-auto">
        {/* Chat messages would go here */}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="p-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}