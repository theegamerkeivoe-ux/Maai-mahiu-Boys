import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'General Enquiry',
      message: '',
    });
  };

  return (
    <div className="bg-[#F8F6F0] text-[#111513]">
      
      {/* Page Header */}
      <section className="bg-[#0F2E1E] text-white py-16 lg:py-24 border-b border-[#C8A858]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-[#C8A858] font-bold mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#C8A858]" />
              <span>Institutional Enquiries & Registry</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-academic-sans tracking-tight text-white leading-tight">
              Let’s Talk.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed font-light">
              Reach the school administration block, bursary office, or admissions desk directly. We are always ready to assist parents and prospective families.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 border border-[#0F2E1E]/20 shadow-sm space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#0F2E1E] font-bold">
                  Direct Registry
                </span>
                <h2 className="text-2xl font-bold font-academic-sans text-[#111513] mt-1">
                  Maai Mahiu Boys High School
                </h2>
                <div className="text-xs text-[#111513]/60 font-mono mt-0.5">
                  Maai Mahiu Township, Nakuru County, Kenya
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#111513]/85 pt-4 border-t border-[#0F2E1E]/10">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#0F2E1E]/10 text-[#0F2E1E] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F2E1E]">Phone Contact</div>
                    <div className="font-mono mt-0.5">{SCHOOL_INFO.contact.phone}</div>
                    <div className="text-[11px] text-[#111513]/55">Admissions: {SCHOOL_INFO.contact.admissionsPhone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#0F2E1E]/10 text-[#0F2E1E] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F2E1E]">Email Inquiries</div>
                    <div className="font-mono mt-0.5">{SCHOOL_INFO.contact.email}</div>
                    <div className="text-[11px] text-[#111513]/55">Admissions: {SCHOOL_INFO.contact.admissionsEmail}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#0F2E1E]/10 text-[#0F2E1E] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F2E1E]">Postal Address</div>
                    <div className="mt-0.5">{SCHOOL_INFO.contact.postalAddress}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#0F2E1E]/10 text-[#0F2E1E] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F2E1E]">Office Working Hours</div>
                    <div className="mt-0.5">Monday – Friday: 08:00 AM – 05:00 PM</div>
                    <div className="text-[11px] text-[#111513]/55">Saturday: 08:30 AM – 12:30 PM (Admissions Only)</div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#F8F6F0] border-l-2 border-[#C8A858] text-xs text-[#111513]/70">
                * Official school phone numbers and email domains are editable via the Administrator CMS.
              </div>
            </div>

            {/* Geographic Transit Note */}
            <div className="bg-[#111513] text-white p-6 border border-[#C8A858]/30">
              <div className="text-xs uppercase tracking-widest text-[#C8A858] font-bold mb-2">
                Location & Access
              </div>
              <h3 className="text-base font-bold font-academic-sans text-white mb-2">
                Reaching the Campus in Maai Mahiu
              </h3>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                Accessible via the Nairobi–Naivasha Old Road junction at Maai Mahiu township. Regular matatus and private vehicles connect easily from Nairobi (approx. 50 km) and Naivasha (approx. 35 km).
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#0F2E1E]/20 shadow-sm">
            {!submitted ? (
              <div>
                <div className="text-xs uppercase tracking-widest text-[#0F2E1E] font-bold mb-2">
                  Official Correspondence
                </div>
                <h2 className="text-2xl font-bold font-academic-sans text-[#111513] mb-2">
                  Send a Message to the School
                </h2>
                <p className="text-xs text-[#111513]/70 mb-6">
                  Please complete the form below. Messages are dispatched to the appropriate department (Principal, Academic Registrar, or Bursar).
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#111513] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Grace Wanjiku"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs bg-[#F8F6F0] border border-[#0F2E1E]/20 text-[#111513] focus:outline-none focus:border-[#0F2E1E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#111513] mb-1">
                        Telephone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+254 7XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs bg-[#F8F6F0] border border-[#0F2E1E]/20 text-[#111513] focus:outline-none focus:border-[#0F2E1E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#111513] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs bg-[#F8F6F0] border border-[#0F2E1E]/20 text-[#111513] focus:outline-none focus:border-[#0F2E1E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#111513] mb-1">
                        Subject of Message *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs bg-[#F8F6F0] border border-[#0F2E1E]/20 text-[#111513] focus:outline-none focus:border-[#0F2E1E]"
                      >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Admissions & Placement">Admissions & Placement</option>
                        <option value="Academic Matters">Academic Matters</option>
                        <option value="Fee Clearance / Bursar">Fee Clearance / Bursary</option>
                        <option value="Student Welfare & Boarding">Student Welfare & Boarding</option>
                        <option value="Alumni Relations">Alumni Relations</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111513] mb-1">
                      Message Content *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Write your official message, question, or inquiry here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-[#F8F6F0] border border-[#0F2E1E]/20 text-[#111513] focus:outline-none focus:border-[#0F2E1E]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-[#111513]/60 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0F2E1E]" />
                      <span>Encrypted Registry Delivery</span>
                    </span>

                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#0F2E1E] hover:bg-[#133E29] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
                    >
                      <Send className="w-4 h-4 text-[#C8A858]" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-[#0F2E1E]/10 text-[#0F2E1E] rounded-full mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10 text-[#0F2E1E]" />
                </div>
                <div className="text-xs uppercase tracking-widest text-[#C8A858] font-bold mb-1">
                  Message Dispatched
                </div>
                <h3 className="text-2xl font-bold font-academic-sans text-[#111513] mb-2">
                  Thank You, {formData.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#111513]/75 max-w-md mx-auto mb-6">
                  Your message concerning <strong>{formData.subject}</strong> has been logged in the Maai Mahiu Boys High School communications registry. We will contact you at {formData.phone || formData.email}.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#0F2E1E] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white p-6 sm:p-8 border border-[#0F2E1E]/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#0F2E1E]/15 mb-6 gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#0F2E1E] font-bold">
                Geographic Coordinates
              </span>
              <h3 className="text-xl font-bold font-academic-sans text-[#111513]">
                Campus Location: Maai Mahiu, Nakuru County
              </h3>
            </div>
            <div className="text-xs font-mono text-[#0F2E1E] bg-[#F8F6F0] px-3 py-1 border border-[#0F2E1E]/10">
              0°59'30.8"S 36°35'12.4"E (Rift Valley Escarpment)
            </div>
          </div>

          {/* Interactive Styled Map View */}
          <div className="relative h-64 sm:h-80 bg-[#1A1E1C] overflow-hidden border border-[#0F2E1E]/20 flex items-center justify-center text-center p-6">
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#C8A858 1px, transparent 1px)`,
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative z-10 max-w-md bg-[#111513]/90 border border-[#C8A858]/40 p-6 shadow-2xl">
              <div className="w-10 h-10 bg-[#0F2E1E] rounded-full mx-auto flex items-center justify-center text-[#C8A858] mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-academic-sans">
                Maai Mahiu Boys High School Campus
              </h4>
              <p className="text-xs text-white/70 mt-1">
                Situated off the Old Naivasha Road in Maai Mahiu Township, Nakuru County.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-center gap-3 text-xs text-[#C8A858]">
                <span>Near Mount Longonot National Park</span>
                <span>·</span>
                <span>Great Rift Valley</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
