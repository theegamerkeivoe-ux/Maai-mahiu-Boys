import React from 'react';
import { IMAGES } from '../data/schoolData';
import { ActiveView } from '../types/school';
import { ArrowDown, ArrowUpRight, Compass } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: ActiveView) => void;
  onScrollDown: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onScrollDown }) => {
  return (
    <section className="relative bg-[#0F2E1E] text-[#F8F6F0] overflow-hidden border-b border-[#C8A858]/20">
      {/* Subtle architectural background grid / texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F8F6F0 1px, transparent 1px), linear-gradient(90deg, #F8F6F0 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-80px)] lg:min-h-[640px] items-stretch">
          
          {/* Left Column: Editorial Statement & Actions (7 Cols on Desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center py-12 lg:py-20 pr-0 lg:pr-12 z-10">
            {/* Subtle editorial kicker */}
            <div className="flex items-center gap-3 text-xs tracking-[0.22em] uppercase text-[#C8A858] font-mono font-semibold mb-6">
              <span className="w-8 h-[1px] bg-[#C8A858]" />
              <span>Maai Mahiu Boys High School · Rift Valley</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight text-[#F8F6F0] leading-[1.08] mb-6 font-cinzel text-balance">
              Built to Lead.{' '}
              <span className="text-[#C8A858] block mt-1.5 font-cinzel">Prepared to Serve.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#F8F6F0]/90 font-normal leading-relaxed max-w-xl mb-10 font-academic-sans">
              Maai Mahiu Boys High School provides an environment where young men are challenged to learn, grow, lead, and develop the character required to make a meaningful difference in their communities.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="px-7 py-3.5 bg-[#C8A858] text-[#111513] font-bold text-xs uppercase tracking-[0.14em] hover:bg-[#d8b868] transition-all flex items-center gap-2 group shadow-lg"
              >
                <span>Discover the School</span>
                <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('admissions')}
                className="px-7 py-3.5 bg-transparent border border-[#F8F6F0]/40 text-[#F8F6F0] font-bold text-xs uppercase tracking-[0.14em] hover:border-[#C8A858] hover:text-[#C8A858] transition-all flex items-center gap-2 group"
              >
                <span>Admissions 2026/2027</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Quick Context Highlights */}
            <div className="mt-14 pt-8 border-t border-[#F8F6F0]/15 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-[#C8A858] font-semibold">Focus</div>
                <div className="text-sm font-bold text-[#F8F6F0] mt-0.5 font-cinzel">Academic Rigor</div>
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-[#C8A858] font-semibold">Culture</div>
                <div className="text-sm font-bold text-[#F8F6F0] mt-0.5 font-cinzel">Strict Discipline</div>
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-[#C8A858] font-semibold">Community</div>
                <div className="text-sm font-bold text-[#F8F6F0] mt-0.5 font-cinzel">Lifelong Brotherhood</div>
              </div>
            </div>
          </div>

          {/* Right Column: Large Vertical Photograph + Vertical Tag + Scroll Indicator (5 Cols on Desktop) */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-6 lg:py-12">
            <div className="relative w-full h-[460px] sm:h-[540px] lg:h-full max-h-[660px] overflow-hidden shadow-2xl border-2 border-[#C8A858]/40 group p-1.5 bg-[#111513]">
              <div className="relative w-full h-full overflow-hidden">
                {/* Authentic Photo */}
                <img
                  src={IMAGES.heroStudents}
                  alt="Disciplined Kenyan secondary school boys at Maai Mahiu Boys High School"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Measured contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111513]/90 via-[#111513]/20 to-transparent pointer-events-none" />

                {/* Vertical Label: MAAI MAHIU • KENYA */}
                <div className="absolute right-4 top-6 bottom-6 flex items-center pointer-events-none">
                  <span
                    className="text-[10px] uppercase font-bold tracking-[0.35em] text-[#F8F6F0]/80 rotate-90 origin-right select-none font-mono"
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    MAAI MAHIU • KENYA
                  </span>
                </div>

                {/* Bottom Subtle Overlay Metadata */}
                <div className="absolute bottom-6 left-6 right-12 text-[#F8F6F0] pointer-events-none">
                  <div className="text-[11px] uppercase tracking-widest text-[#C8A858] font-bold font-cinzel">
                    Excellence · Integrity · Service
                  </div>
                  <div className="text-xs text-[#F8F6F0]/90 font-light mt-1">
                    Fostering disciplined minds and visionary leaders for Kenya and the world.
                  </div>
                </div>

                {/* Subtle Scroll Indicator at bottom center of the image */}
                <button
                  onClick={onScrollDown}
                  className="absolute bottom-4 right-4 p-2 bg-[#111513]/80 hover:bg-[#C8A858] text-[#F8F6F0] hover:text-[#111513] transition-colors rounded-full border border-white/20 pointer-events-auto"
                  aria-label="Scroll to introduction"
                  title="Scroll down"
                >
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
