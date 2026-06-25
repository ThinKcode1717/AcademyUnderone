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
            ? 'OpenClaw adalah sebuah tool pembelajaran otomatisasi pintar yang membantu Anda membuat, menjadwalkan, dan mendelegasikan asisten AI Agent untuk tugas-tugas administratif rutin harian.'
            : 'OpenClaw is a simplified visual learning platform that empowers you to create, schedule, and delegate AI Agents to handle your repetitive daily office tasks.'}
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
            {language === 'id' ? 'Asisten Virtual Pribadi' : 'Personal Virtual Assistant'}
          </h3>
          <p className="text-sm text-cyber-text-sec leading-relaxed">
            {language === 'id'
              ? 'Jika beban kerja harian Anda adalah tumpukan berkas digital, OpenClaw adalah asisten virtual serba bisa—membantu membaca, merangkum, dan menginput laporan secara otomatis.'
              : 'If your daily workload represents a massive stack of digital files, OpenClaw is your versatile helper—assisting you to read, summarize, and input reports automatically.'}
          </p>
        </div>

        {/* Analogi 2 */}
        <div className="bg-cyber-charcoal/40 border border-cyber-slate/50 p-6 rounded-2xl hover:border-brand-red/30 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-4">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-theme-title mb-2">
            {language === 'id' ? 'Alur Kerja Terotomatisasi' : 'Automated Workflow Pipelines'}
          </h3>
          <p className="text-sm text-cyber-text-sec leading-relaxed">
            {language === 'id'
              ? 'OpenClaw bekerja layaknya asisten terjadwal harian—memantau email masuk, mengekstrak data penting, dan menyimpannya langsung ke Google Spreadsheet tanpa Anda sentuh lagi.'
              : 'OpenClaw acts like an automated daily work processor—monitoring incoming emails, extracting key data points, and writing them straight into spreadsheets with zero manual effort.'}
          </p>
        </div>

        {/* Analogi 3 */}
        <div className="bg-cyber-charcoal/40 border border-cyber-slate/50 p-6 rounded-2xl hover:border-brand-red/30 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-green mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-theme-title mb-2">
            {language === 'id' ? 'Tool Otomatisasi AI Resmi' : 'Official AI Productivity Tool'}
          </h3>
          <p className="text-sm text-cyber-text-sec leading-relaxed">
            {language === 'id'
              ? 'Ini bukan alat peretas. OpenClaw adalah platform produktivitas AI resmi yang ramah pemula dan dirancang untuk membantu meningkatkan produktivitas harian semua orang.'
              : 'This is not malicious software. OpenClaw is built upon secure, official productivity principles used daily to safely automate and streamline business workflows.'}
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
                  {language === 'id' ? 'Memproses & Merangkum Dokumen' : 'Processes & Summarizes Documents'}
                </h4>
                <p className="text-xs text-cyber-text-sec">
                  {language === 'id'
                    ? 'Membantu membaca file PDF panjang, merangkum dokumen laporan, dan mengekstrak rincian penting secara cepat.'
                    : 'Checks text files and bulky documents, extracting key insights and summaries instantly.'}
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-theme-title">
                  {language === 'id' ? 'Mengelola Alur Data Spreadsheet' : 'Syncs Spreadsheet Records'}
                </h4>
                <p className="text-xs text-cyber-text-sec">
                  {language === 'id'
                    ? 'Mengatur asisten digital untuk menginput, memindahkan, dan memperbarui data spreadsheet secara otomatis.'
                    : 'Writes, updates, and structures row data directly using your custom-made AI Agents.'}
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-theme-title">
                  {language === 'id' ? 'Mengintegrasikan Aplikasi Kerja' : 'Integrates Work Applications'}
                </h4>
                <p className="text-xs text-cyber-text-sec">
                  {language === 'id'
                    ? 'Menghubungkan email, folder laporan harian, dan spreadsheet Anda ke dalam satu alur kerja otomatis.'
                    : 'Connects email accounts, storage folders, and tracking sheets into one robust automated ecosystem.'}
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-theme-title">
                  {language === 'id' ? 'Melatih Pola Pikir Produktif' : 'Builds a Highly Productive Mindset'}
                </h4>
                <p className="text-xs text-cyber-text-sec">
                  {language === 'id'
                    ? 'Membantu Anda memahami cara mendelegasikan tugas rutin berulang ke AI agar dapat fokus pada pekerjaan penting.'
                    : 'Helps you grasp logical computational logic to eliminate boring, repetitive daily chores.'}
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
                  {language === 'id' ? 'Bukan untuk Tindakan Ilegal' : 'Not for Unauthorized Exploits'}
                </h4>
                <p className="text-xs text-cyber-text-sec">
                  {language === 'id'
                    ? 'Tidak boleh digunakan untuk meretas sistem milik pihak lain atau merusak keamanan digital secara tidak sah.'
                    : 'Never used to disrupt external platforms or gain unauthorized access to servers.'}
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
                    ? 'Tidak perlu mengetik ribuan baris kode rumit untuk mengoperasikan asisten otomatisasi digital Anda.'
                    : 'Does not require writing heavy lines of code or prior software development backgrounds.'}
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
                    ? 'Eksperimen berjalan aman di lab cloud sandbox UnderOne, sehingga komputer pribadi Anda tetap terlindungi.'
                    : 'Interactive labs are isolated in secure cloud environments, completely safe for your host PC.'}
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <XCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-theme-title">
                  {language === 'id' ? 'Bukan Sekadar Teori Rumit & Kaku' : 'Not Boring Theoretical Lectures'}
                </h4>
                <p className="text-xs text-cyber-text-sec">
                  {language === 'id'
                    ? 'Tidak ada hafalan membosankan—materi dirancang penuh studi kasus nyata dan langsung bisa dicoba pemula.'
                    : 'No abstract theory. You get pure practical, hands-on exercises to solve real work chores.'}
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
          <span>{language === 'id' ? 'Kenapa Harus Belajar Otomatisasi AI Sekarang?' : 'Why Master AI Automation Today?'}</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <TrendingUp className="w-4.5 h-4.5 text-accent-cyan shrink-0 mt-0.5" />
              <span className="text-cyber-text-sec">
                {language === 'id' ? (
                  <><strong className="text-theme-title font-semibold">Langkah Awal yang Sederhana:</strong> Menjadi pintu masuk memahami otomatisasi AI dan digital operations yang seru.</>
                ) : (
                  <><strong className="text-theme-title font-semibold">Simple Foundation:</strong> Builds a clear entry point into modern digital operations and the massive AI ecosystem.</>
                )}
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <Compass className="w-4.5 h-4.5 text-accent-cyan shrink-0 mt-0.5" />
              <span className="text-cyber-text-sec">
                {language === 'id' ? (
                  <><strong className="text-theme-title font-semibold">Peluang Meningkatkan Karir:</strong> Keahlian langka yang membuat Anda sangat dihargai di tempat kerja karena mampu menghemat waktu perusahaan.</>
                ) : (
                  <><strong className="text-theme-title font-semibold">Career Enhancement:</strong> A high-demand skill that makes you highly valued in any office for saving corporate hours.</>
                )}
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <BookOpen className="w-4.5 h-4.5 text-accent-cyan shrink-0 mt-0.5" />
              <span className="text-cyber-text-sec">
                {language === 'id' ? (
                  <><strong className="text-theme-title font-semibold">Menghemat Jam Kerja:</strong> Mengetahui cara mendelegasikan tugas berulang ke AI Agent agar Anda bisa fokus pada hal penting.</>
                ) : (
                  <><strong className="text-theme-title font-semibold">Saves Valuable Hours:</strong> Learn how to successfully delegate routine chores to AI Agents so you can focus on high-impact work.</>
                )}
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <ShieldCheck className="w-4.5 h-4.5 text-accent-cyan shrink-0 mt-0.5" />
              <span className="text-cyber-text-sec">
                {language === 'id' ? (
                  <><strong className="text-theme-title font-semibold">Membangun Kepercayaan Diri:</strong> Dari merasa gaptek, kini Anda terbukti bisa melatih dan menjadwalkan asisten digital pintar.</>
                ) : (
                  <><strong className="text-theme-title font-semibold">Confidence Boost:</strong> Erase doubts of being non-technical by actively building, training, and scheduling digital assistants.</>
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
