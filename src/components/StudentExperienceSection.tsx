import React, { useState } from 'react';
import { IMAGES } from '../data/schoolData';
import { Trophy, Users, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { ActiveView } from '../types/school';

interface StudentExperienceSectionProps {
  onNavigate: (view: ActiveView) => void;
}

export const StudentExperienceSection: React.FC<StudentExperienceSectionProps> = ({ onNavigate }) => {
  const [activeArea, setActiveArea] = useState<'sport' | 'clubs' | 'leadership'>('sport');

  const areas = {
    sport: {
      title: 'Sport & Physical Fortitude',
      subtitle: 'Stamina, Team Spirit & Competitive Character',
      image: IMAGES.sportsPitch,
      items: [
        { name: 'Rugby 15s & 7s', desc: 'Fierce brotherhood, disciplined scrums, and regional tournament contention.' },
        { name: 'Football (Soccer)', desc: 'Tactical discipline, high-energy inter-house leagues, and sub-county playoffs.' },
        { name: 'Athletics & Cross-Country', desc: 'Long-distance and sprint training capitalizing on Rift Valley elevation.' },
        { name: 'Basketball & Volleyball', desc: 'Fast-paced court agility, tactical set-pieces, and teamwork.' },
        { name: 'Handball & Table Tennis', desc: 'Reflex mastery, speed, and recreational weekend house tournaments.' },
      ],
    },
    clubs: {
      title: 'Clubs & Intellectual Societies',
      subtitle: 'Curiosity, Expression & Co-Curricular Distinction',
      image: IMAGES.scienceLab,
      items: [
        { name: 'Debating & Public Speaking Guild', desc: 'Mastering the art of persuasion, parliamentary debate, and elocution.' },
        { name: 'Science & Engineering Fair (KSEF)', desc: 'Developing tangible scientific apparatus and empirical research solutions.' },
        { name: 'Journalism & School Media', desc: 'Documenting campus life, writing editorial features, and broadcasting morning announcements.' },
        { name: 'Environmental & Agriculture Club', desc: 'Rift Valley tree planting, farm crop stewardship, and conservation initiatives.' },
        { name: 'ICT & Junior Innovators', desc: 'Coding logic, web development basics, and digital hardware troubleshooting.' },
      ],
    },
    leadership: {
      title: 'Student Leadership & Service',
      subtitle: 'The Prefect System & Community Responsibility',
      image: IMAGES.heroStudents,
      items: [
        { name: 'The Prefects Council', desc: 'Student-led governance maintaining discipline, order, and peer welfare across dorms.' },
        { name: 'House Captains & Vice Captains', desc: 'Guiding residential morale, hygiene inspections, and inter-house cohesion.' },
        { name: 'Peer Counselors', desc: 'Trained student listeners providing confidential encouragement and guidance.' },
        { name: 'President’s Award & Scouting', desc: 'Outward-bound endurance expeditions, community volunteerism, and life skills.' },
        { name: 'Maai Mahiu Community Clean-Up', desc: 'Regular termly service projects supporting the local township community.' },
      ],
    },
  };

  const current = areas[activeArea];

  return (
    <section className="bg-white text-[#111513] py-20 lg:py-28 border-b border-[#0F2E1E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#0F2E1E] mb-2">
              <span className="w-5 h-[2px] bg-[#C8A858]" />
              <span>Broader Horizons</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel tracking-tight text-[#111513]">
              Life Beyond the Classroom
            </h2>
            <p className="mt-3 text-base text-[#111513]/75 leading-relaxed font-academic-sans">
              True strength of character is built in the scrum, on the debate podium, and through selfless responsibility for fellow school brothers.
            </p>
          </div>

          {/* Area Switcher Buttons */}
          <div className="flex items-center gap-2 p-1 bg-[#F8F6F0] border border-[#0F2E1E]/15 rounded-sm">
            <button
              onClick={() => setActiveArea('sport')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 ${
                activeArea === 'sport'
                  ? 'bg-[#0F2E1E] text-white'
                  : 'text-[#111513]/70 hover:text-[#0F2E1E]'
              }`}
            >
              <Trophy className="w-3.5 h-3.5 text-[#C8A858]" />
              <span>Sport</span>
            </button>
            <button
              onClick={() => setActiveArea('clubs')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 ${
                activeArea === 'clubs'
                  ? 'bg-[#0F2E1E] text-white'
                  : 'text-[#111513]/70 hover:text-[#0F2E1E]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C8A858]" />
              <span>Clubs</span>
            </button>
            <button
              onClick={() => setActiveArea('leadership')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 ${
                activeArea === 'leadership'
                  ? 'bg-[#0F2E1E] text-white'
                  : 'text-[#111513]/70 hover:text-[#0F2E1E]'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-[#C8A858]" />
              <span>Leadership</span>
            </button>
          </div>
        </div>

        {/* Feature Display Area: Asymmetrical Media + Item Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Media Panel (5 cols) */}
          <div className="lg:col-span-5 relative overflow-hidden border border-[#0F2E1E]/20 bg-[#111513] min-h-[380px] lg:min-h-[500px]">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover filter brightness-[0.95] transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111513]/90 via-[#111513]/30 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C8A858] font-semibold">
                Co-Curricular Realm
              </span>
              <h3 className="text-2xl font-bold font-academic-sans mt-1">
                {current.title}
              </h3>
              <p className="text-xs text-white/80 mt-1">
                {current.subtitle}
              </p>
            </div>
          </div>

          {/* Structured Items List (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#F8F6F0] p-6 sm:p-10 border border-[#0F2E1E]/15">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#0F2E1E] font-bold pb-4 border-b border-[#0F2E1E]/10 mb-6 flex items-center justify-between">
                <span>Featured Disciplines & Activities</span>
                <span className="font-mono text-[11px] text-[#111513]/50">Term 1 – Term 3</span>
              </div>

              <div className="space-y-5">
                {current.items.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="text-base font-bold text-[#0F2E1E] font-academic-sans group-hover:text-[#C8A858] transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-mono text-xs text-[#0F2E1E]/40">0{idx + 1}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#111513]/75 leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0F2E1E]/15 flex items-center justify-between">
              <span className="text-xs text-[#111513]/60">
                Participation in at least one sport and one club is mandatory for every student.
              </span>
              <button
                onClick={() => onNavigate('experience')}
                className="text-xs font-bold uppercase tracking-wider text-[#0F2E1E] hover:text-[#C8A858] flex items-center gap-1.5 transition-colors"
              >
                <span>Full Experience Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
