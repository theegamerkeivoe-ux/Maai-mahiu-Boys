import React, { useRef } from 'react';
import { Hero } from '../components/Hero';
import { IntroStrip } from '../components/IntroStrip';
import { FourPillars } from '../components/FourPillars';
import { AboutSection } from '../components/AboutSection';
import { SchoolValues } from '../components/SchoolValues';
import { AcademicExperience } from '../components/AcademicExperience';
import { DayInTheLife } from '../components/DayInTheLife';
import { StudentExperienceSection } from '../components/StudentExperienceSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { AdmissionsSection } from '../components/AdmissionsSection';
import { SchoolLeadershipSection } from '../components/SchoolLeadershipSection';
import { ActiveView, SchoolDocument } from '../types/school';
import { NEWS_ARTICLES, EVENTS } from '../data/schoolData';
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';

interface HomePageProps {
  onNavigate: (view: ActiveView) => void;
  onOpenEnquiry: () => void;
  onViewDoc: (doc: SchoolDocument) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenEnquiry,
  onViewDoc,
}) => {
  const introRef = useRef<HTMLDivElement>(null);

  const handleScrollToIntro = () => {
    introRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const latestNews = NEWS_ARTICLES.slice(0, 2);
  const upcomingEvents = EVENTS.slice(0, 3);

  return (
    <div>
      {/* 1. Split Hero */}
      <Hero onNavigate={onNavigate} onScrollDown={handleScrollToIntro} />

      {/* 2. Intro Statement Strip */}
      <div ref={introRef}>
        <IntroStrip />
      </div>

      {/* 3. Four Pillars */}
      <FourPillars />

      {/* 4. About the School (Asymmetrical) */}
      <AboutSection onLearnMore={() => onNavigate('about')} />

      {/* 5. School Values (Full-width Dark Typography) */}
      <SchoolValues />

      {/* 6. Academic Experience & Timetable Element */}
      <AcademicExperience onNavigate={onNavigate} />

      {/* 7. A Day in the Life Timeline */}
      <DayInTheLife />

      {/* 8. Student Experience (Sport, Clubs, Leadership) */}
      <StudentExperienceSection onNavigate={onNavigate} />

      {/* 9. Why Choose Us */}
      <WhyChooseUs />

      {/* 10. Newsroom & Events Editorial Strip */}
      <section className="bg-white text-[#111513] py-20 lg:py-24 border-b border-[#0F2E1E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: News Highlights (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between pb-4 border-b border-[#0F2E1E]/15 mb-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#0F2E1E]">
                    Dispatch & Stories
                  </div>
                  <h3 className="text-2xl font-bold font-academic-sans text-[#111513]">
                    From Around the School
                  </h3>
                </div>
                <button
                  onClick={() => onNavigate('news')}
                  className="text-xs font-bold uppercase tracking-wider text-[#0F2E1E] hover:text-[#C8A858] flex items-center gap-1"
                >
                  <span>All News</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-6">
                {latestNews.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => onNavigate('news')}
                    className="group cursor-pointer grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-[#F8F6F0] p-4 border border-[#0F2E1E]/10 hover:border-[#0F2E1E]/40 transition-colors"
                  >
                    <div className="sm:col-span-4 h-32 overflow-hidden bg-[#111513]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="sm:col-span-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-[#111513]/60 mb-1">
                          <span className="font-mono text-[10px] uppercase font-bold text-[#0F2E1E] bg-[#0F2E1E]/10 px-1.5 py-0.5">
                            {article.category}
                          </span>
                          <span>·</span>
                          <span>{article.date}</span>
                        </div>
                        <h4 className="text-base font-bold text-[#0F2E1E] group-hover:text-[#C8A858] transition-colors leading-snug">
                          {article.title}
                        </h4>
                        <p className="text-xs text-[#111513]/70 mt-1 line-clamp-2">
                          {article.summary}
                        </p>
                      </div>
                      <div className="mt-3 text-xs font-bold text-[#0F2E1E] flex items-center gap-1">
                        <span>Read dispatch</span>
                        <ArrowRight className="w-3 h-3 text-[#C8A858]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Upcoming Term Calendar (5 cols) */}
            <div className="lg:col-span-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#0F2E1E]/15 mb-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#0F2E1E]">
                    Term Calendar
                  </div>
                  <h3 className="text-2xl font-bold font-academic-sans text-[#111513]">
                    Upcoming Events
                  </h3>
                </div>
                <button
                  onClick={() => onNavigate('events')}
                  className="text-xs font-bold uppercase tracking-wider text-[#0F2E1E] hover:text-[#C8A858] flex items-center gap-1"
                >
                  <span>Calendar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((evt) => (
                  <div
                    key={evt.id}
                    onClick={() => onNavigate('events')}
                    className="p-4 bg-[#F8F6F0] border-l-4 border-[#0F2E1E] hover:border-[#C8A858] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2 text-xs text-[#111513]/60 mb-1">
                      <Calendar className="w-3.5 h-3.5 text-[#0F2E1E]" />
                      <span className="font-mono font-semibold text-[#0F2E1E]">{evt.date}</span>
                      <span>·</span>
                      <span>{evt.category}</span>
                    </div>

                    <h4 className="text-sm font-bold text-[#111513] font-academic-sans hover:text-[#0F2E1E]">
                      {evt.title}
                    </h4>

                    <div className="mt-2 flex items-center gap-3 text-[11px] text-[#111513]/70">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#C8A858]" />
                        <span>{evt.time}</span>
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#C8A858]" />
                        <span>{evt.location}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 11. Admissions Section & Document Center */}
      <AdmissionsSection
        onNavigate={onNavigate}
        onOpenEnquiry={onOpenEnquiry}
        onViewDoc={onViewDoc}
      />

      {/* 12. School Leadership */}
      <SchoolLeadershipSection />
    </div>
  );
};
