import React from 'react';

export const IntroStrip: React.FC = () => {
  return (
    <section className="bg-[#F8F6F0] text-[#111513] py-16 sm:py-20 border-b border-[#0F2E1E]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Horizontal Editorial Statement */}
        <div className="inline-block mb-4">
          <span className="text-[11px] font-cinzel uppercase tracking-[0.25em] text-[#0F2E1E] font-bold px-3 py-1 border-b border-[#C8A858]/60">
            The Educational Philosophy
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-editorial-serif italic font-normal text-[#111513] leading-snug max-w-4xl mx-auto mb-6 text-balance">
          “Education is more than examination results. It is preparation for life.”
        </h2>

        {/* Hairline geometric accent */}
        <div className="flex items-center justify-center gap-4 my-7">
          <span className="w-16 h-[1px] bg-[#C8A858]" />
          <span className="w-2.5 h-2.5 rotate-45 border border-[#0F2E1E] bg-[#C8A858]" />
          <span className="w-16 h-[1px] bg-[#C8A858]" />
        </div>

        {/* Short Paragraph */}
        <p className="text-base sm:text-lg text-[#111513]/85 leading-[1.8] font-normal max-w-3xl mx-auto font-academic-sans">
          At Maai Mahiu Boys High School, academic rigor is paired inextricably with character development. Our mission is to educate the whole young man—nurturing uncompromising discipline, personal responsibility, decisive leadership, quiet confidence, and an enduring commitment to community service.
        </p>

      </div>
    </section>
  );
};
