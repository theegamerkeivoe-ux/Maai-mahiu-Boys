import React, { useEffect } from 'react';
import { GalleryItem } from '../types/school';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Bar with Info & Close */}
      <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between text-white z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#C8A858] tabular-nums">
            {currentIndex + 1} / {items.length}
          </span>
          <span className="text-white/30">|</span>
          <span className="text-xs uppercase tracking-widest text-white/80 font-semibold flex items-center gap-1.5">
            <Tag className="w-3 h-3 text-[#C8A858]" />
            <span>{currentItem.category}</span>
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Main Image Frame */}
      <div className="max-w-5xl max-h-[80vh] px-4 flex flex-col items-center justify-center z-10">
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="max-h-[70vh] max-w-full object-contain shadow-2xl border border-white/10"
          referrerPolicy="no-referrer"
        />

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h3 className="text-lg font-bold text-white font-academic-sans">
            {currentItem.title}
          </h3>
          <p className="text-xs text-white/70 mt-1 font-normal">
            {currentItem.caption}
          </p>
        </div>
      </div>

      {/* Bottom keyboard hint */}
      <div className="absolute bottom-4 inset-x-0 text-center text-[11px] text-white/40 pointer-events-none">
        Use Left/Right arrows to navigate · Press Esc to exit
      </div>
    </div>
  );
};
