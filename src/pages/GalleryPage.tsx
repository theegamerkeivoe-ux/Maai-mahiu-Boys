import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { GalleryItem } from '../types/school';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { Eye, Upload, Tag, Info } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [showUploadInfo, setShowUploadInfo] = useState(false);

  const categories = ['All', 'Campus', 'Academics', 'Sport', 'Student Life', 'Events', 'Leadership', 'Community'];

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="bg-[#F8F6F0] text-[#111513]">
      
      {/* Header */}
      <section className="bg-[#0F2E1E] text-white py-16 lg:py-24 border-b border-[#C8A858]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-widest text-[#C8A858] font-bold mb-3 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#C8A858]" />
                <span>Visual Archive</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-academic-sans tracking-tight text-white leading-tight">
                Campus Life in Frame
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed font-light">
                An editorial perspective into classrooms, sports fixtures, science laboratories, and daily boarding brotherhood at Maai Mahiu Boys High School.
              </p>
            </div>

            <button
              onClick={() => setShowUploadInfo(true)}
              className="px-5 py-3 bg-[#C8A858] hover:bg-[#d8b868] text-[#111513] text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors self-start md:self-auto shadow-sm"
            >
              <Upload className="w-4 h-4" />
              <span>School Media Upload</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Gallery Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 pb-6 border-b border-[#0F2E1E]/15 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#0F2E1E] text-white'
                  : 'bg-white text-[#111513]/70 hover:text-[#0F2E1E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notice on Real Photography Replacement */}
        <div className="mb-8 p-4 bg-white border-l-4 border-[#0F2E1E] flex items-center justify-between text-xs text-[#111513]/80">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#0F2E1E] shrink-0" />
            <span>
              <strong>Authentic Photography Notice:</strong> High-resolution representative imagery shown. Administration can upload verified school photos directly via the media manager.
            </span>
          </div>
          <span className="font-mono text-[#0F2E1E] font-semibold">{filteredItems.length} Photographs</span>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isTall = item.aspect === 'tall';
            const isWide = item.aspect === 'wide';

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(index)}
                className={`group relative overflow-hidden bg-[#111513] border border-[#0F2E1E]/20 cursor-pointer ${
                  isTall ? 'md:row-span-2' : ''
                } ${isWide ? 'lg:col-span-2' : ''}`}
                style={{ minHeight: isTall ? '480px' : isWide ? '300px' : '260px' }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111513]/90 via-[#111513]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A858] bg-[#0F2E1E] px-2 py-0.5 font-bold">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-academic-sans leading-tight text-white group-hover:text-[#C8A858] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-white/75 mt-1 line-clamp-2 font-normal">
                    {item.caption}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-[#C8A858] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View in Lightbox</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}

      {/* Upload Instructions Modal */}
      {showUploadInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white border-2 border-[#0F2E1E] max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-lg font-bold font-academic-sans text-[#111513] mb-2">
              School Media Archive Pipeline
            </h3>
            <p className="text-xs text-[#111513]/80 leading-relaxed mb-4">
              Authorized school staff can upload authentic photographs from inter-house competitions, national ceremonies, and candidate briefings via the Admin CMS Dashboard.
            </p>
            <div className="p-3 bg-[#F8F6F0] border border-[#0F2E1E]/10 text-xs text-[#0F2E1E] mb-4 space-y-1 font-mono">
              <div>Recommended Aspect: 16:9, 4:3, or 3:4</div>
              <div>Min Resolution: 1920 × 1080 px</div>
              <div>Formats: JPG, WebP, PNG</div>
            </div>
            <button
              onClick={() => setShowUploadInfo(false)}
              className="w-full py-2 bg-[#0F2E1E] text-white text-xs font-bold uppercase tracking-wider"
            >
              Understood
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
