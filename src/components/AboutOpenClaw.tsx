/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, XCircle, Info, Home, Search, BookOpen, Sparkles, TrendingUp, Compass } from 'lucide-react';

export default function AboutOpenClaw() {
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
            <span>PANDUAN UNTUK ORANG AWAM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sebelum Mulai, Mari Kita Pahami <span className="text-brand-red-light">OpenClaw</span>
          </h2>
          <p className="text-base sm:text-lg text-cyber-text-sec">
            OpenClaw adalah sebuah tool pembelajaran (seperti Microsoft Word, namun dirancang untuk keamanan) yang membantu Anda memahami bagaimana komputer dan website di internet saling terhubung satu sama lain.
          </p>
        </div>

        {/* Analogies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Analogi 1 */}
          <div className="bg-cyber-charcoal/40 border border-cyber-slate/50 p-6 rounded-2xl hover:border-brand-red/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red-light mb-4">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Denah Rencana Rumah</h3>
            <p className="text-sm text-cyber-text-sec leading-relaxed">
              Jika website adalah sebuah rumah, OpenClaw adalah cetak biru rumah tersebut—ia membantu Anda melihat semua pintu, jendela, dan potensi celah keamanan secara visual.
            </p>
          </div>

          {/* Analogi 2 */}
          <div className="bg-cyber-charcoal/40 border border-cyber-slate/50 p-6 rounded-2xl hover:border-brand-red/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Detektor Logam Bandara</h3>
            <p className="text-sm text-cyber-text-sec leading-relaxed">
              OpenClaw bekerja layaknya metal detector di bandara—ia memindai (scan) jaringan untuk mendeteksi barang mencurigakan sebelum menjadi masalah keamanan nyata.
            </p>
          </div>

          {/* Analogi 3 */}
          <div className="bg-cyber-charcoal/40 border border-cyber-slate/50 p-6 rounded-2xl hover:border-brand-red/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-green mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Peralatan Legal Profesional</h3>
            <p className="text-sm text-cyber-text-sec leading-relaxed">
              Ini bukan alat meretas ilegal. OpenClaw adalah standar industri yang digunakan oleh profesional berlisensi untuk menguji kelayakan sistem keamanan secara legal.
            </p>
          </div>

        </div>

        {/* Does & Does Not Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* What it DOES */}
          <div className="bg-cyber-charcoal/30 border border-cyber-slate/30 rounded-2xl p-8 text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-green"></span>
              <span>Apa yang Dilakukan OpenClaw:</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Memindai Jaringan dengan Aman</h4>
                  <p className="text-xs text-cyber-text-sec">Melakukan pemeriksaan kesehatan jaringan tanpa mengganggu kestabilan sistem target.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Mengumpulkan Informasi Sistem</h4>
                  <p className="text-xs text-cyber-text-sec">Melihat sistem operasi dan layanan yang sedang berjalan pada komputer target.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Mendeteksi Potensi Masalah Keamanan</h4>
                  <p className="text-xs text-cyber-text-sec">Menemukan celah konfigurasi atau software usang yang rentan dibobol penjahat siber.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Mengajarkan Cara Kerja Internet</h4>
                  <p className="text-xs text-cyber-text-sec">Membantu Anda memahami aliran data di internet secara visual dan praktis.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* What it DOES NOT */}
          <div className="bg-cyber-charcoal/30 border border-cyber-slate/30 rounded-2xl p-8 text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red"></span>
              <span>Yang BUKAN Karakteristik OpenClaw:</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Bukan untuk Merugikan Orang Lain</h4>
                  <p className="text-xs text-cyber-text-sec">Tidak boleh digunakan untuk meretas sistem milik pihak lain tanpa izin (ilegal).</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Tidak Memerlukan Skill Programming</h4>
                  <p className="text-xs text-cyber-text-sec">Tidak perlu mengetik ribuan baris kode rumit untuk menggunakan fitur-fitur dasarnya.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Tidak Berbahaya bagi Komputer Anda</h4>
                  <p className="text-xs text-cyber-text-sec">Eksperimen berjalan di lab cloud simulasi yang 100% aman untuk komputer pribadi Anda.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Bukan Seperti Hacker di Film Hollywood</h4>
                  <p className="text-xs text-cyber-text-sec">Tidak ada layar hitam melayang cepat—alat ini logis, terstruktur, dan bisa dipelajari siapa pun.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Motivation Card for Career Changer */}
        <div className="bg-gradient-to-r from-brand-red/10 to-cyber-slate/20 border border-brand-red/20 rounded-2xl p-6 sm:p-8 text-left">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-accent-cyan" />
            <span>Kenapa Harus Belajar OpenClaw Sekarang?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <TrendingUp className="w-4.5 h-4.5 text-accent-cyan shrink-0 mt-0.5" />
                <span className="text-cyber-text-sec"><strong className="text-white font-medium">Langkah Awal yang Sederhana:</strong> Menjadi pintu masuk ke industri IT dan Cybersecurity yang berkembang luar biasa pesat.</span>
              </div>
              <div className="flex items-start space-x-2">
                <Compass className="w-4.5 h-4.5 text-accent-cyan shrink-0 mt-0.5" />
                <span className="text-cyber-text-sec"><strong className="text-white font-medium">Peluang Pivot Karir:</strong> Kesempatan emas beralih ke bidang teknologi yang seru, menantang, dengan gaji di atas rata-rata.</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <BookOpen className="w-4.5 h-4.5 text-accent-cyan shrink-0 mt-0.5" />
                <span className="text-cyber-text-sec"><strong className="text-white font-medium">Melindungi Diri Sendiri:</strong> Memahami bagaimana internet bekerja berarti tahu cara melindungi akun dan data penting Anda secara mandiri.</span>
              </div>
              <div className="flex items-start space-x-2">
                <ShieldCheck className="w-4.5 h-4.5 text-accent-cyan shrink-0 mt-0.5" />
                <span className="text-cyber-text-sec"><strong className="text-white font-medium">Membangun Kepercayaan Diri:</strong> Dari ragu \"saya bukan orang IT\", kini Anda terbukti bisa mengoperasikan tool canggih industri.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
