import React from 'react';
import { LEADERSHIP_TEAM } from '../data/schoolData';
import { ShieldCheck, UserCheck, Award, Info } from 'lucide-react';

export const SchoolLeadershipSection: React.FC = () => {
  return (
    <section className="bg-white text-[#111513] py-20 lg:py-28 border-b border-[#0F2E1E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0F2E1E] mb-2">
            <span className="w-5 h-[2px] bg-[#C8A858]" />
            <span>Governance & Stewardship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-academic-sans tracking-tight text-[#111513]">
            School Leadership
          </h2>
          <p className="mt-3 text-base text-[#111513]/70 leading-relaxed">
            The school is governed by a dedicated Board of Management, experienced pedagogical administrators, and an elected student prefect body working in tandem.
          </p>
        </div>

        {/* Factual Integrity Banner */}
        <div className="mb-10 p-4 bg-[#F8F6F0] border-l-4 border-[#0F2E1E] flex items-start gap-3">
          <Info className="w-4 h-4 text-[#0F2E1E] shrink-0 mt-0.5" />
          <div className="text-xs text-[#111513]/85 leading-relaxed">
            <strong className="font-semibold text-[#0F2E1E]">Administrative Note:</strong> In strict compliance with institutional guidelines, all staff designations and credentials below feature standardized administrative placeholders awaiting official upload from the Teachers Service Commission (TSC) and Board of Management.
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEADERSHIP_TEAM.map((member, index) => (
            <div
              key={index}
              className="bg-[#F8F6F0] border border-[#0F2E1E]/15 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Designation Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#0F2E1E]/10 mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#C8A858] font-bold">
                    {member.role}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#0F2E1E]/50" />
                </div>

                {/* Avatar Placeholder Frame with School Crest Motif */}
                <div className="w-16 h-16 bg-[#0F2E1E] text-[#C8A858] flex items-center justify-center mb-4 border border-[#C8A858]/30">
                  <UserCheck className="w-8 h-8" />
                </div>

                {/* Name & Credentials */}
                <h3 className="text-lg font-bold text-[#0F2E1E] font-academic-sans">
                  {member.name}
                </h3>
                
                <div className="text-xs font-mono text-[#111513]/60 mb-3">
                  {member.designation}
                </div>

                {/* Bio / Scope */}
                <p className="text-xs sm:text-sm text-[#111513]/75 leading-relaxed font-normal">
                  {member.bio}
                </p>
              </div>

              {/* Status */}
              <div className="mt-6 pt-4 border-t border-[#0F2E1E]/10 flex items-center justify-between text-[11px]">
                <span className="text-[#111513]/50">Status: Verified Office</span>
                <span className="text-[#0F2E1E] font-semibold">[Official Details Pending]</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
