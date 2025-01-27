"use client";

import { useState } from "react";
import Image from "next/image";

const wisePhrases = [
  {
    message:
      "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.",
    author: "Master Oogway",
  },
  {
    message:
      "I know that I am intelligent, because I know that I know nothing.",
    author: "Socrates",
  },
  {
    message: "Life is very simple but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    message: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
  },
  {
    message:
      "The greatest enemy of knowledge is not ignorance; it is the illusion of knowledge.",
    author: "Stephen Hawking",
  },
  {
    message:
      "The difference between genius and stupidity is that genius has its limits.",
    author: "Albert Einstein",
  },
  {
    message:
      "If at first you don’t succeed, then skydiving definitely isn’t for you.",
    author: "Steven Wright",
  },
  {
    message: "The best debugger is a good night's sleep.",
    author: "Unknown",
  },
  {
    message: "Every expert was once a beginner.",
    author: "Rutherford B. Hayes",
  },
  {
    message: "To infinity and beyond!",
    author: "Buzz Lightyear",
  },
  {
    message: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  {
    message: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
  },
  {
    message: "Comparison is the thief of joy.",
    author: "Theodore Roosevelt",
  },
  {
    message: "Not all those who wander are lost.",
    author: "J.R.R. Tolkien",
  },
  {
    message: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    message: "Imagination is more important than knowledge.",
    author: "Albert Einstein",
  },
  {
    message:
      "We are what we repeatedly do, therefore, excellence is not an act, but a habit",
    author: "Aristotle",
  },
  {
    message:
      "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead",
  },
  {
    message: "Do or do not. There is no try.",
    author: "Yoda",
  },
  {
    message: "The greatest teacher, failure is.",
    author: "Yoda",
  },
];

interface WisePhrase {
  message: string;
  author: string;
}

interface SpeechBubbleProps {
  phrase: WisePhrase;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ phrase }) => {
  return (
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 p-4 rounded-lg shadow-lg w-max max-w-[80vw]">
      <div className="relative">
        <div className="flex flex-col">
          <span className="font-semibold whitespace-normal">
            {phrase.message}
          </span>
          <span className="block text-gray-500 text-sm mt-2">
            - {phrase.author}
          </span>
        </div>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
      </div>
    </div>
  );
};

export default function WiseProfilePicture() {
  const [showBubble, setShowBubble] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState<WisePhrase>(
    wisePhrases[0]
  );
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const randomPhrase =
      wisePhrases[Math.floor(Math.random() * wisePhrases.length)];
    setCurrentPhrase(randomPhrase);
    setShowBubble(true);

    const newTimeoutId = setTimeout(() => setShowBubble(false), 6000);
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
          className="rounded-full mb-8 cursor-pointer"
          onClick={handleClick}
        />
        <Image
          src="/images/intelligent_corgi.png"
          alt="Intelligent Profile Picture"
          width={300}
          height={300}
          className={`rounded-full mb-8 cursor-pointer absolute top-0 left-0 transition-opacity duration-1000 ${
            showBubble ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClick}
        />
        {!showBubble && (
          <div className="absolute -top-1 -right-6 bg-blue-500 text-white px-3 py-1 rounded-full text-sm animate-bounce">
            Click me!
          </div>
        )}
      </div>
      {showBubble && <SpeechBubble phrase={currentPhrase} />}
    </div>
  );
}
