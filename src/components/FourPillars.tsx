import React from 'react';
import { FOUR_PILLARS } from '../data/schoolData';

export const FourPillars: React.FC = () => {
  return (
    <section className="bg-white text-[#111513] py-20 lg:py-24 border-b border-[#0F2E1E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#0F2E1E] font-bold mb-2 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#C8A858]" />
            <span>Foundational Cornerstones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel tracking-tight text-[#111513]">
            What We Build
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#111513]/75 leading-relaxed font-academic-sans">
            Every curriculum lesson, co-curricular activity, dormitory routine, and mentoring session is anchored on four enduring pillars designed to shape capable, honorable men.
          </p>
        </div>

        {/* 4 Large Numbered Blocks - Structured Grid, not floating cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#0F2E1E]/15 border-t border-b border-[#0F2E1E]/15">
          {FOUR_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="py-10 px-0 md:px-8 first:pl-0 last:pr-0 group flex flex-col justify-between transition-colors duration-200"
            >
              <div>
                {/* Large Number as Visual Architectural Element */}
                <div className="text-6xl sm:text-7xl font-bold text-[#0F2E1E]/15 group-hover:text-[#C8A858] transition-colors duration-300 font-cinzel tracking-tighter leading-none mb-6">
                  {pillar.number}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-[#0F2E1E] mb-2 tracking-wide">
                  {pillar.title}
                </h3>

                {/* Tagline */}
                <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#C8A858] mb-4">
                  {pillar.tagline}
                </div>

                {/* Description */}
                <p className="text-sm text-[#111513]/80 leading-relaxed font-normal font-academic-sans">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Hairline Highlight */}
              <div className="mt-8 pt-4 border-t border-[#0F2E1E]/10 flex items-center justify-between text-xs text-[#0F2E1E]/60 group-hover:text-[#0F2E1E] transition-colors">
                <span className="font-mono text-[11px] uppercase tracking-wider">Core Standard</span>
                <span className="text-[#C8A858] font-bold">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
