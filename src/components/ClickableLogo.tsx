// Required when using React Hooks
"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface LogoWithNameProps {
  name: string;
  description: string;
}

const LogoWithName: React.FC<LogoWithNameProps> = ({ name, description }) => {
  const [showBubble, setShowBubble] = useState(false);
  const pathname = usePathname();

  const handleLogoClick = () => {
    if (pathname === "/") {
      setShowBubble(true);
      setTimeout(() => setShowBubble(false), 3000); // Hide bubble after 3 seconds
    }
  };

  return (
    <div className="flex items-center relative">
      <div
        className="transition-transform duration-300 ease-in-out hover:scale-110"
        onClick={handleLogoClick}
      >
        <Image
          src="/images/corgi.jpg"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="ml-2">
        <span className="text-white font-semibold">{name}</span>
        <span className="block text-gray-300 text-sm">{description}</span>
      </div>
      {showBubble && (
        <div className="absolute top-full left-0 mt-4 bg-white text-gray-800 p-4 rounded-lg shadow-lg">
          <div className="relative">
            You are already at the Home page, duh...
            <div className="absolute -top-2 left-4 w-4 h-4 bg-white rotate-45 -translate-y-1/2"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoWithName;
