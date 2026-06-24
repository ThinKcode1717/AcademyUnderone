/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Mail, User, Phone, Linkedin, BookOpen, Clock, Send, Calendar } from 'lucide-react';
import { PackageType, Registration } from '../types';

interface RegistrationFormProps {
  selectedPackage: PackageType;
  setSelectedPackage: (pkg: PackageType) => void;
  onNewRegistration: (reg: Registration) => void;
}

export default function RegistrationForm({
  selectedPackage,
  setSelectedPackage,
  onNewRegistration,
}: RegistrationFormProps) {
  // Form values state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('beginner');
  const [motivation, setMotivation] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [preferredSchedule, setPreferredSchedule] = useState<string[]>([]);

  // Errors state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync selected package from parent prop
  const [formPackage, setFormPackage] = useState<PackageType>(selectedPackage);
  useEffect(() => {
    setFormPackage(selectedPackage);
  }, [selectedPackage]);

  // Handle schedule checkboxes
  const handleScheduleChange = (schedule: string) => {
    if (preferredSchedule.includes(schedule)) {
      setPreferredSchedule(preferredSchedule.filter((s) => s !== schedule));
    } else {
      setPreferredSchedule([...preferredSchedule, schedule]);
    }
  };

  // Validation
  const validateForm = () => {
    const tempErrors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 3) {
      tempErrors.fullName = 'Nama lengkap minimal 3 karakter.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      tempErrors.email = 'Masukkan format email yang valid.';
    }

    const phoneRegex = /^(?:\+62|62|0)8[1-9][0-9]{6,11}$/;
    if (!phone.trim() || !phoneRegex.test(phone.replace(/\s+/g, ''))) {
      tempErrors.phone = 'Masukkan nomor HP Indonesia yang valid (contoh: 081234567890).';
    }

    if (linkedIn.trim() && !linkedIn.toLowerCase().includes('linkedin.com/')) {
      tempErrors.linkedIn = 'Masukkan URL profil LinkedIn yang valid.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Simulate submission delay
    setTimeout(() => {
      const newReg: Registration = {
        id: Math.random().toString(36).substring(2, 9),
        fullName,
        email,
        phone,
        selectedPackage: formPackage,
        experienceLevel,
        motivation,
        linkedIn: linkedIn || undefined,
        preferredSchedule,
        submittedAt: new Date().toISOString(),
      };

      // Call callback to store in global/localStorage
      onNewRegistration(newReg);

      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  // Reset form
  const handleReset = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setExperienceLevel('beginner');
    setMotivation('');
    setLinkedIn('');
    setPreferredSchedule([]);
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="registrasi" className="py-20 relative bg-cyber-charcoal/20">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-50 z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-full text-xs font-mono text-brand-red uppercase tracking-wider">
            <span>Formulir Pendaftaran</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Amankan Slot Kursus Anda Sekarang
          </h2>
          <p className="text-cyber-text-sec text-sm sm:text-base max-w-2xl mx-auto">
            Isi formulir pendaftaran di bawah ini. Konsultan pendaftaran kami akan menghubungi Anda melalui WhatsApp atau email dalam waktu 24 jam untuk verifikasi & konsultasi gratis.
          </p>
        </div>

        {/* Success Screen */}
        {isSubmitted ? (
          <div className="bg-cyber-charcoal border border-accent-green/30 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-xl animate-fade-in relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/5 rounded-full blur-2xl"></div>
            
            <div className="w-16 h-16 bg-accent-green/10 border border-accent-green/30 text-accent-green rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <ShieldCheck className="w-10 h-10" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Pendaftaran Berhasil!</h3>
            
            <div className="max-w-md mx-auto space-y-3 bg-cyber-navy/50 p-6 rounded-xl border border-cyber-slate text-left">
              <span className="text-xs font-mono text-cyber-text-muted block uppercase tracking-wider">RINGKASAN PENDAFTARAN:</span>
              <div className="text-sm space-y-1.5">
                <p className="text-cyber-text-sec">
                  <strong className="text-white">Nama:</strong> {fullName}
                </p>
                <p className="text-cyber-text-sec">
                  <strong className="text-white">Email:</strong> {email}
                </p>
                <p className="text-cyber-text-sec">
                  <strong className="text-white">Paket Terpilih:</strong>{' '}
                  <span className="text-brand-red font-bold uppercase">{formPackage}</span>
                </p>
              </div>
            </div>

            <p className="text-cyber-text-sec text-sm sm:text-base max-w-lg mx-auto">
              Terima kasih telah mendaftar di OpenClaw Academy. Email konfirmasi telah dikirimkan secara otomatis. Tim konsultan kami akan segera menghubungi nomor WhatsApp Anda (<strong className="text-white">{phone}</strong>) untuk menjadwalkan konsultasi awal gratis.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                id="success-wa-btn"
                href={`https://wa.me/6281234567890?text=Halo%20OpenClaw%20Academy%2C%20saya%20sudah%20mengisi%20pendaftaran%20untuk%20paket%20${formPackage}.%20Bisa%20bantu%20langkah%20selanjutnya%3F`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-accent-green hover:bg-green-600 text-cyber-navy font-bold text-sm w-full sm:w-auto text-center"
              >
                Hubungi via WhatsApp (Instan)
              </a>
              <button
                id="success-reset-btn"
                onClick={handleReset}
                className="px-6 py-3.5 rounded-xl border border-cyber-slate hover:border-cyber-text-muted text-cyber-text-sec text-sm w-full sm:w-auto"
              >
                Daftar Peserta Lain
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <div className="bg-cyber-charcoal border border-cyber-slate/80 rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="reg-name" className="block text-sm font-semibold text-white">
                    Nama Lengkap <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyber-text-muted">
                      <User className="w-5 h-5" />
                    </span>
                    <input
                      id="reg-name"
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-cyber-navy text-white text-sm focus:outline-none focus:border-brand-red transition ${
                        errors.fullName ? 'border-brand-red/80' : 'border-cyber-slate'
                      }`}
                    />
                  </div>
                  {errors.fullName && <span className="text-xs text-brand-red block">{errors.fullName}</span>}
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="reg-email" className="block text-sm font-semibold text-white">
                    Alamat Email <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyber-text-muted">
                      <Mail className="w-5 h-5" />
                    </span>
                    <input
                      id="reg-email"
                      type="email"
                      required
                      placeholder="budi@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-cyber-navy text-white text-sm focus:outline-none focus:border-brand-red transition ${
                        errors.email ? 'border-brand-red/80' : 'border-cyber-slate'
                      }`}
                    />
                  </div>
                  {errors.email && <span className="text-xs text-brand-red block">{errors.email}</span>}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="reg-phone" className="block text-sm font-semibold text-white">
                    Nomor WhatsApp <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyber-text-muted">
                      <Phone className="w-5 h-5" />
                    </span>
                    <input
                      id="reg-phone"
                      type="tel"
                      required
                      placeholder="Contoh: 081234567890"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-cyber-navy text-white text-sm focus:outline-none focus:border-brand-red transition ${
                        errors.phone ? 'border-brand-red/80' : 'border-cyber-slate'
                      }`}
                    />
                  </div>
                  {errors.phone && <span className="text-xs text-brand-red block">{errors.phone}</span>}
                </div>

                {/* Selected Package Tier */}
                <div className="space-y-2">
                  <label htmlFor="reg-package" className="block text-sm font-semibold text-white">
                    Pilih Paket Pelatihan <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyber-text-muted">
                      <BookOpen className="w-5 h-5" />
                    </span>
                    <select
                      id="reg-package"
                      value={formPackage}
                      onChange={(e) => {
                        setFormPackage(e.target.value as PackageType);
                        setSelectedPackage(e.target.value as PackageType);
                      }}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-cyber-slate bg-cyber-navy text-white text-sm focus:outline-none focus:border-brand-red transition appearance-none"
                    >
                      <option value="starter">Starter Package (Rp 1.500.000)</option>
                      <option value="professional">Professional Package (Rp 2.999.000) - Populer</option>
                      <option value="elite">Elite Cyber Specialist (Rp 4.499.000)</option>
                    </select>
                  </div>
                </div>

                {/* Experience / IT Background */}
                <div className="space-y-2">
                  <label htmlFor="reg-background" className="block text-sm font-semibold text-white">
                    Latar Belakang / Level IT <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyber-text-muted">
                      <Clock className="w-5 h-5" />
                    </span>
                    <select
                      id="reg-background"
                      value={experienceLevel}
                      onChange={(e) => setExperienceLevel(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-cyber-slate bg-cyber-navy text-white text-sm focus:outline-none focus:border-brand-red transition appearance-none"
                    >
                      <option value="beginner">Pemula Mutlak (Absolute Beginner / Non-IT)</option>
                      <option value="some-it">Memiliki Sedikit Pengetahuan Dasar IT</option>
                      <option value="basic-networking">Memahami Dasar Jaringan Komputer & Linux</option>
                    </select>
                  </div>
                </div>

                {/* LinkedIn Profile (Optional) */}
                <div className="space-y-2">
                  <label htmlFor="reg-linkedin" className="block text-sm font-semibold text-white">
                    URL Profil LinkedIn <span className="text-cyber-text-muted text-xs">(Opsional)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyber-text-muted">
                      <Linkedin className="w-5 h-5" />
                    </span>
                    <input
                      id="reg-linkedin"
                      type="text"
                      placeholder="https://linkedin.com/in/nama-anda"
                      value={linkedIn}
                      onChange={(e) => setLinkedIn(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-cyber-navy text-white text-sm focus:outline-none focus:border-brand-red transition ${
                        errors.linkedIn ? 'border-brand-red/80' : 'border-cyber-slate'
                      }`}
                    />
                  </div>
                  {errors.linkedIn && <span className="text-xs text-brand-red block">{errors.linkedIn}</span>}
                </div>

              </div>

              {/* Motivation text area */}
              <div className="space-y-2">
                <label htmlFor="reg-motivation" className="block text-sm font-semibold text-white">
                  Motivasi Mengikuti Pelatihan <span className="text-cyber-text-muted text-xs">(Opsional)</span>
                </label>
                <textarea
                  id="reg-motivation"
                  maxLength={500}
                  placeholder="Ceritakan singkat tujuan karir Anda atau apa yang ingin dicapai setelah lulus (maksimal 500 karakter)..."
                  value={motivation}
                  onChange={(e) => setMotivation(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-cyber-slate bg-cyber-navy text-white text-sm focus:outline-none focus:border-brand-red transition h-28 resize-y"
                ></textarea>
              </div>

              {/* Preferred schedule checklists */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-white">
                  Jadwal Mentoring Kelas yang Anda Preferensikan:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center space-x-3 bg-cyber-navy p-3.5 rounded-lg border border-cyber-slate/60 hover:border-cyber-slate cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={preferredSchedule.includes('malam')}
                      onChange={() => handleScheduleChange('malam')}
                      className="accent-brand-red w-4 h-4"
                    />
                    <div className="text-left">
                      <span className="text-xs font-bold text-white block">Hari Kerja Malam (Weekday Evenings)</span>
                      <span className="text-[10px] text-cyber-text-sec block mt-0.5">Senin - Rabu, 19:00 - 21:30 WIB</span>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 bg-cyber-navy p-3.5 rounded-lg border border-cyber-slate/60 hover:border-cyber-slate cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={preferredSchedule.includes('weekend')}
                      onChange={() => handleScheduleChange('weekend')}
                      className="accent-brand-red w-4 h-4"
                    />
                    <div className="text-left">
                      <span className="text-xs font-bold text-white block">Akhir Pekan (Weekend Sesi)</span>
                      <span className="text-[10px] text-cyber-text-sec block mt-0.5">Sabtu atau Minggu, 09:30 - 15:00 WIB</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* GDPR and submission notice */}
              <div className="pt-4 border-t border-cyber-slate/40 text-xs text-cyber-text-sec space-y-4">
                <p>
                  Dengan menekan tombol kirim di bawah, Anda menyetujui bahwa data Anda akan disimpan secara aman di sistem pendaftaran OpenClaw Academy dan didukung sepenuhnya oleh FEDUCATION sesuai dengan Kebijakan Privasi data kami.
                </p>
                
                <button
                  id="reg-submit-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-bold bg-brand-red hover:bg-brand-red-dark text-white transition-all duration-300 shadow-md hover:shadow-brand-red/25 glow-red flex items-center justify-center space-x-2 text-base cursor-pointer disabled:bg-cyber-slate disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  <span>{loading ? 'Mengirim Pendaftaran...' : 'Kirim Pendaftaran & Jadwalkan Konsultasi'}</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
}
