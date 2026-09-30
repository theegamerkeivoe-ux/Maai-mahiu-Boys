import React, { useState } from 'react';
import { IMAGES, SCHOOL_INFO } from '../data/schoolData';
import { ChevronDown, ChevronUp, BookOpen, Target, Compass, Award } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'vision' | 'mission' | 'values'>('vision');

  const content = {
    story: {
      title: 'Our Story',
      icon: BookOpen,
      body: `Situated in the vibrant and strategically positioned township of Maai Mahiu in Nakuru County, near the historic Great Rift Valley escarpment, Maai Mahiu Boys High School was established to offer focused secondary education for young men.\n\n[Official historical dates, founding board, and developmental milestones: To be provided by School Administration]\n\nThe institution has grown into an environment where academic focus, character training, physical fitness, and student leadership are cultivated harmoniously. Every student who passes through our gates is welcomed into a brotherhood bound by high standards and collective pride.`,
    },
    vision: {
      title: 'Our Vision',
      icon: Target,
      body: `To be a distinguished centre of secondary education in Kenya that produces intellectually competent, morally upright, self-disciplined, and visionary young men prepared to lead transformative change in their communities and the nation.`,
    },
    mission: {
      title: 'Our Mission',
      icon: Compass,
      body: `To provide holistic, high-quality secondary education within a structured and disciplined environment; nurturing academic excellence, critical inquiry, moral fortitude, leadership acumen, and selfless service.`,
    },
    values: {
      title: 'Our Values',
      icon: Award,
      body: `Our institutional culture is guided by seven non-negotiable principles: Discipline, Integrity, Excellence, Respect, Responsibility, Leadership, and Service. These principles govern every classroom lesson, sports encounter, and interaction among students and staff.`,
    },
  };

  return (
    <section className="bg-[#F8F6F0] text-[#111513] py-20 lg:py-28 border-b border-[#0F2E1E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Large Campus / Academic Image (5 Cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative border-2 border-[#0F2E1E] bg-[#111513] shadow-2xl p-2">
              <div className="relative overflow-hidden border border-[#C8A858]/40">
                <img
                  src={IMAGES.campusQuad}
                  alt="Maai Mahiu Boys High School Academic Quadrangle"
                  className="w-full h-[420px] sm:h-[480px] object-cover filter brightness-[0.97]"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Corner geometric badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#0F2E1E] text-[#F8F6F0] p-4 border border-[#C8A858] max-w-[220px] shadow-xl">
                <div className="text-[10px] uppercase font-mono tracking-widest text-[#C8A858] font-bold">Campus Setting</div>
                <div className="text-xs font-semibold mt-0.5 leading-snug font-cinzel">
                  {SCHOOL_INFO.locality} · Great Rift Valley
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Editorial Text & Expandable Details (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            {/* Small Label */}
            <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#0F2E1E] mb-3">
              <span className="w-6 h-[2px] bg-[#C8A858]" />
              <span>About Maai Mahiu Boys</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold font-cinzel tracking-tight text-[#111513] leading-[1.12] mb-6">
              A Place to Learn. <span className="text-[#0F2E1E] block mt-1">A Place to Become.</span>
            </h2>

            {/* Editable Introductory Content */}
            <p className="text-base sm:text-lg text-[#111513]/85 leading-[1.75] mb-8 font-academic-sans drop-cap">
              At Maai Mahiu Boys High School, secondary education is approached as a decisive crucible for boyhood transformation. Here, academic ambition is nurtured alongside rigorous character formation, sportsmanship, and peer responsibility, ensuring that our students graduate not only with commendable qualifications, but as upright gentlemen.
            </p>

            {/* Clean Segmented Tab Controller (Not cards within cards) */}
            <div className="border-b border-[#0F2E1E]/20 flex flex-wrap gap-2 mb-6">
              {(['vision', 'mission', 'story', 'values'] as const).map((tabKey) => {
                const item = content[tabKey];
                const isActive = activeTab === tabKey;
                return (
                  <button
                    key={tabKey}
                    onClick={() => setActiveTab(tabKey)}
                    className={`pb-3 px-4 text-xs font-cinzel font-bold uppercase tracking-[0.16em] transition-all relative ${
                      isActive
                        ? 'text-[#0F2E1E] border-b-2 border-[#0F2E1E]'
                        : 'text-[#111513]/60 hover:text-[#0F2E1E]'
                    }`}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>

            {/* Active Content Display Area */}
            <div className="bg-white/80 p-6 sm:p-8 border-l-4 border-[#0F2E1E] shadow-sm">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C8A858] font-bold mb-2">
                <span>{content[activeTab].title} Statement</span>
              </div>
              <p className="text-sm sm:text-base text-[#111513]/85 leading-relaxed whitespace-pre-line font-normal">
                {content[activeTab].body}
              </p>
            </div>

            {/* Notice for Official Details */}
            <div className="mt-6 flex items-center justify-between text-xs text-[#111513]/55">
              <span>* Official school charter details editable via School Administrator portal.</span>
              {onLearnMore && (
                <button
                  onClick={onLearnMore}
                  className="font-bold text-[#0F2E1E] hover:text-[#C8A858] uppercase tracking-wider text-xs underline"
                >
                  Full School Profile →
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
