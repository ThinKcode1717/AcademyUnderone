/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck, Percent, HelpCircle, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { PackageType } from '../types';
import { useApp } from '../context/AppContext';

interface PricingProps {
  onSelectPackage: (pkg: PackageType) => void;
}

export default function Pricing({ onSelectPackage }: PricingProps) {
  const { t, language } = useApp();
  // Countdown Timer state (urgency)
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 42, seconds: 18 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to 24h when zero
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  const packages = [
    {
      id: 'starter' as PackageType,
      name: t('price_package_starter_title'),
      price: language === 'id' ? 'Rp 999.000' : '$69',
      originalPrice: language === 'id' ? 'Rp 1.499.000' : '$99',
      duration: t('price_package_starter_duration'),
      description: t('price_package_starter_desc'),
      features: language === 'id' ? [
        'Akses Modul Utama Inti (4 Minggu)',
        'Shared Source & Automation Environment Siap Pakai',
        'Komunitas Kolaboratif & Networking',
        'Live Group Q&A (2x seminggu) - Garansi anti-stuck!',
        'Sertifikat Kelulusan Resmi',
        'Premium E-Book & Library Template AI Agent'
      ] : [
        '4-Week Core Syllabus Access',
        'Ready-to-Use Shared Source & Automation Environment',
        'Collaborative Community & Networking',
        'Live Group Q&A (2x/week) - Anti-stuck Guarantee!',
        'Official Completion Certificate',
        'Premium E-Book & AI Agent Template Library'
      ],
      cta: t('price_package_starter_cta'),
      featured: false,
    },
    {
      id: 'standard' as PackageType,
      name: t('price_package_standard_title'),
      price: language === 'id' ? 'Rp 1.999.000' : '$139',
      originalPrice: language === 'id' ? 'Rp 2.999.000' : '$199',
      duration: t('price_package_standard_duration'),
      description: t('price_package_standard_desc'),
      features: language === 'id' ? [
        'Semua Benefit Paket Starter Terbuka Lengkap',
        '2 Bulan Eksklusif VIP Team UnderOne (Konsultasi)',
        'Eksklusif Source Code & Skill Buatan Team UnderOne',
        'Dukungan Jalur Cepat (Priority Support)',
        '1x per Bulan Sesi Mentoring Privat (1-on-1)',
        'Audit Resume & Optimasi Profil LinkedIn'
      ] : [
        'All Starter Package Benefits Unlocked',
        '2 Months Exclusive VIP Consulting (UnderOne Team)',
        'Exclusive Source Code & Skills by Team UnderOne',
        'Priority Support Pathway',
        '1x per Month Private 1-on-1 Mentoring',
        'Resume Audit & LinkedIn Optimization'
      ],
      cta: t('price_package_standard_cta'),
      featured: true,
      badge: t('price_badge_popular'),
    },
    {
      id: 'premium' as PackageType,
      name: t('price_package_premium_title'),
      price: language === 'id' ? 'Rp 2.999.000' : '$199',
      originalPrice: language === 'id' ? 'Rp 3.999.000' : '$269',
      duration: t('price_package_premium_duration'),
      description: t('price_package_premium_desc'),
      features: language === 'id' ? [
        'Semua Benefit Paket Standard Terbuka Lengkap',
        '6 Bulan Akses VIP Team UnderOne (Konsultasi)',
        'Full Access Premium Skill Custom & Source Code',
        'Dukungan VIP Hub 24/7',
        '2x per Bulan Sesi Mentoring Privat (1-on-1)',
        'Golden Ticket: Prioritas Update Modul Baru',
        'Program Penyaluran Portofolio Prioritas'
      ] : [
        'All Standard Package Benefits Unlocked',
        '6 Months VIP Team UnderOne Access (Consulting)',
        'Full Access Premium Custom Skills & Source Code',
        '24/7 VIP Hub Support',
        '2x per Month Private 1-on-1 Mentoring',
        'Golden Ticket: Priority New Module Updates',
        'Priority Portfolio Referral Program'
      ],
      cta: t('price_package_premium_cta'),
      featured: false,
    }
  ];

  const handleSelect = (pkgId: PackageType) => {
    onSelectPackage(pkgId);
    const target = document.querySelector('#registrasi');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="harga" className="py-20 relative bg-cyber-navy">
      {/* Glow elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-accent-gold/10 border border-accent-gold/20 px-3 py-1 rounded-full text-xs font-mono text-accent-gold uppercase tracking-wider">
            <span>{t('price_badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-theme-title">
            {t('price_title')}
          </h2>
          <p className="text-cyber-text-sec text-base sm:text-lg">
            {t('price_subtitle')}
          </p>
        </div>

        {/* Urgent Countdown Timer Box */}
        <div className="max-w-2xl mx-auto mb-12 bg-brand-red/10 border border-brand-red/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4 text-left">
            <div className="p-3 bg-brand-red/20 rounded-xl text-brand-red">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="font-mono text-xs text-brand-red-light block font-semibold uppercase tracking-wider">
                {language === 'id' ? 'DISCOUNT EARLY BIRD 20%' : '20% EARLY BIRD DISCOUNT'}
              </span>
              <h4 className="font-bold text-theme-title text-base">{t('price_countdown_title')}</h4>
              <p className="text-xs text-cyber-text-sec">
                {language === 'id' ? 'Diskon otomatis aktif saat melakukan checkout pendaftaran.' : 'Discount automatically applied upon course registration.'}
              </p>
            </div>
          </div>
          
          {/* Timer Display */}
          <div className="flex items-center space-x-2.5 font-mono">
            <div className="flex flex-col items-center">
              <div className="bg-cyber-navy border border-cyber-slate/80 text-theme-title font-extrabold text-xl w-12 h-12 rounded-lg flex items-center justify-center glow-red">
                {formatNumber(timeLeft.hours)}
              </div>
              <span className="text-[10px] text-cyber-text-muted mt-1">{t('price_hours').toUpperCase()}</span>
            </div>
            <span className="text-brand-red font-bold text-xl mb-4">:</span>
            <div className="flex flex-col items-center">
              <div className="bg-cyber-navy border border-cyber-slate/80 text-theme-title font-extrabold text-xl w-12 h-12 rounded-lg flex items-center justify-center glow-red">
                {formatNumber(timeLeft.minutes)}
              </div>
              <span className="text-[10px] text-cyber-text-muted mt-1">{t('price_mins').toUpperCase()}</span>
            </div>
            <span className="text-brand-red font-bold text-xl mb-4">:</span>
            <div className="flex flex-col items-center">
              <div className="bg-cyber-navy border border-cyber-slate/80 text-theme-title font-extrabold text-xl w-12 h-12 rounded-lg flex items-center justify-center glow-red">
                {formatNumber(timeLeft.seconds)}
              </div>
              <span className="text-[10px] text-cyber-text-muted mt-1">{t('price_secs').toUpperCase()}</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`pricing-card flex flex-col justify-between border rounded-2xl p-6 sm:p-8 transition-all duration-300 relative text-left ${
                pkg.featured
                  ? 'bg-gradient-to-b from-cyber-charcoal to-cyber-navy border-brand-red scale-[1.03] shadow-xl shadow-brand-red/10 z-10'
                  : 'bg-cyber-charcoal/40 border-cyber-slate/50 hover:border-cyber-slate/80 hover:bg-cyber-charcoal/60 z-0'
              }`}
            >
              {/* Popular Badge */}
              {pkg.featured && pkg.badge && (
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-accent-gold text-cyber-navy text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  {pkg.badge}
                </span>
              )}

              {/* Package Header */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-cyber-text-muted block uppercase tracking-wider">{pkg.duration}</span>
                <h3 className="text-2xl font-extrabold text-theme-title">{pkg.name}</h3>
                <p className="text-xs text-cyber-text-sec leading-relaxed">{pkg.description}</p>
                
                {/* Price Display */}
                <div className="py-4 border-y border-cyber-slate/40 mt-2 space-y-1">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl sm:text-4xl font-black text-brand-red">{pkg.price}</span>
                    <span className="text-xs text-cyber-text-muted">{language === 'id' ? '/ paket' : '/ package'}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs text-cyber-text-muted line-through">
                    <span>{language === 'id' ? 'Normal:' : 'Original price:'} {pkg.originalPrice}</span>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-3 pt-4">
                  <span className="text-[11px] font-mono text-cyber-text-muted block uppercase">
                    {language === 'id' ? 'FASILITAS YANG DIDAPAT:' : 'BENEFITS INCLUDED:'}
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2.5 text-sm text-cyber-text-sec">
                        <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  id={`pricing-btn-${pkg.id}`}
                  onClick={() => handleSelect(pkg.id)}
                  className={`w-full py-3.5 rounded-xl font-bold transition-all duration-300 text-center cursor-pointer ${
                    pkg.featured
                      ? 'bg-brand-red text-white shadow-md hover:bg-brand-red-dark hover:shadow-brand-red/20 glow-red transform hover:-translate-y-0.5'
                      : 'bg-cyber-navy border border-cyber-slate text-cyber-text-sec hover:text-theme-title hover:bg-cyber-slate/40 hover:border-cyber-slate'
                  }`}
                >
                  {pkg.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Extras & Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto pt-4 text-left">
          
          {/* Group Promo */}
          <div className="bg-cyber-charcoal/40 border border-cyber-slate/40 p-6 rounded-xl flex items-start space-x-4">
            <div className="p-2.5 bg-accent-cyan/10 rounded-lg text-accent-cyan shrink-0">
              <Percent className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-theme-title text-base">
                {language === 'id' ? 'Diskon Grup (3+ Orang)' : 'Group Discount (3+ People)'}
              </h4>
              <p className="text-xs text-cyber-text-sec mt-1 leading-relaxed">
                {language === 'id'
                  ? 'Belajar bersama teman atau rekan kantor Anda. Dapatkan tambahan potongan harga 15% per paket untuk pendaftaran rombongan.'
                  : 'Learn together with colleagues or friends. Save an additional 15% per package for group registrations.'}
              </p>
            </div>
          </div>

          {/* Refund Guarantee */}
          <div className="bg-cyber-charcoal/40 border border-cyber-slate/40 p-6 rounded-xl flex items-start space-x-4">
            <div className="p-2.5 bg-accent-green/10 rounded-lg text-accent-green shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-theme-title text-base">30-Day Money-Back Guarantee</h4>
              <p className="text-xs text-cyber-text-sec mt-1 leading-relaxed">
                {language === 'id'
                  ? 'Garansi 30 hari tanpa risiko. Jika setelah mendaftar Anda merasa program ini tidak sesuai ekspektasi, ajukan refund penuh 100%. Kami kembalikan dana Anda tanpa berbelit-belit.'
                  : 'Risk-free 30 days guarantee. If you realize this course doesn\'t match your expectation, request a full 100% refund. We will return your payment with zero hassle.'}
              </p>
            </div>
          </div>

          {/* Flexible Payment */}
          <div className="bg-cyber-charcoal/40 border border-cyber-slate/40 p-6 rounded-xl flex items-start space-x-4">
            <div className="p-2.5 bg-brand-red/10 rounded-lg text-brand-red shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-theme-title text-base">
                {language === 'id' ? 'Cicilan Fleksibel 3x' : '3x Flexible Installments'}
              </h4>
              <p className="text-xs text-cyber-text-sec mt-1 leading-relaxed">
                {language === 'id'
                  ? 'Keringanan pembayaran khusus paket Standard dan Premium. Bisa dicicil hingga 3 kali pembayaran tanpa bunga tambahan.'
                  : 'Installment programs available for Standard and Premium tiers. Split your payment up to 3 times with zero added interest.'}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
