/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, XCircle, Info, Home, Search, BookOpen, Sparkles, TrendingUp, Compass } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function AboutOpenClaw() {
  const { language } = useApp();

  return (
    <section id="about-openclaw" className="py-24 relative bg-cyber-navy overflow-hidden border-t border-cyber-slate/30">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-red/10 border border-brand-red/30 px-3 py-1 rounded-full text-xs font-mono text-brand-red-light">
            <Info className="w-3.5 h-3.5" />
            <span>{language === 'id' ? 'PANDUAN UNTUK ORANG AWAM' : 'GUIDE FOR ABSOLUTE BEGINNERS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-title tracking-tight">
            {language === 'id' ? (
              <>Sebelum Mulai, Mari Kita Pahami <span className="text-brand-red-light">OpenClaw</span></>
            ) : (
              <>Before We Begin, Let's Understand <span className="text-brand-red-light">OpenClaw</span></>
            )}
          </h2>
          <p className="text-base sm:text-lg text-cyber-text-sec">
            {language === 'id'
              ? 'OpenClaw adalah sebuah tool pembelajaran (seperti Microsoft Word, namun dirancang untuk keamanan) yang membantu Anda memahami bagaimana komputer dan website di internet saling terhubung satu sama lain.'
              : 'OpenClaw is a simplified, visual learning tool (similar in utility to Microsoft Word, but specialized for cyber defenses) that maps how servers, networks, and websites exchange data.'}
          </p>
        </div>

        {/* Analogies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Analogi 1 */}
          <div className="bg-cyber-charcoal/40 border border-cyber-slate/50 p-6 rounded-2xl hover:border-brand-red/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red-light mb-4">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-theme-title mb-2">
              {language === 'id' ? 'Denah Rencana Rumah' : 'House Floor Blueprint'}
            </h3>
            <p className="text-sm text-cyber-text-sec leading-relaxed">
              {language === 'id'
                ? 'Jika website adalah sebuah rumah, OpenClaw adalah cetak biru rumah tersebut—ia membantu Anda melihat semua pintu, jendela, dan potensi celah keamanan secara visual.'
                : 'If a website represents a house, OpenClaw is its visual blueprints—allowing you to inspect doors, locks, windows, and potential blindspots at a single glance.'}
            </p>
          </div>

          {/* Analogi 2 */}
          <div className="bg-cyber-charcoal/40 border border-cyber-slate/50 p-6 rounded-2xl hover:border-brand-red/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-theme-title mb-2">
              {language === 'id' ? 'Detektor Logam Bandara' : 'Airport Security Scanner'}
            </h3>
            <p className="text-sm text-cyber-text-sec leading-relaxed">
              {language === 'id'
                ? 'OpenClaw bekerja layaknya metal detector di bandara—ia memindai (scan) jaringan untuk mendeteksi barang mencurigakan sebelum menjadi masalah keamanan nyata.'
                : 'OpenClaw acts like airport security checkpoints—scanning target endpoints to highlight unauthorized software versions before they pose a serious threat.'}
            </p>
          </div>

          {/* Analogi 3 */}
          <div className="bg-cyber-charcoal/40 border border-cyber-slate/50 p-6 rounded-2xl hover:border-brand-red/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-green mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-theme-title mb-2">
              {language === 'id' ? 'Peralatan Legal Profesional' : 'Standard Industry Tool'}
            </h3>
            <p className="text-sm text-cyber-text-sec leading-relaxed">
              {language === 'id'
                ? 'Ini bukan alat meretas ilegal. OpenClaw adalah standar industri yang digunakan oleh profesional berlisensi untuk menguji kelayakan sistem keamanan secara legal.'
                : 'This is not malicious software. OpenClaw is built upon global ethical hacking principles used daily by certified experts to test network integrity safely.'}
            </p>
          </div>

        </div>

        {/* Does & Does Not Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-cyber-charcoal/30 border border-cyber-slate/30 rounded-2xl p-8 text-left">
            <h3 className="text-lg sm:text-xl font-bold text-theme-title mb-6 flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-green"></span>
              <span>{language === 'id' ? 'Apa yang Dilakukan OpenClaw:' : 'What OpenClaw Does:'}</span>
            </h3>
            <ul className="space-y-4 text-left">
              <li className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-theme-title">
                    {language === 'id' ? 'Memindai Jaringan dengan Aman' : 'Performs Safe Network Scans'}
                  </h4>
                  <p className="text-xs text-cyber-text-sec">
                    {language === 'id'
                      ? 'Melakukan pemeriksaan kesehatan jaringan tanpa mengganggu kestabilan sistem target.'
                      : 'Checks active ports and system configuration health without impacting server stability.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-theme-title">
                    {language === 'id' ? 'Mengumpulkan Informasi Sistem' : 'Retrieves Endpoint Metadata'}
                  </h4>
                  <p className="text-xs text-cyber-text-sec">
                    {language === 'id'
                      ? 'Melihat sistem operasi dan layanan yang sedang berjalan pada komputer target.'
                      : 'Identifies which operating systems, services, and applications are hosted on target servers.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-theme-title">
                    {language === 'id' ? 'Mendeteksi Potensi Masalah Keamanan' : 'Highlights Misconfigurations'}
                  </h4>
                  <p className="text-xs text-cyber-text-sec">
                    {language === 'id'
                      ? 'Menemukan celah konfigurasi atau software usang yang rentan dibobol penjahat siber.'
                      : 'Spots weak password controls or outdated package dependencies before bad actors exploit them.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-theme-title">
                    {language === 'id' ? 'Mengajarkan Cara Kerja Internet' : 'Clarifies Global Internet Data Flows'}
                  </h4>
                  <p className="text-xs text-cyber-text-sec">
                    {language === 'id'
                      ? 'Membantu Anda memahami aliran data di internet secara visual dan praktis.'
                      : 'Helps visual learners capture how packets flow through routers, firewalls, and ports.'}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* What it DOES NOT */}
          <div className="bg-cyber-charcoal/30 border border-cyber-slate/30 rounded-2xl p-8 text-left">
            <h3 className="text-lg sm:text-xl font-bold text-theme-title mb-6 flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red"></span>
              <span>{language === 'id' ? 'Yang BUKAN Karakteristik OpenClaw:' : 'What OpenClaw is NOT:'}</span>
            </h3>
            <ul className="space-y-4 text-left">
              <li className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-theme-title">
                    {language === 'id' ? 'Bukan untuk Merugikan Orang Lain' : 'Not for Unauthorized Exploits'}
                  </h4>
                  <p className="text-xs text-cyber-text-sec">
                    {language === 'id'
                      ? 'Tidak boleh digunakan untuk meretas sistem milik pihak lain tanpa izin (ilegal).'
                      : 'Never used to disrupt external platforms or gain unauthorized root access to servers.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-theme-title">
                    {language === 'id' ? 'Tidak Memerlukan Skill Programming' : 'No Programming Skill Needed'}
                  </h4>
                  <p className="text-xs text-cyber-text-sec">
                    {language === 'id'
                      ? 'Tidak perlu mengetik ribuan baris kode rumit untuk menggunakan fitur-fitur dasarnya.'
                      : 'Does not require writing lines of code or complex programming to run inspections.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-theme-title">
                    {language === 'id' ? 'Tidak Berbahaya bagi Komputer Anda' : 'No Risk to Your Device'}
                  </h4>
                  <p className="text-xs text-cyber-text-sec">
                    {language === 'id'
                      ? 'Eksperimen berjalan di lab cloud simulasi yang 100% aman untuk komputer pribadi Anda.'
                      : 'Interactive labs are isolated in secure cloud environments, completely safe for your host PC.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-theme-title">
                    {language === 'id' ? 'Bukan Like Hacker di Film Hollywood' : 'Not Like Cinema Hackers'}
                  </h4>
                  <p className="text-xs text-cyber-text-sec">
                    {language === 'id'
                      ? 'Tidak ada layar hitam melayang cepat—alat ini logis, terstruktur, dan bisa dipelajari siapa pun.'
                      : 'No spinning 3D cubes or floating neon graphics. This is a practical, logical, structured utility.'}
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Motivation Card for Career Changer */}
        <div className="bg-gradient-to-r from-brand-red/10 to-cyber-slate/20 border border-brand-red/20 rounded-2xl p-6 sm:p-8 text-left">
          <h3 className="text-lg font-bold text-theme-title mb-4 flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-accent-cyan" />
            <span>{language === 'id' ? 'Kenapa Harus Belajar OpenClaw Sekarang?' : 'Why Master OpenClaw Today?'}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <TrendingUp className="w-4.5 h-4.5 text-accent-cyan shrink-0 mt-0.5" />
                <span className="text-cyber-text-sec">
                  {language === 'id' ? (
                    <><strong className="text-theme-title font-semibold">Langkah Awal yang Sederhana:</strong> Menjadi pintu masuk ke industri IT dan Cybersecurity yang berkembang luar biasa pesat.</>
                  ) : (
                    <><strong className="text-theme-title font-semibold">Simple Foundation:</strong> Builds a clear entry point into the highly rewarding IT and cyber defense ecosystem.</>
                  )}
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Compass className="w-4.5 h-4.5 text-accent-cyan shrink-0 mt-0.5" />
                <span className="text-cyber-text-sec">
                  {language === 'id' ? (
                    <><strong className="text-theme-title font-semibold">Peluang Pivot Karir:</strong> Kesempatan emas beralih ke bidang teknologi yang seru, menantang, dengan gaji di atas rata-rata.</>
                  ) : (
                    <><strong className="text-theme-title font-semibold">Career Transition:</strong> A golden path for career switchers seeking robust high-paying roles in the technology sector.</>
                  )}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <BookOpen className="w-4.5 h-4.5 text-accent-cyan shrink-0 mt-0.5" />
                <span className="text-cyber-text-sec">
                  {language === 'id' ? (
                    <><strong className="text-theme-title font-semibold">Melindungi Diri Sendiri:</strong> Memahami bagaimana internet bekerja berarti tahu cara melindungi akun dan data penting Anda secara mandiri.</>
                  ) : (
                    <><strong className="text-theme-title font-semibold">Personal Protection:</strong> Understanding internet architecture improves your personal cybersecurity posture against standard scams.</>
                  )}
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <ShieldCheck className="w-4.5 h-4.5 text-accent-cyan shrink-0 mt-0.5" />
                <span className="text-cyber-text-sec">
                  {language === 'id' ? (
                    <><strong className="text-theme-title font-semibold">Membangun Kepercayaan Diri:</strong> Dari ragu "saya bukan orang IT", kini Anda terbukti bisa mengoperasikan tool canggih industri.</>
                  ) : (
                    <><strong className="text-theme-title font-semibold">Confidence Boost:</strong> Erase doubts of "not being tech-savvy" by actively operating an industry-standard professional utility.</>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
