"use client";
import { useEffect } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  index: number;
  onClose: () => void;
  onChange?: (index: number) => void;
};

export default function Lightbox({ images, index, onClose, onChange }: Props) {
  const current = index;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange?.(Math.min(images.length - 1, current + 1));
      if (e.key === "ArrowLeft") onChange?.(Math.max(0, current - 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, images.length, onClose, onChange]);

  const prev = () => onChange?.(Math.max(0, current - 1));
  const next = () => onChange?.(Math.min(images.length - 1, current + 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-6 right-6 text-white bg-black/30 rounded-full p-2"
      >
        ✕
      </button>

      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-black/30 rounded-full p-2"
      >
        ‹
      </button>

      <div className="max-w-[90vw] max-h-[90vh] w-auto h-auto">
        <Image
          src={images[current]}
          alt=""
          width={1600}
          height={1000}
          className="max-w-full max-h-[90vh] object-contain rounded-md shadow-lg"
          priority
        />
      </div>

      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-black/30 rounded-full p-2"
      >
        ›
      </button>
    </div>
  );
}
