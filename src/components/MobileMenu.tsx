'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavLink {
  name: string;
  href: string;
}

const defaultNavLinks: NavLink[] = [
    { href: '#overview', name: 'Overview' },
    { href: '#why-now', name: 'Why Now' },
    { href: '#partners', name: 'Partners' },
    { href: '#gallery', name: 'Gallery' },
    { href: '#about', name: 'Theme' },
    { href: '#call-for-abstracts', name: 'Call for Papers' },
];

export default function MobileMenu({ navLinks = defaultNavLinks }: { navLinks?: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={toggleMenu}
        className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-text-light dark:text-text-dark hover:bg-card-light dark:hover:bg-card-dark transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 w-64 bg-background-light dark:bg-background-dark shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-border-light dark:border-border-dark">
                <h2 className="text-lg font-bold text-text-light dark:text-text-dark">Menu</h2>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg text-text-light dark:text-text-dark hover:bg-card-light dark:hover:bg-card-dark transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1">
                  {navLinks.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="block px-4 py-3 text-text-light dark:text-text-dark hover:bg-card-light dark:hover:bg-card-dark hover:text-primary dark:hover:text-primary transition-colors font-medium"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Register Button in Menu */}
              <div className="p-4 border-t border-border-light dark:border-border-dark">
                <a
                  href="https://www.eventbrite.ca/e/colonial-ruptures-a-convergence-of-resistance-and-renewal-tickets-1442166622189?aff=oddtdtcreator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center rounded-lg h-12 px-4 bg-primary text-white text-base font-medium leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
