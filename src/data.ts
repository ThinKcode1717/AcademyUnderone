/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, WeeklyModule, SkillBenefit, Testimonial } from './types';

export const valueProps = [
  {
    title: "Dirancang Khusus untuk Pemula",
    description: "Materi pembelajaran disusun dari tingkat dasar agar mudah dipahami oleh peserta tanpa latar belakang teknologi.",
    subDetail: "Kami menghindari penggunaan istilah teknis yang rumit dan menjelaskan setiap konsep dasar secara bertahap.",
    iconName: "SmilingFace",
  },
  {
    title: "Metode Pembelajaran Praktis",
    description: "Proses belajar menitikberatkan pada latihan praktis langsung di lingkungan simulasi yang aman.",
    subDetail: "Setiap pembahasan dilengkapi dengan sesi praktik terarah yang dapat dicoba langsung menggunakan komputer pribadi Anda.",
    iconName: "HandsDoing",
  },
  {
    title: "Bimbingan Instruktur Berdedikasi",
    description: "Didampingi secara intensif oleh instruktur berpengalaman yang memahami tantangan belajar peserta pemula.",
    subDetail: "Sesi tanya jawab interaktif disediakan pada setiap pertemuan untuk memastikan pemahaman Anda tetap terjaga.",
    iconName: "TeacherMentor",
  },
  {
    title: "Komunitas Belajar yang Suportif",
    description: "Bergabung bersama ratusan peserta belajar lainnya yang memiliki minat dan tujuan karir yang sama.",
    subDetail: "Tersedia akses ke grup diskusi terarah, forum tanya jawab, serta ruang berbagi materi belajar penunjang.",
    iconName: "PeopleCommunity",
  }
];

export const skillsBenefits: SkillBenefit[] = [
  {
    title: "Memahami Koneksi Sistem",
    capability: "Tahu bagaimana komputer, website, dan server saling terhubung dan berkomunikasi satu sama lain.",
    industry: "Sangat dasar dan penting: \"Bukan sihir, semuanya memiliki logika di baliknya.\"",
    iconName: "Server",
  },
  {
    title: "Konsep Keamanan Dasar",
    capability: "Mengerti mengapa keamanan siber itu penting dan langkah praktis untuk melindungi sistem secara umum.",
    industry: "Bisa diaplikasikan di pekerjaan teknologi apa pun, bahkan berguna melindungi diri sendiri.",
    iconName: "Globe",
  },
  {
    title: "Percaya Diri Menggunakan Tool",
    capability: "Bisa menggunakan tools profesional seperti OpenClaw dengan nyaman dan tanpa rasa takut salah klik.",
    industry: "Meningkatkan nilai jual Anda di mata perekrut kerja (dari nol ke bisa pakai tool profesional).",
    iconName: "Fingerprint",
  },
  {
    title: "Scan & Analisis Sistem Aman",
    capability: "Melakukan pemindaian (scanning) sistem dengan aman dan tahu cara membaca data hasil scanning tersebut.",
    industry: "Keterampilan inti (core skill) dalam melakukan penilaian keamanan digital (security assessment).",
    iconName: "Activity",
  },
  {
    title: "Membaca Laporan Teknis",
    capability: "Bisa membaca dan memahami isi laporan keamanan teknis yang sebelumnya terlihat sangat membingungkan.",
    industry: "Keterampilan yang sangat bernilai tinggi dalam posisi teknologi atau koordinasi bisnis apa pun.",
    iconName: "Bug",
  },
  {
    title: "Berpikir Kritis Soal Keamanan",
    capability: "Mampu mengajukan pertanyaan cerdas dan menganalisis potensi celah keamanan di tempat kerja atau kehidupan.",
    industry: "Membantu Anda berkembang dengan pemahaman mendalam: \"Tahu apa yang perlu Anda cari tahu.\"",
    iconName: "Cpu",
  },
  {
    title: "Confidence dalam Skill Teknologi",
    capability: "Meningkatkan rasa percaya diri untuk terus belajar dan memperdalam wawasan seputar dunia teknologi.",
    industry: "Mengubah pola pikir dari \"Saya bukan orang teknologi\" menjadi \"Saya juga bisa belajar teknologi.\"",
    iconName: "Eye",
  },
  {
    title: "Membuka Peluang Karir Baru",
    capability: "Membangun fondasi kuat untuk melangkah ke karir menjanjikan di bidang cybersecurity.",
    industry: "Langkah awal sebelum masuk ke spesialisasi lebih dalam (DevSecOps, Analis SOC, Auditor Keamanan).",
    iconName: "FileCheck",
  }
];

export const weeklyModules: WeeklyModule[] = [
  {
    week: "Minggu 1",
    title: "Pengenalan & Setup (Understand the basics)",
    description: "Menghilangkan kebingungan seputar OpenClaw. Di minggu pertama ini, kami membimbing Anda dari proses penginstalan hingga mencoba pemindaian pertama Anda secara aman.",
    details: [
      "Module 1.1: Apa itu OpenClaw? Kenapa ini penting dipelajari? (Menepis mitos hacker di film Hollywood)",
      "Module 1.2: Dasar Internet & Jaringan (Bagaimana komputer berkomunikasi - IP, Port, dan Protokol dengan analogi sederhana)",
      "Module 1.3: Instalasi OpenClaw & Setup Environment (Walkthrough langkah demi langkah untuk sistem Windows, Mac, dan Linux)",
      "Module 1.4: Tur Antarmuka (Interface Tour) OpenClaw (Mengenal tombol dan navigasi utama tanpa rasa takut merusak sistem)"
    ],
    labName: "Lab 1: Hello OpenClaw - Menjalankan scan pertama pada target aman simulasi"
  },
  {
    week: "Minggu 2",
    title: "Reconnaissance Basics (Learning to collect information safely)",
    description: "Belajar mengumpulkan informasi awal mengenai target secara legal dan etis. Di sini Anda akan memahami cara kerja pemindaian informasi yang sesungguhnya.",
    details: [
      "Module 2.1: Sisi Hukum & Etika (Paling penting! Memahami perbedaan belajar legal dengan peretasan ilegal)",
      "Module 2.2: Konsep Pengumpulan Informasi (Reconnaissance Pasif vs Aktif secara sederhana)",
      "Module 2.3: Menggunakan Fitur Scanning OpenClaw (Langkah demi langkah melakukan scan mandiri)",
      "Module 2.4: Menganalisis Scan Pertama Anda (Membaca hasil keluaran scanning dan mengerti tingkat bahaya/severity)"
    ],
    labName: "Lab 2: Scan & Report - Melakukan reconnaissance mandiri dan mendokumentasikan hasilnya"
  },
  {
    week: "Minggu 3",
    title: "Understanding Vulnerabilities (What does it mean when OpenClaw finds something?)",
    description: "Menguak makna di balik temuan OpenClaw. Anda akan belajar mengenali jenis-jenis kerentanan keamanan paling umum dengan bahasa sehari-hari.",
    details: [
      "Module 3.1: Apa itu Kerentanan Keamanan (Vulnerability)? (Penjelasan analogi dunia nyata tanpa jargon membingungkan)",
      "Module 3.2: 10 Kerentanan Umum yang Bisa Ditemukan OpenClaw (Contoh nyata dan cara mendeteksinya)",
      "Module 3.3: Menginterpretasikan Laporan Kerentanan (Membaca detail kerentanan, rating risiko, dan dampaknya)",
      "Module 3.4: Membuat Laporan Penilaian Sederhana (Dokumentasi temuan dan cara rekomendasi perbaikan dasar)"
    ],
    labName: "Lab 3: Full Scan & Analysis - Melakukan audit keamanan lengkap di lingkungan sandbox sandbox"
  },
  {
    week: "Minggu 4",
    title: "Integration, Best Practices & Next Steps (Putting it all together)",
    description: "Menggabungkan semua keahlian yang telah Anda pelajari untuk diaplikasikan ke skenario nyata, serta merencanakan karir ke depan.",
    details: [
      "Module 4.1: Membangun Alur Kerja Anda (Membuat template pemindaian harian untuk efisiensi kerja)",
      "Module 4.2: OpenClaw dalam Ekosistem Keamanan (Bagaimana tool ini bekerja beriringan dengan standar keamanan industri)",
      "Module 4.3: Prospek Karir & Peluang Kerja di Bidang Keamanan (Membahas berbagai jenis peran, tip resume, dan wawancara)",
      "Module 4.4: Belajar Berkelanjutan & Komunitas (Resource gratis, forum belajar, dan tips update info teknologi)"
    ],
    labName: "Lab 4: Capstone Project - Simulasi audit keamanan menyeluruh dan refleksi hasil belajar"
  }
];

export const FAQs: FAQItem[] = [
  {
    question: "Apakah saya perlu background IT atau programming?",
    answer: "Tidak perlu sama sekali! Kurikulum kami dirancang khusus dari nol untuk orang yang baru pertama kali belajar. Yang paling penting adalah rasa ingin tahu dan kemauan untuk mencoba langkah demi langkah."
  },
  {
    question: "Saya takut tidak mengerti. Apakah instrukturnya sabar?",
    answer: "Sangat sabar! Instruktur kami sangat memahami bagaimana rasanya belajar hal baru dari nol. Tidak ada pertanyaan yang dianggap bodoh, ada sesi tanya-jawab interaktif khusus di setiap kelas."
  },
  {
    question: "Apakah akan ada banyak coding atau pemrograman?",
    answer: "Tidak ada keharusan bisa coding. OpenClaw adalah sebuah program/tool siap pakai yang ramah pengguna. Anda hanya perlu memahami tombol-tombol utama dan logika dasar pemakaiannya."
  },
  {
    question: "Berapa jam per minggu yang harus saya luangkan?",
    answer: "Sekitar 15-20 jam per minggu. Waktunya sangat fleksibel—Anda bisa membaginya sendiri sepanjang minggu (misalnya 3 jam per hari), sehingga sangat cocok dilakukan sambil bekerja atau kuliah."
  },
  {
    question: "Apa yang terjadi jika saya berhalangan hadir saat sesi live?",
    answer: "Seluruh sesi live direkam dengan kualitas tinggi dan diunggah ke Portal Siswa maksimal 2 jam setelah kelas selesai. Anda bisa menonton ulang kapan saja dan bertanya di forum komunitas jika ada materi yang kurang dipahami."
  },
  {
    question: "Apakah ini legal untuk dipelajari? Apakah saya akan belajar meretas secara ilegal?",
    answer: "Pelatihan ini 100% legal dan etis. Kita belajar di dalam lingkungan simulasi laboratorium terisolasi yang diizinkan (sandbox). Kami juga menyediakan materi khusus mengenai aturan hukum keamanan siber nasional agar Anda tahu batasannya."
  },
  {
    question: "Bagaimana dengan lab praktisnya? Apakah aman bagi komputer saya?",
    answer: "Sangat aman! Laboratorium kami berjalan di server cloud sandbox milik OpenClaw. Komputer Anda tidak akan terkena virus atau risiko apa pun saat melakukan eksperimen pemindaian sistem."
  },
  {
    question: "Apakah saya bisa mengakses materi selamanya?",
    answer: "Tergantung pilihan paket Anda. Starter memberikan akses materi selama 4 minggu (selama kursus berjalan), Standard memberikan akses selama 2 bulan tambahan setelah kursus selesai, dan Premium memberikan akses penuh selama 6 bulan. Ditambah, semua paket mendapatkan akses seumur hidup ke komunitas alumni."
  },
  {
    question: "Apakah ada jaminan langsung dapat pekerjaan setelah kursus?",
    answer: "Kami tidak memberikan janji atau garansi kerja instan, tetapi kami akan membantu Anda 100% menyiapkan portofolio, latihan wawancara kerja, menata resume/CV, serta menyalurkan profil Anda langsung ke jaringan industri rekanan FEDUCATION."
  },
  {
    question: "Bagaimana jika saya merasa kursus ini tidak cocok setelah memulainya?",
    answer: "Kami menawarkan garansi uang kembali 100% dalam waktu 30 hari sejak pendaftaran dimulai tanpa banyak pertanyaan bertele-tele jika Anda merasa program ini tidak sesuai ekspektasi Anda."
  },
  {
    question: "Apakah saya perlu membeli software atau perangkat keras mahal tambahan?",
    answer: "Tidak! OpenClaw adalah aplikasi gratis dan open-source. Semua materi penunjang pembelajaran sudah termasuk lengkap di dalam biaya pelatihan awal."
  },
  {
    question: "Apakah saya bisa belajar sambil bekerja penuh waktu (full-time)?",
    answer: "Bisa banget! Sebagian besar alumni kami adalah pekerja kantoran yang sibuk. Rekaman materi yang fleksibel dan bimbingan komunitas siap membantu Anda menyesuaikan ritme belajar sendiri."
  },
  {
    question: "Apakah akan ada pendampingan privat (mentoring) 1-on-1?",
    answer: "Pendampingan privat tersedia untuk tier Standard (1x per bulan) dan Premium (2x per bulan). Untuk semua paket, Anda juga bebas berkonsultasi di sesi tanya jawab mingguan bersama grup."
  },
  {
    question: "Bagaimana cara mendaftarnya? Apakah prosesnya rumit?",
    answer: "Sangat sederhana! Anda hanya perlu mengisi formulir pendaftaran di bagian bawah halaman ini dalam 1 menit, memilih paket yang diinginkan, dan instruksi pembayaran beserta tautan bergabung langsung dikirim ke email/WhatsApp Anda."
  },
  {
    question: "Apakah ada komunitas setelah kelas selesai?",
    answer: "Tentu saja! Anda akan diundang ke dalam grup alumni seumur hidup di mana Anda bisa terus berjejaring, berbagi info lowongan kerja, berdiskusi proyek, dan saling membantu dalam karir teknologi ke depan."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Adi Pratama",
    role: "Lulusan Non-IT / Mandiri",
    company: "Sekarang di Tech Support",
    quote: "Dulu saya pikir belajar security itu hanya untuk jenius matematika. Penjelasan instruktur di OpenClaw begitu sederhana, menggunakan analogi sehari-hari yang mudah diingat. Sekarang saya sangat percaya diri mengoperasikan tools siber profesional!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80&referrerpolicy=no-referrer"
  },
  {
    id: "t2",
    name: "Rina Wijaya",
    role: "Career Changer",
    company: "Mantan Pegawai Administrasi",
    quote: "Sebagai pemula murni, saya sempat takut merasa bodoh saat bertanya. Namun di OpenClaw, suasananya sangat mendukung, ramah, dan bebas menghakimi. Kursus terbaik untuk siapa saja yang ingin pivot ke dunia siber!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80&referrerpolicy=no-referrer"
  },
  {
    id: "t3",
    name: "Kevin Sanjaya",
    role: "Mahasiswa Tingkat Akhir",
    company: "Universitas Swasta",
    quote: "Kuliah seringkali terlalu banyak teori abstrak. Praktik langsung 70% di lab simulasi OpenClaw ini membuka mata saya tentang cara kerja jaringan komputer di dunia nyata secara aman. Sangat direkomendasikan untuk pemula IT!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80&referrerpolicy=no-referrer"
  }
];
