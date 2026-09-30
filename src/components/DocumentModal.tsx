import React, { useState } from 'react';
import { SchoolDocument } from '../types/school';
import { SCHOOL_INFO } from '../data/schoolData';
import { CrestLogo } from './CrestLogo';
import { X, Download, Printer, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';

interface DocumentModalProps {
  document: SchoolDocument | null;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ document: doc, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!doc) return null;

  const handleDownload = () => {
    setDownloading(true);
    // Simulate realistic file generation and download
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);

      // Create an actual downloadable text/markdown file representation of the official document placeholder
      const content = `===============================================================
${SCHOOL_INFO.name.toUpperCase()}
${SCHOOL_INFO.motto}
${SCHOOL_INFO.locality} · ${SCHOOL_INFO.county}
===============================================================

DOCUMENT TITLE: ${doc.title}
CATEGORY: ${doc.category}
RELEASE DATE: ${doc.date}
SECURITY CLASSIFICATION: OFFICIAL SCHOOL CIRCULAR
FILE REFERENCE: MMB/DOC/2026/${doc.id.toUpperCase()}

NOTICE:
This is an authentic official school document issued by the Administration
of Maai Mahiu Boys High School, Nakuru County, Kenya.

OFFICIAL DETAILS:
- Institution: ${SCHOOL_INFO.name}
- Category: ${SCHOOL_INFO.categoryLabel}
- Postal Address: ${SCHOOL_INFO.contact.postalAddress}
- Phone Contact: ${SCHOOL_INFO.contact.phone}
- Email Contact: ${SCHOOL_INFO.contact.email}

DOCUMENT SYNOPSIS:
${doc.description}

TERMS & INSTRUCTIONS:
1. Students and parents must strictly observe the deadlines and requirements herein.
2. Any queries regarding fees or admissions must be verified directly with the school bursar or principal's office.
3. This circular is authenticated by the Office of the Deputy Principal.

[OFFICIAL SCHOOL STAMP & PRINCIPAL'S SIGNATURE PLACEHOLDER]
===============================================================
`;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = window.document.createElement('a');
      a.href = url;
      a.download = `${doc.title.replace(/[^a-zA-Z0-9]/g, '_')}_Official_MMB.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white border-2 border-[#0F2E1E] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#111513]/60 hover:text-[#0F2E1E] transition-colors"
          aria-label="Close Document Viewer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Document Header with School Crest */}
        <div className="flex items-center gap-4 pb-4 border-b border-[#0F2E1E]/20 mb-6">
          <CrestLogo size="md" variant="light" />
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#0F2E1E] font-bold">
              Republic of Kenya · Ministry of Education
            </div>
            <div className="text-base sm:text-lg font-bold text-[#111513] font-academic-sans">
              {SCHOOL_INFO.name}
            </div>
            <div className="text-xs text-[#111513]/60">
              Document Archive & Registry · {doc.category}
            </div>
          </div>
        </div>

        {/* Document Body */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#0F2E1E] bg-[#0F2E1E]/10 px-2.5 py-1">
              Format: {doc.fileType} ({doc.fileSize})
            </span>
            <span className="text-xs text-[#111513]/60">
              Publication Date: {doc.date}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#111513] font-academic-sans leading-snug">
            {doc.title}
          </h3>

          <div className="p-4 bg-[#F8F6F0] border-l-4 border-[#0F2E1E] text-xs sm:text-sm text-[#111513]/85 leading-relaxed font-normal">
            <p className="font-semibold text-[#0F2E1E] mb-1">Official Summary:</p>
            <p>{doc.description}</p>
          </div>

          <div className="p-4 border border-[#0F2E1E]/15 text-xs text-[#111513]/80 space-y-2">
            <div className="font-semibold text-[#0F2E1E] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C8A858]" />
              <span>Official Verification Stamp:</span>
            </div>
            <p className="italic">
              “This document contains authorized institutional procedures for Maai Mahiu Boys High School. To update or verify current fees or admission requirements, please contact the Principal’s office.”
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-4 border-t border-[#0F2E1E]/15 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#111513]/60">
            {downloadSuccess ? (
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Downloaded successfully
              </span>
            ) : (
              <span>Authenticated institutional file</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-white border border-[#0F2E1E]/30 text-[#0F2E1E] hover:bg-[#F8F6F0] text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="px-5 py-2 bg-[#0F2E1E] hover:bg-[#133E29] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5 text-[#C8A858]" />
              <span>{downloading ? 'Preparing...' : `Download ${doc.fileType}`}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
