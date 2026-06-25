/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Video, BookOpen, Key, ChevronDown, ChevronUp, CheckCircle, Terminal } from 'lucide-react';
import { weeklyModules } from '../data';

export default function Curriculum() {
  const [activeWeek, setActiveWeek] = useState<number>(0);

  const stats = [
    { label: 'DURASI TOTAL', value: '4 Minggu' },
    { label: 'SESI LIVE', value: '2x per Minggu' },
    { label: 'LABORATORIUM', value: 'Safe Sandbox' },
    { label: 'MENTORSHIP', value: 'Q&A + Forum' },
  ];

  return (
    <section id="kurikulum" className="py-20 relative bg-cyber-charcoal/25 border-y border-cyber-slate/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-full text-xs font-mono text-brand-red uppercase tracking-wider">
            <span>Roadmap Pembelajaran</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Kurikulum 4 Minggu Hands-On
          </h2>
          <p className="text-cyber-text-sec text-base sm:text-lg">
            Kurikulum terstruktur langkah demi langkah yang membimbing orang awam murni hingga mahir menggunakan OpenClaw.
          </p>
        </div>

        {/* Overview Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-cyber-navy/80 border border-cyber-slate/50 rounded-xl p-4 sm:p-5">
              <span className="block text-[10px] sm:text-xs font-mono text-cyber-text-muted mb-1 uppercase tracking-wider">{stat.label}</span>
              <span className="text-lg sm:text-2xl font-bold text-white block">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Timeline roadmap layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Weekly selectors */}
          <div className="lg:col-span-5 space-y-3 text-left">
            <span className="text-xs font-mono text-cyber-text-muted block mb-3 uppercase tracking-wider">PILIH MODUL MINGGUAN</span>
            {weeklyModules.map((mod, idx) => (
              <button
                key={idx}
                onClick={() => setActiveWeek(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                  activeWeek === idx
                    ? 'bg-cyber-charcoal border-brand-red text-white shadow-lg shadow-brand-red/5'
                    : 'bg-cyber-navy/40 border-cyber-slate/40 text-cyber-text-sec hover:bg-cyber-charcoal/50 hover:border-cyber-slate'
                }`}
              >
                <div className="space-y-1">
                  <span className={`text-xs font-mono tracking-wider block font-bold ${
                    activeWeek === idx ? 'text-brand-red' : 'text-cyber-text-muted'
                  }`}>
                    {mod.week.toUpperCase()}
                  </span>
                  <span className="font-bold text-base block pr-2">
                    {mod.title.split('&')[0]}
                  </span>
                </div>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  activeWeek === idx ? 'bg-brand-red/10 text-brand-red' : 'bg-cyber-slate/30 text-cyber-text-muted'
                }`}>
                  <CheckCircle className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>

          {/* Right panel: Active Week Details */}
          <div className="lg:col-span-7 bg-cyber-charcoal border border-cyber-slate/60 p-6 sm:p-8 rounded-2xl text-left shadow-xl relative min-h-[400px]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-6">
              {/* Badge info */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-brand-red/10 border border-brand-red/20 text-brand-red px-3 py-1 rounded-full text-xs font-mono font-bold">
                  {weeklyModules[activeWeek].week.toUpperCase()}
                </span>
                {weeklyModules[activeWeek].labName && (
                  <span className="bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan px-3 py-1 rounded-full text-xs font-mono flex items-center space-x-1">
                    <Terminal className="w-3 h-3" />
                    <span>{weeklyModules[activeWeek].labName}</span>
                  </span>
                )}
              </div>

              {/* Module Title */}
              <h3 className="text-2xl font-extrabold text-white leading-tight">
                {weeklyModules[activeWeek].title}
              </h3>

              {/* Module Description */}
              <p className="text-cyber-text-sec text-base leading-relaxed">
                {weeklyModules[activeWeek].description}
              </p>

              {/* Module Details / Syllabus lists */}
              <div className="space-y-4 pt-4 border-t border-cyber-slate/40">
                <h4 className="text-xs font-mono text-cyber-text-muted uppercase tracking-wider">MATERI PEMBELAJARAN DETAIL:</h4>
                <ul className="space-y-3">
                  {weeklyModules[activeWeek].details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-3 text-sm text-cyber-text-sec">
                      <div className="w-2 h-2 rounded-full bg-brand-red mt-1.5 flex-shrink-0"></div>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Info panel of the format */}
              <div className="bg-cyber-navy/40 p-4 rounded-xl border border-cyber-slate/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
                <div className="flex items-center space-x-3">
                  <Video className="w-5 h-5 text-accent-cyan" />
                  <span className="text-xs font-mono text-cyber-text-sec">Live Lecture + Recorded Playback Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-accent-green" />
                  <span className="text-xs font-mono text-cyber-text-sec">Interactive Lab Walkthrough PDF</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
