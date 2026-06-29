/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Shield, ShieldAlert, Award, Star, Terminal as TerminalIcon, Play, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface HeroProps {
  onCtaclick: () => void;
  onSecondaryClick: () => void;
}

export default function Hero({ onCtaclick, onSecondaryClick }: HeroProps) {
  const { t, language } = useApp();
  const [terminalText, setTerminalText] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  const lines = [
    t('hero_line_1'),
    t('hero_line_2'),
    t('hero_line_3'),
    t('hero_line_4'),
    t('hero_line_5'),
    t('hero_line_6'),
    t('hero_line_7'),
    t('hero_line_8'),
    t('hero_line_9'),
    t('hero_line_10'),
    t('hero_line_11'),
    t('hero_line_12')
  ];

  // Reset and replay terminal whenever language changes
  useEffect(() => {
    setTerminalText([]);
    setCurrentLine(0);
  }, [language]);

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
  }, [currentLine, language]);

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
            <div className="inline-flex items-center space-x-2 bg-brand-red/10 border border-brand-red/30 px-3 py-1.5 rounded-full text-xs font-mono text-brand-red">
              <ShieldAlert className="w-4 h-4 text-brand-red animate-pulse" />
              <span>{t('hero_badge')}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-theme-title leading-tight">
              {t('hero_title_left')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-title via-brand-red-light to-brand-red">{t('hero_title_middle')}</span>{t('hero_title_right')}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-cyber-text-sec max-w-2xl leading-relaxed">
              {t('hero_subtitle')}
            </p>

            {/* Trust Indicators (Small) */}
            <div className="flex flex-wrap gap-y-3 gap-x-6 items-center pt-2 text-sm text-cyber-text-sec">
              <div className="flex items-center space-x-1">
                <div className="flex text-accent-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-theme-title">4.7/5</span>
                <span>(150+ {t('hero_reviews')})</span>
              </div>
              <div className="h-4 w-px bg-cyber-slate hidden sm:block"></div>
              <div className="flex items-center space-x-2">
                <span className="text-theme-title font-semibold">800+</span>
                <span>{t('hero_students')}</span>
              </div>
              <div className="h-4 w-px bg-cyber-slate hidden sm:block"></div>
              <div className="flex items-center space-x-1.5">
                <Award className="w-4.5 h-4.5 text-accent-cyan" />
                <span className="text-theme-title font-medium">{t('hero_instructor')}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                id="hero-cta-btn-main"
                onClick={onCtaclick}
                className="px-8 py-4 rounded-xl text-base font-bold bg-brand-red hover:bg-brand-red-dark text-white transition-all duration-300 shadow-lg hover:shadow-brand-red/30 glow-red transform hover:-translate-y-1 text-center cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>{t('hero_cta_main')}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                id="hero-secondary-btn-main"
                onClick={onSecondaryClick}
                className="px-8 py-4 rounded-xl text-base font-semibold border-2 border-cyber-slate hover:border-brand-red/60 text-cyber-text-sec hover:text-theme-title bg-cyber-charcoal/40 hover:bg-cyber-slate/30 transition-all duration-300 text-center flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{t('hero_cta_sec')}</span>
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
                    <span>vibe-coder-agent.sh</span>
                  </div>
                  <div className="w-12"></div> {/* spacer */}
                </div>

                {/* Shell Content */}
                <div className="p-5 font-mono text-xs sm:text-sm text-left h-80 overflow-y-auto bg-[#050b16] space-y-2 select-none">
                  {terminalText.map((line, index) => {
                    const isCommand = line.startsWith('root@') || line.startsWith('vibe-session_1$') || line.startsWith('vibe-beginner') || line.startsWith('openclaw-session_1$') || line.startsWith('openclaw-beginner');
                    const isSuccess = line.startsWith('[+]') || line.includes('✓');
                    const isAlert = line.includes('Website Simulasi') || line.includes('Simulation Website');
                    
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
                    <span className="block text-[10px] text-cyber-text-muted">{t('hero_term_difficulty')}</span>
                    <span className="text-accent-cyan font-bold">{t('hero_term_difficulty_val')}</span>
                  </div>
                  <div className="border-r border-cyber-slate/50">
                    <span className="block text-[10px] text-cyber-text-muted">{t('hero_term_duration')}</span>
                    <span className="text-theme-title font-bold">{t('hero_term_duration_val')}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-cyber-text-muted">{t('hero_term_lab')}</span>
                    <span className="text-accent-green font-bold">{t('hero_term_lab_val')}</span>
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
