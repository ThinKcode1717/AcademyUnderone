/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Database } from 'lucide-react';

interface HeaderProps {
  onOpenAdmin: () => void;
  leadCount: number;
}

export default function Header({ onOpenAdmin, leadCount }: HeaderProps) {
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
    { name: 'Mengapa Kami', href: '#mengapa-kami' },
    { name: 'Skill Kuasai', href: '#skill-kuasai' },
    { name: 'Kurikulum', href: '#kurikulum' },
    { name: 'Harga', href: '#harga' },
    { name: 'Mitra', href: '#mitra' },
    { name: 'FAQ', href: '#faq' },
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
              <span className="text-xl font-extrabold tracking-tight text-white block leading-none">
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
                className="text-sm font-medium text-cyber-text-sec hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-red after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              id="header-admin-btn"
              onClick={onOpenAdmin}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-mono border border-cyber-slate bg-cyber-charcoal text-accent-cyan hover:border-accent-cyan hover:bg-cyber-slate/50 transition-all duration-200"
            >
              <Database className="w-3.5 h-3.5" />
              <span>Admin Leads</span>
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
              Daftar Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              id="header-admin-mobile-btn"
              onClick={onOpenAdmin}
              className="p-2 rounded-md border border-cyber-slate text-accent-cyan bg-cyber-charcoal"
              title="Admin Leads"
            >
              <Database className="w-4 h-4" />
            </button>
            <button
              id="header-hamburger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-cyber-text-sec hover:text-white hover:bg-cyber-slate focus:outline-none transition-colors"
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
              className="block px-4 py-3 rounded-lg text-base font-semibold text-cyber-text-sec hover:text-white hover:bg-cyber-charcoal transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-cyber-slate/50 space-y-3 px-4">
            <button
              id="header-admin-menu-mobile"
              onClick={() => {
                setIsOpen(false);
                onOpenAdmin();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg text-sm font-mono border border-cyber-slate bg-cyber-charcoal text-accent-cyan"
            >
              <Database className="w-4 h-4" />
              <span>Admin Leads ({leadCount})</span>
            </button>
            <a
              id="header-cta-mobile"
              href="#registrasi"
              onClick={(e) => handleScrollTo(e, '#registrasi')}
              className="block w-full text-center px-4 py-3 rounded-lg text-base font-bold bg-brand-red text-white glow-red"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
