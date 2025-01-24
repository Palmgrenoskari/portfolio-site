"use client";

import { useState } from "react";
import Image from "next/image";

const wisePhrases = [
  // TODO: Add more phrases, remove bad ones
  "The only true wisdom is in knowing you know nothing.",
  "Life is like code - it works in mysterious ways.",
  "The best debugger is a good night's sleep.",
  "Every expert was once a beginner.",
  "The more you learn, the more you realize how little you know.",
  "Simplicity is the ultimate sophistication.",
  "The journey of a thousand miles begins with a single commit.",
  "Stay curious, keep learning.",
  "Code is poetry written in logic.",
  "The best way to predict the future is to create it.",
];

export default function WiseProfilePicture() {
  const [showBubble, setShowBubble] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState("");

  const handleClick = () => {
    const randomPhrase =
      wisePhrases[Math.floor(Math.random() * wisePhrases.length)];
    setCurrentPhrase(randomPhrase);
    setShowBubble(true);
    setTimeout(() => setShowBubble(false), 3000);
  };

  return (
    <div className="relative group">
      <div className="relative">
        <Image
          src="/images/corgi.jpg"
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-full mb-8 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          onClick={handleClick}
        />
        {!showBubble && (
          <div className="absolute -top-1 -right-6 bg-blue-500 text-white px-3 py-1 rounded-full text-sm animate-bounce">
            Click me!
          </div>
        )}
      </div>
      {showBubble && (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 p-4 rounded-lg shadow-lg max-w-xs text-center">
          <div className="relative">
            {currentPhrase}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
          </div>
        </div>
      )}
    </div>
  );
}
