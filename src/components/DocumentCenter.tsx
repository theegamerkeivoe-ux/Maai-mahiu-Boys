import React, { useState } from 'react';
import { SCHOOL_DOCUMENTS } from '../data/schoolData';
import { SchoolDocument } from '../types/school';
import { FileText, Download, Eye, AlertCircle, Search } from 'lucide-react';

interface DocumentCenterProps {
  onViewDoc?: (doc: SchoolDocument) => void;
}

export const DocumentCenter: React.FC<DocumentCenterProps> = ({ onViewDoc }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', 'Admissions', 'Academic', 'Policies', 'Calendar', 'Fees'];

  const filteredDocs = SCHOOL_DOCUMENTS.filter((doc) => {
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white border border-[#0F2E1E]/20 p-6 sm:p-10 shadow-sm">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#0F2E1E]/15 gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#0F2E1E] font-bold">
            Official Document Archive
          </span>
          <h3 className="text-2xl font-bold text-[#111513] font-academic-sans mt-0.5">
            Admissions & Academic Document Center
          </h3>
          <p className="text-xs text-[#111513]/70 mt-1">
            Download verified joining guides, curriculum calendars, boarding checklists, and policies.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs bg-[#F8F6F0] border border-[#0F2E1E]/20 text-[#111513] placeholder-[#111513]/50 focus:outline-none focus:border-[#0F2E1E]"
          />
          <Search className="w-4 h-4 text-[#111513]/40 absolute left-2.5 top-2.5" />
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 py-4 border-b border-[#0F2E1E]/10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
              selectedCategory === cat
                ? 'bg-[#0F2E1E] text-white'
                : 'bg-[#F8F6F0] text-[#111513]/70 hover:text-[#0F2E1E]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Notice on Official School Data */}
      <div className="my-4 p-3 bg-[#F8F6F0] border-l-2 border-[#C8A858] flex items-center justify-between text-xs text-[#111513]/75">
        <span className="flex items-center gap-2">
          <AlertCircle className="w-3.5 h-3.5 text-[#0F2E1E] shrink-0" />
          <span>Documents marked with placeholder tags will be officially replaced upon Ministry release.</span>
        </span>
        <span className="font-mono text-[10px] text-[#0F2E1E]/60 uppercase">2026/2027 Cycle</span>
      </div>

      {/* Documents List */}
      <div className="divide-y divide-[#0F2E1E]/10 mt-2">
        {filteredDocs.map((doc) => (
          <div
            key={doc.id}
            className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#F8F6F0]/50 transition-colors px-2"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#0F2E1E]/10 text-[#0F2E1E] flex items-center justify-center shrink-0 mt-0.5">
                <FileText className="w-5 h-5 text-[#0F2E1E]" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#0F2E1E] bg-[#0F2E1E]/10 px-2 py-0.5 font-bold">
                    {doc.category}
                  </span>
                  <span className="text-xs text-[#111513]/50">· {doc.date}</span>
                  <span className="text-xs text-[#111513]/50">· {doc.fileSize}</span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-[#111513] font-academic-sans">
                  {doc.title}
                </h4>

                <p className="text-xs text-[#111513]/70 mt-1 max-w-2xl font-normal">
                  {doc.description}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 sm:self-center shrink-0">
              {onViewDoc && (
                <button
                  onClick={() => onViewDoc(doc)}
                  className="px-3 py-2 bg-white hover:bg-[#F8F6F0] text-[#0F2E1E] border border-[#0F2E1E]/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  title="View document summary & details"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>
              )}

              <button
                onClick={() => {
                  if (onViewDoc) {
                    onViewDoc(doc);
                  }
                }}
                className="px-3.5 py-2 bg-[#0F2E1E] hover:bg-[#133E29] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#C8A858]" />
                <span>{doc.fileType}</span>
              </button>
            </div>
          </div>
        ))}

        {filteredDocs.length === 0 && (
          <div className="py-12 text-center text-xs text-[#111513]/60">
            No official documents found matching the search criteria.
          </div>
        )}
      </div>

    </div>
  );
};
