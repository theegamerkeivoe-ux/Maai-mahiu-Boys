import React, { useState } from 'react';
import { MOCK_STUDENT_DATA, SCHOOL_INFO } from '../data/schoolData';
import { CrestLogo } from '../components/CrestLogo';
import {
  Users,
  Award,
  Calendar,
  CreditCard,
  Bell,
  FileText,
  LogOut,
  Mail,
  CheckCircle2,
  AlertCircle,
  Download,
  ShieldCheck,
} from 'lucide-react';

interface ParentPortalProps {
  onBackToWebsite: () => void;
}

export const ParentPortal: React.FC<ParentPortalProps> = ({ onBackToWebsite }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginId, setLoginId] = useState('parent.mwangi@example.com');
  const [password, setPassword] = useState('••••••••');
  const [activeTab, setActiveTab] = useState<'son' | 'academics' | 'fees' | 'attendance' | 'notices' | 'messages'>('son');

  const student = MOCK_STUDENT_DATA;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
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
              Parent & Guardian Portal
            </h1>
            <p className="text-xs text-[#C8A858] mt-1 font-mono">
              Maai Mahiu Boys High School
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block text-white/80 font-semibold mb-1">
                Parent Email or Registered Phone
              </label>
              <input
                type="text"
                required
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                placeholder="parent@example.com or +254 7XX..."
                className="w-full px-3 py-2.5 bg-[#111513] border border-white/20 text-white font-mono focus:outline-none focus:border-[#C8A858]"
              />
            </div>

            <div>
              <label className="block text-white/80 font-semibold mb-1">
                Security Password
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
              Sign In to Parent Dashboard
            </button>
          </form>

          <div className="mt-8 pt-4 border-t border-white/10 text-center text-[11px] text-white/40">
            For account linking with your son’s NEMIS / admission record, contact the admissions secretariat.
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
                <div className="font-bold text-sm text-white">Parent Portal</div>
                <div className="text-[10px] font-mono text-[#C8A858] uppercase">Guardian Access</div>
              </div>
            </div>
          </div>

          {/* Ward Details */}
          <div className="p-4 bg-[#0F2E1E]/60 border-b border-white/10">
            <div className="text-xs uppercase text-[#C8A858] font-bold">My Son</div>
            <div className="text-sm font-bold text-white mt-0.5">{student.name}</div>
            <div className="text-[11px] font-mono text-white/70">{student.admNo} · {student.form}</div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1 text-xs">
            {[
              { id: 'son', label: 'My Son Overview', icon: Users },
              { id: 'academics', label: 'Academic Performance', icon: Award },
              { id: 'fees', label: 'Fee Statement (Mock)', icon: CreditCard },
              { id: 'attendance', label: 'Attendance & Welfare', icon: Calendar },
              { id: 'notices', label: 'Announcements & Alerts', icon: Bell },
              { id: 'messages', label: 'Teacher Messaging', icon: Mail },
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

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
        
        {/* Urgent Parent Notification Banner */}
        <div className="mb-6 p-4 bg-[#0F2E1E] text-white border-l-4 border-[#C8A858] flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <Bell className="w-5 h-5 text-[#C8A858] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-wider text-[#C8A858] font-bold">
                School Announcement for Parents
              </div>
              <p className="text-xs sm:text-sm text-white/90 mt-0.5">
                New information has been posted for parents: Form 3 & Form 4 parents academic consultation conference scheduled for April 12, 2026.
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-white/70 shrink-0">
            Active Notice
          </span>
        </div>

        {/* TAB: MY SON OVERVIEW */}
        {activeTab === 'son' && (
          <div className="space-y-8">
            <div className="bg-white p-6 sm:p-8 border border-[#0F2E1E]/15 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#0F2E1E]/10 gap-4 mb-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#0F2E1E] font-bold">
                    Official Student Record
                  </span>
                  <h2 className="text-2xl font-bold font-academic-sans text-[#111513]">
                    {student.name}
                  </h2>
                  <div className="text-xs text-[#111513]/60 mt-0.5">
                    Admission #{student.admNo} · Form 3 East (Simba) · Resident Boarder
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-3 py-1.5 border border-emerald-300">
                    Mean Score: {student.overallGrade}
                  </span>
                </div>
              </div>

              {/* Overview Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
                <div className="p-4 bg-[#F8F6F0] border border-[#0F2E1E]/10">
                  <div className="text-[#111513]/60">House & Dormitory</div>
                  <div className="text-sm font-bold text-[#0F2E1E] mt-1">{student.house}</div>
                  <div className="text-[11px] text-[#111513]/50 mt-1">House Master: Senior Master Longonot</div>
                </div>

                <div className="p-4 bg-[#F8F6F0] border border-[#0F2E1E]/10">
                  <div className="text-[#111513]/60">Class Teacher Remarks</div>
                  <div className="text-xs font-semibold text-[#111513] mt-1">
                    “Brian demonstrates exemplary academic commitment and leadership among peers.”
                  </div>
                </div>

                <div className="p-4 bg-[#F8F6F0] border border-[#0F2E1E]/10">
                  <div className="text-[#111513]/60">Attendance Rate</div>
                  <div className="text-sm font-bold text-emerald-700 mt-1">{student.attendancePct}% Present</div>
                  <div className="text-[11px] text-emerald-700 mt-1">Full attendance recorded</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: ACADEMICS */}
        {activeTab === 'academics' && (
          <div className="bg-white p-6 sm:p-8 border border-[#0F2E1E]/15 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#0F2E1E]/10">
              <div>
                <h3 className="text-xl font-bold font-academic-sans text-[#0F2E1E]">
                  Academic Progress Report Card
                </h3>
                <p className="text-xs text-[#111513]/60">Term 1 Continuous Assessment & Examination Results</p>
              </div>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-[#0F2E1E] text-white text-xs font-semibold flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-[#C8A858]" />
                <span>Print Report Card</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#0F2E1E]/20 text-[#0F2E1E] uppercase font-bold tracking-wider">
                    <th className="py-2.5 px-3">Subject</th>
                    <th className="py-2.5 px-3">Mark (%)</th>
                    <th className="py-2.5 px-3">Grade</th>
                    <th className="py-2.5 px-3">Subject Master Comments</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0F2E1E]/10">
                  {student.subjects.map((s, idx) => (
                    <tr key={idx} className="hover:bg-[#F8F6F0]">
                      <td className="py-3 px-3 font-semibold text-[#111513]">{s.subject}</td>
                      <td className="py-3 px-3 font-mono font-bold">{s.score}%</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 font-bold font-mono text-[11px] bg-emerald-100 text-emerald-800">
                          {s.grade}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-[#111513]/75">{s.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB: FEES (MOCK ONLY, STRICT INTEGRITY POLICY) */}
        {activeTab === 'fees' && (
          <div className="bg-white p-6 sm:p-8 border border-[#0F2E1E]/15 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold font-academic-sans text-[#0F2E1E]">
                Fee Statement (Sample Educational Prototype)
              </h3>
              <p className="text-xs text-[#111513]/60">
                Official Ministry of Education standard fee accounting breakdown.
              </p>
            </div>

            <div className="p-4 bg-amber-50 border-l-4 border-amber-600 text-xs text-amber-900 leading-relaxed space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-700" />
                <span>Financial Transaction Policy:</span>
              </div>
              <p>
                In strict compliance with instructions, no financial payments or transactions can be conducted online through this prototype. Official fee payments are handled exclusively via the authorized school bank accounts or verified school paybill number.
              </p>
            </div>

            <div className="border border-[#0F2E1E]/15 p-4 text-xs space-y-2">
              <div className="flex justify-between py-1 border-b border-[#0F2E1E]/10 font-bold">
                <span>Description</span>
                <span>Amount (KES)</span>
              </div>
              <div className="flex justify-between py-1 text-[#111513]/80">
                <span>Tuition & Instructional Materials (MoE Subsidized)</span>
                <span>KES [Verified By Ministry]</span>
              </div>
              <div className="flex justify-between py-1 text-[#111513]/80">
                <span>Boarding Operations & Maintenance</span>
                <span>KES [Official Term Fee]</span>
              </div>
              <div className="flex justify-between py-1 text-[#111513]/80">
                <span>Co-curricular & Medical Insurance Cover</span>
                <span>KES [Statutory MoE Cap]</span>
              </div>
              <div className="flex justify-between py-2 border-t-2 border-[#0F2E1E] font-bold text-sm text-[#0F2E1E]">
                <span>Status: Current Term Balance</span>
                <span className="text-emerald-700">Cleared / Up to Date</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB: NOTICES & MESSAGING */}
        {(activeTab === 'attendance' || activeTab === 'notices' || activeTab === 'messages') && (
          <div className="bg-white p-6 sm:p-8 border border-[#0F2E1E]/15 shadow-sm space-y-4">
            <h3 className="text-xl font-bold font-academic-sans text-[#0F2E1E]">
              {activeTab === 'notices' ? 'School Notices for Parents' : activeTab === 'messages' ? 'Direct Messages with Teachers' : 'Boarding Attendance Record'}
            </h3>
            <p className="text-xs text-[#111513]/70">
              {activeTab === 'messages'
                ? 'Send a direct message to Brian’s Class Master or House Master. Official responses are provided within 24 working hours.'
                : 'All dates and notifications are synced with the school calendar.'}
            </p>
          </div>
        )}

      </main>

    </div>
  );
};
