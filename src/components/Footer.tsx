/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Shield, Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Twitter, Send, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Footer() {
  const { t, language } = useApp();
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
    <footer className="bg-cyber-charcoal border-t border-cyber-slate/60 text-left pt-16 pb-8 relative overflow-hidden">
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
              <span className="text-lg font-black tracking-tight text-theme-title">
                UNDER<span className="text-brand-red">ONE</span> ACADEMY
              </span>
            </div>
            
            <p className="text-cyber-text-sec text-xs sm:text-sm leading-relaxed">
              {t('foot_desc')}
            </p>

            {/* Social Medias */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="w-8 h-8 rounded bg-cyber-navy border border-cyber-slate/30 hover:bg-brand-red hover:text-white text-cyber-text-sec flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-cyber-navy border border-cyber-slate/30 hover:bg-brand-red hover:text-white text-cyber-text-sec flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-cyber-navy border border-cyber-slate/30 hover:bg-brand-red hover:text-white text-cyber-text-sec flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-cyber-navy border border-cyber-slate/30 hover:bg-brand-red hover:text-white text-cyber-text-sec flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links: Resources */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-theme-title uppercase tracking-wider">
              {language === 'id' ? 'Perusahaan' : 'Company'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#mengapa-kami" className="inline-block text-cyber-text-sec hover:text-brand-red-light hover:translate-x-1.5 hover:font-bold transition-all duration-300">
                  {language === 'id' ? 'Tentang Kami' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#kurikulum" className="inline-block text-cyber-text-sec hover:text-brand-red-light hover:translate-x-1.5 hover:font-bold transition-all duration-300">
                  {language === 'id' ? 'Modul Belajar' : 'Curriculum'}
                </a>
              </li>
              <li>
                <a href="#harga" className="inline-block text-cyber-text-sec hover:text-brand-red-light hover:translate-x-1.5 hover:font-bold transition-all duration-300">
                  {language === 'id' ? 'Program Biaya' : 'Pricing'}
                </a>
              </li>
              <li>
                <a href="#mitra" className="inline-block text-cyber-text-sec hover:text-brand-red-light hover:translate-x-1.5 hover:font-bold transition-all duration-300">
                  {language === 'id' ? 'Mitra Penyaluran' : 'Partners'}
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Legals */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-theme-title uppercase tracking-wider">
              {language === 'id' ? 'Bantuan & Legal' : 'Support & Legal'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#faq" className="inline-block text-cyber-text-sec hover:text-brand-red-light hover:translate-x-1.5 hover:font-bold transition-all duration-300">
                  {language === 'id' ? 'FAQ Umum' : 'General FAQ'}
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-cyber-text-sec hover:text-brand-red-light hover:translate-x-1.5 hover:font-bold transition-all duration-300">
                  {language === 'id' ? 'Kebijakan Privasi' : 'Privacy Policy'}
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-cyber-text-sec hover:text-brand-red-light hover:translate-x-1.5 hover:font-bold transition-all duration-300">
                  {language === 'id' ? 'Syarat & Ketentuan' : 'Terms & Conditions'}
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-cyber-text-sec hover:text-brand-red-light hover:translate-x-1.5 hover:font-bold transition-all duration-300">
                  {language === 'id' ? 'Pusat Hubungi Kami' : 'Contact Center'}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold text-theme-title uppercase tracking-wider">
              {t('foot_news_hdr')}
            </h4>
            <p className="text-cyber-text-sec text-xs leading-relaxed">
              {t('foot_news_desc')}
            </p>
            
            {subscribed ? (
              <div className="bg-accent-green/10 border border-accent-green/20 p-3 rounded-lg text-accent-green text-xs flex items-center space-x-2">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>
                  {t('foot_news_success')}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <input
                  id="footer-news-email"
                  type="email"
                  required
                  placeholder={language === 'id' ? 'Masukkan email Anda...' : 'Enter your email address...'}
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-cyber-navy text-theme-title border border-cyber-slate/80 text-xs focus:outline-none focus:border-brand-red transition"
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
          <p>© 2026 UNDERONE Academy & FEDUCATION. All Rights Reserved.</p>
          <p>
            {language === 'id'
              ? 'Dibuat secara profesional untuk memajukan otomatisasi harian Anda.'
              : 'Professionally crafted to advance your daily work automation.'}
          </p>
        </div>

      </div>
    </footer>
  );
}
