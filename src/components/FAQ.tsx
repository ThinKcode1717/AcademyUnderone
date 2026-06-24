/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { FAQs } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = FAQs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 relative bg-cyber-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-full text-xs font-mono text-brand-red uppercase tracking-wider">
            <span>Tanya Jawab Umum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Pertanyaan Yang Sering Diajukan
          </h2>
          <p className="text-cyber-text-sec text-sm sm:text-base max-w-2xl mx-auto">
            Masih ragu atau punya pertanyaan khusus? Cari jawabannya di bawah ini atau hubungi tim support admin kami.
          </p>
        </div>

        {/* Search Bar for FAQs */}
        <div className="relative max-w-lg mx-auto mb-10">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyber-text-muted">
            <Search className="w-5 h-5" />
          </span>
          <input
            id="faq-search"
            type="text"
            placeholder="Cari pertanyaan Anda di sini..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-cyber-slate bg-cyber-charcoal/40 text-white text-sm focus:outline-none focus:border-brand-red focus:bg-cyber-charcoal transition"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 text-left">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  id={`faq-item-${idx}`}
                  className="bg-cyber-charcoal/60 border border-cyber-slate/50 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-cyber-charcoal transition-colors"
                  >
                    <div className="flex items-center space-x-3.5 pr-4">
                      <HelpCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                      <span className="font-bold text-white text-sm sm:text-base leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <div>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-cyber-text-sec flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-cyber-text-sec flex-shrink-0" />
                      )}
                    </div>
                  </button>

                  {/* Expandable Panel */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[500px] border-t border-cyber-slate/30' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 py-5 bg-cyber-navy/20">
                      <p className="text-sm sm:text-base text-cyber-text-sec leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 border border-dashed border-cyber-slate rounded-xl">
              <p className="text-cyber-text-sec text-sm">Tidak ditemukan hasil pencarian untuk "{searchQuery}"</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
