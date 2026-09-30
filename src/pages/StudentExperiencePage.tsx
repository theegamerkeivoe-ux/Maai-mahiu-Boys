import React, { useState } from 'react';
import { IMAGES } from '../data/schoolData';
import { Trophy, Sparkles, Users, Home, HeartHandshake, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const StudentExperiencePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sports' | 'clubs' | 'boarding' | 'leadership'>('sports');

  const boardingHouses = [
    { name: 'Mount Longonot House', color: 'bg-emerald-900 text-white', motto: 'Ascend to the Heights', patron: '[House Master Placeholder]' },
    { name: 'Simba (Lion) House', color: 'bg-amber-900 text-white', motto: 'Courage and Dignity', patron: '[House Master Placeholder]' },
    { name: 'Rift Valley House', color: 'bg-stone-900 text-white', motto: 'Steadfast and True', patron: '[House Master Placeholder]' },
    { name: 'Acacia House', color: 'bg-[#0F2E1E] text-white', motto: 'Rooted in Integrity', patron: '[House Master Placeholder]' },
  ];

  return (
    <div className="bg-[#F8F6F0] text-[#111513]">
      
      {/* Page Header */}
      <section className="bg-[#0F2E1E] text-white py-16 lg:py-24 border-b border-[#C8A858]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-[#C8A858] font-bold mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#C8A858]" />
              <span>Life Beyond the Classroom</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-academic-sans tracking-tight text-white leading-tight">
              Brotherhood, Character & Co-Curricular Distinction
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed font-light">
              From competitive athletics on the green pitch to vigorous debating contests and boarding camaraderie, our students forge lifelong bonds and resilient character.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Category Selector */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 pb-8 border-b border-[#0F2E1E]/15">
          <button
            onClick={() => setActiveTab('sports')}
            className={`px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 ${
              activeTab === 'sports'
                ? 'bg-[#0F2E1E] text-white shadow-sm'
                : 'bg-white text-[#111513]/70 hover:text-[#0F2E1E]'
            }`}
          >
            <Trophy className="w-4 h-4 text-[#C8A858]" />
            <span>Athletics & Sport</span>
          </button>

          <button
            onClick={() => setActiveTab('clubs')}
            className={`px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 ${
              activeTab === 'clubs'
                ? 'bg-[#0F2E1E] text-white shadow-sm'
                : 'bg-white text-[#111513]/70 hover:text-[#0F2E1E]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#C8A858]" />
            <span>Clubs & Societies</span>
          </button>

          <button
            onClick={() => setActiveTab('boarding')}
            className={`px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 ${
              activeTab === 'boarding'
                ? 'bg-[#0F2E1E] text-white shadow-sm'
                : 'bg-white text-[#111513]/70 hover:text-[#0F2E1E]'
            }`}
          >
            <Home className="w-4 h-4 text-[#C8A858]" />
            <span>Boarding & Houses</span>
          </button>

          <button
            onClick={() => setActiveTab('leadership')}
            className={`px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 ${
              activeTab === 'leadership'
                ? 'bg-[#0F2E1E] text-white shadow-sm'
                : 'bg-white text-[#111513]/70 hover:text-[#0F2E1E]'
            }`}
          >
            <Users className="w-4 h-4 text-[#C8A858]" />
            <span>Student Leadership</span>
          </button>
        </div>

        {/* Dynamic Area Content */}
        <div className="mt-12">
          
          {/* TAB 1: SPORTS */}
          {activeTab === 'sports' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#0F2E1E]">
                    Physical Discipline & Teamwork
                  </div>
                  <h2 className="text-3xl font-bold font-academic-sans text-[#111513]">
                    The Sporting Tradition
                  </h2>
                  <p className="text-sm text-[#111513]/80 leading-relaxed font-normal">
                    Physical fitness is an indispensable pillar of male adolescent development. At Maai Mahiu Boys High School, every student participates in structured afternoon games designed to enhance stamina, mental grit, strategic calculation, and sportsmanlike conduct.
                  </p>
                  <p className="text-sm text-[#111513]/80 leading-relaxed font-normal">
                    Our squads compete vigorously in Kenya Secondary Schools Sports Association (KSSSA) fixtures at sub-county, county, and regional tiers across athletics, rugby, football, basketball, and volleyball.
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <img
                    src={IMAGES.sportsPitch}
                    alt="Sports and Football Pitch at Maai Mahiu Boys High School"
                    className="w-full h-[360px] object-cover border-2 border-[#0F2E1E] shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Sports Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                {[
                  { name: 'Rugby 15s & 7s', desc: 'Disciplined ball handling, scrum techniques, tactical kicking, and defensive coordination under qualified coaches.' },
                  { name: 'Football (Soccer)', desc: 'Inter-house tournaments and school representative squad competing across regional leagues with strict code of honor.' },
                  { name: 'Athletics & Cross-Country', desc: 'Capitalizing on the Rift Valley altitude for aerobic endurance, 100m–5000m track competitions, and relays.' },
                  { name: 'Basketball', desc: 'Speed, court vision, ball handling drills, and tactical set-pieces in our dedicated court arena.' },
                  { name: 'Volleyball & Handball', desc: 'Agile team dynamics, vertical jump conditioning, and defensive blocking tournaments.' },
                  { name: 'Indoor Sports & Chess', desc: 'Table tennis, badminton, and strategic chess tournaments fostering concentration during weekend recreation.' },
                ].map((sport, idx) => (
                  <div key={idx} className="bg-white p-6 border border-[#0F2E1E]/15">
                    <div className="text-xs font-mono font-bold text-[#C8A858] mb-1">0{idx + 1}</div>
                    <h3 className="text-lg font-bold text-[#0F2E1E] font-academic-sans mb-2">{sport.name}</h3>
                    <p className="text-xs text-[#111513]/70 leading-relaxed">{sport.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: CLUBS */}
          {activeTab === 'clubs' && (
            <div className="space-y-12">
              <div className="max-w-3xl">
                <div className="text-xs font-bold uppercase tracking-widest text-[#0F2E1E] mb-2">
                  Intellectual & Creative Clubs
                </div>
                <h2 className="text-3xl font-bold font-academic-sans text-[#111513]">
                  Societies That Ignite Curiosity
                </h2>
                <p className="mt-3 text-sm text-[#111513]/80 leading-relaxed font-normal">
                  Wednesday afternoons and Saturday mornings are dedicated to student societies. These clubs empower boys to explore technical interests, refine public speaking, master journalism, and contribute to ecological conservation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Debate & Public Speaking Society', focus: 'Elocution, Parliamentary Debate, Critical Analysis', desc: 'Trains students to articulate cogent arguments under time constraints, building future advocates, attorneys, and civic leaders.' },
                  { title: 'Kenya Science & Engineering Fair (KSEF)', focus: 'Empirical Research & Hardware Inventions', desc: 'Students design novel physics models, agricultural irrigation sensors, and biochemical solutions for regional symposiums.' },
                  { title: 'Journalism & School Media Guild', focus: 'School News Reporting, Photography, Publications', desc: 'Publishes the termly school bulletin, broadcasts daily morning notices, and interviews visiting scholars.' },
                  { title: 'Environmental & 4-K / YFC Club', focus: 'Rift Valley Reforestation, Organic Gardening', desc: 'Stewards the campus indigenous tree nursery and manages the school agricultural plot with practical crop cycles.' },
                  { title: 'ICT & Junior Coders Guild', focus: 'Programming, Web Technologies, Algorithm Logic', desc: 'Introduces foundational programming concepts, digital hardware maintenance, and algorithmic problem-solving.' },
                  { title: 'Music & Cultural Drama Guild', focus: 'Folk Songs, Choral Performance, Elocution', desc: 'Prepares traditional and sacred choral pieces for the Kenya National Music Festivals.' },
                ].map((club, idx) => (
                  <div key={idx} className="bg-white p-6 border border-[#0F2E1E]/15 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#0F2E1E] bg-[#0F2E1E]/10 px-2 py-0.5 inline-block font-bold mb-3">
                        {club.focus}
                      </div>
                      <h3 className="text-lg font-bold text-[#0F2E1E] font-academic-sans mb-2">{club.title}</h3>
                      <p className="text-xs text-[#111513]/75 leading-relaxed">{club.desc}</p>
                    </div>
                    <div className="mt-6 pt-3 border-t border-[#0F2E1E]/10 text-[11px] text-[#111513]/50">
                      Weekly Sessions · Master Patron Guided
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: BOARDING */}
          {activeTab === 'boarding' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#0F2E1E]">
                    Residential Life & House Structure
                  </div>
                  <h2 className="text-3xl font-bold font-academic-sans text-[#111513]">
                    The Boarding House Brotherhood
                  </h2>
                  <p className="text-sm text-[#111513]/80 leading-relaxed font-normal">
                    Boarding life at Maai Mahiu Boys High School is meticulously organized into houses. Each house is led by a resident House Master, an assistant house master, and elected student house prefects who foster residential discipline, mutual respect, and hygiene.
                  </p>
                  <p className="text-sm text-[#111513]/80 leading-relaxed font-normal">
                    Living alongside peers from diverse cultural and socioeconomic backgrounds across Kenya instills lifelong empathy, self-reliance in daily chores, and the brotherhood that characterizes our alumni.
                  </p>
                </div>

                <div className="lg:col-span-5 bg-white p-6 border border-[#0F2E1E]/20 space-y-3">
                  <h3 className="text-base font-bold text-[#0F2E1E] font-academic-sans mb-2">
                    Boarding Welfare Standards
                  </h3>
                  <div className="space-y-2 text-xs text-[#111513]/80">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0F2E1E] shrink-0" />
                      <span>Dedicated full-time school sanatorium & nurse</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0F2E1E] shrink-0" />
                      <span>Nutritious balanced dining hall meals (3 daily + tea)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0F2E1E] shrink-0" />
                      <span>Perimeter security & 24/7 guarded access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0F2E1E] shrink-0" />
                      <span>Regular inter-house cleanliness inspections & trophies</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* The 4 Houses */}
              <div>
                <h3 className="text-xl font-bold text-[#0F2E1E] font-academic-sans mb-6">
                  The Four School Houses
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {boardingHouses.map((house, idx) => (
                    <div key={idx} className="bg-white border border-[#0F2E1E]/20 p-6 flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-full bg-[#0F2E1E] text-white flex items-center justify-center font-bold text-xs mb-4">
                          0{idx + 1}
                        </div>
                        <h4 className="text-lg font-bold text-[#111513] font-academic-sans mb-1">
                          {house.name}
                        </h4>
                        <div className="text-xs font-semibold text-[#C8A858] italic mb-3">
                          “{house.motto}”
                        </div>
                        <div className="text-xs text-[#111513]/70">
                          Senior House Master: <span className="font-medium text-[#0F2E1E]">{house.patron}</span>
                        </div>
                      </div>

                      <div className="mt-6 pt-3 border-t border-[#0F2E1E]/10 text-[11px] text-[#111513]/50">
                        Inter-House Sports & Academics
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: LEADERSHIP */}
          {activeTab === 'leadership' && (
            <div className="space-y-10">
              <div className="max-w-3xl">
                <div className="text-xs font-bold uppercase tracking-widest text-[#0F2E1E] mb-2">
                  Self-Governance & Service
                </div>
                <h2 className="text-3xl font-bold font-academic-sans text-[#111513]">
                  The Prefectural System & Peer Mentorship
                </h2>
                <p className="mt-3 text-sm text-[#111513]/80 leading-relaxed font-normal">
                  Leadership is not conferred for privilege; it is undertaken for service. Through an elective and merit-screened prefectural system, student leaders learn administrative accountability, conflict mediation, and empathy.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 border-t-4 border-[#0F2E1E]">
                  <h3 className="text-lg font-bold text-[#0F2E1E] font-academic-sans mb-2">
                    Executive Prefects Council
                  </h3>
                  <p className="text-xs text-[#111513]/75 leading-relaxed">
                    Led by the School Captain (Head Boy) and Deputy Captains, coordinating student assemblies, representing pupil interests to the Principal, and maintaining overall school decorum.
                  </p>
                </div>

                <div className="bg-white p-6 border-t-4 border-[#C8A858]">
                  <h3 className="text-lg font-bold text-[#0F2E1E] font-academic-sans mb-2">
                    Departmental Prefects
                  </h3>
                  <p className="text-xs text-[#111513]/75 leading-relaxed">
                    Specialized student leaders for Dining Hall, Library, Laboratories, Environment, Games, and Spiritual Welfare ensuring daily efficiency in specific institutional operations.
                  </p>
                </div>

                <div className="bg-white p-6 border-t-4 border-[#111513]">
                  <h3 className="text-lg font-bold text-[#0F2E1E] font-academic-sans mb-2">
                    Peer Mentorship Circle
                  </h3>
                  <p className="text-xs text-[#111513]/75 leading-relaxed">
                    Senior students paired with Form 1 newcomers during orientation to provide academic coaching, emotional reassurance, and guidance on adapting to boarding life.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </section>

    </div>
  );
};
