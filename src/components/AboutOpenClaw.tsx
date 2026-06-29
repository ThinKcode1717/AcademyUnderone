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
            <span>{language === 'id' ? 'KONSEP REVOLUSIONER' : 'REVOLUTIONARY CONCEPT'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-title tracking-tight">
            {language === 'id' ? (
              <>Kombinasi Sempurna <span className="text-brand-red-light">AI Agent & Vibe Coding</span></>
            ) : (
              <>The Perfect Blend of <span className="text-brand-red-light">AI Agents & Vibe Coding</span></>
            )}
          </h2>
          <p className="text-base sm:text-lg text-cyber-text-sec">
          {language === 'id'
            ? 'Era baru produktivitas digital. Delegasikan tugas-tugas administratif rutin harian Anda kepada asisten AI Agent mandiri yang Anda kendalikan sepenuhnya menggunakan teknik Vibe Coding.'
            : 'A new era of digital productivity. Delegate repetitive daily administrative tasks to autonomous AI Agents that you fully control using modern Vibe Coding techniques.'}
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
            {language === 'id' ? 'Asisten AI Mandiri (AI Agent)' : 'Autonomous AI Assistant'}
          </h3>
          <p className="text-sm text-cyber-text-sec leading-relaxed">
            {language === 'id'
              ? 'AI Agent bekerja layaknya karyawan digital pribadi Anda—mampu membaca berkas, merangkum laporan, menginput data, hingga membuat keputusan logis secara otomatis.'
              : 'AI Agents operate as your personal digital employees—reading files, summarizing reports, inputting data, and executing logical actions automatically.'}
          </p>
        </div>

        {/* Analogi 2 */}
        <div className="bg-cyber-charcoal/40 border border-cyber-slate/50 p-6 rounded-2xl hover:border-brand-red/30 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-4">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-theme-title mb-2">
            {language === 'id' ? 'Pemrograman Instuitif (Vibe Coding)' : 'Intuitive Programming (Vibe Coding)'}
          </h3>
          <p className="text-sm text-cyber-text-sec leading-relaxed">
            {language === 'id'
              ? 'Cukup berikan instruksi dalam bahasa sehari-hari. Biarkan AI yang menerjemahkan ide-ide hebat Anda menjadi program otomatisasi fungsional tanpa hambatan sintaksis.'
              : 'Simply instruct in plain everyday language. Let AI translate your great business ideas into functional automated programs without syntactic barriers.'}
          </p>
        </div>

        {/* Analogi 3 */}
        <div className="bg-cyber-charcoal/40 border border-cyber-slate/50 p-6 rounded-2xl hover:border-brand-red/30 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-green mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-theme-title mb-2">
            {language === 'id' ? 'Sistem Otomatisasi Resmi & Aman' : 'Official & Secure Automation'}
          </h3>
          <p className="text-sm text-cyber-text-sec leading-relaxed">
            {language === 'id'
              ? 'Bukan trik ilegal atau peretasan berbahaya. Kami mengajarkan standar integrasi resmi berbasis API yang aman, andal, dan siap mendukung produktivitas kerja Anda.'
              : 'Not a malicious trick or unsafe exploit. We teach official API-based integrations that are secure, reliable, and optimized for corporate operations.'}
          </p>
        </div>

      </div>

      {/* Does & Does Not Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        
        <div className="bg-cyber-charcoal/30 border border-cyber-slate/30 rounded-2xl p-8 text-left">
          <h3 className="text-lg sm:text-xl font-bold text-theme-title mb-6 flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-green"></span>
            <span>{language === 'id' ? 'Kemampuan Utama AI Agent:' : 'Core Capabilities of AI Agents:'}</span>
          </h3>
          <ul className="space-y-4 text-left">
            <li className="flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-theme-title">
                  {language === 'id' ? 'Membaca & Mengekstrak Dokumen Berukuran Besar' : 'Reading & Extracting Huge Documents'}
                </h4>
                <p className="text-xs text-cyber-text-sec">
                  {language === 'id'
                    ? 'Menganalisis file PDF panjang, merangkum poin penting laporan keuangan, dan mengekstrak rincian spesifik secara instan.'
                    : 'Parsing lengthy PDF files, summarizing financial reports, and extracting specific details instantly.'}
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-theme-title">
                  {language === 'id' ? 'Mengotomatiskan Sinkronisasi Data Spreadsheet' : 'Automating Spreadsheet Data Sync'}
                </h4>
                <p className="text-xs text-cyber-text-sec">
                  {language === 'id'
                    ? 'Memasukkan, mencocokkan, dan memperbarui baris data spreadsheet secara teratur tanpa input manual.'
                    : 'Writing, matching, and updating spreadsheet records seamlessly without manual data entry.'}
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-theme-title">
                  {language === 'id' ? 'Mengintegrasikan Lintas Aplikasi Kerja' : 'Integrating Cross-App Workflows'}
                </h4>
                <p className="text-xs text-cyber-text-sec">
                  {language === 'id'
                    ? 'Menghubungkan email masuk, penyimpanan folder, dan laporan kerja Anda menjadi satu kesatuan alur otomatis.'
                    : 'Unifying incoming emails, cloud storage, and task lists into one centralized automated pipeline.'}
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-theme-title">
                  {language === 'id' ? 'Meningkatkan Efisiensi Kerja Hingga 10x Lipat' : 'Boosting Work Efficiency Up to 10x'}
                </h4>
                <p className="text-xs text-cyber-text-sec">
                  {language === 'id'
                    ? 'Membebaskan waktu Anda dari rutinitas administratif yang membosankan agar fokus pada keputusan strategis.'
                    : 'Freeing up valuable time from repetitive administrative chores to focus on high-impact strategic growth.'}
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* What it DOES NOT */}
        <div className="bg-cyber-charcoal/30 border border-cyber-slate/30 rounded-2xl p-8 text-left">
          <h3 className="text-lg sm:text-xl font-bold text-theme-title mb-6 flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red"></span>
            <span>{language === 'id' ? 'Apa yang Menjadikannya Sangat Efektif:' : 'What Makes It Highly Effective:'}</span>
          </h3>
          <ul className="space-y-4 text-left">
            <li className="flex items-start space-x-3">
              <XCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-theme-title">
                  {language === 'id' ? 'Tidak Ada Batasan Sintaksis Kode' : 'No Syntax Barriers'}
                </h4>
                <p className="text-xs text-cyber-text-sec">
                  {language === 'id'
                    ? 'Dengan Vibe Coding, Anda tidak perlu menghafal tag HTML, sintaksis Python, atau sintaksis Javascript yang kaku.'
                    : 'With Vibe Coding, there is no need to memorize complex HTML tags, Python libraries, or strict Javascript syntax.'}
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <XCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-theme-title">
                  {language === 'id' ? 'Pembelajaran Praktis, Bukan Sekadar Teori' : 'Practical Learning, Not Dry Lectures'}
                </h4>
                <p className="text-xs text-cyber-text-sec">
                  {language === 'id'
                    ? 'Kurikulum dirancang langsung ke studi kasus nyata sehingga apa yang dipelajari hari ini bisa langsung dipakai besok.'
                    : 'The curriculum is built directly on top of real-world use cases so you can implement what you learn immediately.'}
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <XCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-theme-title">
                  {language === 'id' ? 'Aman Dieksperimenkan di Sandbox Cloud' : 'Safe to Experiment in Cloud Sandbox'}
                </h4>
                <p className="text-xs text-cyber-text-sec">
                  {language === 'id'
                    ? 'Kami menyediakan sandbox interaktif terisolasi sehingga uji coba asisten Anda tidak akan membahayakan komputer pribadi.'
                    : 'We provide pre-configured isolated sandbox systems, completely safe for your host PC.'}
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <XCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-theme-title">
                  {language === 'id' ? 'Mentoring Intensif untuk Garansi Anti-Stuck' : 'Intensive Mentoring for Guaranteed Progress'}
                </h4>
                <p className="text-xs text-cyber-text-sec">
                  {language === 'id'
                    ? 'Kami mendampingi setiap langkah belajar Anda melalui sesi interaktif terjadwal untuk menyelesaikan hambatan teknis.'
                    : 'We accompany you through every stage with group Q&As and 1-on-1 sessions to untangle any technical block.'}
                </p>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Motivation Card */}
      <div className="bg-gradient-to-r from-brand-red/10 to-cyber-slate/20 border border-brand-red/20 rounded-2xl p-6 sm:p-8 text-left">
        <h3 className="text-lg font-bold text-theme-title mb-4 flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-accent-cyan" />
          <span>{language === 'id' ? 'Kenapa Harus Menguasai AI Agent & Vibe Coding Sekarang?' : 'Why Master AI Agents & Vibe Coding Today?'}</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <TrendingUp className="w-4.5 h-4.5 text-accent-cyan shrink-0 mt-0.5" />
              <span className="text-cyber-text-sec">
                {language === 'id' ? (
                  <><strong className="text-theme-title font-semibold">Keahlian Masa Depan yang Sangat Dicari:</strong> Kebutuhan industri akan praktisi yang mampu menyusun otomatisasi berbasis AI Agent meroket drastis.</>
                ) : (
                  <><strong className="text-theme-title font-semibold">High-Demand Future Skill:</strong> Industry demand for professionals who can deploy and scale AI Agents is rising exponentially.</>
                )}
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <Compass className="w-4.5 h-4.5 text-accent-cyan shrink-0 mt-0.5" />
              <span className="text-cyber-text-sec">
                {language === 'id' ? (
                  <><strong className="text-theme-title font-semibold">Akselerasi Efisiensi Kerja:</strong> Menghemat puluhan jam kerja repetitif harian agar Anda bisa fokus pada kontribusi kreatif bernilai tinggi.</>
                ) : (
                  <><strong className="text-theme-title font-semibold">Accelerated Work Efficiency:</strong> Reclaim dozens of repetitive hours every week to concentrate on high-value creative contributions.</>
                )}
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <BookOpen className="w-4.5 h-4.5 text-accent-cyan shrink-0 mt-0.5" />
              <span className="text-cyber-text-sec">
                {language === 'id' ? (
                  <><strong className="text-theme-title font-semibold">Kebebasan Berkreasi Tanpa Batas:</strong> Dari ide langsung menjadi solusi otomatis nyata tanpa perlu pusing belajar bahasa pemrograman konvensional.</>
                ) : (
                  <><strong className="text-theme-title font-semibold">Boundless Creative Freedom:</strong> Translate ideas directly into working automation solutions without dealing with conventional syntax bugs.</>
                )}
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <ShieldCheck className="w-4.5 h-4.5 text-accent-cyan shrink-0 mt-0.5" />
              <span className="text-cyber-text-sec">
                {language === 'id' ? (
                  <><strong className="text-theme-title font-semibold">Tingkatkan Nilai Tawar Profesional:</strong> Buktikan diri Anda sebagai profesional yang agile, solutif, dan mampu mengintegrasikan AI Agent ke alur kerja nyata.</>
                ) : (
                  <><strong className="text-theme-title font-semibold">Elevated Professional Value:</strong> Stand out as an agile practitioner who knows how to design and build AI-driven automation workflows.</>
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
