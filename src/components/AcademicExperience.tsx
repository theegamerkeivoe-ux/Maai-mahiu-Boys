import React from 'react';
import { BookOpen, Laptop, Compass, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../data/schoolData';
import { ActiveView } from '../types/school';

interface AcademicExperienceProps {
  onNavigate: (view: ActiveView) => void;
}

export const AcademicExperience: React.FC<AcademicExperienceProps> = ({ onNavigate }) => {
  return (
    <section className="bg-white text-[#111513] py-20 lg:py-28 border-b border-[#0F2E1E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#0F2E1E] mb-2">
            <span className="w-5 h-[2px] bg-[#C8A858]" />
            <span>Academic Rigor & Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel tracking-tight text-[#111513]">
            Learning That Goes Beyond the Classroom
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#111513]/75 leading-relaxed font-academic-sans">
            Our instructional framework merges rigorous syllabus coverage with hands-on inquiry, digital capability, and individualized mentorship to prepare boys for university admissions and career resilience.
          </p>
        </div>

        {/* 3 Large Academic Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Area 1: Classroom Learning */}
          <div className="p-8 bg-[#F8F6F0] border-t-4 border-[#0F2E1E] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#0F2E1E] text-[#C8A858] flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F2E1E] mb-3 font-academic-sans">
                Classroom Learning
              </h3>
              <p className="text-sm text-[#111513]/80 leading-relaxed mb-6 font-normal">
                Intensive syllabus delivery structured by expert subject masters. Regular continuous assessment tests (CATs), early syllabus completion in Form 4, diagnostic reviews, and rigorous revision regimes.
              </p>
              
              <ul className="space-y-2 text-xs text-[#111513]/85 font-medium border-t border-[#0F2E1E]/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F2E1E] shrink-0" />
                  <span>Structured Form 1 through Form 4 progression</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F2E1E] shrink-0" />
                  <span>Continuous assessment and diagnostic test analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F2E1E] shrink-0" />
                  <span>Dedicated candidate revision clinics</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 pt-4 border-t border-[#0F2E1E]/10 text-xs font-bold text-[#0F2E1E] uppercase tracking-wider">
              01 · Instructional Foundation
            </div>
          </div>

          {/* Area 2: Digital & Practical Learning */}
          <div className="p-8 bg-[#F8F6F0] border-t-4 border-[#C8A858] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#C8A858] text-[#111513] flex items-center justify-center mb-6">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F2E1E] mb-3 font-academic-sans">
                Digital & Practical Learning
              </h3>
              <p className="text-sm text-[#111513]/80 leading-relaxed mb-6 font-normal">
                Active experimentation in modern Science laboratories (Chemistry, Physics, Biology) and computer-assisted research in our ICT hub, giving theory tangible real-world application.
              </p>

              <ul className="space-y-2 text-xs text-[#111513]/85 font-medium border-t border-[#0F2E1E]/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A858] shrink-0" />
                  <span>Practical Science experiments and demonstrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A858] shrink-0" />
                  <span>ICT literacy, coding concepts, and research tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A858] shrink-0" />
                  <span>Agricultural demonstration plots & fieldwork</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#0F2E1E]/10 text-xs font-bold text-[#0F2E1E] uppercase tracking-wider">
              02 · Empirical Inquiry
            </div>
          </div>

          {/* Area 3: Academic Support */}
          <div className="p-8 bg-[#F8F6F0] border-t-4 border-[#111513] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#111513] text-[#F8F6F0] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F2E1E] mb-3 font-academic-sans">
                Academic Support & Mentorship
              </h3>
              <p className="text-sm text-[#111513]/80 leading-relaxed mb-6 font-normal">
                No boy is left behind. Tailored remedial sessions, peer-to-peer study circles, subject clinics, and one-on-one career guidance helping every student realize his academic ceiling.
              </p>

              <ul className="space-y-2 text-xs text-[#111513]/85 font-medium border-t border-[#0F2E1E]/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#111513] shrink-0" />
                  <span>Personalized subject clinic consultations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#111513] shrink-0" />
                  <span>Peer study syndicates in boarding houses</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#111513] shrink-0" />
                  <span>Career mapping and university pathway guidance</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#0F2E1E]/10 text-xs font-bold text-[#0F2E1E] uppercase tracking-wider">
              03 · Academic Stewardship
            </div>
          </div>

        </div>

        {/* Timetable-Inspired Academic Schedule Showcase */}
        <div className="border border-[#0F2E1E]/20 bg-[#F8F6F0] p-6 sm:p-10 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#0F2E1E]/15 gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#0F2E1E] font-bold">
                Instructional Grid Archetype
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111513] font-academic-sans mt-0.5">
                Academic Day Structure & Subject Matrix
              </h3>
            </div>
            <div className="text-xs text-[#111513]/60 italic">
              * Official curriculum timetables are structured according to Ministry of Education requirements.
            </div>
          </div>

          {/* Timetable Grid Preview */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#0F2E1E]/20 text-[#0F2E1E] uppercase tracking-wider font-semibold">
                  <th className="py-3 px-3">Session</th>
                  <th className="py-3 px-3">Time</th>
                  <th className="py-3 px-3">Core Academic Focus</th>
                  <th className="py-3 px-3">Methodology</th>
                  <th className="py-3 px-3">Cohort</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0F2E1E]/10 font-normal">
                <tr className="hover:bg-white/60">
                  <td className="py-3 px-3 font-semibold text-[#0F2E1E]">Period 1 – 2</td>
                  <td className="py-3 px-3 font-mono">07:30 – 09:10</td>
                  <td className="py-3 px-3 font-medium">Mathematics & Computational Logic</td>
                  <td className="py-3 px-3 text-[#111513]/70">Theory, Problem Sets & Proofs</td>
                  <td className="py-3 px-3 font-mono">Forms 1–4</td>
                </tr>
                <tr className="hover:bg-white/60">
                  <td className="py-3 px-3 font-semibold text-[#0F2E1E]">Period 3 – 4</td>
                  <td className="py-3 px-3 font-mono">09:10 – 10:30</td>
                  <td className="py-3 px-3 font-medium">Sciences (Chemistry / Physics / Biology)</td>
                  <td className="py-3 px-3 text-[#111513]/70">Wet Lab Experiments & Mechanics</td>
                  <td className="py-3 px-3 font-mono">Forms 1–4</td>
                </tr>
                <tr className="bg-[#0F2E1E]/5">
                  <td className="py-2.5 px-3 font-semibold text-[#C8A858]">Break</td>
                  <td className="py-2.5 px-3 font-mono text-[#0F2E1E]">10:30 – 11:00</td>
                  <td className="py-2.5 px-3 italic" colSpan={3}>Tea Break & Teacher Consultations</td>
                </tr>
                <tr className="hover:bg-white/60">
                  <td className="py-3 px-3 font-semibold text-[#0F2E1E]">Period 5 – 6</td>
                  <td className="py-3 px-3 font-mono">11:00 – 12:40</td>
                  <td className="py-3 px-3 font-medium">Languages (English & Kiswahili)</td>
                  <td className="py-3 px-3 text-[#111513]/70">Set-Book Analysis & Composition</td>
                  <td className="py-3 px-3 font-mono">Forms 1–4</td>
                </tr>
                <tr className="hover:bg-white/60">
                  <td className="py-3 px-3 font-semibold text-[#0F2E1E]">Period 7 – 8</td>
                  <td className="py-3 px-3 font-mono">14:00 – 15:40</td>
                  <td className="py-3 px-3 font-medium">Humanities & Technical Electives</td>
                  <td className="py-3 px-3 text-[#111513]/70">Seminar Discussions & Computer Practical</td>
                  <td className="py-3 px-3 font-mono">Forms 1–4</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#0F2E1E]/10">
            <span className="text-xs text-[#111513]/70">
              Curriculum offerings: Mathematics, English, Kiswahili, Biology, Chemistry, Physics, History & Government, Geography, C.R.E, Agriculture, Business Studies, Computer Studies [Subject to official Ministry offering].
            </span>
            <button
              onClick={() => onNavigate('academics')}
              className="px-5 py-2.5 bg-[#0F2E1E] text-white hover:bg-[#133E29] text-xs font-semibold uppercase tracking-wider shrink-0 transition-colors"
            >
              Explore All Departments →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
