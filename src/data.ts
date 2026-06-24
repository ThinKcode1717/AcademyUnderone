/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, WeeklyModule, SkillBenefit, Testimonial } from './types';

export const valueProps = [
  {
    title: "Kurikulum Praktis",
    description: "100% hands-on projects, bukan teori membosankan.",
    subDetail: "Skenario dunia nyata di live lab environment terisolasi.",
    iconName: "Terminal",
  },
  {
    title: "Mentor Bersertifikat",
    description: "Pembelajaran dari praktisi dengan 10+ tahun pengalaman.",
    subDetail: "Direct mentorship, live Q&A, dan bimbingan karir personal.",
    iconName: "ShieldAlert",
  },
  {
    title: "Career Support",
    description: "Bantuan penyaluran kerja & peluang networking luas.",
    subDetail: "Review CV, persiapan interview, dan koneksi langsung recruiter.",
    iconName: "Briefcase",
  },
  {
    title: "Akses Selamanya",
    description: "Akses lifetime ke material & update modul gratis selamanya.",
    subDetail: "Perbarui skill Anda kapan saja tanpa biaya tambahan.",
    iconName: "Clock",
  }
];

export const skillsBenefits: SkillBenefit[] = [
  {
    title: "Network Penetration Testing",
    capability: "Identifikasi vulnerability & kelemahan pada infrastruktur jaringan.",
    industry: "IT Security, SOC Analyst, Network Administrator",
    iconName: "Server",
  },
  {
    title: "Web Application Security",
    capability: "Menemukan & mengeksploitasi celah keamanan web (OWASP Top 10).",
    industry: "AppSec Engineer, Bug Bounty Hunter, Web Developer",
    iconName: "Globe",
  },
  {
    title: "Social Engineering & OSINT",
    capability: "Pengumpulan informasi intelijen & eksploitasi faktor manusia.",
    industry: "Security Consultant, Red Teamer, OSINT Analyst",
    iconName: "Fingerprint",
  },
  {
    title: "Forensics & Incident Response",
    capability: "Investigasi forensik digital & penanganan pasca-insiden keamanan.",
    industry: "Incident Responder, Digital Forensics Analyst",
    iconName: "Activity",
  },
  {
    title: "Malware Analysis Fundamentals",
    capability: "Analisis perilaku (behavioral) malware dasar secara aman.",
    industry: "Threat Intelligence Analyst, Malware Analyst",
    iconName: "Bug",
  },
  {
    title: "Linux & Command Line Mastery",
    capability: "Navigasi terminal Linux tingkat lanjut & scripting otomatisasi.",
    industry: "System Administrator, DevSecOps Specialist",
    iconName: "Cpu",
  },
  {
    title: "Ethical Hacking Mindset",
    capability: "Berpikir kreatif seperti hacker untuk pertahanan taktis.",
    industry: "All Technology and Security Careers",
    iconName: "Eye",
  },
  {
    title: "Compliance & Security Standards",
    capability: "Pemahaman kerangka kerja keamanan standar industri (ISO 27001, NIST).",
    industry: "Compliance Officer, Security Auditor, CISO Assistant",
    iconName: "FileCheck",
  }
];

export const weeklyModules: WeeklyModule[] = [
  {
    week: "Minggu 1-2",
    title: "Networking Fundamentals, Linux Basics & Pentesting Framework",
    description: "Membangun fondasi kuat mengenai komunikasi data, sistem operasi Linux, dan standar alur kerja peretasan etis.",
    details: [
      "Pemahaman mendalam TCP/IP, OSI Model, IP Addressing, dan DNS",
      "Kuasai Linux Command Line, manajemen hak akses, dan Shell Scripting dasar",
      "Mempelajari metodologi PTES (Penetration Testing Execution Standard)"
    ],
    labName: "Lab 1: Terminal Kung-Fu & Network Recon"
  },
  {
    week: "Minggu 3-4",
    title: "Network Scanning, Enumeration & Vulnerability Assessment",
    description: "Mendeteksi target aktif, memetakan layanan yang berjalan, dan menganalisis potensi celah keamanan.",
    details: [
      "Menguasai Nmap secara mendalam, teknik scanning tersembunyi, dan integrasi Shodan API",
      "Enumerasi protokol jaringan krusial (SMB, SSH, FTP, SNMP, LDAP)",
      "Vulnerability assessment otomatis menggunakan Nessus dan validasi manual"
    ],
    labName: "Lab 2: Active Target Recon & Vulnerability Mapping"
  },
  {
    week: "Minggu 5-6",
    title: "Web Application Security & Exploit Development (Basics)",
    description: "Menjelajahi kerentanan web paling umum dan memahami mekanisme eksploitasi software.",
    details: [
      "Analisis mendalam celah OWASP Top 10 (SQL Injection, XSS, CSRF, IDOR)",
      "Menggunakan Burp Suite Pro untuk mengintersepsi, menganalisis, dan memodifikasi traffic web",
      "Konsep Buffer Overflow dasar dan teknik penggunaan Metasploit Framework"
    ],
    labName: "Lab 3: SQLi and XSS Exploitation in Sandbox WebApp"
  },
  {
    week: "Minggu 7-8",
    title: "Incident Response, Capstone Project & Career Placement",
    description: "Menyatukan semua keterampilan dalam uji simulasi nyata, penanganan serangan, dan persiapan masuk industri.",
    details: [
      "Prinsip penanganan insiden keamanan dan investigasi log server",
      "Capstone Project: Menembus lab 'HackTheBox' buatan OpenClaw",
      "Review CV/LinkedIn 1-on-1, latihan wawancara teknis, dan penyaluran kerja langsung"
    ],
    labName: "Lab 4: Capstone Exam (Capture the Flag)"
  }
];

export const FAQs: FAQItem[] = [
  {
    question: "Apakah saya harus memiliki pengalaman IT sebelumnya?",
    answer: "Tidak perlu. Kursus ini dirancang khusus dari nol (absolute beginner). Kami membimbing Anda mulai dari dasar-dasar jaringan komputer dan perintah dasar Linux hingga teknik penetrasi tingkat lanjut secara bertahap."
  },
  {
    question: "Apa itu OpenClaw dan apa bedanya dengan kursus lain?",
    answer: "OpenClaw Academy adalah platform pelatihan cybersecurity yang menekankan 100% pembelajaran praktis (hands-on) di lingkungan lab simulasi asli. Kami bermitra dengan FEDUCATION untuk memastikan kurikulum kami tersertifikasi secara industri."
  },
  {
    question: "Berapa jam per minggu yang harus saya luangkan?",
    answer: "Pelatihan ini membutuhkan komitmen sekitar 15-20 jam per minggu. Sesi live diadakan di luar jam kerja (malam hari atau akhir pekan), sehingga sangat cocok untuk mahasiswa maupun profesional yang sedang bekerja."
  },
  {
    question: "Apakah saya akan mendapatkan sertifikat resmi?",
    answer: "Ya, tentu saja. Peserta yang menyelesaikan seluruh modul, tugas praktis mingguan, dan lulus ujian Capstone Project akan menerima Sertifikat Kelulusan Resmi yang didukung oleh FEDUCATION dan OpenClaw."
  },
  {
    question: "Bagaimana jika saya berhalangan hadir saat sesi live?",
    answer: "Seluruh sesi live direkam dengan kualitas tinggi dan diunggah ke Portal Siswa dalam waktu maksimal 2 jam setelah kelas selesai. Anda juga bisa menanyakan pertanyaan langsung di forum komunitas alumni jika ada materi yang kurang dipahami."
  },
  {
    question: "Dukungan karir apa yang akan saya dapatkan?",
    answer: "Setiap alumni mendapatkan bantuan karir tanpa batas waktu: review resume/CV personal, perbaikan profil LinkedIn, simulasi interview (technical & HR), serta penyaluran kerja ke 30+ mitra perusahaan cybersecurity nasional."
  },
  {
    question: "Apakah ada garansi uang kembali (refund)?",
    answer: "Ya, kami menawarkan 100% jaminan uang kembali dalam waktu 7 hari sejak kelas pertama dimulai jika Anda merasa program ini tidak sesuai dengan ekspektasi Anda. Tanpa pertanyaan berbelit-belit."
  },
  {
    question: "Bagaimana metode pembayarannya? Apakah bisa dicicil?",
    answer: "Pembayaran dapat dilakukan melalui transfer bank manual, QRIS, e-wallet, atau kartu kredit. Kami juga menyediakan opsi pembayaran bertahap (cicilan) 2x hingga 3x untuk paket Professional dan Elite."
  },
  {
    question: "Berapa lama saya bisa mengakses materi dan laboratorium praktis?",
    answer: "Anda mendapatkan akses seumur hidup (lifetime access) ke portal video pembelajaran, slide, cheatsheet, dan update modul di masa mendatang. Untuk live laboratory server, Anda mendapatkan durasi akses aktif sesuai dengan tingkat paket pilihan Anda."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Adi Pratama",
    role: "Junior SOC Analyst",
    company: "Cyber Security Indonesia",
    quote: "Dari tidak tahu apa-apa tentang IT, sekarang saya bekerja sebagai SOC Analyst Junior. Lab praktis dari OpenClaw sangat membantu mempercepat pemahaman saya! Rekomendasi banget untuk pemula.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80&referrerpolicy=no-referrer"
  },
  {
    id: "t2",
    name: "Rina Wijaya",
    role: "Information Security Consultant",
    company: "FEDUCATION Partner",
    quote: "Sebagai lulusan non-IT, bimbingan mentor 1-on-1 sangat bernilai tinggi. Resume saya direview hingga menarik perhatian recruiter dalam hitungan minggu. Berhasil pivot karir dengan sukses!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80&referrerpolicy=no-referrer"
  },
  {
    id: "t3",
    name: "Kevin Sanjaya",
    role: "QA Security Specialist",
    company: "Global Tech Solutions",
    quote: "Kurikulumnya sangat up-to-date dengan kebutuhan industri saat ini. Teknik OWASP Top 10 yang diajarkan sangat aplikatif untuk pekerjaan sehari-hari saya sebagai QA. Recommended!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80&referrerpolicy=no-referrer"
  }
];
