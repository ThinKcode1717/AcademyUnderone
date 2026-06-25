/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Shield, ShieldAlert, Award, Star, Terminal as TerminalIcon, Play, ChevronRight } from 'lucide-react';

interface HeroProps {
  onCtaclick: () => void;
  onSecondaryClick: () => void;
}

export default function Hero({ onCtaclick, onSecondaryClick }: HeroProps) {
  const [terminalText, setTerminalText] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  const lines = [
    'root@openclaw-pemula:~# openclaw --scan safe-target.local',
    'Menghubungkan ke laboratorium belajar terisolasi...',
    'Nmap scan report untuk target-aman.openclaw (10.10.12.5)',
    'PORT   STATUS   KETERANGAN',
    '80     AKTIF    Website Simulasi (Aman untuk dicoba)',
    '21     AKTIF    Pintu Masuk File (Protokol FTP)',
    'root@openclaw-pemula:~# analyze-report --file scan_result.json',
    '[*] Menganalisis hasil scan dalam format bahasa sederhana...',
    '[+] Penjelasan: Website target memiliki pintu terbuka.',
    '[+] Rekomendasi: Tutup pintu nomor 21 jika tidak digunakan.',
    'openclaw-session_1$ echo "Selamat Datang!"',
    'Belajar OpenClaw dari nol terbukti menyenangkan & aman! ✓'
  ];

  useEffect(() => {
    if (currentLine < lines.length) {
      const timeout = setTimeout(() => {
        setTerminalText((prev) => [...prev, lines[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, currentLine === 0 || currentLine === 6 ? 1200 : 400);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setTerminalText([]);
        setCurrentLine(0);
      }, 6000);
      return () => clearTimeout(resetTimeout);
    }
  }, [currentLine]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-cyber-navy">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-cyber-mesh pointer-events-none z-0 opacity-80"></div>

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Early Bird Promo Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-red/10 border border-brand-red/30 px-3 py-1.5 rounded-full text-xs font-mono text-white">
              <ShieldAlert className="w-4 h-4 text-brand-red animate-pulse" />
              <span>EARLY BIRD PROMO: BATCH PEMULA BARU DIBUKA</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Belajar OpenClaw Dari Nol - <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-red-light to-brand-red">Tidak Perlu Pengalaman</span> Sebelumnya
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-cyber-text-sec max-w-2xl leading-relaxed">
              Mau belajar hal baru di dunia cybersecurity? OpenClaw adalah tool yang powerful dan bisa dipelajari siapa saja. Dalam <strong className="text-white font-semibold">4 minggu</strong>, Anda akan tahu cara kerjanya dan bisa pakai sendiri. Dimulai dari basic, langkah demi langkah.
            </p>

            {/* Trust Indicators (Small) */}
            <div className="flex flex-wrap gap-y-3 gap-x-6 items-center pt-2 text-sm text-cyber-text-sec">
              <div className="flex items-center space-x-1">
                <div className="flex text-accent-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-white">4.7/5</span>
                <span>(150+ student reviews)</span>
              </div>
              <div className="h-4 w-px bg-cyber-slate hidden sm:block"></div>
              <div className="flex items-center space-x-2">
                <span className="text-white font-semibold">800+ Pemula</span>
                <span>Belajar Sukses</span>
              </div>
              <div className="h-4 w-px bg-cyber-slate hidden sm:block"></div>
              <div className="flex items-center space-x-1.5">
                <Award className="w-4.5 h-4.5 text-accent-cyan" />
                <span className="text-white font-medium">Instruktur Sabar & Berpengalaman</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                id="hero-cta-btn-main"
                onClick={onCtaclick}
                className="px-8 py-4 rounded-xl text-base font-bold bg-brand-red hover:bg-brand-red-dark text-white transition-all duration-300 shadow-lg hover:shadow-brand-red/30 glow-red transform hover:-translate-y-1 text-center cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Mulai Belajar Sekarang</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                id="hero-secondary-btn-main"
                onClick={onSecondaryClick}
                className="px-8 py-4 rounded-xl text-base font-semibold border-2 border-cyber-slate hover:border-brand-red/60 text-cyber-text-sec hover:text-white bg-cyber-charcoal/40 hover:bg-cyber-slate/30 transition-all duration-300 text-center flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Lihat Kurikulum Lengkap</span>
              </button>
            </div>
          </div>

          {/* Interactive Tech Terminal Illustration */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Neon Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-red to-accent-cyan opacity-20 rounded-2xl blur-xl pointer-events-none"></div>
              
              <div className="relative rounded-2xl border border-cyber-slate bg-cyber-navy overflow-hidden shadow-2xl">
                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-cyber-charcoal border-b border-cyber-slate">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-brand-red/80"></span>
                    <span className="w-3 h-3 rounded-full bg-accent-gold/80"></span>
                    <span className="w-3 h-3 rounded-full bg-accent-green/80"></span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs text-cyber-text-muted font-mono">
                    <TerminalIcon className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>openclaw-pemula-v3.sh</span>
                  </div>
                  <div className="w-12"></div> {/* spacer */}
                </div>

                {/* Shell Content */}
                <div className="p-5 font-mono text-xs sm:text-sm text-left h-80 overflow-y-auto bg-[#050b16] space-y-2 select-none">
                  {terminalText.map((line, index) => {
                    const isCommand = line.startsWith('root@') || line.startsWith('openclaw-session_1$');
                    const isSuccess = line.startsWith('[+]') || line.includes('✓');
                    const isAlert = line.includes('Website Simulasi');
                    
                    let textColor = 'text-cyber-text-sec';
                    if (isCommand) textColor = 'text-accent-cyan font-bold';
                    else if (isSuccess) textColor = 'text-accent-green font-semibold';
                    else if (isAlert) textColor = 'text-brand-red font-semibold';

                    return (
                      <div key={index} className={`${textColor} break-all`}>
                        {line}
                      </div>
                    );
                  })}
                  {currentLine < lines.length && (
                    <div className="inline-block w-2 h-4 bg-accent-cyan animate-pulse"></div>
                  )}
                </div>

                {/* Dashboard stats underneath terminal */}
                <div className="p-4 bg-cyber-charcoal/60 border-t border-cyber-slate/50 grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="border-r border-cyber-slate/50">
                    <span className="block text-[10px] text-cyber-text-muted">DIFFICULTY</span>
                    <span className="text-accent-cyan font-bold">PEMULA (ZERO EXP)</span>
                  </div>
                  <div className="border-r border-cyber-slate/50">
                    <span className="block text-[10px] text-cyber-text-muted">DURATION</span>
                    <span className="text-white font-bold">4 MINGGU</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-cyber-text-muted">LAB ACCESS</span>
                    <span className="text-accent-green font-bold">SAFE SANDBOX</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
