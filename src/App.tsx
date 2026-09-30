/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveView, SchoolDocument } from './types/school';
import { SCHOOL_INFO } from './data/schoolData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { DocumentModal } from './components/DocumentModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { StudentExperiencePage } from './pages/StudentExperiencePage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { NewsroomPage } from './pages/NewsroomPage';
import { EventsPage } from './pages/EventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { ContactPage } from './pages/ContactPage';

import { StudentPortal } from './portals/StudentPortal';
import { ParentPortal } from './portals/ParentPortal';
import { TeacherPortal } from './portals/TeacherPortal';
import { AdminPortal } from './portals/AdminPortal';

export default function App() {
  const [currentView, setCurrentView] = useState<ActiveView>('home');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedDocForModal, setSelectedDocForModal] = useState<SchoolDocument | null>(null);

  const handleNavigate = (view: ActiveView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isPortalView =
    currentView === 'portal-student' ||
    currentView === 'portal-parent' ||
    currentView === 'portal-teacher' ||
    currentView === 'portal-admin';

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#111513] font-academic-sans selection:bg-[#0F2E1E] selection:text-[#F8F6F0]">
      {/* If in portal view, render the dedicated portal dashboard */}
      {currentView === 'portal-student' && (
        <StudentPortal onBackToWebsite={() => handleNavigate('home')} />
      )}

      {currentView === 'portal-parent' && (
        <ParentPortal onBackToWebsite={() => handleNavigate('home')} />
      )}

      {currentView === 'portal-teacher' && (
        <TeacherPortal onBackToWebsite={() => handleNavigate('home')} />
      )}

      {currentView === 'portal-admin' && (
        <AdminPortal onBackToWebsite={() => handleNavigate('home')} />
      )}

      {/* Main Website View */}
      {!isPortalView && (
        <>
          {/* Institutional Top Bar Navigation */}
          <Navbar currentView={currentView} onNavigate={handleNavigate} />

          {/* Page Routing */}
          <main className="flex-1">
            {currentView === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onOpenEnquiry={() => setEnquiryModalOpen(true)}
                onViewDoc={(doc) => setSelectedDocForModal(doc)}
              />
            )}

            {currentView === 'about' && <AboutPage onNavigate={handleNavigate} />}

            {currentView === 'academics' && <AcademicsPage />}

            {currentView === 'experience' && <StudentExperiencePage />}

            {currentView === 'admissions' && (
              <AdmissionsPage
                onOpenEnquiry={() => setEnquiryModalOpen(true)}
                onViewDoc={(doc) => setSelectedDocForModal(doc)}
              />
            )}

            {currentView === 'news' && <NewsroomPage />}

            {currentView === 'events' && <EventsPage />}

            {currentView === 'gallery' && <GalleryPage />}

            {currentView === 'leadership' && <LeadershipPage />}

            {currentView === 'contact' && <ContactPage />}
          </main>

          {/* Institutional Dark Footer */}
          <Footer onNavigate={handleNavigate} />
        </>
      )}

      {/* Interactive Admission Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />

      {/* Interactive Official Document Preview / Download Modal */}
      <DocumentModal
        document={selectedDocForModal}
        onClose={() => setSelectedDocForModal(null)}
      />
    </div>
  );
}
