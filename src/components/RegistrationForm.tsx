/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Mail, User, Phone, BookOpen, Clock, Send, Calendar, CheckSquare, Info } from 'lucide-react';
import { PackageType, Registration } from '../types';
import { useApp } from '../context/AppContext';

// =========================================================================
// PANDUAN INTEGRASI GOOGLE SHEETS / GOOGLE FORMS
// =========================================================================
// Anda bisa mengirimkan data pendaftaran di form ini secara otomatis ke Google Sheets
// atau Google Forms dengan mengisi variabel di bawah ini.
//
// PILIHAN A: INTEGRASI GOOGLE SHEETS (Via Google Apps Script Web App)
// -------------------------------------------------------------------------
// 1. Buka Google Sheets Anda -> Klik "Extensions" -> "Apps Script".
// 2. Buat fungsi doPost(e) sederhana untuk menyimpan JSON pendaftaran ke baris baru.
// 3. Deploy sebagai "Web App", Atur Akses (Who has access) ke "Anyone" (Siapa saja).
// 4. Salin URL Web App yang didapat dan paste ke GOOGLE_SHEET_WEBHOOK_URL di bawah.
//
// PILIHAN B: INTEGRASI GOOGLE FORMS (Mengirim data langsung ke Google Form)
// -------------------------------------------------------------------------
// 1. Buat Google Form dengan pertanyaan yang sesuai dengan form ini.
// 2. Salin Link Kirim Form Response (ganti /viewform di akhir link menjadi /formResponse).
// 3. Cari name="entry.xxxxxx" untuk masing-masing field di Google Form Anda (bisa didapatkan dengan inspect element).
// 4. Atur USE_GOOGLE_FORM ke true, masukkan URL dan sesuaikan Entry IDs di bawah ini.
// =========================================================================
export const REGISTRATION_INTEGRATION_CONFIG = {
  // Pilihan A: Google Sheets Webhook
  GOOGLE_SHEET_WEBHOOK_URL: '', // Contoh: 'https://script.google.com/macros/s/AKfycb.../exec'

  // Pilihan B: Google Forms Direct POST
  USE_GOOGLE_FORM: true, 
  GOOGLE_FORM_SUBMIT_URL: 'https://docs.google.com/forms/d/e/1FAIpQLSfQFaUJ0YtmyEpc3PHGL1KNXt47p6MgSaihTikBKIEnW8T_9Q/formResponse',
  GOOGLE_FORM_ENTRY_IDS: {
    fullName: 'entry.1665580814',  // ID input Nama Lengkap
    email: 'entry.663288318',     // ID input Email
    phone: 'entry.1736110717',     // ID input WhatsApp / Telepon
    selectedPackage: 'entry.1898486387', // ID input Paket Belajar
    background: 'entry.1853173003', // ID input Latar Belakang
    openClawExperience: 'entry.2073854927', // ID input Pengalaman OpenClaw
    motivation: 'entry.109604537', // ID input Motivasi Belajar
    preferredSchedule: 'entry.924376046', // ID input Jadwal Pilihan
  }
};

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
  const { language } = useApp();

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
      tempErrors.fullName = language === 'id' 
        ? 'Nama lengkap minimal 3 karakter.' 
        : 'Full name must be at least 3 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      tempErrors.email = language === 'id'
        ? 'Masukkan format email yang valid.'
        : 'Please enter a valid email address.';
    }

    if (phone.trim()) {
      // Basic phone check
      const cleanPhone = phone.replace(/\s+/g, '');
      if (cleanPhone.length < 8 || cleanPhone.length > 15) {
        tempErrors.phone = language === 'id'
          ? 'Masukkan nomor telepon yang valid.'
          : 'Please enter a valid phone number.';
      }
    }

    if (!agreeToPrivacy) {
      tempErrors.agree = language === 'id'
        ? 'Anda harus menyetujui kebijakan privasi.'
        : 'You must agree to the privacy policy.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const newReg: Registration = {
      id: Math.random().toString(36).substring(2, 9),
      fullName,
      email,
      phone: phone || undefined,
      selectedPackage: formPackage,
      experienceLevel: openClawExperience,
      background,
      openClawExperience,
      motivation,
      preferredSchedule,
      submittedAt: new Date().toISOString(),
    };

    // 1. Pilihan A: Integrasi Google Sheets (POST ke Apps Script Web App)
    if (REGISTRATION_INTEGRATION_CONFIG.GOOGLE_SHEET_WEBHOOK_URL) {
      try {
        await fetch(REGISTRATION_INTEGRATION_CONFIG.GOOGLE_SHEET_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors', // Mencegah pemblokiran CORS dari browser ke Google Apps Script
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newReg),
        });
        console.log('Successfully posted data to Google Sheets script');
      } catch (err) {
        console.error('Error posting to Google Sheets script:', err);
      }
    }

    // 2. Pilihan B: Integrasi Google Forms (Direct POST ke formResponse)
    if (REGISTRATION_INTEGRATION_CONFIG.USE_GOOGLE_FORM && REGISTRATION_INTEGRATION_CONFIG.GOOGLE_FORM_SUBMIT_URL) {
      try {
        const formData = new URLSearchParams();
        formData.append(REGISTRATION_INTEGRATION_CONFIG.GOOGLE_FORM_ENTRY_IDS.fullName, fullName);
        formData.append(REGISTRATION_INTEGRATION_CONFIG.GOOGLE_FORM_ENTRY_IDS.email, email);
        formData.append(REGISTRATION_INTEGRATION_CONFIG.GOOGLE_FORM_ENTRY_IDS.phone, phone);
        formData.append(REGISTRATION_INTEGRATION_CONFIG.GOOGLE_FORM_ENTRY_IDS.selectedPackage, formPackage);
        formData.append(REGISTRATION_INTEGRATION_CONFIG.GOOGLE_FORM_ENTRY_IDS.background, background);
        formData.append(REGISTRATION_INTEGRATION_CONFIG.GOOGLE_FORM_ENTRY_IDS.openClawExperience, openClawExperience);
        formData.append(REGISTRATION_INTEGRATION_CONFIG.GOOGLE_FORM_ENTRY_IDS.motivation, motivation);
        formData.append(REGISTRATION_INTEGRATION_CONFIG.GOOGLE_FORM_ENTRY_IDS.preferredSchedule, preferredSchedule.join(', '));

        await fetch(REGISTRATION_INTEGRATION_CONFIG.GOOGLE_FORM_SUBMIT_URL, {
          method: 'POST',
          mode: 'no-cors', // Mencegah pemblokiran CORS dari browser ke Google Forms
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
        });
        console.log('Successfully posted data to Google Forms');
      } catch (err) {
        console.error('Error posting to Google Forms:', err);
      }
    }

    // Call local callback to sync state (still useful for local testing or immediate preview)
    onNewRegistration(newReg);

    setLoading(false);
    setIsSubmitted(true);
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

  const getWaLink = () => {
    const textId = `Halo OpenClaw Academy, saya ${fullName} baru saja mendaftar untuk paket ${formPackage}. Bisa bantu langkah selanjutnya?`;
    const textEn = `Hello OpenClaw Academy, I am ${fullName} and I just registered for the ${formPackage} plan. Can you help me with the next steps?`;
    return `https://wa.me/6285119551741?text=${encodeURIComponent(language === 'id' ? textId : textEn)}`;
  };

  return (
    <section id="registrasi" className="py-20 relative bg-cyber-charcoal/20">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-50 z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-full text-xs font-mono text-brand-red uppercase tracking-wider">
            <span>{language === 'id' ? 'Formulir Pendaftaran' : 'Registration Form'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-theme-title">
            {language === 'id' ? 'Mulai Belajar OpenClaw Sekarang' : 'Start Learning OpenClaw Today'}
          </h2>
          <p className="text-cyber-text-sec text-sm sm:text-base max-w-2xl mx-auto">
            {language === 'id'
              ? 'Isi formulir singkat di bawah ini (hanya 1 menit). Konsultan pendaftaran kami akan segera menghubungi Anda untuk verifikasi dan panduan konsultasi awal gratis.'
              : 'Fill in the short form below (takes only 1 minute). Our student advisor will contact you shortly for registration verification and a free consultation.'}
          </p>
        </div>

        {/* Success Screen */}
        {isSubmitted ? (
          <div className="bg-cyber-charcoal border border-accent-green/30 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-xl animate-fade-in relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/5 rounded-full blur-2xl"></div>
            
            <div className="w-16 h-16 bg-accent-green/10 border border-accent-green/30 text-accent-green rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <ShieldCheck className="w-10 h-10" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-theme-title text-center">
              {language === 'id' ? 'Selamat! Pendaftaran Anda Diterima' : 'Congratulations! Registration Received'}
            </h3>
            
            <div className="max-w-md mx-auto space-y-3 bg-cyber-navy/50 p-6 rounded-xl border border-cyber-slate">
              <span className="text-xs font-mono text-cyber-text-muted block uppercase tracking-wider">
                {language === 'id' ? 'RINGKASAN PENDAFTARAN:' : 'REGISTRATION SUMMARY:'}
              </span>
              <div className="text-sm space-y-1.5">
                <p className="text-cyber-text-sec">
                  <strong className="text-theme-title">{language === 'id' ? 'Nama Lengkap:' : 'Full Name:'}</strong> {fullName}
                </p>
                <p className="text-cyber-text-sec">
                  <strong className="text-theme-title">Email:</strong> {email}
                </p>
                <p className="text-cyber-text-sec">
                  <strong className="text-theme-title">{language === 'id' ? 'Paket Belajar:' : 'Learning Plan:'}</strong>{' '}
                  <span className="text-brand-red font-bold uppercase">{formPackage}</span>
                </p>
                <p className="text-cyber-text-sec">
                  <strong className="text-theme-title">{language === 'id' ? 'Latar Belakang:' : 'Background:'}</strong>{' '}
                  <span className="capitalize">{background}</span>
                </p>
              </div>
            </div>

            <p className="text-cyber-text-sec text-sm sm:text-base max-w-lg mx-auto leading-relaxed text-center">
              {language === 'id'
                ? 'Tim pendaftaran OpenClaw Academy akan segera menghubungi Anda dalam waktu maksimal 24 jam melalui email atau WhatsApp untuk proses aktivasi dan panduan login kelas perdana Anda.'
                : 'Our OpenClaw Academy coordinators will contact you within 24 hours via email or WhatsApp to set up sandbox access keys and your onboarding session.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                id="success-wa-btn"
                href={getWaLink()}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-accent-green hover:bg-green-600 text-cyber-navy font-bold text-sm w-full sm:w-auto text-center cursor-pointer transition-all"
              >
                {language === 'id' ? 'Hubungi via WhatsApp (Instan)' : 'Contact via WhatsApp (Instant)'}
              </a>
              <button
                id="success-reset-btn"
                onClick={handleReset}
                className="px-6 py-3.5 rounded-xl border border-cyber-slate hover:border-cyber-text-muted text-cyber-text-sec text-sm w-full sm:w-auto cursor-pointer"
              >
                {language === 'id' ? 'Daftar Peserta Lain' : 'Register Another Account'}
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
                  <label htmlFor="reg-name" className="block text-sm font-semibold text-theme-title">
                    {language === 'id' ? 'Nama Lengkap' : 'Full Name'} <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyber-text-muted">
                      <User className="w-5 h-5" />
                    </span>
                    <input
                      id="reg-name"
                      type="text"
                      required
                      placeholder={language === 'id' ? 'Contoh: Budi Santoso' : 'Example: John Doe'}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-cyber-navy text-theme-title text-sm focus:outline-none focus:border-brand-red transition ${
                        errors.fullName ? 'border-brand-red/80' : 'border-cyber-slate'
                      }`}
                    />
                  </div>
                  {errors.fullName && <span className="text-xs text-brand-red block">{errors.fullName}</span>}
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="reg-email" className="block text-sm font-semibold text-theme-title">
                    {language === 'id' ? 'Alamat Email' : 'Email Address'} <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyber-text-muted">
                      <Mail className="w-5 h-5" />
                    </span>
                    <input
                      id="reg-email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-cyber-navy text-theme-title text-sm focus:outline-none focus:border-brand-red transition ${
                        errors.email ? 'border-brand-red/80' : 'border-cyber-slate'
                      }`}
                    />
                  </div>
                  {errors.email && <span className="text-xs text-brand-red block">{errors.email}</span>}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="reg-phone" className="block text-sm font-semibold text-theme-title">
                    {language === 'id' ? 'Nomor WhatsApp' : 'WhatsApp/Phone'} <span className="text-cyber-text-muted text-xs">({language === 'id' ? 'Opsional' : 'Optional'})</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyber-text-muted">
                      <Phone className="w-5 h-5" />
                    </span>
                    <input
                      id="reg-phone"
                      type="tel"
                      placeholder={language === 'id' ? 'Contoh: 081234567890' : 'Example: +628123456789'}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-cyber-navy text-theme-title text-sm focus:outline-none focus:border-brand-red transition ${
                        errors.phone ? 'border-brand-red/80' : 'border-cyber-slate'
                      }`}
                    />
                  </div>
                  {errors.phone && <span className="text-xs text-brand-red block">{errors.phone}</span>}
                </div>

                {/* Selected Package Tier */}
                <div className="space-y-2">
                  <label htmlFor="reg-package" className="block text-sm font-semibold text-theme-title">
                    {language === 'id' ? 'Pilih Paket Belajar' : 'Select Learning Plan'} <span className="text-brand-red">*</span>
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
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-cyber-slate bg-cyber-navy text-theme-title text-sm focus:outline-none focus:border-brand-red transition appearance-none"
                    >
                      {language === 'id' ? (
                        <>
                          <option value="starter">Starter Package (Rp 699.000) - Cocok untuk budget</option>
                          <option value="standard">Standard Package (Rp 1.499.000) - Terpopuler</option>
                          <option value="premium">Premium Package (Rp 2.299.000) - Semua Akses</option>
                        </>
                      ) : (
                        <>
                          <option value="starter">Starter Package ($49) - Budget-friendly</option>
                          <option value="standard">Standard Package ($99) - Most Popular</option>
                          <option value="premium">Premium Package ($149) - All-Access</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                {/* Current Role/Background Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="reg-background" className="block text-sm font-semibold text-theme-title">
                    {language === 'id' ? 'Latar Belakang Saat Ini' : 'Your Current Background'} <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyber-text-muted">
                      <User className="w-5 h-5" />
                    </span>
                    <select
                      id="reg-background"
                      value={background}
                      onChange={(e) => setBackground(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-cyber-slate bg-cyber-navy text-theme-title text-sm focus:outline-none focus:border-brand-red transition appearance-none"
                    >
                      {language === 'id' ? (
                        <>
                          <option value="student">Pelajar / Mahasiswa (IT / Non-IT)</option>
                          <option value="professional">Karyawan / Profesional Bekerja</option>
                          <option value="self-taught">Pecinta Belajar Otodidak (Self-taught)</option>
                          <option value="career-changer">Ingin Beralih Karir (Career Changer)</option>
                          <option value="other">Lainnya</option>
                        </>
                      ) : (
                        <>
                          <option value="student">Student / Undergraduate (IT / Non-IT)</option>
                          <option value="professional">Employed / Working Professional</option>
                          <option value="self-taught">Self-taught Cyber Enthusiast</option>
                          <option value="career-changer">Career Changer / Looking to Pivot</option>
                          <option value="other">Other Background</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                {/* OpenClaw Experience Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="reg-experience" className="block text-sm font-semibold text-theme-title">
                    {language === 'id' ? 'Pengalaman dengan OpenClaw' : 'Experience with OpenClaw'} <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyber-text-muted">
                      <Calendar className="w-5 h-5" />
                    </span>
                    <select
                      id="reg-experience"
                      value={openClawExperience}
                      onChange={(e) => setOpenClawExperience(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-cyber-slate bg-cyber-navy text-theme-title text-sm focus:outline-none focus:border-brand-red transition appearance-none"
                    >
                      {language === 'id' ? (
                        <>
                          <option value="Never heard of it">Belum pernah mendengar sama sekali</option>
                          <option value="Heard about it, curious">Pernah mendengar & sangat penasaran</option>
                          <option value="Tried briefly">Pernah mencoba sekilas sebelumnya</option>
                        </>
                      ) : (
                        <>
                          <option value="Never heard of it">Never heard of it before</option>
                          <option value="Heard about it, curious">Heard about it and very curious</option>
                          <option value="Tried briefly">Tried briefly in the past</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

              </div>

              {/* Motivation / Why interested */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="reg-motivation" className="block text-sm font-semibold text-theme-title">
                    {language === 'id' ? 'Mengapa Anda Tertarik Belajar?' : 'Why are you interested in this academy?'} <span className="text-cyber-text-muted text-xs">({language === 'id' ? 'Opsional' : 'Optional'})</span>
                  </label>
                  <span className="text-[10px] text-cyber-text-muted font-mono">
                    {motivation.length}/200 {language === 'id' ? 'karakter' : 'characters'}
                  </span>
                </div>
                <textarea
                  id="reg-motivation"
                  maxLength={200}
                  placeholder={
                    language === 'id'
                      ? 'Contoh: Ingin beralih karir ke bidang keamanan digital atau ingin mempelajari hal baru yang seru.'
                      : 'Example: I want to pivot to digital security or understand how cyber defense sandboxes protect databases.'
                  }
                  value={motivation}
                  onChange={(e) => setMotivation(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-cyber-slate bg-cyber-navy text-theme-title text-sm focus:outline-none focus:border-brand-red transition h-20 resize-y"
                ></textarea>
              </div>

              {/* Preferred schedule checklists */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-theme-title">
                  {language === 'id' ? 'Pilihan Waktu Belajar yang Diinginkan:' : 'Select Your Preferred Schedule:'}
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
                      <span className="text-xs font-bold text-theme-title block">
                        {language === 'id' ? 'Malam Hari (Workdays)' : 'Evening (Weekdays)'}
                      </span>
                      <span className="text-[9px] text-cyber-text-sec block mt-0.5">
                        {language === 'id' ? 'Senin - Rabu Malam' : 'Monday - Wednesday Night'}
                      </span>
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
                      <span className="text-xs font-bold text-theme-title block">
                        {language === 'id' ? 'Akhir Pekan (Weekend)' : 'Weekend Classes'}
                      </span>
                      <span className="text-[9px] text-cyber-text-sec block mt-0.5">
                        {language === 'id' ? 'Sabtu / Minggu' : 'Saturday / Sunday'}
                      </span>
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
                      <span className="text-xs font-bold text-theme-title block">
                        {language === 'id' ? 'Fleksibel (Kapan saja)' : 'Flexible Self-paced'}
                      </span>
                      <span className="text-[9px] text-cyber-text-sec block mt-0.5">
                        {language === 'id' ? 'Menyesuaikan jadwal' : 'Self-guided schedule'}
                      </span>
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
                    {language === 'id'
                      ? 'Saya setuju dengan syarat & ketentuan serta kebijakan privasi OpenClaw Academy. Kami berjanji tidak akan menyepam email Anda.'
                      : 'I agree to the terms, conditions and privacy policy of OpenClaw Academy. We promise never to spam your inbox.'}
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
                  <span>
                    {loading 
                      ? (language === 'id' ? 'Memproses Pendaftaran...' : 'Processing Application...') 
                      : (language === 'id' ? 'Daftar Sekarang - Gratis Konsultasi' : 'Register Now - Free Consultation')}
                  </span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
}
