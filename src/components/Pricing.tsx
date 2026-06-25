/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck, Percent, HelpCircle, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { PackageType } from '../types';

interface PricingProps {
  onSelectPackage: (pkg: PackageType) => void;
}

export default function Pricing({ onSelectPackage }: PricingProps) {
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
      name: 'Starter Package',
      price: 'Rp 699.000',
      originalPrice: 'Rp 999.000',
      duration: '4 Minggu Pelatihan',
      description: 'Dibuat khusus untuk budget-conscious. Belajar mandiri dengan dukungan komunitas terpercaya.',
      features: [
        'Akses Materi Utama 4 Minggu',
        'Akses Shared Sandbox Environment',
        'Dukungan Forum Komunitas',
        '2x per Minggu Group Q&A Session',
        'Sertifikat Kelulusan Resmi',
        'Sangat Pas Untuk Pemula Murni'
      ],
      cta: 'Pilih Paket Starter',
      featured: false,
    },
    {
      id: 'standard' as PackageType,
      name: 'Standard Package',
      price: 'Rp 1.499.000',
      originalPrice: 'Rp 1.999.000',
      duration: '4 Minggu + 2 Bulan Akses',
      description: 'Rekomendasi terbaik bagi kebanyakan siswa. Dapatkan bimbingan privat agar belajar lebih terarah.',
      features: [
        'Semua Fitur Paket Starter',
        'Tambahan 2 Bulan Akses Portal',
        'Akses Laboratorium Private Sandbox',
        'Dukungan Layanan Priority Support',
        '1x per Bulan Sesi Mentoring 1-on-1',
        'Review Resume & Profil LinkedIn',
        '81% Siswa Memilih Paket Ini'
      ],
      cta: 'Pilih Paket Standard',
      featured: true,
      badge: 'MOST POPULAR',
    },
    {
      id: 'premium' as PackageType,
      name: 'Premium Package',
      price: 'Rp 2.299.000',
      originalPrice: 'Rp 2.999.000',
      duration: '4 Minggu + 6 Bulan Akses',
      description: 'Akses tanpa batas (all-access) untuk kesiapan penuh terjun di industri keamanan siber.',
      features: [
        'Semua Fitur Paket Standard',
        'Tambahan 6 Bulan Akses Portal',
        'Akses Laboratorium Premium Sandbox',
        'Dukungan Layanan VIP 24/7',
        '2x per Bulan Sesi Mentoring 1-on-1',
        'Akses Prioritas Update Modul Baru',
        'Program Penyaluran Portofolio Prioritas'
      ],
      cta: 'Pilih Paket Premium',
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
            <span>Investasi Masa Depan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Pilihan Paket Pelatihan & Investasi
          </h2>
          <p className="text-cyber-text-sec text-base sm:text-lg">
            Investasikan karir Anda dengan transparansi harga tanpa biaya tersembunyi. Tersedia opsi pembayaran bertahap dan diskon khusus.
          </p>
        </div>

        {/* Urgent Countdown Timer Box */}
        <div className="max-w-2xl mx-auto mb-12 bg-brand-red/10 border border-brand-red/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4 text-left">
            <div className="p-3 bg-brand-red/20 rounded-xl text-brand-red">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="font-mono text-xs text-brand-red-light block font-semibold uppercase tracking-wider">DISCOUNT EARLY BIRD 20%</span>
              <h4 className="font-bold text-white text-base">Kuota Terbatas untuk Batch Baru</h4>
              <p className="text-xs text-cyber-text-sec">Diskon otomatis aktif saat melakukan checkout pendaftaran.</p>
            </div>
          </div>
          
          {/* Timer Display */}
          <div className="flex items-center space-x-2.5 font-mono">
            <div className="flex flex-col items-center">
              <div className="bg-cyber-navy border border-cyber-slate/80 text-white font-extrabold text-xl w-12 h-12 rounded-lg flex items-center justify-center glow-red">
                {formatNumber(timeLeft.hours)}
              </div>
              <span className="text-[10px] text-cyber-text-muted mt-1">JAM</span>
            </div>
            <span className="text-brand-red font-bold text-xl mb-4">:</span>
            <div className="flex flex-col items-center">
              <div className="bg-cyber-navy border border-cyber-slate/80 text-white font-extrabold text-xl w-12 h-12 rounded-lg flex items-center justify-center glow-red">
                {formatNumber(timeLeft.minutes)}
              </div>
              <span className="text-[10px] text-cyber-text-muted mt-1">MENIT</span>
            </div>
            <span className="text-brand-red font-bold text-xl mb-4">:</span>
            <div className="flex flex-col items-center">
              <div className="bg-cyber-navy border border-cyber-slate/80 text-white font-extrabold text-xl w-12 h-12 rounded-lg flex items-center justify-center glow-red">
                {formatNumber(timeLeft.seconds)}
              </div>
              <span className="text-[10px] text-cyber-text-muted mt-1">DETIK</span>
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
                <h3 className="text-2xl font-extrabold text-white">{pkg.name}</h3>
                <p className="text-xs text-cyber-text-sec leading-relaxed">{pkg.description}</p>
                
                {/* Price Display */}
                <div className="py-4 border-y border-cyber-slate/40 mt-2 space-y-1">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl sm:text-4xl font-black text-brand-red">{pkg.price}</span>
                    <span className="text-xs text-cyber-text-muted">/ paket</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs text-cyber-text-muted line-through">
                    <span>Normal: {pkg.originalPrice}</span>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-3 pt-4">
                  <span className="text-[11px] font-mono text-cyber-text-muted block uppercase">FASILITAS YANG DIDAPAT:</span>
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
                      : 'bg-cyber-navy border border-cyber-slate text-cyber-text-sec hover:text-white hover:bg-cyber-slate/40 hover:border-cyber-slate'
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
              <h4 className="font-bold text-white text-base">Diskon Grup (3+ Orang)</h4>
              <p className="text-xs text-cyber-text-sec mt-1 leading-relaxed">
                Belajar bersama teman atau rekan kantor Anda. Dapatkan tambahan <strong className="text-accent-cyan font-semibold">potongan harga 15% per paket</strong> untuk pendaftaran rombongan.
              </p>
            </div>
          </div>

          {/* Refund Guarantee */}
          <div className="bg-cyber-charcoal/40 border border-cyber-slate/40 p-6 rounded-xl flex items-start space-x-4">
            <div className="p-2.5 bg-accent-green/10 rounded-lg text-accent-green shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">30-Day Money-Back Guarantee</h4>
              <p className="text-xs text-cyber-text-sec mt-1 leading-relaxed">
                Garansi 30 hari tanpa risiko. Jika setelah mendaftar Anda merasa program ini tidak sesuai ekspektasi, ajukan refund penuh 100%. Kami kembalikan dana Anda tanpa berbelit-belit.
              </p>
            </div>
          </div>

          {/* Flexible Payment */}
          <div className="bg-cyber-charcoal/40 border border-cyber-slate/40 p-6 rounded-xl flex items-start space-x-4">
            <div className="p-2.5 bg-brand-red/10 rounded-lg text-brand-red shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Cicilan Fleksibel 3x</h4>
              <p className="text-xs text-cyber-text-sec mt-1 leading-relaxed">
                Keringanan pembayaran khusus paket <strong className="text-brand-red-light font-semibold">Standard</strong> dan <strong className="text-brand-red-light font-semibold">Premium</strong>. Bisa dicicil hingga 3 kali pembayaran tanpa bunga tambahan.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
