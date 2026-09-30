import React, { useState } from 'react';
import { MOCK_STUDENT_DATA, SCHOOL_INFO } from '../data/schoolData';
import { CrestLogo } from '../components/CrestLogo';
import {
  User,
  BookOpen,
  Calendar,
  Clock,
  FileText,
  Bell,
  CheckCircle2,
  Award,
  LogOut,
  ChevronRight,
  TrendingUp,
  FileCheck,
  ShieldAlert,
} from 'lucide-react';

interface StudentPortalProps {
  onBackToWebsite: () => void;
}

export const StudentPortal: React.FC<StudentPortalProps> = ({ onBackToWebsite }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [studentNo, setStudentNo] = useState('MMB/2024/4192');
  const [password, setPassword] = useState('••••••••');
  const [activeTab, setActiveTab] = useState<'overview' | 'academics' | 'timetable' | 'assignments' | 'attendance' | 'announcements'>('overview');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
  };

  const student = MOCK_STUDENT_DATA;

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
              Student Portal Access
            </h1>
            <p className="text-xs text-[#C8A858] mt-1 font-mono">
              Maai Mahiu Boys High School
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block text-white/80 font-semibold mb-1">
                Student Admission Number
              </label>
              <input
                type="text"
                required
                value={studentNo}
                onChange={(e) => setStudentNo(e.target.value)}
                placeholder="e.g. MMB/2024/4192"
                className="w-full px-3 py-2.5 bg-[#111513] border border-white/20 text-white font-mono focus:outline-none focus:border-[#C8A858]"
              />
            </div>

            <div>
              <label className="block text-white/80 font-semibold mb-1">
                Portal Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#111513] border border-white/20 text-white font-mono focus:outline-none focus:border-[#C8A858]"
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-white/60">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" defaultChecked className="accent-[#C8A858]" />
                <span>Remember on this terminal</span>
              </label>
              <span className="text-[#C8A858] cursor-pointer hover:underline">
                Forgot password?
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#C8A858] hover:bg-[#d8b868] text-[#111513] font-bold uppercase tracking-wider text-xs transition-colors mt-2"
            >
              Sign In to Student Dashboard
            </button>
          </form>

          <div className="mt-8 pt-4 border-t border-white/10 text-center text-[11px] text-white/40">
            For assistance with lost passwords, consult your Class Master or ICT Lab attendant.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#111513] flex flex-col md:flex-row">
      
      {/* Sidebar Dashboard Navigation */}
      <aside className="w-full md:w-64 bg-[#111513] text-[#F8F6F0] flex flex-col justify-between shrink-0 border-r border-[#0F2E1E]">
        <div>
          {/* Brand Badge */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CrestLogo size="sm" variant="dark" />
              <div>
                <div className="font-bold text-sm text-white">Student Desk</div>
                <div className="text-[10px] font-mono text-[#C8A858] uppercase">MMB Portal</div>
              </div>
            </div>
          </div>

          {/* Student Profile Quick Lockup */}
          <div className="p-4 bg-[#0F2E1E]/60 border-b border-white/10">
            <div className="text-xs font-bold text-white">{student.name}</div>
            <div className="text-[11px] font-mono text-[#C8A858]">{student.admNo}</div>
            <div className="text-[11px] text-white/60 mt-0.5">{student.form} · {student.stream}</div>
          </div>

          {/* Sidebar Menu Items */}
          <nav className="p-4 space-y-1 text-xs">
            {[
              { id: 'overview', label: 'My Profile & Overview', icon: User },
              { id: 'academics', label: 'Academic Performance', icon: Award },
              { id: 'timetable', label: 'My Timetable', icon: Calendar },
              { id: 'assignments', label: 'Assignments & Prep', icon: BookOpen },
              { id: 'attendance', label: 'Attendance & House', icon: TrendingUp },
              { id: 'announcements', label: 'School Announcements', icon: Bell },
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

        {/* Bottom Actions */}
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

      {/* Main Dashboard Content Area */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
        
        {/* Top Operational Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#0F2E1E]/15 gap-4 mb-8">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#0F2E1E] font-bold">
              2026 Academic Term 1
            </span>
            <h2 className="text-2xl font-bold font-academic-sans text-[#111513]">
              Welcome back, {student.name.split(' ')[0]}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-3 py-1 border border-emerald-300 rounded-sm">
              Status: Boarder in Good Standing
            </span>
            <button
              onClick={onBackToWebsite}
              className="text-xs font-semibold px-3 py-1 bg-white border border-[#0F2E1E]/20 text-[#0F2E1E] hover:bg-[#0F2E1E] hover:text-white transition-colors"
            >
              Public School Site
            </button>
          </div>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-white p-5 border-l-4 border-[#0F2E1E] shadow-sm">
                <div className="text-[11px] uppercase tracking-wider text-[#111513]/60 font-semibold">Overall Grade</div>
                <div className="text-2xl font-bold font-mono text-[#0F2E1E] mt-1">{student.overallGrade}</div>
                <div className="text-[11px] text-emerald-700 font-medium mt-1">Target: Form 4 Direct Entry</div>
              </div>

              <div className="bg-white p-5 border-l-4 border-[#C8A858] shadow-sm">
                <div className="text-[11px] uppercase tracking-wider text-[#111513]/60 font-semibold">Term Attendance</div>
                <div className="text-2xl font-bold font-mono text-[#111513] mt-1">{student.attendancePct}%</div>
                <div className="text-[11px] text-emerald-700 font-medium mt-1">0 unexcused absences</div>
              </div>

              <div className="bg-white p-5 border-l-4 border-[#111513] shadow-sm">
                <div className="text-[11px] uppercase tracking-wider text-[#111513]/60 font-semibold">House Assignment</div>
                <div className="text-sm font-bold text-[#0F2E1E] mt-1">{student.house}</div>
                <div className="text-[11px] text-[#111513]/60 mt-1">Dormitory Block B</div>
              </div>

              <div className="bg-white p-5 border-l-4 border-[#0F2E1E] shadow-sm">
                <div className="text-[11px] uppercase tracking-wider text-[#111513]/60 font-semibold">Pending Prep Tasks</div>
                <div className="text-2xl font-bold font-mono text-[#0F2E1E] mt-1">1 Assignment</div>
                <div className="text-[11px] text-amber-700 font-medium mt-1">Due Tomorrow 5:00 PM</div>
              </div>
            </div>

            {/* Profile Overview */}
            <div className="bg-white p-6 border border-[#0F2E1E]/15 shadow-sm">
              <h3 className="text-base font-bold text-[#0F2E1E] font-academic-sans mb-4 pb-2 border-b border-[#0F2E1E]/10">
                Official Student Bio Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-[#111513]/60 block">Full Name:</span>
                  <span className="font-semibold text-[#111513]">{student.name}</span>
                </div>
                <div>
                  <span className="text-[#111513]/60 block">Admission Number:</span>
                  <span className="font-mono font-semibold text-[#0F2E1E]">{student.admNo}</span>
                </div>
                <div>
                  <span className="text-[#111513]/60 block">Cohort Stream:</span>
                  <span className="font-semibold text-[#111513]">{student.form} ({student.stream})</span>
                </div>
                <div>
                  <span className="text-[#111513]/60 block">Boarding House:</span>
                  <span className="font-semibold text-[#111513]">{student.house}</span>
                </div>
                <div>
                  <span className="text-[#111513]/60 block">KNEC Candidate Index:</span>
                  <span className="font-mono font-semibold text-[#111513]">2753XXXX042</span>
                </div>
                <div>
                  <span className="text-[#111513]/60 block">Disciplinary Record:</span>
                  <span className="text-emerald-700 font-semibold">Exemplary Conduct</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ACADEMICS */}
        {activeTab === 'academics' && (
          <div className="bg-white p-6 border border-[#0F2E1E]/15 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#0F2E1E]/10">
              <div>
                <h3 className="text-lg font-bold text-[#0F2E1E] font-academic-sans">
                  Term Assessment Transcript
                </h3>
                <p className="text-xs text-[#111513]/60">Mid-Term & End-Term Cumulative Scorecard</p>
              </div>
              <span className="text-xs font-mono font-bold bg-[#0F2E1E] text-[#C8A858] px-3 py-1">
                Mean: {student.overallGrade}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#0F2E1E]/20 text-[#0F2E1E] uppercase font-bold tracking-wider">
                    <th className="py-2.5 px-3">Subject</th>
                    <th className="py-2.5 px-3">Score (%)</th>
                    <th className="py-2.5 px-3">Letter Grade</th>
                    <th className="py-2.5 px-3">Teacher's Pedagogical Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0F2E1E]/10">
                  {student.subjects.map((s, idx) => (
                    <tr key={idx} className="hover:bg-[#F8F6F0]">
                      <td className="py-3 px-3 font-semibold text-[#111513]">{s.subject}</td>
                      <td className="py-3 px-3 font-mono font-bold">{s.score}%</td>
                      <td className="py-3 px-3">
                        <span className={`px-2 py-0.5 font-bold font-mono text-[11px] ${
                          s.grade.startsWith('A') ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                        }`}>
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

        {/* TAB 3: TIMETABLE */}
        {activeTab === 'timetable' && (
          <div className="bg-white p-6 border border-[#0F2E1E]/15 shadow-sm">
            <h3 className="text-lg font-bold text-[#0F2E1E] font-academic-sans mb-4">
              Weekly Student Class Schedule
            </h3>
            <div className="p-4 bg-[#F8F6F0] border-l-4 border-[#0F2E1E] text-xs text-[#111513]/80 mb-6">
              Monday through Friday instruction starts promptly at 07:30 AM after morning dormitory inspection and assembly.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, idx) => (
                <div key={idx} className="border border-[#0F2E1E]/15 p-3 bg-white">
                  <div className="font-bold text-[#0F2E1E] pb-2 border-b border-[#0F2E1E]/10 mb-2">{day}</div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="p-1 bg-[#F8F6F0]">07:30 Math</div>
                    <div className="p-1 bg-[#F8F6F0]">08:50 Chemistry</div>
                    <div className="p-1 bg-amber-50 text-amber-900 font-semibold">10:30 Tea Break</div>
                    <div className="p-1 bg-[#F8F6F0]">11:00 Physics</div>
                    <div className="p-1 bg-[#F8F6F0]">12:10 English</div>
                    <div className="p-1 bg-[#0F2E1E]/10 font-bold">16:00 Sports/Games</div>
                    <div className="p-1 bg-[#0F2E1E] text-white">19:30 Evening Prep</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: ASSIGNMENTS */}
        {activeTab === 'assignments' && (
          <div className="bg-white p-6 border border-[#0F2E1E]/15 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-[#0F2E1E] font-academic-sans mb-4">
              Prep Assignments & Tasks
            </h3>
            <div className="space-y-3">
              {student.assignments.map((task, idx) => (
                <div key={idx} className="p-4 bg-[#F8F6F0] border border-[#0F2E1E]/15 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-[#0F2E1E] text-sm">{task.title}</div>
                    <div className="text-[#111513]/60 mt-0.5">Subject: {task.subject} · Due: {task.dueDate}</div>
                  </div>
                  <span className={`px-2.5 py-1 font-bold text-[11px] ${
                    task.status === 'Graded' ? 'bg-emerald-100 text-emerald-800' :
                    task.status === 'Submitted' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5 & 6: ATTENDANCE & ANNOUNCEMENTS */}
        {(activeTab === 'attendance' || activeTab === 'announcements') && (
          <div className="bg-white p-6 border border-[#0F2E1E]/15 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-[#0F2E1E] font-academic-sans">
              {activeTab === 'attendance' ? 'Boarding Attendance Registry' : 'Official Notices for Students'}
            </h3>
            <p className="text-xs text-[#111513]/70">
              {activeTab === 'attendance'
                ? 'Roll call verified twice daily by House Master and Senior Prefect. No active infractions reported.'
                : '1. Candidate mock exams schedule will be posted on Friday.\n2. Inter-house cross-country kit distribution begins Wednesday.\n3. Keep prep halls silent between 19:30 and 21:30.'}
            </p>
          </div>
        )}

      </main>

    </div>
  );
};
