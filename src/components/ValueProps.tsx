/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Smile, Wrench, GraduationCap, Users, ShieldAlert } from 'lucide-react';
import { valueProps } from '../data';
import { useApp } from '../context/AppContext';

export default function ValueProps() {
  const { t, language } = useApp();

  // Map string to Lucide React component
  const getIcon = (name: string) => {
    switch (name) {
      case 'SmilingFace':
        return <Smile className="w-6 h-6 text-brand-red" />;
      case 'HandsDoing':
        return <Wrench className="w-6 h-6 text-brand-red" />;
      case 'TeacherMentor':
        return <GraduationCap className="w-6 h-6 text-brand-red" />;
      case 'PeopleCommunity':
        return <Users className="w-6 h-6 text-brand-red" />;
      default:
        return <ShieldAlert className="w-6 h-6 text-brand-red" />;
    }
  };

  return (
    <section id="mengapa-kami" className="py-20 relative bg-cyber-charcoal/30 border-y border-cyber-slate/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-full text-xs font-mono text-brand-red uppercase tracking-wider">
            <span>{t('val_badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-theme-title">
            {t('val_title')}
          </h2>
          <p className="text-cyber-text-sec text-base sm:text-lg">
            {t('val_subtitle')}
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps[language].map((prop, index) => (
            <div
              key={index}
              id={`value-card-${index}`}
              className="group relative bg-cyber-charcoal border border-cyber-slate/60 hover:border-brand-red p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-brand-red/10 overflow-hidden"
            >
              {/* Background gradient light on hover */}
              <div className="absolute -right-12 -bottom-12 w-28 h-28 bg-brand-red/5 rounded-full blur-2xl group-hover:bg-brand-red/10 transition-all duration-300"></div>

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {getIcon(prop.iconName)}
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-bold text-theme-title mb-3 group-hover:text-brand-red-light transition-colors duration-200">
                {prop.title}
              </h3>

              {/* Card Main Description */}
              <p className="text-cyber-text-sec text-sm leading-relaxed mb-4">
                {prop.description}
              </p>

              {/* Sub detail */}
              <div className="border-t border-cyber-slate/40 pt-4 mt-2">
                <span className="text-xs text-cyber-text-muted font-mono block leading-relaxed">
                  {prop.subDetail}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
