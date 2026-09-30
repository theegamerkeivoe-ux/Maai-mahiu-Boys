import React from 'react';
import { ActiveView } from '../types/school';
import { SCHOOL_INFO } from '../data/schoolData';
import { CrestLogo } from './CrestLogo';
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ActiveView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = 2026;

  return (
    <footer className="bg-[#111513] text-[#F8F6F0] pt-16 pb-12 border-t border-[#0F2E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Massive School Wordmark & Tagline Banner */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="flex items-center gap-4">
              <CrestLogo size="lg" variant="dark" />
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-[#F8F6F0] font-cinzel">
                  {SCHOOL_INFO.name}
                </h2>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#C8A858] mt-1 font-cinzel">
                  {SCHOOL_INFO.motto}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-white/50">
              <span>{SCHOOL_INFO.county}</span>
              <span>·</span>
              <span>{SCHOOL_INFO.subCounty}</span>
              <span>·</span>
              <span className="text-[#C8A858]">{SCHOOL_INFO.categoryLabel}</span>
            </div>
          </div>
        </div>

        {/* 4 Structured Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10 text-xs">
          
          {/* Column 1: School */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C8A858] mb-4">
              School
            </h3>
            <ul className="space-y-2.5 text-white/70">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#C8A858] transition-colors text-left"
                >
                  About the School
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('leadership')}
                  className="hover:text-[#C8A858] transition-colors text-left"
                >
                  Governance & Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academics')}
                  className="hover:text-[#C8A858] transition-colors text-left"
                >
                  Academics & Departments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experience')}
                  className="hover:text-[#C8A858] transition-colors text-left"
                >
                  Student Experience & Sports
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('events')}
                  className="hover:text-[#C8A858] transition-colors text-left"
                >
                  School Calendar & Events
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Admissions */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C8A858] mb-4">
              Admissions
            </h3>
            <ul className="space-y-2.5 text-white/70">
              <li>
                <button
                  onClick={() => onNavigate('admissions')}
                  className="hover:text-[#C8A858] transition-colors text-left"
                >
                  Admission Information
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admissions')}
                  className="hover:text-[#C8A858] transition-colors text-left"
                >
                  Joining Requirements
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admissions')}
                  className="hover:text-[#C8A858] transition-colors text-left"
                >
                  Document Center & Forms
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#C8A858] transition-colors text-left"
                >
                  Contact Admissions Office
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('news')}
                  className="hover:text-[#C8A858] transition-colors text-left"
                >
                  From Around the School
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Portals */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C8A858] mb-4">
              Access Portals
            </h3>
            <ul className="space-y-2.5 text-white/70">
              <li>
                <button
                  onClick={() => onNavigate('portal-student')}
                  className="hover:text-[#C8A858] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Student Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C8A858]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portal-parent')}
                  className="hover:text-[#C8A858] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Parent Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C8A858]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portal-teacher')}
                  className="hover:text-[#C8A858] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Teacher Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C8A858]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portal-admin')}
                  className="hover:text-[#C8A858] transition-colors text-left flex items-center gap-1.5 text-white/90"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8A858]" />
                  <span>Admin CMS</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Connect */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C8A858] mb-4">
              Connect & Location
            </h3>
            
            <div className="space-y-3 text-white/70 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C8A858] shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.contact.physicalAddress}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C8A858] shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.contact.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C8A858] shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.contact.email}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
              <a href={SCHOOL_INFO.social.facebook} className="text-white/60 hover:text-[#C8A858] transition-colors">
                Facebook
              </a>
              <span className="text-white/20">·</span>
              <a href={SCHOOL_INFO.social.twitter} className="text-white/60 hover:text-[#C8A858] transition-colors">
                X (Twitter)
              </a>
              <span className="text-white/20">·</span>
              <a href={SCHOOL_INFO.social.instagram} className="text-white/60 hover:text-[#C8A858] transition-colors">
                Instagram
              </a>
              <span className="text-white/20">·</span>
              <a href={SCHOOL_INFO.social.youtube} className="text-white/60 hover:text-[#C8A858] transition-colors">
                YouTube
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {currentYear} Maai Mahiu Boys High School. All Rights Reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Website designed & developed for</span>
            <span className="font-semibold text-white/80">Maai Mahiu Boys High School</span>
            <span>·</span>
            <span className="text-[#C8A858]">Kenya Secondary Education Prototype</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
