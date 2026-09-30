import React from 'react';
import { LEADERSHIP_TEAM, DEPARTMENTS } from '../data/schoolData';
import { ShieldCheck, UserCheck, Award, BookOpen, AlertCircle } from 'lucide-react';

export const LeadershipPage: React.FC = () => {
  return (
    <div className="bg-[#F8F6F0] text-[#111513]">
      
      {/* Page Header */}
      <section className="bg-[#0F2E1E] text-white py-16 lg:py-24 border-b border-[#C8A858]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-[#C8A858] font-bold mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#C8A858]" />
              <span>Governance & Institutional Hierarchy</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-academic-sans tracking-tight text-white leading-tight">
              School Leadership & Administration
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed font-light">
              Guided by the Board of Management, professional educational administrators, and the student prefect body working in harmonious order.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Placeholder Directive */}
        <div className="p-4 bg-white border-l-4 border-[#0F2E1E] flex items-start gap-3 shadow-sm">
          <AlertCircle className="w-5 h-5 text-[#0F2E1E] shrink-0 mt-0.5" />
          <div className="text-xs text-[#111513]/85 leading-relaxed">
            <strong className="text-[#0F2E1E] font-semibold">Institutional Confidentiality Policy:</strong> Staff positions and appointments displayed below feature standardized administrative designations. As mandated, personal names, TSC appointment letters, and personal telephone contacts are withheld pending formal Board authorization.
          </div>
        </div>

        {/* Executive Management Roster */}
        <section>
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0F2E1E] mb-1">
              Executive Directorate
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-academic-sans text-[#111513]">
              Senior Administrative Council
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEADERSHIP_TEAM.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#0F2E1E]/20 p-8 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#0F2E1E]/10 mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#C8A858] font-bold">
                      {member.role}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-[#0F2E1E]" />
                  </div>

                  <div className="w-16 h-16 bg-[#0F2E1E] text-[#C8A858] flex items-center justify-center mb-4">
                    <UserCheck className="w-8 h-8" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0F2E1E] font-academic-sans">
                    {member.name}
                  </h3>

                  <div className="text-xs font-mono text-[#111513]/60 mb-3">
                    {member.designation}
                  </div>

                  <p className="text-xs sm:text-sm text-[#111513]/75 leading-relaxed font-normal">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0F2E1E]/10 text-[11px] text-[#111513]/55 flex items-center justify-between">
                  <span>Authorized Office</span>
                  <span className="text-[#0F2E1E] font-semibold">[Official Details Pending]</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Heads of Academic Departments (HODs) */}
        <section>
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0F2E1E] mb-1">
              Curriculum Stewardship
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-academic-sans text-[#111513]">
              Heads of Academic Departments (HODs)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEPARTMENTS.map((dept) => (
              <div key={dept.id} className="bg-white p-6 border border-[#0F2E1E]/15">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#C8A858] font-bold mb-1">
                  Faculty Lead
                </div>
                <h3 className="text-base font-bold text-[#0F2E1E] font-academic-sans mb-1">
                  {dept.name}
                </h3>
                <div className="text-xs font-medium text-[#111513] mb-2">
                  {dept.hodName}
                </div>
                <p className="text-xs text-[#111513]/70 leading-relaxed mb-3">
                  Directs syllabus implementation, laboratory practical schedules, continuous assessments, and pedagogical reviews.
                </p>
                <div className="text-[11px] font-mono text-[#0F2E1E]/60 pt-2 border-t border-[#0F2E1E]/10">
                  Subjects: {dept.subjects.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

    </div>
  );
};
