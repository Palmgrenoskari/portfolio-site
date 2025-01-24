"use client";

import { useState } from "react";
import Image from "next/image";

const wisePhrases = [
  // TODO: Add more phrases, remove bad ones
  "The only true wisdom is in knowing you know nothing.",
  "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present. – Master Oogway",
  "Anyone can cook. – Chef Gusteau",
  "The best debugger is a good night's sleep.",
  "Every expert was once a beginner.",
  "To infinity and beyond! – Buzz Lightyear",
  "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
  "The journey of a thousand miles begins with a single commit.",
  "Comparison is the thief of joy. – Theodore Roosevelt",
  "Not all those who wander are lost. – J.R.R. Tolkien",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Imagination is more important than knowledge. – Albert Einstein",
  "Do or do not. There is no try. – Yoda",
  "The greatest teacher, failure is. - Yoda",
];

export default function WiseProfilePicture() {
  const [showBubble, setShowBubble] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const randomPhrase =
      wisePhrases[Math.floor(Math.random() * wisePhrases.length)];
    setCurrentPhrase(randomPhrase);
    setShowBubble(true);

    // Store the new timeout ID
    const newTimeoutId = setTimeout(() => setShowBubble(false), 5000);
    setTimeoutId(newTimeoutId);
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
