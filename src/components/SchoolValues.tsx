import React, { useState } from 'react';
import { SCHOOL_VALUES } from '../data/schoolData';

export const SchoolValues: React.FC = () => {
  const [activeValueIndex, setActiveValueIndex] = useState<number>(0);

  return (
    <section className="bg-[#111513] text-[#F8F6F0] py-24 sm:py-28 border-b border-[#0F2E1E]/40 overflow-hidden relative">
      {/* Background architectural grain */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2E1E]/20 via-transparent to-[#111513] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#C8A858] mb-3">
            <span className="w-6 h-[1px] bg-[#C8A858]" />
            <span>The Code of Honor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel tracking-tight text-[#F8F6F0]">
            The Standards We Live By
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#F8F6F0]/70 font-academic-sans">
            Hover or tap any institutional pillar to view its guiding principle in our daily brotherhood.
          </p>
        </div>

        {/* Large Typography List with Interactive Hover Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Large Values Typographic Stack (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10 border-t border-b border-white/10">
            {SCHOOL_VALUES.map((val, idx) => {
              const isSelected = activeValueIndex === idx;
              return (
                <div
                  key={val.name}
                  onMouseEnter={() => setActiveValueIndex(idx)}
                  onClick={() => setActiveValueIndex(idx)}
                  className={`group py-4 sm:py-5 flex items-center justify-between cursor-pointer transition-all duration-200 ${
                    isSelected ? 'pl-4 bg-[#0F2E1E]/40 border-l-4 border-[#C8A858]' : 'hover:pl-2'
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isSelected}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveValueIndex(idx);
                    }
                  }}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-[#C8A858]/70 tabular-nums">
                      0{idx + 1}
                    </span>
                    <span
                      className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide font-cinzel transition-colors ${
                        isSelected
                          ? 'text-[#C8A858]'
                          : 'text-[#F8F6F0]/65 group-hover:text-[#F8F6F0]'
                      }`}
                    >
                      {val.name}
                    </span>
                  </div>

                  <span
                    className={`text-xs uppercase tracking-widest font-mono font-semibold transition-opacity ${
                      isSelected ? 'text-[#C8A858] opacity-100' : 'text-white/20 opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    View →
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Editorial Reveal Panel (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-[#0F2E1E] border border-[#C8A858]/40 p-8 sm:p-10 shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between border-b border-[#C8A858]/20 pb-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#C8A858]">
                  Value Focus 0{activeValueIndex + 1}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#F8F6F0]/50 font-medium">
                  Maai Mahiu Boys Standard
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold tracking-wide text-[#F8F6F0] mb-3 font-cinzel">
                {SCHOOL_VALUES[activeValueIndex].name}
              </div>

              <div className="text-base font-editorial-serif text-[#C8A858] mb-6 italic leading-snug">
                “{SCHOOL_VALUES[activeValueIndex].tagline}”
              </div>

              <p className="text-sm sm:text-base text-[#F8F6F0]/85 leading-relaxed font-normal font-academic-sans">
                {SCHOOL_VALUES[activeValueIndex].description}
              </p>

              <div className="mt-8 pt-6 border-t border-[#C8A858]/20 flex items-center justify-between text-xs text-[#F8F6F0]/60">
                <span>Practiced daily across dorms, classes, and sports.</span>
                <span className="text-[#C8A858] font-bold">Uncompromising</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
