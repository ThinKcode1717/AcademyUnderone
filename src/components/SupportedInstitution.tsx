/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, ShieldCheck, Star, Users, Briefcase } from 'lucide-react';
import { testimonials } from '../data';

export default function SupportedInstitution() {
  return (
    <section id="mitra" className="py-20 relative bg-cyber-charcoal/30 border-y border-cyber-slate/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-accent-green/10 border border-accent-green/20 px-3 py-1 rounded-full text-xs font-mono text-accent-green uppercase tracking-wider">
            <span>Sertifikasi & Kemitraan Resmi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Didukung oleh Lembaga Terdepan
          </h2>
          <p className="text-cyber-text-sec text-base sm:text-lg">
            Kolaborasi eksklusif bersama mitra pendidikan teknologi ternama untuk melahirkan talenta andal di bidang pertahanan siber Indonesia.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Side: FEDUCATION Partner Card */}
          <div className="lg:col-span-5 bg-cyber-charcoal border border-cyber-slate p-8 rounded-2xl relative overflow-hidden text-left shadow-lg">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-full blur-xl pointer-events-none"></div>

            {/* Simulated Logo of FEDUCATION */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                <span className="text-cyber-navy font-black text-xl font-sans tracking-tighter">FE</span>
              </div>
              <div>
                <span className="text-lg font-extrabold text-white block tracking-wide">FEDUCATION</span>
                <span className="text-xs font-mono text-brand-red font-semibold block uppercase">LEMBAGA PENDIDIKAN RESMI</span>
              </div>
            </div>

            <p className="text-cyber-text-sec text-sm sm:text-base leading-relaxed mb-6">
              FEDUCATION adalah lembaga pendidikan teknologi terkemuka yang berkomitmen untuk mengembangkan talenta cybersecurity Indonesia dengan kurikulum berstandar industri dan instruktur berlisensi internasional.
            </p>

            {/* Partnership Benefits list */}
            <div className="space-y-4">
              <span className="text-xs font-mono text-cyber-text-muted block uppercase tracking-wider">KEUNGGULAN KEMITRAAN:</span>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-sm text-cyber-text-sec">
                  <Award className="w-5 h-5 text-accent-cyan mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white font-semibold block">Kurikulum Tersertifikasi</strong>
                    <span className="text-xs">Syllabus di-review berkala oleh praktisi & ahli dewan pakar FEDUCATION.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-sm text-cyber-text-sec">
                  <ShieldCheck className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white font-semibold block">Instruktur Berpengalaman</strong>
                    <span className="text-xs">Diajar langsung oleh instruktur bersertifikasi OSCP, CEH, dan CISSP.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-sm text-cyber-text-sec">
                  <Users className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white font-semibold block">Industry-Standard Lab</strong>
                    <span className="text-xs">Akses server simulasi penyerangan dan pertahanan real-time terjamin aman.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-sm text-cyber-text-sec">
                  <Briefcase className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white font-semibold block">Job Placement Network</strong>
                    <span className="text-xs">Alumni otomatis masuk database prioritas rekrutmen mitra korporasi.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: Integrated Testimonials */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono text-cyber-text-muted text-left block uppercase tracking-wider">TESTIMONI ALUMNI SUKSES:</span>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {testimonials.map((test) => (
                <div
                  key={test.id}
                  className="bg-cyber-navy/40 border border-cyber-slate/50 p-6 rounded-2xl text-left relative space-y-4"
                >
                  {/* Quote text */}
                  <p className="text-cyber-text-sec text-sm italic leading-relaxed">
                    "{test.quote}"
                  </p>

                  {/* Rating Stars & Bio */}
                  <div className="flex items-center justify-between pt-2 border-t border-cyber-slate/30">
                    <div className="flex items-center space-x-3">
                      <img
                        src={test.avatarUrl}
                        alt={test.name}
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-full border border-cyber-slate object-cover"
                      />
                      <div>
                        <span className="text-sm font-bold text-white block">{test.name}</span>
                        <span className="text-xs text-cyber-text-muted block">
                          {test.role} {test.company && `at ${test.company}`}
                        </span>
                      </div>
                    </div>
                    
                    {/* Stars */}
                    <div className="flex text-accent-gold space-x-0.5">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
