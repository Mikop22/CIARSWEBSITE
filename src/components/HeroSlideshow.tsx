"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const SLIDESHOW_IMAGES = [
  "/pastconference/IMG_2476.jpg",
  "/pastconference/IMG_1952.jpg",
  "/pastconference/IMG_1832.jpg",
  "/pastconference/IMG_2092.jpg",
  "/pastconference/IMG_2010.jpg",
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {SLIDESHOW_IMAGES.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Conference slideshow"
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
          />
          {/* Dark overlay for text readability - slightly darker on mobile */}
          <div className="absolute inset-0 bg-black/65 sm:bg-black/60" />
        </div>
      ))}
    </div>
  );
}
