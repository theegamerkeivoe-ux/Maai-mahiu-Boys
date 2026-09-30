import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolDocument } from '../types/school';
import { DocumentCenter } from '../components/DocumentCenter';
import { CheckCircle2, AlertCircle, Compass, Mail, Download, ArrowRight, ShieldCheck } from 'lucide-react';

interface AdmissionsPageProps {
  onOpenEnquiry: () => void;
  onViewDoc: (doc: SchoolDocument) => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ onOpenEnquiry, onViewDoc }) => {
  return (
    <div className="bg-[#F8F6F0] text-[#111513]">
      
      {/* Page Hero */}
      <section className="bg-[#0F2E1E] text-white py-16 lg:py-24 border-b border-[#C8A858]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-[#C8A858] font-bold mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#C8A858]" />
              <span>Admissions & Enrolment Portal 2026/2027</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-academic-sans tracking-tight text-white leading-tight">
              Your Son’s Next Chapter Starts Here.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed font-light">
              We welcome prospective students and parents seeking an environment defined by academic discipline, moral seriousness, and brotherly camaraderie in Maai Mahiu, Kenya.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3.5 bg-[#C8A858] text-[#111513] hover:bg-[#d8b868] text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Submit Admissions Enquiry</span>
              </button>
              
              <button
                onClick={() => {
                  const el = document.getElementById('docs-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-transparent border border-white/30 text-white hover:border-[#C8A858] hover:text-[#C8A858] text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Joining Forms</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Admissions Criteria Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 border-t-4 border-[#0F2E1E] shadow-sm">
            <h3 className="text-xl font-bold text-[#0F2E1E] font-academic-sans mb-3">
              Form 1 National Intake
            </h3>
            <p className="text-xs text-[#111513]/75 leading-relaxed mb-4">
              Form 1 placement is conducted according to Ministry of Education guidelines via the National Education Management Information System (NEMIS).
            </p>
            <ul className="space-y-2 text-xs text-[#111513]/85">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F2E1E] shrink-0" />
                <span>Official MoE / NEMIS Calling Letter</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F2E1E] shrink-0" />
                <span>Original Primary School Assessment Slip</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F2E1E] shrink-0" />
                <span>Certified Birth Certificate copy</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 border-t-4 border-[#C8A858] shadow-sm">
            <h3 className="text-xl font-bold text-[#0F2E1E] font-academic-sans mb-3">
              Transfer Admissions (Forms 2 & 3)
            </h3>
            <p className="text-xs text-[#111513]/75 leading-relaxed mb-4">
              Transfer vacancies depend strictly on boarding space availability and verified academic conduct from previous institutions.
            </p>
            <ul className="space-y-2 text-xs text-[#111513]/85">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A858] shrink-0" />
                <span>Official Clearance & Release Letter</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A858] shrink-0" />
                <span>Past 3 terms cumulative report forms</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A858] shrink-0" />
                <span>Conduct certificate signed by previous Principal</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 border-t-4 border-[#111513] shadow-sm">
            <h3 className="text-xl font-bold text-[#0F2E1E] font-academic-sans mb-3">
              Fee Guidelines & Undertakings
            </h3>
            <p className="text-xs text-[#111513]/75 leading-relaxed mb-4">
              Fees are charged strictly according to current Ministry of Education gazetted circulars for public boarding secondary schools.
            </p>
            <div className="p-3 bg-[#F8F6F0] border-l-2 border-[#0F2E1E] text-xs space-y-1 mb-4">
              <strong className="text-[#0F2E1E] block">Integrity Notice:</strong>
              <span className="text-[#111513]/70 italic">
                Do not make cash payments to individuals. All fees must be deposited directly to designated official school bank accounts.
              </span>
            </div>
            <div className="text-xs font-semibold text-[#0F2E1E]">
              [Fee Structure details provided on official school letterhead]
            </div>
          </div>

        </section>

        {/* 5-Step Vertical Application Journey */}
        <section className="bg-white p-8 sm:p-12 border border-[#0F2E1E]/15">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0F2E1E] mb-1">
              Step-by-Step Procedure
            </div>
            <h3 className="text-2xl font-bold text-[#111513] font-academic-sans">
              Parent Admissions Roadmap
            </h3>
          </div>

          <div className="space-y-6">
            {[
              { num: '01', title: 'Explore & Review Ethos', desc: 'Read through our curriculum departments, discipline code, and boarding values to ensure alignment with your family’s expectations for your son.' },
              { num: '02', title: 'Admissions Enquiry or NEMIS Verification', desc: 'Verify placement via NEMIS or submit an online transfer enquiry through our admissions secretariat.' },
              { num: '03', title: 'Submission of Credentials', desc: 'Submit authenticated copies of assessment certificates, medical assessment documents, and parent emergency contacts.' },
              { num: '04', title: 'Preparation of Boarding Gear', desc: 'Acquire authorized boarding uniforms, mattresses, approved textbooks, and personal hygiene items outlined in the official Joining Instructions checklist.' },
              { num: '05', title: 'Reporting & Orientation', desc: 'Report on the designated reporting date. Student and parents undergo official verification and meet the House Master.' },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-4 p-4 bg-[#F8F6F0] border border-[#0F2E1E]/10">
                <span className="font-mono text-2xl font-extrabold text-[#C8A858] shrink-0 w-10">
                  {step.num}
                </span>
                <div>
                  <h4 className="text-base font-bold text-[#0F2E1E] font-academic-sans">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#111513]/75 mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Embedded Document Center */}
        <div id="docs-section">
          <DocumentCenter onViewDoc={onViewDoc} />
        </div>

      </div>

    </div>
  );
};
