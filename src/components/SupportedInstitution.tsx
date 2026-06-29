/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, ShieldCheck, Star, Users, Briefcase, Linkedin } from 'lucide-react';
import { testimonials } from '../data';
import { useApp } from '../context/AppContext';
import FeducationLogo from './FeducationLogo';

export default function SupportedInstitution() {
  const { t, language } = useApp();

  const instructors = [
    {
      name: 'Riswan Murisidin',
      role: language === 'id' ? 'Lead AI Agent Engineer' : 'Lead AI Agent Engineer',
      initials: 'RM',
      story: language === 'id' 
        ? 'Bekerja penuh waktu mendesain arsitektur AI Agent mandiri untuk berbagai alur proses operasional bisnis modern.' 
        : 'Full-time specialist designing autonomous AI Agent architectures for modern operational workflows.',
      philosophy: language === 'id' 
        ? 'Automasi cerdas adalah kunci mendelegasikan tugas repetitif sehingga kita bisa fokus pada karya strategis.' 
        : 'Smart automation is the key to delegating repetitive tasks so we can focus on strategic creations.',
      linkedIn: '#'
    },
    {
      name: 'Yoga Adi Pratama',
      role: language === 'id' ? 'Senior Vibe Coder' : 'Senior Vibe Coder',
      initials: 'YP',
      story: language === 'id' 
        ? 'Berpengalaman membangun prototipe cepat berbasis instruksi bahasa alami (natural language programming) dan asisten pintar.' 
        : 'Experienced in rapid prototyping using natural language programming instructions and smart assistants.',
      philosophy: language === 'id' 
        ? 'Vibe coding memberikan kebebasan berpikir kreatif tanpa terhambat kerumitan sintaksis kode tradisional.' 
        : 'Vibe coding grants creative freedom without being slowed down by traditional syntax syntax struggles.',
      linkedIn: '#'
    },
    {
      name: 'Akbar Rayhan',
      role: language === 'id' ? 'AI Operations Specialist' : 'AI Operations Specialist',
      initials: 'AR',
      story: language === 'id' 
        ? 'Mengkhususkan diri pada integrasi sistem cloud, konfigurasi API key, dan sinkronisasi log otomatisasi harian.' 
        : 'Specializing in cloud integrations, API key provisioning, and automated work log syncing.',
      philosophy: language === 'id' 
        ? 'Ekosistem otomatisasi yang kokoh selalu berakar pada setup lingkungan yang teratur dan aman.' 
        : 'A robust automation ecosystem is always rooted in organized and highly secure environments.',
      linkedIn: '#'
    },
    {
      name: 'Faalih Hibban Hilmi',
      role: language === 'id' ? 'Learning Facilitator & Mentor' : 'Learning Facilitator & Mentor',
      initials: 'FH',
      story: language === 'id' 
        ? 'Siap mendampingi keluhan teknis harian peserta dan memastikan setiap modul praktik dapat dieksekusi dengan mulus.' 
        : 'Ready to assist students with daily technical issues and ensure every practical exercise runs flawlessly.',
      philosophy: language === 'id' 
        ? 'Tidak ada pertanyaan yang terlalu sederhana. Pemahaman kokoh dimulai dari keberanian untuk bertanya.' 
        : 'No question is too simple. Solid comprehension begins with the courage to seek answers.',
      linkedIn: '#'
    }
  ];

  const metrics = language === 'id' ? [
    { value: '800+', label: 'Siswa Lulus Sukses' },
    { value: '92%', label: 'Terapkan Skill di Kerja' },
    { value: '4.7/5', label: 'Rating Kepuasan Pemula' },
    { value: 'Lifetime', label: 'Akses Alumni Komunitas' }
  ] : [
    { value: '800+', label: 'Graduates Succeeded' },
    { value: '92%', label: 'Apply Skills at Work' },
    { value: '4.7/5', label: 'Beginner Rating' },
    { value: 'Lifetime', label: 'Alumni Community Access' }
  ];

  return (
    <section id="mitra" className="py-20 relative bg-cyber-charcoal/30 border-y border-cyber-slate/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-accent-green/10 border border-accent-green/20 px-3 py-1 rounded-full text-xs font-mono text-accent-green uppercase tracking-wider">
            <span>{language === 'id' ? 'Kolaborasi & Bukti Sosial' : 'Collaboration & Social Proof'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-theme-title">
            {language === 'id' ? 'Dipercaya oleh Lembaga Pendidikan Terkemuka' : 'Trusted by Leading Educational Partners'}
          </h2>
          <p className="text-cyber-text-sec text-base sm:text-lg">
            {language === 'id'
              ? 'Kami bermitra erat dengan lembaga kredibel dan menyiapkan instruktur terbaik untuk menjaga pengalaman belajar pemula tetap optimal.'
              : 'We partner closely with official educational institutions and provide dedicated instructors to ensure a smooth learning path.'}
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Side: FEDUCATION Partner Card */}
          <div className="lg:col-span-5 bg-cyber-charcoal border border-cyber-slate p-8 rounded-2xl relative overflow-hidden text-left shadow-lg">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-full blur-xl pointer-events-none"></div>

            {/* Logo of FEDUCATION */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-cyber-slate/30 pb-4">
              <FeducationLogo textColor="text-white" />
              <div className="text-left sm:text-right">
                <span className="text-xs font-mono text-brand-red font-semibold block uppercase">
                  {language === 'id' ? 'STANDAR PENDIDIKAN TINGGI' : 'ACADEMIC EXCELLENCE STANDARD'}
                </span>
              </div>
            </div>

            <p className="text-cyber-text-sec text-sm leading-relaxed mb-6">
              {language === 'id'
                ? 'FEDUCATION memastikan kurikulum kami telah disesuaikan secara khusus dengan kebutuhan industri modern, namun dikemas dengan tata bahasa sederhana agar ramah dipahami oleh orang awam.'
                : 'FEDUCATION ensures our syllabus aligns with modern industry needs, designed with clear language and free from complex technical jargon for absolute beginners.'}
            </p>

            {/* Partnership Benefits list */}
            <div className="space-y-4">
              <span className="text-xs font-mono text-cyber-text-muted block uppercase tracking-wider font-bold">
                {language === 'id' ? 'KEUNGGULAN PEMBELAJARAN:' : 'LEARNING ADVANTAGES:'}
              </span>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-sm text-cyber-text-sec">
                  <Award className="w-5 h-5 text-accent-cyan mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-theme-title font-semibold block">
                      {language === 'id' ? 'Kurikulum Terstruktur & Praktis' : 'Structured & Practical Syllabus'}
                    </strong>
                    <span className="text-xs text-cyber-text-muted">
                      {language === 'id'
                        ? 'Materi dirancang berbasis studi kasus riil dunia kerja, tanpa perlu menghafal baris kode yang rumit.'
                        : 'Syllabus designed around real workplace projects, without the need for memorizing complex syntax.'}
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-sm text-cyber-text-sec">
                  <ShieldCheck className="w-5 h-5 text-accent-green mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-theme-title font-semibold block">
                      {language === 'id' ? 'Didampingi Praktisi Berpengalaman' : 'Guided by Active Practitioners'}
                    </strong>
                    <span className="text-xs text-cyber-text-muted">
                      {language === 'id'
                        ? 'Interaksi langsung dengan mentor berpengalaman yang aktif membangun sistem otomatisasi di industri.'
                        : 'Direct interaction with experienced mentors actively building automation systems in the industry.'}
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-sm text-cyber-text-sec">
                  <Users className="w-5 h-5 text-accent-gold mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-theme-title font-semibold block">
                      {language === 'id' ? 'Lingkungan Kerja & Sandbox Siap Pakai' : 'Ready-to-Use Sandbox Environments'}
                    </strong>
                    <span className="text-xs text-cyber-text-muted">
                      {language === 'id'
                        ? 'Praktik langsung di sandbox terisolasi tanpa perlu pusing melakukan instalasi atau merusak perangkat Anda.'
                        : 'Hands-on practice in isolated sandboxes without installation friction or risk of system failure.'}
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-sm text-cyber-text-sec">
                  <Briefcase className="w-5 h-5 text-brand-red mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-theme-title font-semibold block">
                      {language === 'id' ? 'Sertifikasi Kredibel Bersama Feducation' : 'Credible Joint Certification'}
                    </strong>
                    <span className="text-xs text-cyber-text-muted">
                      {language === 'id'
                        ? 'Lulus dengan sertifikat resmi hasil kolaborasi yang diakui dan siap memperkuat portofolio Anda.'
                        : 'Graduate with an official, recognized certificate to strengthen your professional portfolio.'}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: Integrated Testimonials */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Testimonials */}
            <div className="space-y-4 text-left">
              <span className="text-xs font-mono text-cyber-text-muted block uppercase tracking-wider font-bold">
                {language === 'id' ? 'KATA MEREKA YANG BELAJAR DARI NOL:' : 'WHAT OUR BEGINNER GRADUATES SAY:'}
              </span>
              <div className="space-y-4">
                {testimonials[language].map((test) => (
                  <div
                    key={test.id}
                    className="bg-cyber-navy/40 border border-cyber-slate/50 p-6 rounded-2xl relative space-y-3 shadow-md"
                  >
                    <p className="text-cyber-text-sec text-sm italic leading-relaxed text-left">
                      "{test.quote}"
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-cyber-slate/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red-light font-mono flex items-center justify-center text-sm font-bold shrink-0 select-none">
                          {test.initials || test.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <span className="text-sm font-bold text-theme-title block">{test.name}</span>
                          <span className="text-xs text-cyber-text-muted block">
                            {test.role}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex text-accent-gold space-x-0.5">
                        {[...Array(test.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Featured Instructor Profiles */}
        <div className="mb-16">
          <h3 className="text-xs font-mono text-cyber-text-muted text-center block uppercase tracking-wider font-bold mb-8">
            {language === 'id' ? 'PROFIL INSTRUKTUR PENDAMPING ANDA' : 'YOUR MENTORS & SUPPORT TEAM'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {instructors.map((instructor, idx) => (
              <div key={idx} className="bg-cyber-charcoal/50 border border-cyber-slate/50 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 hover:border-brand-red/30 transition-all duration-300">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-brand-red/10 border-2 border-brand-red/30 flex items-center justify-center text-brand-red font-mono text-xl sm:text-2xl font-black shrink-0 mx-auto sm:mx-0 select-none">
                  {instructor.initials}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-theme-title leading-tight">{instructor.name}</h4>
                      <span className="text-xs font-mono text-accent-cyan">{instructor.role}</span>
                    </div>
                    <a href={instructor.linkedIn} className="text-cyber-text-muted hover:text-white transition-colors" aria-label="LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-xs text-cyber-text-sec leading-relaxed">
                    <strong className="text-theme-title font-medium">{language === 'id' ? 'Cerita:' : 'Story:'}</strong> "{instructor.story}"
                  </p>
                  <p className="text-xs text-cyber-text-sec leading-relaxed border-t border-cyber-slate/30 pt-1.5 mt-1">
                    <strong className="text-theme-title font-medium">{language === 'id' ? 'Prinsip:' : 'Philosophy:'}</strong> "{instructor.philosophy}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Success Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pt-4 text-center">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-cyber-navy/50 border border-cyber-slate/40 rounded-xl p-5 hover:border-brand-red/20 transition-all duration-300">
              <span className="block text-2xl sm:text-3xl font-black text-brand-red-light mb-1">{metric.value}</span>
              <span className="text-[11px] font-mono text-cyber-text-sec uppercase tracking-wider block">{metric.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
