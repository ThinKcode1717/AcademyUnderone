/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Database, Sun, Moon } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface HeaderProps {
  onOpenAdmin: () => void;
  leadCount: number;
}

export default function Header({ onOpenAdmin, leadCount }: HeaderProps) {
  const { language, setLanguage, theme, setTheme, t } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav_why_us'), href: '#mengapa-kami' },
    { name: t('nav_skills'), href: '#skill-kuasai' },
    { name: t('nav_curriculum'), href: '#kurikulum' },
    { name: t('nav_pricing'), href: '#harga' },
    { name: t('nav_partners'), href: '#mitra' },
    { name: t('nav_faq'), href: '#faq' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cyber-navy/90 backdrop-blur-md border-b border-cyber-slate/50 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-brand-red/10 border border-brand-red/30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:border-brand-red group-hover:bg-brand-red/20 glow-red">
              <Shield className="w-6 h-6 text-brand-red group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-theme-title block leading-none">
                OPEN<span className="text-brand-red">CLAW</span>
              </span>
              <span className="text-[10px] font-mono text-accent-cyan tracking-wider uppercase block mt-1">
                ACADEMY
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-medium text-cyber-text-sec hover:text-theme-title transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-red after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-1 border border-cyber-slate bg-cyber-charcoal/50 p-1 rounded-lg">
              <button
                onClick={() => setLanguage('id')}
                className={`px-2 py-0.5 text-[11px] font-mono font-bold rounded transition-colors cursor-pointer ${
                  language === 'id' ? 'bg-brand-red text-white' : 'text-cyber-text-sec hover:text-theme-title'
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 text-[11px] font-mono font-bold rounded transition-colors cursor-pointer ${
                  language === 'en' ? 'bg-brand-red text-white' : 'text-cyber-text-sec hover:text-theme-title'
                }`}
              >
                EN
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg border border-cyber-slate bg-cyber-charcoal/50 text-cyber-text-sec hover:text-theme-title hover:border-brand-red transition duration-200 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-accent-gold" /> : <Moon className="w-4 h-4 text-brand-red" />}
            </button>

            <button
              id="header-admin-btn"
              onClick={onOpenAdmin}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-mono border border-cyber-slate bg-cyber-charcoal text-accent-cyan hover:border-accent-cyan hover:bg-cyber-slate/50 transition-all duration-200 cursor-pointer"
            >
              <Database className="w-3.5 h-3.5" />
              <span>{t('nav_admin')}</span>
              {leadCount > 0 && (
                <span className="bg-brand-red text-white text-[10px] px-1.5 py-0.5 rounded-full font-sans font-bold">
                  {leadCount}
                </span>
              )}
            </button>
            <a
              id="header-cta-btn"
              href="#registrasi"
              onClick={(e) => handleScrollTo(e, '#registrasi')}
              className="px-5 py-2 rounded-lg text-sm font-semibold bg-brand-red hover:bg-brand-red-dark text-white transition-all duration-300 shadow-md hover:shadow-brand-red/20 glow-red transform hover:-translate-y-0.5"
            >
              {t('nav_cta')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              id="header-admin-mobile-btn"
              onClick={onOpenAdmin}
              className="p-2 rounded-md border border-cyber-slate text-accent-cyan bg-cyber-charcoal cursor-pointer"
              title="Admin Leads"
            >
              <Database className="w-4 h-4" />
            </button>
            <button
              id="header-hamburger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-cyber-text-sec hover:text-theme-title hover:bg-cyber-slate focus:outline-none transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[65px] bg-cyber-navy/95 backdrop-blur-lg z-40 transition-all duration-300 transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 border-t border-cyber-slate/50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="block px-4 py-3 rounded-lg text-base font-semibold text-cyber-text-sec hover:text-theme-title hover:bg-cyber-charcoal transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-cyber-slate/50 space-y-3 px-4">
            {/* Language and Theme for Mobile */}
            <div className="flex items-center justify-between py-2 border-b border-cyber-slate/30">
              <span className="text-xs font-mono text-cyber-text-sec">Lang / Theme</span>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 border border-cyber-slate bg-cyber-charcoal/50 p-1 rounded-lg">
                  <button
                    onClick={() => setLanguage('id')}
                    className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded transition-colors cursor-pointer ${
                      language === 'id' ? 'bg-brand-red text-white' : 'text-cyber-text-sec'
                    }`}
                  >
                    ID
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded transition-colors cursor-pointer ${
                      language === 'en' ? 'bg-brand-red text-white' : 'text-cyber-text-sec'
                    }`}
                  >
                    EN
                  </button>
                </div>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-1.5 rounded-lg border border-cyber-slate bg-cyber-charcoal/50 text-cyber-text-sec cursor-pointer"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4 text-accent-gold" /> : <Moon className="w-4 h-4 text-brand-red" />}
                </button>
              </div>
            </div>

            <button
              id="header-admin-menu-mobile"
              onClick={() => {
                setIsOpen(false);
                onOpenAdmin();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg text-sm font-mono border border-cyber-slate bg-cyber-charcoal text-accent-cyan cursor-pointer"
            >
              <Database className="w-4 h-4" />
              <span>{t('nav_admin')} ({leadCount})</span>
            </button>
            <a
              id="header-cta-mobile"
              href="#registrasi"
              onClick={(e) => handleScrollTo(e, '#registrasi')}
              className="block w-full text-center px-4 py-3 rounded-lg text-base font-bold bg-brand-red text-white glow-red"
            >
              {t('nav_cta')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
