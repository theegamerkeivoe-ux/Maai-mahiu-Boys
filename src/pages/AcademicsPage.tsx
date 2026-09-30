import React, { useState } from 'react';
import { DEPARTMENTS, IMAGES } from '../data/schoolData';
import { Department } from '../types/school';
import { BookOpen, UserCheck, CheckCircle2, Megaphone, FolderGit2, Calendar } from 'lucide-react';

export const AcademicsPage: React.FC = () => {
  const [selectedDeptId, setSelectedDeptId] = useState<string>('mathematics');

  const activeDept = DEPARTMENTS.find((d) => d.id === selectedDeptId) || DEPARTMENTS[0];

  return (
    <div className="bg-[#F8F6F0] text-[#111513]">
      
      {/* Page Header */}
      <section className="bg-[#0F2E1E] text-white py-16 lg:py-24 border-b border-[#C8A858]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-[#C8A858] font-bold mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#C8A858]" />
              <span>Academic Curriculum & Faculties</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-academic-sans tracking-tight text-white leading-tight">
              Academic Departments & Learning Systems
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed font-light">
              Structured subject mastery across Sciences, Humanities, Languages, Technical, and Mathematical disciplines in preparation for Kenya Certificate of Secondary Education (KCSE) and future career pathways.
            </p>
          </div>
        </div>
      </section>

      {/* Main Department Explorer */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Department Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-[#0F2E1E]/15 mb-10">
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDeptId(dept.id)}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border ${
                selectedDeptId === dept.id
                  ? 'bg-[#0F2E1E] text-white border-[#0F2E1E]'
                  : 'bg-white text-[#111513]/75 border-[#0F2E1E]/20 hover:text-[#0F2E1E] hover:border-[#0F2E1E]'
              }`}
            >
              {dept.name.replace(' Department', '')}
            </button>
          ))}
        </div>

        {/* Active Department Comprehensive Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Department Details & Curriculum (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Header Block */}
            <div className="bg-white p-8 border border-[#0F2E1E]/20 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#0F2E1E]/10 mb-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#0F2E1E] font-bold">
                    Faculty Division
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#111513] font-academic-sans mt-0.5">
                    {activeDept.name}
                  </h2>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-mono text-[#C8A858] bg-[#0F2E1E] px-2.5 py-1 font-bold">
                    Core Faculty
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#111513]/85 leading-relaxed font-normal mb-8">
                {activeDept.introduction}
              </p>

              {/* Subjects Offered */}
              <div className="mb-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0F2E1E] mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#C8A858]" />
                  <span>Subjects & Study Disciplines</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeDept.subjects.map((subj, idx) => (
                    <div key={idx} className="p-3 bg-[#F8F6F0] border border-[#0F2E1E]/10 flex items-center gap-2 text-xs font-semibold text-[#111513]">
                      <span className="w-1.5 h-1.5 bg-[#0F2E1E] rounded-full" />
                      <span>{subj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Resources */}
              <div className="mb-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0F2E1E] mb-3 flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-[#C8A858]" />
                  <span>Laboratories & Departmental Resources</span>
                </h3>
                <ul className="space-y-2 text-xs text-[#111513]/80">
                  {activeDept.resources.map((res, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0F2E1E] shrink-0" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Activities */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0F2E1E] mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#C8A858]" />
                  <span>Annual Contests & Symposia</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeDept.activities.map((act, idx) => (
                    <span key={idx} className="text-xs font-medium bg-[#0F2E1E]/5 text-[#0F2E1E] px-3 py-1 border border-[#0F2E1E]/10">
                      {act}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Department Announcement Banner */}
            <div className="bg-[#0F2E1E] text-white p-6 border-l-4 border-[#C8A858] flex items-start gap-4">
              <Megaphone className="w-5 h-5 text-[#C8A858] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider text-[#C8A858] font-bold">
                  Department Noticeboard
                </div>
                <p className="text-xs sm:text-sm text-white/90 mt-1 leading-relaxed">
                  {activeDept.announcement}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Head of Department Dossier & Official Policy (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* HOD Card with Placeholder Discipline */}
            <div className="bg-white p-6 border border-[#0F2E1E]/20 shadow-sm">
              <div className="text-xs font-mono uppercase tracking-widest text-[#C8A858] font-bold mb-1">
                Faculty Administration
              </div>
              <h3 className="text-lg font-bold text-[#0F2E1E] font-academic-sans">
                {activeDept.hodTitle}
              </h3>
              
              <div className="w-16 h-16 bg-[#F8F6F0] border border-[#0F2E1E]/20 my-4 flex items-center justify-center text-[#0F2E1E]">
                <UserCheck className="w-8 h-8 text-[#0F2E1E]" />
              </div>

              <div className="text-sm font-bold text-[#111513]">
                {activeDept.hodName}
              </div>
              <div className="text-xs font-mono text-[#111513]/60 mb-4">
                Senior Master / HOD · TSC Authorized
              </div>

              <p className="text-xs text-[#111513]/75 leading-relaxed border-t border-[#0F2E1E]/10 pt-4">
                Oversees curriculum delivery, student assessment record moderation, laboratory supplies, and teacher lesson evaluations in compliance with Quality Assurance standards.
              </p>

              <div className="mt-4 pt-3 border-t border-[#0F2E1E]/10 text-[11px] text-[#111513]/55 italic">
                * Official teacher profiles & appointments are published upon formal Gazettement.
              </div>
            </div>

            {/* Practical Science Lab Showcase Callout */}
            <div className="bg-[#111513] text-white p-6 border border-[#C8A858]/30">
              <div className="text-xs uppercase tracking-widest text-[#C8A858] font-bold mb-2">
                Empirical Excellence
              </div>
              <h4 className="text-base font-bold font-academic-sans text-white mb-2">
                Modern Science Laboratories
              </h4>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Fully functional Chemistry, Physics, and Biology apparatus enabling every student to master empirical procedures before national assessment.
              </p>
              <img
                src={IMAGES.scienceLab}
                alt="Science Lab Experimentation"
                className="w-full h-32 object-cover border border-white/20 mb-3"
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] font-mono text-white/50 block text-right">
                Maai Mahiu Boys Science Complex
              </span>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};
