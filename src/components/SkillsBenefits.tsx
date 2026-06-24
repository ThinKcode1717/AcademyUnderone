/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Server, Globe, Fingerprint, Activity, Bug, Cpu, Eye, FileCheck, HelpCircle, Briefcase, TrendingUp } from 'lucide-react';
import { skillsBenefits } from '../data';

export default function SkillsBenefits() {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

  // Map string to Lucide Icon
  const getIcon = (name: string, className: string) => {
    switch (name) {
      case 'Server':
        return <Server className={className} />;
      case 'Globe':
        return <Globe className={className} />;
      case 'Fingerprint':
        return <Fingerprint className={className} />;
      case 'Activity':
        return <Activity className={className} />;
      case 'Bug':
        return <Bug className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Eye':
        return <Eye className={className} />;
      case 'FileCheck':
        return <FileCheck className={className} />;
      default:
        return <HelpCircle className={className} />;
    }
  };

  return (
    <section id="skill-kuasai" className="py-20 relative bg-cyber-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-accent-cyan/10 border border-accent-cyan/20 px-3 py-1 rounded-full text-xs font-mono text-accent-cyan uppercase tracking-wider">
            <span>Kurikulum Berbasis Industri</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Skill Utama Yang Akan Anda Kuasai
          </h2>
          <p className="text-cyber-text-sec text-base sm:text-lg">
            Kurikulum kami disesuaikan dengan standar industri global agar lulusan dapat langsung mengisi kekosongan talenta cybersecurity profesional.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillsBenefits.map((skill, index) => (
            <div
              key={index}
              id={`skill-card-${index}`}
              onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
              className={`group border p-6 rounded-2xl transition-all duration-300 cursor-pointer text-left relative overflow-hidden select-none ${
                selectedSkill === index
                  ? 'bg-cyber-charcoal border-brand-red shadow-lg shadow-brand-red/10 scale-[1.02]'
                  : 'bg-cyber-charcoal/40 border-cyber-slate/50 hover:border-cyber-slate hover:bg-cyber-charcoal/80'
              }`}
            >
              {/* Highlight bar */}
              <div className={`absolute top-0 left-0 w-full h-[3px] transition-colors duration-300 ${
                selectedSkill === index ? 'bg-brand-red' : 'bg-transparent group-hover:bg-cyber-slate'
              }`}></div>

              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                  selectedSkill === index ? 'bg-brand-red/25 text-brand-red' : 'bg-cyber-slate/50 text-cyber-text-sec'
                }`}>
                  {getIcon(skill.iconName, 'w-5.5 h-5.5')}
                </div>
                <h3 className="font-bold text-base sm:text-lg text-white leading-snug group-hover:text-white">
                  {skill.title}
                </h3>
              </div>

              <p className="text-sm text-cyber-text-sec leading-relaxed mb-4">
                {skill.capability}
              </p>

              <div className="pt-3 border-t border-cyber-slate/40">
                <span className="text-[11px] font-mono text-cyber-text-muted block mb-1">PROSPEK JABATAN:</span>
                <span className="text-xs font-semibold text-accent-cyan block">
                  {skill.industry}
                </span>
              </div>

              {/* Info hint */}
              <span className="absolute bottom-2 right-3 text-[10px] font-mono text-cyber-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                Click to expand info
              </span>
            </div>
          ))}
        </div>

        {/* Market demand & Salary projection card */}
        <div className="bg-gradient-to-r from-cyber-charcoal via-cyber-charcoal/80 to-cyber-navy border border-cyber-slate/60 p-8 sm:p-10 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center space-x-2 bg-accent-green/10 border border-accent-green/20 px-3 py-1 rounded-full text-xs font-mono text-accent-green">
                <TrendingUp className="w-4 h-4 text-accent-green" />
                <span>PANGSA PASAR TUMBUH 23% YoY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Peluang Karir & Proyeksi Gaji Cybersecurity
              </h3>
              <p className="text-cyber-text-sec text-sm sm:text-base leading-relaxed">
                Kebutuhan akan analis keamanan siber terus meningkat di Indonesia. Banyak perusahaan kesulitan merekrut praktisi tersertifikasi, menjadikan profesi ini memiliki potensi pendapatan di atas rata-rata bidang teknologi lainnya.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-cyber-navy/50 p-4 rounded-xl border border-cyber-slate/40">
                  <span className="block text-[11px] font-mono text-cyber-text-muted">GAJI AWAL (JUNIOR)</span>
                  <span className="text-xl sm:text-2xl font-bold text-white block mt-1">Rp 8 - 15 Juta</span>
                  <span className="text-[10px] text-cyber-text-sec block mt-1">Sesuai dengan level pemula</span>
                </div>
                <div className="bg-cyber-navy/50 p-4 rounded-xl border border-cyber-slate/40">
                  <span className="block text-[11px] font-mono text-cyber-text-muted">GAJI SENIOR LEVEL</span>
                  <span className="text-xl sm:text-2xl font-bold text-brand-red-light block mt-1">Rp 25 - 50+ Juta</span>
                  <span className="text-[10px] text-cyber-text-sec block mt-1">Dengan pengalaman 3-5 tahun</span>
                </div>
                <div className="bg-cyber-navy/50 p-4 rounded-xl border border-cyber-slate/40">
                  <span className="block text-[11px] font-mono text-cyber-text-muted">KEBUTUHAN INDUSTRI</span>
                  <span className="text-xl sm:text-2xl font-bold text-accent-cyan block mt-1">Sangat Tinggi</span>
                  <span className="text-[10px] text-cyber-text-sec block mt-1">Perbankan, FinTech, E-Commerce</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 border-2 border-dashed border-cyber-slate rounded-xl bg-cyber-navy/40">
              <Briefcase className="w-12 h-12 text-brand-red mb-3" />
              <span className="text-xs font-mono text-cyber-text-muted mb-1">PARTNER PENYALURAN</span>
              <span className="text-lg font-bold text-white text-center leading-snug">
                FEDUCATION Placement Network
              </span>
              <p className="text-xs text-cyber-text-sec text-center mt-2 leading-relaxed">
                Koneksi langsung ke 30+ perusahaan rekanan yang siap merekrut lulusan terbaik dari OpenClaw Academy.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
