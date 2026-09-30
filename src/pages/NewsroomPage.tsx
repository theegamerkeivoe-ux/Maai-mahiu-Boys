import React, { useState } from 'react';
import { NEWS_ARTICLES } from '../data/schoolData';
import { NewsArticle } from '../types/school';
import { Search, Tag, Calendar, User, Clock, ArrowRight, Share2, Check, X } from 'lucide-react';

export const NewsroomPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = ['All', 'Academics', 'Student Life', 'Sport', 'Leadership', 'Community', 'Announcements'];

  const filteredArticles = NEWS_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleShare = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#F8F6F0] text-[#111513]">
      
      {/* Header */}
      <section className="bg-[#0F2E1E] text-white py-16 lg:py-24 border-b border-[#C8A858]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-[#C8A858] font-bold mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#C8A858]" />
              <span>Campus Newsroom & Press Dispatch</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-academic-sans tracking-tight text-white leading-tight">
              From Around the School
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed font-light">
              Official bulletins, academic milestones, athletics results, and community initiatives from Maai Mahiu Boys High School.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#0F2E1E]/15">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5">
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

          {/* Search */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search news & dispatches..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#0F2E1E]/20 text-[#111513] placeholder-[#111513]/50 focus:outline-none focus:border-[#0F2E1E]"
            />
            <Search className="w-4 h-4 text-[#111513]/40 absolute left-2.5 top-2.5" />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-white border border-[#0F2E1E]/15 hover:border-[#0F2E1E] transition-all cursor-pointer flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="h-48 overflow-hidden bg-[#111513] relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#0F2E1E] text-[#C8A858] text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 font-bold">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#111513]/60 mb-2">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F2E1E] group-hover:text-[#C8A858] transition-colors leading-snug font-academic-sans mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#111513]/75 leading-relaxed line-clamp-3 font-normal">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-[#0F2E1E]/10 flex items-center justify-between text-xs font-bold text-[#0F2E1E]">
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C8A858]" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white border-2 border-[#0F2E1E] max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[92vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 text-[#111513]/60 hover:text-[#0F2E1E] transition-colors"
              aria-label="Close Article Reader"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#0F2E1E] uppercase tracking-wider mb-2">
              <span className="bg-[#0F2E1E]/10 px-2 py-0.5">{selectedArticle.category}</span>
              <span>·</span>
              <span>{selectedArticle.date}</span>
              <span>·</span>
              <span>By {selectedArticle.author}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-academic-sans text-[#111513] leading-tight mb-6">
              {selectedArticle.title}
            </h2>

            {/* Featured Image */}
            <div className="h-64 sm:h-80 overflow-hidden mb-6 border border-[#0F2E1E]/20">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#111513]/85 leading-relaxed font-normal">
              {selectedArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Footer / Share */}
            <div className="mt-8 pt-6 border-t border-[#0F2E1E]/15 flex items-center justify-between text-xs">
              <button
                onClick={handleShare}
                className="px-4 py-2 bg-[#F8F6F0] hover:bg-[#0F2E1E] text-[#0F2E1E] hover:text-white border border-[#0F2E1E]/20 flex items-center gap-1.5 transition-colors font-semibold"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? 'Link Copied' : 'Share Article'}</span>
              </button>

              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 bg-[#0F2E1E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#133E29] transition-colors"
              >
                Back to News
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
