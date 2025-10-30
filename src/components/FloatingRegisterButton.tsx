'use client';

import { useEffect, useState } from 'react';

export default function FloatingRegisterButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="#register" // Replace with eventbrite URL when ready
      className={`fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Register for conference"
    >
      <span className="text-xs font-medium text-center leading-tight">
        Register
      </span>
    </a>
  );
}
