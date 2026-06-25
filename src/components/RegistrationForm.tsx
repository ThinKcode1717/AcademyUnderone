/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Mail, User, Phone, BookOpen, Clock, Send, Calendar, CheckSquare, Info } from 'lucide-react';
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
  const [background, setBackground] = useState('student');
  const [openClawExperience, setOpenClawExperience] = useState('Never heard of it');
  const [motivation, setMotivation] = useState('');
  const [preferredSchedule, setPreferredSchedule] = useState<string[]>([]);
  const [agreeToPrivacy, setAgreeToPrivacy] = useState(true);

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

    if (phone.trim()) {
      const phoneRegex = /^(?:\+62|62|0)8[1-9][0-9]{6,11}$/;
      if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
        tempErrors.phone = 'Masukkan nomor HP Indonesia yang valid (contoh: 081234567890).';
      }
    }

    if (!agreeToPrivacy) {
      tempErrors.agree = 'Anda harus menyetujui kebijakan privasi.';
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
        phone: phone || undefined,
        selectedPackage: formPackage,
        experienceLevel: openClawExperience, // maps openclaw experience directly
        background,
        openClawExperience,
        motivation,
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
    setBackground('student');
    setOpenClawExperience('Never heard of it');
    setMotivation('');
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
            Mulai Belajar OpenClaw Sekarang
          </h2>
          <p className="text-cyber-text-sec text-sm sm:text-base max-w-2xl mx-auto">
            Isi formulir singkat di bawah ini (hanya 1 menit). Konsultan pendaftaran kami akan segera menghubungi Anda untuk verifikasi dan panduan konsultasi awal gratis.
          </p>
        </div>

        {/* Success Screen */}
        {isSubmitted ? (
          <div className="bg-cyber-charcoal border border-accent-green/30 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-xl animate-fade-in relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/5 rounded-full blur-2xl"></div>
            
            <div className="w-16 h-16 bg-accent-green/10 border border-accent-green/30 text-accent-green rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <ShieldCheck className="w-10 h-10" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Selamat! Pendaftaran Anda Diterima</h3>
            
            <div className="max-w-md mx-auto space-y-3 bg-cyber-navy/50 p-6 rounded-xl border border-cyber-slate text-left">
              <span className="text-xs font-mono text-cyber-text-muted block uppercase tracking-wider">RINGKASAN PENDAFTARAN:</span>
              <div className="text-sm space-y-1.5">
                <p className="text-cyber-text-sec">
                  <strong className="text-white">Nama Lengkap:</strong> {fullName}
                </p>
                <p className="text-cyber-text-sec">
                  <strong className="text-white">Email Aktif:</strong> {email}
                </p>
                <p className="text-cyber-text-sec">
                  <strong className="text-white">Paket Belajar:</strong>{' '}
                  <span className="text-brand-red font-bold uppercase">{formPackage}</span>
                </p>
                <p className="text-cyber-text-sec">
                  <strong className="text-white">Latar Belakang:</strong> <span className="capitalize">{background}</span>
                </p>
              </div>
            </div>

            <p className="text-cyber-text-sec text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              Tim pendaftaran OpenClaw Academy akan segera menghubungi Anda dalam waktu maksimal 24 jam melalui email atau WhatsApp untuk proses aktivasi dan panduan login kelas perdana Anda.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                id="success-wa-btn"
                href={`https://wa.me/6281234567890?text=Halo%20OpenClaw%20Academy%2C%20saya%20${encodeURIComponent(fullName)}%20baru%20saja%20mendaftar%20untuk%20paket%20${formPackage}.%20Bisa%20bantu%20langkah%20selanjutnya%3F`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-accent-green hover:bg-green-600 text-cyber-navy font-bold text-sm w-full sm:w-auto text-center cursor-pointer transition-all"
              >
                Hubungi via WhatsApp (Instan)
              </a>
              <button
                id="success-reset-btn"
                onClick={handleReset}
                className="px-6 py-3.5 rounded-xl border border-cyber-slate hover:border-cyber-text-muted text-cyber-text-sec text-sm w-full sm:w-auto cursor-pointer"
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
                    Nomor WhatsApp <span className="text-cyber-text-muted text-xs">(Opsional)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyber-text-muted">
                      <Phone className="w-5 h-5" />
                    </span>
                    <input
                      id="reg-phone"
                      type="tel"
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
                    Pilih Paket Belajar <span className="text-brand-red">*</span>
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
                      <option value="starter">Starter Package (Rp 699.000) - Cocok untuk budget</option>
                      <option value="standard">Standard Package (Rp 1.499.000) - Terpopuler</option>
                      <option value="premium">Premium Package (Rp 2.299.000) - Semua Akses</option>
                    </select>
                  </div>
                </div>

                {/* Current Role/Background Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="reg-background" className="block text-sm font-semibold text-white">
                    Latar Belakang Saat Ini <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyber-text-muted">
                      <User className="w-5 h-5" />
                    </span>
                    <select
                      id="reg-background"
                      value={background}
                      onChange={(e) => setBackground(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-cyber-slate bg-cyber-navy text-white text-sm focus:outline-none focus:border-brand-red transition appearance-none"
                    >
                      <option value="student">Pelajar / Mahasiswa (IT / Non-IT)</option>
                      <option value="professional">Karyawan / Profesional Bekerja</option>
                      <option value="self-taught">Pecinta Belajar Otodidak (Self-taught)</option>
                      <option value="career-changer">Ingin Beralih Karir (Career Changer)</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>
                </div>

                {/* OpenClaw Experience Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="reg-experience" className="block text-sm font-semibold text-white">
                    Pengalaman dengan OpenClaw <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyber-text-muted">
                      <Calendar className="w-5 h-5" />
                    </span>
                    <select
                      id="reg-experience"
                      value={openClawExperience}
                      onChange={(e) => setOpenClawExperience(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-cyber-slate bg-cyber-navy text-white text-sm focus:outline-none focus:border-brand-red transition appearance-none"
                    >
                      <option value="Never heard of it">Belum pernah mendengar sama sekali</option>
                      <option value="Heard about it, curious">Pernah mendengar & sangat penasaran</option>
                      <option value="Tried briefly">Pernah mencoba sekilas sebelumnya</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Motivation / Why interested */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="reg-motivation" className="block text-sm font-semibold text-white">
                    Mengapa Anda Tertarik Belajar? <span className="text-cyber-text-muted text-xs">(Opsional)</span>
                  </label>
                  <span className="text-[10px] text-cyber-text-muted font-mono">{motivation.length}/200 karakter</span>
                </div>
                <textarea
                  id="reg-motivation"
                  maxLength={200}
                  placeholder="Contoh: Ingin beralih karir ke bidang keamanan digital atau ingin mempelajari hal baru yang seru."
                  value={motivation}
                  onChange={(e) => setMotivation(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-cyber-slate bg-cyber-navy text-white text-sm focus:outline-none focus:border-brand-red transition h-20 resize-y"
                ></textarea>
              </div>

              {/* Preferred schedule checklists */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-white">
                  Pilihan Waktu Belajar yang Diinginkan:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className="flex items-center space-x-3 bg-cyber-navy p-3.5 rounded-lg border border-cyber-slate/60 hover:border-cyber-slate cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={preferredSchedule.includes('malam')}
                      onChange={() => handleScheduleChange('malam')}
                      className="accent-brand-red w-4 h-4"
                    />
                    <div className="text-left">
                      <span className="text-xs font-bold text-white block">Malam Hari (Workdays)</span>
                      <span className="text-[9px] text-cyber-text-sec block mt-0.5">Senin - Rabu Malam</span>
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
                      <span className="text-xs font-bold text-white block">Akhir Pekan (Weekend)</span>
                      <span className="text-[9px] text-cyber-text-sec block mt-0.5">Sabtu / Minggu</span>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 bg-cyber-navy p-3.5 rounded-lg border border-cyber-slate/60 hover:border-cyber-slate cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={preferredSchedule.includes('fleksibel')}
                      onChange={() => handleScheduleChange('fleksibel')}
                      className="accent-brand-red w-4 h-4"
                    />
                    <div className="text-left">
                      <span className="text-xs font-bold text-white block">Fleksibel (Kapan saja)</span>
                      <span className="text-[9px] text-cyber-text-sec block mt-0.5">Menyesuaikan jadwal</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Checkbox Privacy Policy */}
              <div className="pt-4 border-t border-cyber-slate/40 text-xs text-cyber-text-sec space-y-4">
                <label className="flex items-start space-x-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreeToPrivacy}
                    onChange={() => setAgreeToPrivacy(!agreeToPrivacy)}
                    className="accent-brand-red w-4 h-4 mt-0.5"
                  />
                  <span>
                    Saya setuju dengan syarat & ketentuan serta kebijakan privasi OpenClaw Academy. Kami berjanji tidak akan menyepam email Anda.
                  </span>
                </label>
                {errors.agree && <span className="text-xs text-brand-red block">{errors.agree}</span>}

                <button
                  id="reg-submit-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-bold bg-brand-red hover:bg-brand-red-dark text-white transition-all duration-300 shadow-md hover:shadow-brand-red/25 glow-red flex items-center justify-center space-x-2 text-base cursor-pointer disabled:bg-cyber-slate disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  <span>{loading ? 'Memproses Pendaftaran...' : 'Daftar Sekarang - Gratis Konsultasi'}</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
}
