import React, { useState } from 'react';
import { EVENTS } from '../data/schoolData';
import { SchoolEvent } from '../types/school';
import { Calendar, Clock, MapPin, Tag, Plus, CheckCircle2 } from 'lucide-react';

export const EventsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [eventsList, setEventsList] = useState<SchoolEvent[]>(EVENTS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    category: 'Academic' as SchoolEvent['category'],
    date: '',
    time: '',
    location: '',
    description: '',
  });

  const categories = ['All', 'Academic', 'Sport', 'Parents', 'Examinations', 'Cultural', 'Community'];

  const filteredEvents = eventsList.filter(
    (e) => selectedCategory === 'All' || e.category === selectedCategory
  );

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    const created: SchoolEvent = {
      id: `evt-${Date.now()}`,
      title: newEvent.title,
      category: newEvent.category,
      date: newEvent.date || 'TBD',
      time: newEvent.time || '08:00 AM',
      location: newEvent.location || 'School Campus',
      description: newEvent.description,
      isUpcoming: true,
    };
    setEventsList([created, ...eventsList]);
    setShowAddModal(false);
    setNewEvent({
      title: '',
      category: 'Academic',
      date: '',
      time: '',
      location: '',
      description: '',
    });
  };

  return (
    <div className="bg-[#F8F6F0] text-[#111513]">
      
      {/* Header */}
      <section className="bg-[#0F2E1E] text-white py-16 lg:py-24 border-b border-[#C8A858]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-widest text-[#C8A858] font-bold mb-3 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#C8A858]" />
                <span>Term Almanac & Fixtures</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-academic-sans tracking-tight text-white leading-tight">
                School Events Calendar
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed font-light">
                Key dates for academic examinations, parent orientation days, sports tournaments, and co-curricular congresses for the 2026/2027 academic session.
              </p>
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="px-5 py-3 bg-[#C8A858] hover:bg-[#d8b868] text-[#111513] text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors self-start md:self-auto shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add Event Notice</span>
            </button>
          </div>
        </div>
      </section>

      {/* Events Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 pb-6 border-b border-[#0F2E1E]/15 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#0F2E1E] text-white'
                  : 'bg-white text-[#111513]/70 hover:text-[#0F2E1E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Event Feed */}
        <div className="space-y-6">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white p-6 sm:p-8 border border-[#0F2E1E]/15 hover:border-[#0F2E1E] transition-colors shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#F8F6F0] border border-[#0F2E1E]/15 text-[#0F2E1E] text-center min-w-[90px] shrink-0">
                  <Calendar className="w-5 h-5 mx-auto mb-1 text-[#C8A858]" />
                  <div className="text-xs font-bold font-mono text-[#0F2E1E] leading-tight">
                    {evt.date}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#0F2E1E] bg-[#0F2E1E]/10 px-2 py-0.5 font-bold">
                      {evt.category}
                    </span>
                    <span className="text-xs text-[#111513]/50">· {evt.time}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#111513] font-academic-sans">
                    {evt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#111513]/75 mt-1 max-w-3xl leading-relaxed">
                    {evt.description}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-[#111513]/60">
                    <MapPin className="w-3.5 h-3.5 text-[#C8A858]" />
                    <span>Venue: {evt.location}</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 self-end md:self-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0F2E1E] bg-[#F8F6F0] px-3 py-1.5 border border-[#0F2E1E]/15">
                  Scheduled
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Add Event Modal (Administrator Simulation) */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white border-2 border-[#0F2E1E] max-w-lg w-full p-6 shadow-2xl">
            <h3 className="text-xl font-bold font-academic-sans text-[#111513] mb-4">
              Add New School Event Notice
            </h3>

            <form onSubmit={handleAddEvent} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold mb-1">Event Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Form 3 Academic Consultation Day"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="w-full p-2 bg-[#F8F6F0] border border-[#0F2E1E]/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Category</label>
                  <select
                    value={newEvent.category}
                    onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value as any })}
                    className="w-full p-2 bg-[#F8F6F0] border border-[#0F2E1E]/20"
                  >
                    <option value="Academic">Academic</option>
                    <option value="Sport">Sport</option>
                    <option value="Parents">Parents</option>
                    <option value="Examinations">Examinations</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Community">Community</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-1">Date</label>
                  <input
                    type="text"
                    placeholder="e.g. May 18, 2026"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full p-2 bg-[#F8F6F0] border border-[#0F2E1E]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Time</label>
                  <input
                    type="text"
                    placeholder="e.g. 09:00 AM – 01:00 PM"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                    className="w-full p-2 bg-[#F8F6F0] border border-[#0F2E1E]/20"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Main Assembly Hall"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    className="w-full p-2 bg-[#F8F6F0] border border-[#0F2E1E]/20"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Description</label>
                <textarea
                  rows={3}
                  placeholder="Enter details for parents and students..."
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                  className="w-full p-2 bg-[#F8F6F0] border border-[#0F2E1E]/20"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-stone-200 text-stone-800 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#0F2E1E] text-white font-bold uppercase tracking-wider"
                >
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
