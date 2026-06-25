/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, ShieldCheck, Star, Users, Briefcase, Linkedin } from 'lucide-react';
import { testimonials } from '../data';
import { useApp } from '../context/AppContext';

export default function SupportedInstitution() {
  const { language } = useApp();

  const instructors = language === 'id' ? [
    {
      name: 'Wira Kusuma',
      role: 'Lead Security Instructor',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80&referrerpolicy=no-referrer',
      story: 'Saya memulai segalanya dari nol sama seperti Anda. Kini saya mendedikasikan waktu penuh untuk membimbing pemula agar tidak terintimidasi istilah teknis.',
      philosophy: 'Siapa saja bisa menguasai keamanan siber asal dijelaskan dengan analogi yang ramah dan membumi.',
      linkedIn: '#'
    },
    {
      name: 'Fiona Amanda',
      role: 'Mentor & Community Lead',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80&referrerpolicy=no-referrer',
      story: 'Pernah menjadi career-changer dari bidang administrasi ke dunia siber. Saya sangat memahami rasa ragu dan takut salah di awal proses belajar.',
      philosophy: 'Belajar di lingkungan yang aman, suportif, dan bebas dari penghakiman adalah kunci keberhasilan murni.',
      linkedIn: '#'
    }
  ] : [
    {
      name: 'Wira Kusuma',
      role: 'Lead Security Instructor',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80&referrerpolicy=no-referrer',
      story: 'I started from scratch just like you. Now I dedicate my full-time work to mentoring beginners so they never feel intimidated by technical jargon.',
      philosophy: 'Anyone can master cyber defense when explained with simple, real-world analogies.',
      linkedIn: '#'
    },
    {
      name: 'Fiona Amanda',
      role: 'Mentor & Community Lead',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80&referrerpolicy=no-referrer',
      story: 'I pivoted my career from administrative staff to cybersecurity. I understand the hesitation and anxiety at the beginning of learning.',
      philosophy: 'Learning in a safe, non-judgmental, and supportive sandbox environment is the key to actual success.',
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md shrink-0">
                <span className="text-cyber-navy font-black text-xl font-sans tracking-tighter">FE</span>
              </div>
              <div>
                <span className="text-lg font-extrabold text-theme-title block tracking-wide">FEDUCATION Partnership</span>
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
                    <strong className="text-theme-title font-semibold block">Curriculum for Clarity</strong>
                    <span className="text-xs text-cyber-text-muted">
                      {language === 'id'
                        ? 'Setiap materi dirancang khusus demi kemudahan pemahaman tanpa jargon rumit.'
                        : 'Every piece of curriculum is explicitly designed for easy comprehension without complex jargon.'}
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-sm text-cyber-text-sec">
                  <ShieldCheck className="w-5 h-5 text-accent-green mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-theme-title font-semibold block">
                      {language === 'id' ? 'Sabar & Terlatih Mengajar' : 'Patient & Trained Mentors'}
                    </strong>
                    <span className="text-xs text-cyber-text-muted">
                      {language === 'id'
                        ? 'Instruktur dilatih khusus untuk mendampingi pemula dari benar-benar nol.'
                        : 'Instructors are explicitly trained to guide absolute beginners from level zero.'}
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-sm text-cyber-text-sec">
                  <Users className="w-5 h-5 text-accent-gold mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-theme-title font-semibold block">
                      {language === 'id' ? 'Lab Sandbox Terawat' : 'Well-Maintained Sandbox Labs'}
                    </strong>
                    <span className="text-xs text-cyber-text-muted">
                      {language === 'id'
                        ? 'Infrastruktur laboratorium simulasi kami dipantau secara profesional & aman.'
                        : 'Our laboratory simulator is safely managed and monitored on secure cloud servers.'}
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-sm text-cyber-text-sec">
                  <Briefcase className="w-5 h-5 text-brand-red mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-theme-title font-semibold block">
                      {language === 'id' ? 'Konten Terus Diperbarui' : 'Continuously Updated Content'}
                    </strong>
                    <span className="text-xs text-cyber-text-muted">
                      {language === 'id'
                        ? 'Materi di-update rutin berdasarkan umpan balik siswa agar selalu relevan.'
                        : 'Syllabus is regularly refreshed based on student feedback to match industry trends.'}
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
                        <img
                          src={test.avatarUrl}
                          alt={test.name}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-full border border-cyber-slate object-cover shrink-0"
                        />
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
                <img
                  src={instructor.photo}
                  alt={instructor.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-cyber-slate shrink-0 mx-auto sm:mx-0"
                />
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
