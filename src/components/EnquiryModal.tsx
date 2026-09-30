import React, { useState } from 'react';
import { X, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    studentName: '',
    targetForm: 'Form 1',
    previousSchool: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `MMB-ADM-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefNumber(generatedRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      parentName: '',
      parentPhone: '',
      parentEmail: '',
      studentName: '',
      targetForm: 'Form 1',
      previousSchool: '',
      message: '',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white border-2 border-[#0F2E1E] max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-[#111513]/60 hover:text-[#0F2E1E] transition-colors"
          aria-label="Close Enquiry Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0F2E1E] mb-2">
              <span className="w-4 h-[2px] bg-[#C8A858]" />
              <span>Admissions Office Enrolment Desk</span>
            </div>

            <h3 className="text-2xl font-bold text-[#111513] font-academic-sans mb-2">
              Admissions Enquiry Form
            </h3>
            
            <p className="text-xs text-[#111513]/70 mb-6">
              Complete the enquiry below. Our Admissions Secretariat will review your son’s details and reach out within 24–48 business hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#111513] mb-1">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. David Mwangi"
                    className="w-full px-3 py-2 text-xs bg-[#F8F6F0] border border-[#0F2E1E]/20 text-[#111513] focus:outline-none focus:border-[#0F2E1E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#111513] mb-1">
                    Phone Contact (M-Pesa / SMS) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                    placeholder="+254 7XX XXX XXX"
                    className="w-full px-3 py-2 text-xs bg-[#F8F6F0] border border-[#0F2E1E]/20 text-[#111513] focus:outline-none focus:border-[#0F2E1E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#111513] mb-1">
                    Parent Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.parentEmail}
                    onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                    placeholder="parent@example.com"
                    className="w-full px-3 py-2 text-xs bg-[#F8F6F0] border border-[#0F2E1E]/20 text-[#111513] focus:outline-none focus:border-[#0F2E1E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#111513] mb-1">
                    Target Form / Grade Level *
                  </label>
                  <select
                    value={formData.targetForm}
                    onChange={(e) => setFormData({ ...formData, targetForm: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#F8F6F0] border border-[#0F2E1E]/20 text-[#111513] focus:outline-none focus:border-[#0F2E1E]"
                  >
                    <option value="Form 1">Form 1 (Fresh Intake)</option>
                    <option value="Form 2">Form 2 (Transfer Enquiry)</option>
                    <option value="Form 3">Form 3 (Transfer Enquiry)</option>
                    <option value="Form 4">Form 4 (Candidate Inquiries Only)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#111513] mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Kevin Mwangi"
                    className="w-full px-3 py-2 text-xs bg-[#F8F6F0] border border-[#0F2E1E]/20 text-[#111513] focus:outline-none focus:border-[#0F2E1E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#111513] mb-1">
                    Previous School / Assessment
                  </label>
                  <input
                    type="text"
                    value={formData.previousSchool}
                    onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                    placeholder="Primary or Current Secondary School"
                    className="w-full px-3 py-2 text-xs bg-[#F8F6F0] border border-[#0F2E1E]/20 text-[#111513] focus:outline-none focus:border-[#0F2E1E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#111513] mb-1">
                  Enquiry Details or Specific Questions
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ask about boarding options, specific subject combinations, or reporting guidelines..."
                  className="w-full px-3 py-2 text-xs bg-[#F8F6F0] border border-[#0F2E1E]/20 text-[#111513] focus:outline-none focus:border-[#0F2E1E]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#111513]/60 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0F2E1E]" />
                  <span>Confidential Admissions Channel</span>
                </span>
                
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#0F2E1E] hover:bg-[#133E29] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-[#C8A858]" />
                  <span>Submit Enquiry</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-14 h-14 bg-[#0F2E1E]/10 text-[#0F2E1E] mx-auto flex items-center justify-center rounded-full mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#0F2E1E]" />
            </div>

            <div className="text-xs uppercase tracking-widest text-[#C8A858] font-bold mb-1">
              Enquiry Received Successfully
            </div>

            <h3 className="text-2xl font-bold text-[#111513] font-academic-sans mb-2">
              Reference #{refNumber}
            </h3>

            <p className="text-sm text-[#111513]/80 max-w-md mx-auto mb-6">
              Thank you, {formData.parentName}. Your application enquiry for {formData.studentName} ({formData.targetForm}) has been recorded at the Maai Mahiu Boys High School Admissions Office.
            </p>

            <div className="p-4 bg-[#F8F6F0] border border-[#0F2E1E]/10 max-w-md mx-auto text-left text-xs text-[#111513]/80 space-y-1 mb-6">
              <div><strong>Admissions Desk Phone:</strong> {SCHOOL_INFO.contact.admissionsPhone}</div>
              <div><strong>Admissions Email:</strong> {SCHOOL_INFO.contact.admissionsEmail}</div>
              <div><strong>Office Location:</strong> Administration Block, Maai Mahiu Campus</div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#0F2E1E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#133E29] transition-colors"
            >
              Done & Return
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
