import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href="tel:+919841078770"
        className="bg-blue-600 hover:bg-blue-700 w-12 h-12 group relative rounded-full flex items-center justify-center shadow-lg"
        aria-label="Call us"
      >
        <Phone className="text-white" size={20} />
        <span className="absolute right-14 bg-gray-800 px-3 py-1 rounded text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Call Us
        </span>
      </a>

      <a
        href="https://wa.me/919841078770"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 w-12 h-12 group relative rounded-full flex items-center justify-center shadow-lg"
        aria-label="WhatsApp chat"
      >
        <MessageCircle className="text-white" size={20} />
        <span className="absolute right-14 bg-gray-800 px-3 py-1 rounded text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          WhatsApp
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;