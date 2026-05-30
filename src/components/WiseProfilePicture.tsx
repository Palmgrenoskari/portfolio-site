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
      "If at first you don't succeed, then skydiving definitely isn't for you.",
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

function SpeechBubble({ phrase }: { phrase: WisePhrase }) {
  return (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-[80vw] sm:max-w-xs bg-surface border border-border text-fg p-3 rounded-md shadow-lg z-10">
      <p className="font-sans text-sm leading-relaxed">{phrase.message}</p>
      <p className="font-mono text-xs text-muted mt-2">— {phrase.author}</p>
      <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-surface border-b border-r border-border rotate-45" />
    </div>
  );
}

export default function WiseProfilePicture() {
  const [showBubble, setShowBubble] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState<WisePhrase>(
    wisePhrases[0]
  );
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    if (timeoutId) clearTimeout(timeoutId);

    const randomPhrase =
      wisePhrases[Math.floor(Math.random() * wisePhrases.length)];
    setCurrentPhrase(randomPhrase);
    setShowBubble(true);

    const newTimeoutId = setTimeout(() => setShowBubble(false), 6000);
    setTimeoutId(newTimeoutId);
  };

  return (
    <div className="relative inline-block">
      {showBubble && <SpeechBubble phrase={currentPhrase} />}
      <button
        type="button"
        onClick={handleClick}
        aria-label="A wise corgi"
        title="Ask the corgi for wisdom"
        className="block rounded-full ring-1 ring-border hover:ring-accent transition-[box-shadow,transform] hover:scale-[1.03]"
      >
        <Image
          src="/images/corgi.jpg"
          alt="Profile"
          width={128}
          height={128}
          className="rounded-full"
          priority
        />
        <Image
          src="/images/intelligent_corgi.png"
          alt=""
          width={128}
          height={128}
          className={`rounded-full absolute top-0 left-0 transition-opacity duration-700 ${
            showBubble ? "opacity-100" : "opacity-0"
          }`}
        />
      </button>
    </div>
  );
}
