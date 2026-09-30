import React, { useState } from 'react';
import { CrestLogo } from '../components/CrestLogo';
import {
  UserCheck,
  BookOpen,
  Calendar,
  CheckCircle2,
  Save,
  Users,
  Search,
  LogOut,
  AlertCircle,
  FileSpreadsheet,
} from 'lucide-react';

interface TeacherPortalProps {
  onBackToWebsite: () => void;
}

interface StudentGradeEntry {
  admNo: string;
  name: string;
  cat1: number;
  cat2: number;
  endTerm: number;
}

export const TeacherPortal: React.FC<TeacherPortalProps> = ({ onBackToWebsite }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [staffId, setStaffId] = useState('TSC/482910');
  const [password, setPassword] = useState('••••••••');
  const [activeTab, setActiveTab] = useState<'classes' | 'marks' | 'attendance' | 'timetable'>('marks');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sample editable marks roster for Form 3 Mathematics
  const [roster, setRoster] = useState<StudentGradeEntry[]>([
    { admNo: 'MMB/2024/4192', name: 'Brian Mwangi Kamau', cat1: 28, cat2: 27, endTerm: 68 },
    { admNo: 'MMB/2024/4193', name: 'Dennis Kipchirchir', cat1: 25, cat2: 26, endTerm: 62 },
    { admNo: 'MMB/2024/4194', name: 'Emmanuel Ochieng', cat1: 29, cat2: 29, endTerm: 70 },
    { admNo: 'MMB/2024/4195', name: 'James Mutua Nzioki', cat1: 22, cat2: 24, endTerm: 58 },
    { admNo: 'MMB/2024/4196', name: 'Samuel Kariuki', cat1: 26, cat2: 25, endTerm: 65 },
  ]);

  const handleScoreChange = (admNo: string, field: 'cat1' | 'cat2' | 'endTerm', value: number) => {
    setRoster(roster.map(r => r.admNo === admNo ? { ...r, [field]: value } : r));
    setSavedSuccess(false);
  };

  const calculateTotal = (entry: StudentGradeEntry) => {
    // 30% CATs + 70% End Term exam
    const catTotal = entry.cat1 + entry.cat2; // out of 60
    const catPercent = (catTotal / 60) * 30;
    const examPercent = (entry.endTerm / 100) * 70;
    return Math.round(catPercent + examPercent);
  };

  const getGrade = (total: number) => {
    if (total >= 80) return 'A';
    if (total >= 75) return 'A-';
    if (total >= 70) return 'B+';
    if (total >= 65) return 'B';
    if (total >= 60) return 'B-';
    if (total >= 55) return 'C+';
    if (total >= 50) return 'C';
    return 'D+';
  };

  const handleSaveMarks = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
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
              Teacher & Staff Portal
            </h1>
            <p className="text-xs text-[#C8A858] mt-1 font-mono">
              Maai Mahiu Boys High School
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setIsAuthenticated(true); }} className="space-y-4 text-xs">
            <div>
              <label className="block text-white/80 font-semibold mb-1">
                TSC Number / Staff ID
              </label>
              <input
                type="text"
                required
                value={staffId}
                onChange={(e) => setStaffId(e.target.value)}
                placeholder="e.g. TSC/482910"
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
              Sign In to Faculty Desk
            </button>
          </form>

          <div className="mt-8 pt-4 border-t border-white/10 text-center text-[11px] text-white/40">
            Authorized for verified Teachers Service Commission staff of Maai Mahiu Boys.
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
                <div className="font-bold text-sm text-white">Faculty Desk</div>
                <div className="text-[10px] font-mono text-[#C8A858] uppercase">Staff Portal</div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#0F2E1E]/60 border-b border-white/10">
            <div className="text-xs uppercase text-[#C8A858] font-bold">Logged In Master</div>
            <div className="text-sm font-bold text-white mt-0.5">[Subject Master Placeholder]</div>
            <div className="text-[11px] font-mono text-white/70">TSC #{staffId} · Mathematics</div>
          </div>

          <nav className="p-4 space-y-1 text-xs">
            {[
              { id: 'marks', label: 'Marks Entry & Grading', icon: FileSpreadsheet },
              { id: 'classes', label: 'My Classes & Students', icon: Users },
              { id: 'attendance', label: 'Daily Attendance Register', icon: CheckCircle2 },
              { id: 'timetable', label: 'Teaching Timetable', icon: Calendar },
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

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#0F2E1E]/15 gap-4 mb-8">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#0F2E1E] font-bold">
              Form 3 East · Mathematics Continuous Assessment
            </span>
            <h2 className="text-2xl font-bold font-academic-sans text-[#111513]">
              Examination Marks Entry & Moderation
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSaveMarks}
              className="px-5 py-2.5 bg-[#0F2E1E] hover:bg-[#133E29] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
            >
              <Save className="w-4 h-4 text-[#C8A858]" />
              <span>Save & Calculate Mean</span>
            </button>
          </div>
        </div>

        {savedSuccess && (
          <div className="mb-6 p-4 bg-emerald-100 border-l-4 border-emerald-700 text-emerald-900 text-xs flex items-center gap-2 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>Assessment records compiled and saved successfully to central academic records.</span>
          </div>
        )}

        {/* MARKS ENTRY TABLE */}
        <div className="bg-white p-6 border border-[#0F2E1E]/15 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#0F2E1E]/10">
            <div className="text-xs text-[#111513]/70">
              Weights: CAT 1 (30 pts) + CAT 2 (30 pts) [Total 30%] | End-Term (100 pts) [Total 70%]
            </div>
            <span className="text-xs font-mono font-bold text-[#0F2E1E]">Class Size: {roster.length} Candidates</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#0F2E1E]/20 text-[#0F2E1E] uppercase font-bold tracking-wider">
                  <th className="py-2.5 px-3">Adm No.</th>
                  <th className="py-2.5 px-3">Candidate Full Name</th>
                  <th className="py-2.5 px-3 text-center">CAT 1 (/30)</th>
                  <th className="py-2.5 px-3 text-center">CAT 2 (/30)</th>
                  <th className="py-2.5 px-3 text-center">End Term (/100)</th>
                  <th className="py-2.5 px-3 text-center">Total (%)</th>
                  <th className="py-2.5 px-3 text-center">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0F2E1E]/10">
                {roster.map((entry) => {
                  const total = calculateTotal(entry);
                  const grade = getGrade(total);

                  return (
                    <tr key={entry.admNo} className="hover:bg-[#F8F6F0]">
                      <td className="py-3 px-3 font-mono text-[#0F2E1E] font-semibold">{entry.admNo}</td>
                      <td className="py-3 px-3 font-semibold text-[#111513]">{entry.name}</td>
                      
                      <td className="py-2 px-3 text-center">
                        <input
                          type="number"
                          max={30}
                          min={0}
                          value={entry.cat1}
                          onChange={(e) => handleScoreChange(entry.admNo, 'cat1', parseInt(e.target.value) || 0)}
                          className="w-16 text-center py-1 bg-[#F8F6F0] border border-[#0F2E1E]/20 font-mono font-bold"
                        />
                      </td>

                      <td className="py-2 px-3 text-center">
                        <input
                          type="number"
                          max={30}
                          min={0}
                          value={entry.cat2}
                          onChange={(e) => handleScoreChange(entry.admNo, 'cat2', parseInt(e.target.value) || 0)}
                          className="w-16 text-center py-1 bg-[#F8F6F0] border border-[#0F2E1E]/20 font-mono font-bold"
                        />
                      </td>

                      <td className="py-2 px-3 text-center">
                        <input
                          type="number"
                          max={100}
                          min={0}
                          value={entry.endTerm}
                          onChange={(e) => handleScoreChange(entry.admNo, 'endTerm', parseInt(e.target.value) || 0)}
                          className="w-20 text-center py-1 bg-[#F8F6F0] border border-[#0F2E1E]/20 font-mono font-bold"
                        />
                      </td>

                      <td className="py-3 px-3 text-center font-mono font-extrabold text-[#0F2E1E] text-sm">
                        {total}%
                      </td>

                      <td className="py-3 px-3 text-center">
                        <span className="px-2 py-0.5 font-bold font-mono text-[11px] bg-emerald-100 text-emerald-800">
                          {grade}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
};
