'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed header */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          flex items-center justify-between whitespace-nowrap
          border-b border-solid border-gray-300
          px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
          transition-all duration-300 ease-in-out
          ${isScrolled
            ? 'bg-[#fbf0db]/95 backdrop-blur-sm shadow-md py-2 sm:py-2.5'
            : 'bg-[#fbf0db] py-3 sm:py-4'
          }
        `}
      >
      <div className={`flex items-center gap-2 sm:gap-3 transition-all duration-300 ${isScrolled ? 'scale-95 origin-left' : ''}`}>
        <div className={`text-primary flex items-center justify-center transition-all duration-300 ${isScrolled ? 'size-10 sm:size-12 md:size-14' : 'size-14 sm:size-16 md:size-20'}`}>
          <Image
            src="/logotrans.png"
            alt="logo"
            width={128}
            height={128}
            sizes="(max-width:640px) 56px, (max-width:768px) 64px, 80px"
            className={`h-auto transition-all duration-300 ${isScrolled ? 'w-10 sm:w-12 md:w-14' : 'w-14 sm:w-16 md:w-20'}`}
            priority
          />
        </div>
        <h2 className={`text-foreground font-bold leading-tight tracking-[-0.015em] transition-all duration-300 ${isScrolled ? 'text-sm sm:text-base md:text-lg' : 'text-base sm:text-lg md:text-xl'}`}>Centre for Integrative Anti-Racism Studies</h2>
      </div>
      <nav
        className="hidden md:flex flex-1 items-center justify-end gap-8"
        aria-label="Primary"
      >
        <ul className="flex items-center gap-9">
          <li>
            <a className="text-foreground text-sm font-medium leading-normal hover:text-primary transition-colors" href="#overview">
              Overview
            </a>
          </li>
          <li>
            <a className="text-foreground text-sm font-medium leading-normal hover:text-primary transition-colors" href="#about">
              Theme
            </a>
          </li>
          <li>
            <a className="text-foreground text-sm font-medium leading-normal hover:text-primary transition-colors" href="#participants">
              Participants
            </a>
          </li>
          <li>
            <a className="text-foreground text-sm font-medium leading-normal hover:text-primary transition-colors" href="#gallery">
              Gallery
            </a>
          </li>
          <li>
            <a className="text-foreground text-sm font-medium leading-normal hover:text-primary transition-colors" href="#partners">
              Partners
            </a>
          </li>
        </ul>
        <a
          href="https://www.eventbrite.ca/e/colonial-ruptures-a-convergence-of-resistance-and-renewal-tickets-1442166622189?aff=oddtdtcreator"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all"
        >
          <span className="truncate">Register</span>
        </a>
      </nav>
      <div className="md:hidden flex items-center gap-1">
        <a
          href="https://www.eventbrite.ca/e/colonial-ruptures-a-convergence-of-resistance-and-renewal-tickets-1442166622189?aff=oddtdtcreator"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md h-8 px-2 sm:px-3 bg-primary text-white text-xs sm:text-sm font-medium leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all"
        >
          <span>Register</span>
        </a>
        <MobileMenu />
      </div>
    </header>
    {/* Spacer to prevent content from being hidden behind fixed header
        Height matches: logo size + vertical padding + border
        Mobile: size-14 (56px) + py-3 (24px) + border (1px) = 81px
        SM: size-16 (64px) + py-4 (32px) + border (1px) = 97px  
        MD+: size-20 (80px) + py-4 (32px) + border (1px) = 113px */}
    <div className="h-[81px] sm:h-[97px] md:h-[113px]" />
    </>
  );
}
