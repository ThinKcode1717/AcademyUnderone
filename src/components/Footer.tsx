/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Shield, Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Twitter, Send, Check } from 'lucide-react';

export default function Footer() {
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsEmail.trim() && newsEmail.includes('@')) {
      setSubscribed(true);
      setNewsEmail('');
    }
  };

  return (
    <footer className="bg-[#050b16] border-t border-cyber-slate/60 text-left pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Logo & Bio Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-red/10 border border-brand-red/30 rounded flex items-center justify-center">
                <Shield className="w-5 h-5 text-brand-red" />
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                OPEN<span className="text-brand-red">CLAW</span> ACADEMY
              </span>
            </div>
            
            <p className="text-cyber-text-sec text-xs sm:text-sm leading-relaxed">
              Platform pelatihan cybersecurity praktis (hands-on) terdepan di Indonesia. Melahirkan pertahanan siber profesional siap kerja yang berlisensi industri bersama FEDUCATION.
            </p>

            {/* Social Medias */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="w-8 h-8 rounded bg-cyber-charcoal hover:bg-brand-red hover:text-white text-cyber-text-sec flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-cyber-charcoal hover:bg-brand-red hover:text-white text-cyber-text-sec flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-cyber-charcoal hover:bg-brand-red hover:text-white text-cyber-text-sec flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-cyber-charcoal hover:bg-brand-red hover:text-white text-cyber-text-sec flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links: Resources */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Perusahaan</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#mengapa-kami" className="text-cyber-text-sec hover:text-white transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="#kurikulum" className="text-cyber-text-sec hover:text-white transition-colors">Modul Belajar</a>
              </li>
              <li>
                <a href="#harga" className="text-cyber-text-sec hover:text-white transition-colors">Program Biaya</a>
              </li>
              <li>
                <a href="#mitra" className="text-cyber-text-sec hover:text-white transition-colors">Mitra Penyaluran</a>
              </li>
            </ul>
          </div>

          {/* Links: Legals */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Bantuan & Legal</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#faq" className="text-cyber-text-sec hover:text-white transition-colors">FAQ Umum</a>
              </li>
              <li>
                <a href="#" className="text-cyber-text-sec hover:text-white transition-colors">Kebijakan Privasi</a>
              </li>
              <li>
                <a href="#" className="text-cyber-text-sec hover:text-white transition-colors">Syarat & Ketentuan</a>
              </li>
              <li>
                <a href="#" className="text-cyber-text-sec hover:text-white transition-colors">Pusat Hubungi Kami</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Newsletter Tips Siber</h4>
            <p className="text-cyber-text-sec text-xs leading-relaxed">
              Dapatkan modul hacking gratis, tips pertahanan siber mingguan, dan info batch baru langsung di inbox email Anda.
            </p>
            
            {subscribed ? (
              <div className="bg-accent-green/10 border border-accent-green/20 p-3 rounded-lg text-accent-green text-xs flex items-center space-x-2">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>Terima kasih! Cek inbox Anda untuk tips siber pertama.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <input
                  id="footer-news-email"
                  type="email"
                  required
                  placeholder="Masukkan email Anda..."
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-cyber-charcoal text-white border border-cyber-slate/80 text-xs focus:outline-none focus:border-brand-red transition"
                />
                <button
                  id="footer-news-submit"
                  type="submit"
                  className="p-2.5 rounded bg-brand-red hover:bg-brand-red-dark text-white text-xs flex items-center justify-center cursor-pointer"
                  title="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Contacts Info Small List */}
            <div className="space-y-2 pt-2 border-t border-cyber-slate/20 text-xs text-cyber-text-sec">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>training@openclaw.id</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>+62 812-3456-7890 (WhatsApp)</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>Jakarta Selatan, DKI Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Divider */}
        <div className="border-t border-cyber-slate/40 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cyber-text-muted text-center sm:text-left gap-4">
          <p>© 2026 OpenClaw Academy & FEDUCATION. All Rights Reserved.</p>
          <p>Dibuat secara profesional untuk memajukan ketahanan siber nasional.</p>
        </div>

      </div>
    </footer>
  );
}
