import React, { useState } from 'react';
import { SCHOOL_INFO, NEWS_ARTICLES, EVENTS, SCHOOL_DOCUMENTS } from '../data/schoolData';
import { CrestLogo } from '../components/CrestLogo';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Newspaper,
  Calendar,
  Image,
  FileText,
  Bell,
  Mail,
  Settings,
  LogOut,
  Save,
  CheckCircle2,
  Plus,
  ShieldCheck,
} from 'lucide-react';

interface AdminPortalProps {
  onBackToWebsite: () => void;
  onUpdateSchoolSettings?: (settings: any) => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ onBackToWebsite, onUpdateSchoolSettings }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('admin@maaimahiuboys.ac.ke');
  const [password, setPassword] = useState('••••••••');
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'news' | 'events' | 'documents' | 'announcements' | 'settings'
  >('dashboard');

  const [settingsSaved, setSettingsSaved] = useState(false);
  const [contactSettings, setContactSettings] = useState({
    phone: SCHOOL_INFO.contact.phone,
    email: SCHOOL_INFO.contact.email,
    admissionsPhone: SCHOOL_INFO.contact.admissionsPhone,
    postalAddress: SCHOOL_INFO.contact.postalAddress,
  });

  const [announcementText, setAnnouncementText] = useState(
    'Form 1 admission letters for the 2026/2027 intake can now be downloaded from the Document Center.'
  );

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsSaved(true);
    if (onUpdateSchoolSettings) {
      onUpdateSchoolSettings(contactSettings);
    }
    setTimeout(() => setSettingsSaved(false), 3000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#111513] text-[#F8F6F0] flex flex-col justify-center items-center p-4">
        <div className="max-w-md w-full bg-[#0F2E1E] border border-[#C8A858]/30 p-8 shadow-2xl relative">
          <button
            onClick={onBackToWebsite}
            className="absolute top-4 right-4 text-xs font-mono text-[#C8A858] hover:underline"
          >
            ← Back to School Site
          </button>

          <div className="text-center mb-8">
            <div className="flex justify-center mb-3">
              <CrestLogo size="md" variant="dark" />
            </div>
            <h1 className="text-2xl font-bold font-academic-sans text-white">
              Administrator CMS Console
            </h1>
            <p className="text-xs text-[#C8A858] mt-1 font-mono">
              Maai Mahiu Boys High School
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block text-white/80 font-semibold mb-1">
                Admin Username / Email
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#111513] border border-white/20 text-white font-mono focus:outline-none focus:border-[#C8A858]"
              />
            </div>

            <div>
              <label className="block text-white/80 font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#111513] border border-white/20 text-white font-mono focus:outline-none focus:border-[#C8A858]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#C8A858] hover:bg-[#d8b868] text-[#111513] font-bold uppercase tracking-wider text-xs transition-colors mt-2"
            >
              Access Central Administration
            </button>
          </form>

          <div className="mt-8 pt-4 border-t border-white/10 text-center text-[11px] text-white/40">
            Institutional management access for Principal, Deputy Principals & ICT Administrators.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#111513] flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#111513] text-[#F8F6F0] flex flex-col justify-between shrink-0 border-r border-[#0F2E1E]">
        <div>
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CrestLogo size="sm" variant="dark" />
              <div>
                <div className="font-bold text-sm text-white">School Admin CMS</div>
                <div className="text-[10px] font-mono text-[#C8A858] uppercase">Central Console</div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#0F2E1E]/60 border-b border-white/10">
            <div className="text-xs uppercase text-[#C8A858] font-bold">Logged In Role</div>
            <div className="text-sm font-bold text-white mt-0.5">School Executive Admin</div>
            <div className="text-[11px] font-mono text-white/70">Full System Privileges</div>
          </div>

          <nav className="p-4 space-y-1 text-xs">
            {[
              { id: 'dashboard', label: 'Dashboard Overview', icon: LayoutDashboard },
              { id: 'news', label: 'News & Dispatches', icon: Newspaper },
              { id: 'events', label: 'Term Events Calendar', icon: Calendar },
              { id: 'documents', label: 'Document Archive', icon: FileText },
              { id: 'announcements', label: 'School Announcements', icon: Bell },
              { id: 'settings', label: 'Website Settings & Placeholders', icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full text-left px-3 py-2.5 flex items-center gap-3 rounded-sm transition-colors ${
                    isActive
                      ? 'bg-[#C8A858] text-[#111513] font-bold'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-white/10 space-y-2 text-xs">
          <button
            onClick={onBackToWebsite}
            className="w-full text-left py-2 px-3 text-white/60 hover:text-white transition-colors"
          >
            ← Return to Main Website
          </button>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="w-full text-left py-2 px-3 text-rose-400 hover:text-rose-300 flex items-center gap-2 font-semibold"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main CMS Content */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#0F2E1E]/15 gap-4 mb-8">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#0F2E1E] font-bold">
              Institutional CMS & Management
            </span>
            <h2 className="text-2xl font-bold font-academic-sans text-[#111513]">
              {activeTab === 'dashboard' ? 'Administrative Dashboard Overview' :
               activeTab === 'settings' ? 'School Information & Placeholder Settings' :
               activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-3 py-1 border border-emerald-300">
              System: Live & Healthy
            </span>
          </div>
        </div>

        {/* TAB: DASHBOARD OVERVIEW */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              <div className="bg-white p-6 border-l-4 border-[#0F2E1E] shadow-sm">
                <div className="text-[11px] uppercase tracking-wider text-[#111513]/60 font-semibold">Active Cohorts</div>
                <div className="text-3xl font-extrabold font-mono text-[#0F2E1E] mt-1">4 Forms</div>
                <div className="text-xs text-[#111513]/60 mt-1">Simba & Ndovu Streams</div>
              </div>

              <div className="bg-white p-6 border-l-4 border-[#C8A858] shadow-sm">
                <div className="text-[11px] uppercase tracking-wider text-[#111513]/60 font-semibold">Faculty Staff</div>
                <div className="text-3xl font-extrabold font-mono text-[#111513] mt-1">[Official Staff]</div>
                <div className="text-xs text-[#111513]/60 mt-1">6 Academic Departments</div>
              </div>

              <div className="bg-white p-6 border-l-4 border-[#111513] shadow-sm">
                <div className="text-[11px] uppercase tracking-wider text-[#111513]/60 font-semibold">Public Documents</div>
                <div className="text-3xl font-extrabold font-mono text-[#0F2E1E] mt-1">{SCHOOL_DOCUMENTS.length}</div>
                <div className="text-xs text-[#111513]/60 mt-1">Joining Instructions & Rules</div>
              </div>

              <div className="bg-white p-6 border-l-4 border-emerald-700 shadow-sm">
                <div className="text-[11px] uppercase tracking-wider text-[#111513]/60 font-semibold">Published Dispatches</div>
                <div className="text-3xl font-extrabold font-mono text-[#0F2E1E] mt-1">{NEWS_ARTICLES.length}</div>
                <div className="text-xs text-[#111513]/60 mt-1">Newsroom Articles</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 border border-[#0F2E1E]/15 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-[#0F2E1E] font-academic-sans">
                Quick Content Management Actions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('announcements')}
                  className="p-4 bg-[#F8F6F0] hover:bg-[#0F2E1E] text-[#0F2E1E] hover:text-white border border-[#0F2E1E]/20 text-left transition-colors"
                >
                  <Bell className="w-5 h-5 text-[#C8A858] mb-2" />
                  <div>Post Urgent Parent Announcement</div>
                </button>

                <button
                  onClick={() => setActiveTab('settings')}
                  className="p-4 bg-[#F8F6F0] hover:bg-[#0F2E1E] text-[#0F2E1E] hover:text-white border border-[#0F2E1E]/20 text-left transition-colors"
                >
                  <Settings className="w-5 h-5 text-[#C8A858] mb-2" />
                  <div>Update Official School Contacts & Info</div>
                </button>

                <button
                  onClick={() => setActiveTab('documents')}
                  className="p-4 bg-[#F8F6F0] hover:bg-[#0F2E1E] text-[#0F2E1E] hover:text-white border border-[#0F2E1E]/20 text-left transition-colors"
                >
                  <FileText className="w-5 h-5 text-[#C8A858] mb-2" />
                  <div>Manage Admissions Document Center</div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB: SETTINGS & PLACEHOLDERS */}
        {activeTab === 'settings' && (
          <div className="bg-white p-6 sm:p-8 border border-[#0F2E1E]/15 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold font-academic-sans text-[#0F2E1E]">
                Official School Contacts & Metadata Editor
              </h3>
              <p className="text-xs text-[#111513]/70">
                Update the official school telephone, email, and postal address. These will take effect throughout the public website.
              </p>
            </div>

            {settingsSaved && (
              <div className="p-3 bg-emerald-100 text-emerald-900 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>School contact details updated successfully.</span>
              </div>
            )}

            <form onSubmit={handleSaveSettings} className="space-y-4 text-xs max-w-xl">
              <div>
                <label className="block font-semibold mb-1">Official School Phone Contact</label>
                <input
                  type="text"
                  value={contactSettings.phone}
                  onChange={(e) => setContactSettings({ ...contactSettings, phone: e.target.value })}
                  className="w-full p-2.5 bg-[#F8F6F0] border border-[#0F2E1E]/20"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Admissions Desk Direct Line</label>
                <input
                  type="text"
                  value={contactSettings.admissionsPhone}
                  onChange={(e) => setContactSettings({ ...contactSettings, admissionsPhone: e.target.value })}
                  className="w-full p-2.5 bg-[#F8F6F0] border border-[#0F2E1E]/20"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Official School Email Address</label>
                <input
                  type="text"
                  value={contactSettings.email}
                  onChange={(e) => setContactSettings({ ...contactSettings, email: e.target.value })}
                  className="w-full p-2.5 bg-[#F8F6F0] border border-[#0F2E1E]/20"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Postal Address</label>
                <input
                  type="text"
                  value={contactSettings.postalAddress}
                  onChange={(e) => setContactSettings({ ...contactSettings, postalAddress: e.target.value })}
                  className="w-full p-2.5 bg-[#F8F6F0] border border-[#0F2E1E]/20"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 bg-[#0F2E1E] text-white font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#133E29]"
              >
                <Save className="w-4 h-4 text-[#C8A858]" />
                <span>Save School Metadata</span>
              </button>
            </form>
          </div>
        )}

        {/* TAB: ANNOUNCEMENTS */}
        {activeTab === 'announcements' && (
          <div className="bg-white p-6 sm:p-8 border border-[#0F2E1E]/15 shadow-sm space-y-6">
            <h3 className="text-xl font-bold font-academic-sans text-[#0F2E1E]">
              Broadcast School Announcement
            </h3>
            <p className="text-xs text-[#111513]/70">
              Publish announcements that display prominently in the Parent and Student Portals.
            </p>
            <div className="max-w-xl space-y-4 text-xs">
              <textarea
                rows={4}
                value={announcementText}
                onChange={(e) => setAnnouncementText(e.target.value)}
                className="w-full p-3 bg-[#F8F6F0] border border-[#0F2E1E]/20"
              />
              <button
                onClick={() => alert('Announcement broadcasted to portals successfully!')}
                className="px-5 py-2.5 bg-[#0F2E1E] text-white font-bold uppercase tracking-wider"
              >
                Broadcast to Portals
              </button>
            </div>
          </div>
        )}

        {/* OTHER TABS FALLBACK */}
        {(activeTab === 'news' || activeTab === 'events' || activeTab === 'documents') && (
          <div className="bg-white p-6 sm:p-8 border border-[#0F2E1E]/15 shadow-sm space-y-4">
            <h3 className="text-xl font-bold font-academic-sans text-[#0F2E1E]">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
            </h3>
            <p className="text-xs text-[#111513]/70">
              Content items in this section are synced with the live website view. Administrators can add, edit, or archive entries.
            </p>
          </div>
        )}

      </main>
    </div>
  );
};
