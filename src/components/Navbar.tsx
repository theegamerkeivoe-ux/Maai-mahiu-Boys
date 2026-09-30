import React, { useState, useEffect } from 'react';
import { ActiveView } from '../types/school';
import { CrestLogo } from './CrestLogo';
import { Menu, X, ArrowRight, ShieldCheck, UserCheck, GraduationCap, Users } from 'lucide-react';

interface NavbarProps {
  currentView: ActiveView;
  onNavigate: (view: ActiveView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portalsDropdownOpen, setPortalsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; view: ActiveView }[] = [
    { label: 'School', view: 'about' },
    { label: 'Learning', view: 'academics' },
    { label: 'Student Experience', view: 'experience' },
    { label: 'Admissions', view: 'admissions' },
    { label: 'News', view: 'news' },
    { label: 'Gallery', view: 'gallery' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: ActiveView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    setPortalsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111513]/95 backdrop-blur-md py-2.5 border-b border-[#0F2E1E]/40 text-[#F8F6F0] shadow-lg'
            : 'bg-[#0F2E1E] py-4 text-[#F8F6F0] border-b border-[#C8A858]/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Lockup */}
            <button
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-3.5 text-left focus-visible:outline-2 focus-visible:outline-[#C8A858]"
            >
              <CrestLogo size={isScrolled ? 'sm' : 'md'} variant="dark" />
              <div className="flex flex-col">
                <span className="font-cinzel font-bold tracking-wider text-base sm:text-lg leading-tight text-[#F8F6F0] group-hover:text-[#C8A858] transition-colors whitespace-nowrap">
                  MAAI MAHIU BOYS
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A858] font-mono leading-none mt-1">
                  High School · Kenya
                </span>
              </div>
            </button>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = currentView === link.view;
                return (
                  <button
                    key={link.view}
                    onClick={() => handleNavClick(link.view)}
                    className={`text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors relative py-1 focus-visible:outline-none whitespace-nowrap ${
                      isActive
                        ? 'text-[#C8A858]'
                        : 'text-[#F8F6F0]/85 hover:text-[#C8A858]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A858] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Portal Actions */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={() => handleNavClick('portal-student')}
                className={`px-3.5 py-2 text-xs font-semibold tracking-wide uppercase transition-all rounded border whitespace-nowrap focus-visible:outline-none ${
                  currentView === 'portal-student'
                    ? 'bg-[#C8A858] text-[#111513] border-[#C8A858]'
                    : 'bg-transparent text-[#F8F6F0] border-[#F8F6F0]/30 hover:border-[#C8A858] hover:text-[#C8A858]'
                }`}
              >
                Student Portal
              </button>

              <button
                onClick={() => handleNavClick('portal-parent')}
                className={`px-3.5 py-2 text-xs font-semibold tracking-wide uppercase transition-all rounded border whitespace-nowrap focus-visible:outline-none ${
                  currentView === 'portal-parent'
                    ? 'bg-[#C8A858] text-[#111513] border-[#C8A858]'
                    : 'bg-[#C8A858] text-[#111513] border-[#C8A858] hover:bg-[#d8b868]'
                }`}
              >
                Parent Portal
              </button>

              {/* Staff / Admin Quick Dropdown Trigger */}
              <div className="relative">
                <button
                  onClick={() => setPortalsDropdownOpen(!portalsDropdownOpen)}
                  title="Staff & Management Portals"
                  className="p-2 text-[#F8F6F0]/70 hover:text-[#C8A858] transition-colors rounded hover:bg-[#111513]/40"
                  aria-label="Staff Portals"
                >
                  <ShieldCheck className="w-4 h-4" />
                </button>

                {portalsDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#111513] border border-[#C8A858]/30 rounded-sm shadow-2xl py-2 z-50">
                    <button
                      onClick={() => handleNavClick('portal-teacher')}
                      className="w-full text-left px-4 py-2 text-xs text-[#F8F6F0] hover:bg-[#0F2E1E] hover:text-[#C8A858] flex items-center justify-between"
                    >
                      <span>Teacher Portal</span>
                      <UserCheck className="w-3.5 h-3.5 text-[#C8A858]" />
                    </button>
                    <button
                      onClick={() => handleNavClick('portal-admin')}
                      className="w-full text-left px-4 py-2 text-xs text-[#F8F6F0] hover:bg-[#0F2E1E] hover:text-[#C8A858] flex items-center justify-between"
                    >
                      <span>Admin CMS</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C8A858]" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded text-[#F8F6F0] hover:text-[#C8A858] focus-visible:outline-none"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#111513] text-[#F8F6F0] flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div>
            {/* Top Bar with Brand & Close */}
            <div className="flex items-center justify-between border-b border-[#0F2E1E] pb-5">
              <div className="flex items-center gap-3">
                <CrestLogo size="md" variant="dark" />
                <div>
                  <div className="font-bold text-lg text-[#F8F6F0]">Maai Mahiu Boys</div>
                  <div className="text-xs uppercase tracking-widest text-[#C8A858]">High School</div>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#F8F6F0]/70 hover:text-[#C8A858] rounded"
                aria-label="Close Navigation"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Nav Links List */}
            <nav className="mt-8 flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('home')}
                className="text-left text-2xl font-serif text-[#F8F6F0] hover:text-[#C8A858] transition-colors py-1 flex items-center justify-between border-b border-[#1A1E1C]"
              >
                <span>Home</span>
                <ArrowRight className="w-4 h-4 text-[#C8A858]" />
              </button>

              {navLinks.map((link) => (
                <button
                  key={link.view}
                  onClick={() => handleNavClick(link.view)}
                  className={`text-left text-2xl font-serif transition-colors py-1 flex items-center justify-between border-b border-[#1A1E1C] ${
                    currentView === link.view
                      ? 'text-[#C8A858] font-medium'
                      : 'text-[#F8F6F0]/90 hover:text-[#C8A858]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#C8A858]" />
                </button>
              ))}
            </nav>
          </div>

          {/* Bottom Portals Cluster */}
          <div className="mt-10 pt-6 border-t border-[#0F2E1E] space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#C8A858] mb-2">
              School Access Portals
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleNavClick('portal-student')}
                className="p-3 text-center bg-[#0F2E1E] hover:bg-[#133E29] text-white rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-[#C8A858]" />
                <span>Student</span>
              </button>
              <button
                onClick={() => handleNavClick('portal-parent')}
                className="p-3 text-center bg-[#C8A858] hover:bg-[#d8b868] text-[#111513] rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4 text-[#111513]" />
                <span>Parent</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <button
                onClick={() => handleNavClick('portal-teacher')}
                className="p-2.5 text-center bg-[#1A1E1C] hover:bg-[#252b28] text-white/80 hover:text-white rounded text-xs font-medium flex items-center justify-center gap-1.5"
              >
                <UserCheck className="w-3.5 h-3.5 text-[#C8A858]" />
                <span>Teacher Desk</span>
              </button>
              <button
                onClick={() => handleNavClick('portal-admin')}
                className="p-2.5 text-center bg-[#1A1E1C] hover:bg-[#252b28] text-white/80 hover:text-white rounded text-xs font-medium flex items-center justify-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#C8A858]" />
                <span>Admin CMS</span>
              </button>
            </div>
            <div className="text-[11px] text-[#F8F6F0]/40 text-center pt-2">
              Maai Mahiu Boys High School · Built to Lead. Prepared to Serve.
            </div>
          </div>
        </div>
      )}
    </>
  );
};
