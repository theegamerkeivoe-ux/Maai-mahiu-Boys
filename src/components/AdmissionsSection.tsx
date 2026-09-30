import React from 'react';
import { ActiveView, SchoolDocument } from '../types/school';
import { Compass, Mail, Download, ArrowRight, CheckCircle2 } from 'lucide-react';
import { DocumentCenter } from './DocumentCenter';

interface AdmissionsSectionProps {
  onNavigate: (view: ActiveView) => void;
  onOpenEnquiry: () => void;
  onViewDoc: (doc: SchoolDocument) => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({
  onNavigate,
  onOpenEnquiry,
  onViewDoc,
}) => {
  const steps = [
    {
      num: '01',
      title: 'Explore',
      desc: 'Tour our campus ethos, examine our academic standards, curriculum disciplines, and boarding environment.',
    },
    {
      num: '02',
      title: 'Enquire',
      desc: 'Liaise directly with our admissions office to clarify placement criteria, transfer openings, or Form 1 intake procedures.',
    },
    {
      num: '03',
      title: 'Apply',
      desc: 'Submit official Ministry placement documentation, primary school assessment records, and admission request forms.',
    },
    {
      num: '04',
      title: 'Prepare',
      desc: 'Review approved joining instructions, acquire authorized boarding items, complete medical history and parent undertaking forms.',
    },
    {
      num: '05',
      title: 'Join',
      desc: 'Report on opening day with required documentation, attend student and parent orientation, and join the school brotherhood.',
    },
  ];

  return (
    <section className="bg-[#F8F6F0] text-[#111513] py-20 lg:py-28 border-b border-[#0F2E1E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#0F2E1E] mb-2">
            <span className="w-5 h-[2px] bg-[#C8A858]" />
            <span>Admissions Portal & Enrolment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel tracking-tight text-[#111513] leading-tight">
            Your Son’s Next Chapter Starts Here.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#111513]/80 leading-relaxed font-academic-sans">
            We welcome motivated young men seeking academic seriousness, high personal standards, and a supportive brotherhood in Maai Mahiu.
          </p>

          {/* Prominent Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('admissions')}
              className="px-6 py-3.5 bg-[#0F2E1E] text-white hover:bg-[#133E29] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
            >
              <Compass className="w-4 h-4 text-[#C8A858]" />
              <span>Admission Information</span>
            </button>

            <button
              onClick={onOpenEnquiry}
              className="px-6 py-3.5 bg-[#C8A858] text-[#111513] hover:bg-[#d8b868] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Admissions</span>
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('admissions-doc-center');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 bg-white border border-[#0F2E1E]/30 text-[#0F2E1E] hover:border-[#0F2E1E] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4 text-[#0F2E1E]" />
              <span>Download Documents</span>
            </button>
          </div>
        </div>

        {/* Vertical Application Journey */}
        <div className="bg-white border border-[#0F2E1E]/15 p-6 sm:p-10 mb-16 shadow-sm">
          <div className="flex items-center justify-between pb-6 border-b border-[#0F2E1E]/10 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#0F2E1E] font-bold">
                Application Journey
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111513] font-academic-sans">
                Five Steps to Joining Maai Mahiu Boys
              </h3>
            </div>
            <span className="text-xs font-mono text-[#0F2E1E] bg-[#F8F6F0] px-3 py-1 font-semibold border border-[#0F2E1E]/10">
              Form 1 & Transfer Admissions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#0F2E1E]/10">
            {steps.map((step) => (
              <div key={step.num} className="pt-4 md:pt-0 md:px-4 first:pl-0 last:pr-0">
                <div className="font-mono text-3xl font-extrabold text-[#C8A858] mb-2">
                  {step.num}
                </div>
                <h4 className="text-base font-bold text-[#0F2E1E] font-academic-sans mb-1.5 flex items-center gap-1.5">
                  <span>{step.title}</span>
                </h4>
                <p className="text-xs text-[#111513]/70 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-[#0F2E1E]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#111513]/60">
            <span>* Placement for Form 1 candidates is managed via the official Ministry of Education NEMIS portal.</span>
            <button
              onClick={onOpenEnquiry}
              className="font-bold text-[#0F2E1E] hover:text-[#C8A858] flex items-center gap-1 uppercase tracking-wider"
            >
              <span>Submit Online Admission Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Admissions Document Center */}
        <div id="admissions-doc-center">
          <DocumentCenter onViewDoc={onViewDoc} />
        </div>

      </div>
    </section>
  );
};
