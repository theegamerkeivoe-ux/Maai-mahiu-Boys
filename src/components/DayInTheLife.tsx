import React, { useState } from 'react';
import { TIMETABLE_SAMPLE } from '../data/schoolData';
import { Sun, Clock, Coffee, BookOpen, Dumbbell, Moon, Info } from 'lucide-react';

export const DayInTheLife: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'academic' | 'sport' | 'routine' | 'study'>('all');

  const filteredSlots = filter === 'all' 
    ? TIMETABLE_SAMPLE 
    : TIMETABLE_SAMPLE.filter(item => item.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic':
        return <BookOpen className="w-3.5 h-3.5 text-[#0F2E1E]" />;
      case 'sport':
        return <Dumbbell className="w-3.5 h-3.5 text-[#C8A858]" />;
      case 'break':
        return <Coffee className="w-3.5 h-3.5 text-[#0F2E1E]" />;
      case 'study':
        return <Clock className="w-3.5 h-3.5 text-[#0F2E1E]" />;
      default:
        return <Sun className="w-3.5 h-3.5 text-[#0F2E1E]" />;
    }
  };

  return (
    <section className="bg-[#F8F6F0] text-[#111513] py-20 lg:py-28 border-b border-[#0F2E1E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0F2E1E] mb-2">
              <span className="w-5 h-[2px] bg-[#C8A858]" />
              <span>Routine & Rhythm</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-academic-sans tracking-tight text-[#111513]">
              A Day in the Life
            </h2>
            <p className="mt-3 text-base text-[#111513]/70 leading-relaxed">
              Order and predictability create space for high achievement. Here is the daily cadence that fosters mental clarity and lifelong discipline at Maai Mahiu Boys.
            </p>
          </div>

          {/* Functional Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[#0F2E1E]/15 rounded-sm">
            {(['all', 'academic', 'sport', 'routine', 'study'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  filter === tab
                    ? 'bg-[#0F2E1E] text-white'
                    : 'text-[#111513]/70 hover:text-[#0F2E1E]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Disclaimer Strip */}
        <div className="mb-10 p-4 bg-[#C8A858]/10 border-l-4 border-[#C8A858] flex items-start gap-3">
          <Info className="w-4 h-4 text-[#0F2E1E] shrink-0 mt-0.5" />
          <div className="text-xs text-[#111513]/85 leading-relaxed">
            <strong className="font-semibold text-[#0F2E1E]">Administrator Notice:</strong> The schedule presented below represents the standard boarding routine template for Kenyan boys' secondary schools. Specific bell times, prep slots, and worship assemblies are tailored each term by school administration.
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="relative border-l-2 border-[#0F2E1E]/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          {filteredSlots.map((slot, index) => (
            <div key={index} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 bg-[#F8F6F0] border-2 border-[#0F2E1E] group-hover:border-[#C8A858] group-hover:bg-[#0F2E1E] transition-colors rounded-full flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-[#C8A858] rounded-full" />
              </div>

              {/* Timeline Card */}
              <div className="bg-white p-5 sm:p-6 border border-[#0F2E1E]/10 hover:border-[#0F2E1E]/40 transition-colors shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="p-1 bg-[#F8F6F0] rounded">
                      {getCategoryIcon(slot.category)}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0F2E1E] font-academic-sans">
                      {slot.activity}
                    </h3>
                  </div>
                  
                  {/* Single-line Time Badge */}
                  <span className="font-mono text-xs font-semibold text-[#111513] bg-[#F8F6F0] px-2.5 py-1 border border-[#0F2E1E]/15 tabular-nums whitespace-nowrap self-start sm:self-auto">
                    {slot.time}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#111513]/75 leading-relaxed font-normal">
                  {slot.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
