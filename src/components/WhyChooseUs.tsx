import React from 'react';
import { Target, Shield, Users, HeartHandshake, Compass, Flame } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      title: 'Focused Learning Environment',
      icon: Target,
      desc: 'A calm, dedicated boarding campus buffered from urban distractions, where study habits and concentration are nurtured systematically.',
    },
    {
      title: 'Uncompromising Character Training',
      icon: Shield,
      desc: 'Discipline is treated not as punitive control, but as an internal moral compass that guides young men to respect peers and honor commitments.',
    },
    {
      title: 'Practical Leadership Development',
      icon: Compass,
      desc: 'Through the prefect system, house councils, and peer-to-peer mentoring, every boy is given concrete opportunities to shoulder responsibility.',
    },
    {
      title: 'Supportive & Vigilant Community',
      icon: HeartHandshake,
      desc: 'Caring house masters, attentive guidance counselors, and an active alumni network ensure every student feels known, protected, and encouraged.',
    },
    {
      title: 'Student Responsibility & Ownership',
      icon: Users,
      desc: 'Boys are taught self-reliance in daily chores, dormitory cleanliness, punctuality, and mutual accountability for school property.',
    },
    {
      title: 'Whole-Person Development',
      icon: Flame,
      desc: 'Academics balanced with competitive athletics, spiritual formation, creative arts, and agricultural life skills for a resilient adult future.',
    },
  ];

  return (
    <section className="bg-[#F8F6F0] text-[#111513] py-20 lg:py-28 border-b border-[#0F2E1E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0F2E1E] mb-2">
            <span className="w-5 h-[2px] bg-[#C8A858]" />
            <span>The Institutional Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-academic-sans tracking-tight text-[#111513]">
            What Makes the School Different
          </h2>
          <p className="mt-3 text-base text-[#111513]/70 leading-relaxed">
            Our reputation is built upon measurable habits, grounded values, and an environment structured purposefully for the healthy development of young men.
          </p>
        </div>

        {/* 6 Structured Cards in a Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 border border-[#0F2E1E]/15 hover:border-[#0F2E1E] transition-colors relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-[#0F2E1E]/10 text-[#0F2E1E] flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-[#0F2E1E]" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#0F2E1E] mb-3 font-academic-sans">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#111513]/75 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0F2E1E]/10 flex items-center justify-between text-[11px] font-mono text-[#0F2E1E]/50">
                  <span>Standard 0{index + 1}</span>
                  <span className="text-[#C8A858] font-bold">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Factual Integrity Statement */}
        <div className="mt-12 text-center text-xs text-[#111513]/60 italic">
          * Statements represent verified institutional ethos and educational objectives. Official annual performance metrics are released through verified Ministry of Education reports.
        </div>

      </div>
    </section>
  );
};
