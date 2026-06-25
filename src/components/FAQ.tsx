/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { FAQs } from '../data';
import { useApp } from '../context/AppContext';

export default function FAQ() {
  const { language } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = FAQs[language].filter(
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
            <span>{language === 'id' ? 'Tanya Jawab Umum' : 'FAQ'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-theme-title">
            {language === 'id' ? 'Pertanyaan Yang Sering Diajukan' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-cyber-text-sec text-sm sm:text-base max-w-2xl mx-auto">
            {language === 'id'
              ? 'Masih ragu atau punya pertanyaan khusus? Cari jawabannya di bawah ini atau hubungi tim support admin kami.'
              : 'Still hesitant or have specific questions? Find answers below or reach out to our support advisors.'}
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
            placeholder={language === 'id' ? 'Cari pertanyaan Anda di sini...' : 'Search questions here...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-cyber-slate bg-cyber-charcoal/40 text-theme-title text-sm focus:outline-none focus:border-brand-red focus:bg-cyber-charcoal transition"
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
                      <span className="font-bold text-theme-title text-sm sm:text-base leading-snug">
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
              <p className="text-cyber-text-sec text-sm">
                {language === 'id' 
                  ? `Tidak ditemukan hasil pencarian untuk "${searchQuery}"`
                  : `No questions found matching "${searchQuery}"`}
              </p>
            </div>
          )}
        </div>

        {/* Dynamic CTA */}
        <div className="mt-12 p-6 rounded-2xl border border-cyber-slate/50 bg-cyber-charcoal/30 text-center">
          <p className="text-sm text-cyber-text-sec">
            {language === 'id' 
              ? 'Punya pertanyaan lain? Tim admin kami siap melayani Anda melalui WhatsApp.' 
              : 'Still have questions? Chat with our team directly via WhatsApp.'}
          </p>
          <a
            id="faq-wa-cta"
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 mt-4 px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-bold rounded-xl transition"
          >
            <span>{language === 'id' ? 'Hubungi Admin via WhatsApp' : 'Contact Support Advisor'}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
