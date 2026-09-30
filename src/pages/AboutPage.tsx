import React from 'react';
import { IMAGES, SCHOOL_INFO, FOUR_PILLARS, SCHOOL_VALUES } from '../data/schoolData';
import { ActiveView } from '../types/school';
import { Shield, BookOpen, Compass, Award, MapPin, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (view: ActiveView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F8F6F0] text-[#111513]">
      
      {/* Page Header */}
      <section className="bg-[#0F2E1E] text-white py-16 lg:py-24 border-b border-[#C8A858]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-[#C8A858] font-bold mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#C8A858]" />
              <span>Identity & Heritage</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-academic-sans tracking-tight text-white leading-tight">
              A Legacy of Discipline, Leadership & Brotherhood
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed font-light">
              Maai Mahiu Boys High School is dedicated to shaping courageous young men grounded in integrity, scholastic determination, and mutual responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-sm sm:text-base text-[#111513]/85 leading-relaxed font-normal">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0F2E1E]">
              Our Foundation & Geographical Setting
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-academic-sans text-[#111513]">
              Educating in the Heart of the Great Rift Valley
            </h2>
            <p>
              Maai Mahiu Boys High School stands as a dedicated boarding secondary institution located in Maai Mahiu, Nakuru County, Kenya. Framed by the sweeping escarpments of the Great Rift Valley, our campus provides an atmosphere of fresh air, structured calm, and academic focus away from metropolitan distractions.
            </p>
            <p>
              Here, education is understood not merely as the transmission of factual knowledge for examinations, but as a deliberate moral transformation. Every student is guided to cultivate self-governance, respect for educators, loyalty to school peers, and the courage to pursue ambitious aspirations.
            </p>
            
            <div className="p-4 bg-white border-l-4 border-[#0F2E1E] text-xs space-y-1">
              <strong className="text-[#0F2E1E] block font-semibold">Institutional Registry Note:</strong>
              <p className="italic text-[#111513]/70">
                Official historical foundation dates, charter records, and Board of Management archival records are maintained in the central school registry [Detailed institutional records to be uploaded by School Administration].
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border-2 border-[#0F2E1E] bg-[#111513] shadow-2xl relative">
              <img
                src={IMAGES.campusQuad}
                alt="Campus Grounds of Maai Mahiu Boys High School"
                className="w-full h-[420px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-[#0F2E1E] text-white flex items-center justify-between text-xs">
                <span className="font-mono text-[#C8A858]">Rift Valley Campus Quadrangle</span>
                <span>{SCHOOL_INFO.county}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Vision, Mission & Philosophy Cards */}
      <section className="bg-white py-20 border-t border-b border-[#0F2E1E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 bg-[#F8F6F0] border-t-4 border-[#0F2E1E]">
              <div className="w-10 h-10 bg-[#0F2E1E] text-[#C8A858] flex items-center justify-center mb-6">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0F2E1E] font-academic-sans mb-3">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-[#111513]/80 leading-relaxed font-normal">
                To be a premier centre of secondary education in Kenya that produces intellectually competent, morally upright, self-disciplined, and visionary young men prepared to lead transformative change in their communities and the nation.
              </p>
            </div>

            <div className="p-8 bg-[#F8F6F0] border-t-4 border-[#C8A858]">
              <div className="w-10 h-10 bg-[#C8A858] text-[#111513] flex items-center justify-center mb-6">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0F2E1E] font-academic-sans mb-3">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-[#111513]/80 leading-relaxed font-normal">
                To provide holistic, high-quality secondary education within a structured and disciplined environment; nurturing academic excellence, critical inquiry, moral fortitude, leadership acumen, and selfless service.
              </p>
            </div>

            <div className="p-8 bg-[#F8F6F0] border-t-4 border-[#111513]">
              <div className="w-10 h-10 bg-[#111513] text-white flex items-center justify-center mb-6">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0F2E1E] font-academic-sans mb-3">
                Our Motto
              </h3>
              <div className="text-lg font-bold text-[#0F2E1E] italic mb-2">
                “{SCHOOL_INFO.motto}”
              </div>
              <p className="text-xs sm:text-sm text-[#111513]/80 leading-relaxed font-normal">
                A concise affirmation that true leadership requires disciplined preparation, humility, and willingness to place the needs of the wider community before self.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* The 7 Core Values Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#0F2E1E] font-bold mb-2">
            Institutional Principles
          </div>
          <h2 className="text-3xl font-bold font-academic-sans text-[#111513]">
            The Seven Pillars of Character
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCHOOL_VALUES.map((val, idx) => (
            <div key={val.name} className="bg-white p-6 border border-[#0F2E1E]/15">
              <div className="font-mono text-xs font-bold text-[#C8A858] mb-2">
                0{idx + 1}
              </div>
              <h4 className="text-lg font-bold text-[#0F2E1E] font-academic-sans mb-1">
                {val.name}
              </h4>
              <div className="text-xs font-semibold text-[#0F2E1E]/60 italic mb-2">
                {val.tagline}
              </div>
              <p className="text-xs text-[#111513]/70 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('admissions')}
            className="px-6 py-3 bg-[#0F2E1E] text-white hover:bg-[#133E29] text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Explore Admissions Criteria →
          </button>
        </div>
      </section>

    </div>
  );
};
