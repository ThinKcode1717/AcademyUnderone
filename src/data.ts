/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, WeeklyModule, SkillBenefit, Testimonial } from './types';

export interface ValueProp {
  title: string;
  description: string;
  subDetail: string;
  iconName: string;
}

export const valueProps: { id: ValueProp[]; en: ValueProp[] } = {
  id: [
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
  ],
  en: [
    {
      title: "Tailored for Beginners",
      description: "Learning materials are structured from the ground up to be easily understood by students with no technical background.",
      subDetail: "We avoid confusing technical jargon and explain every fundamental concept step-by-step.",
      iconName: "SmilingFace",
    },
    {
      title: "Practical Hands-on Method",
      description: "The learning process emphasizes safe, practical exercises in secure sandbox environments.",
      subDetail: "Each session is accompanied by guided practices you can run directly on your own computer.",
      iconName: "HandsDoing",
    },
    {
      title: "Dedicated Mentorship",
      description: "Guided intensively by experienced instructors who understand the hurdles of starting from scratch.",
      subDetail: "Interactive Q&A sessions are provided in every meeting to keep you on track.",
      iconName: "TeacherMentor",
    },
    {
      title: "Supportive Community",
      description: "Join hundreds of other learners with similar interests and career development goals.",
      subDetail: "Get access to active group chats, Q&A forums, and additional learning resources.",
      iconName: "PeopleCommunity",
    }
  ]
};

export const skillsBenefits: { id: SkillBenefit[]; en: SkillBenefit[] } = {
  id: [
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
  ],
  en: [
    {
      title: "Understanding System Connections",
      capability: "Understand how computers, websites, and servers connect and communicate with each other.",
      industry: "Essential basic knowledge: \"It is not magic; everything operates on simple logic.\"",
      iconName: "Server",
    },
    {
      title: "Fundamental Security Concepts",
      capability: "Understand why digital security matters and learn practical measures to protect systems.",
      industry: "Applicable in any tech role, and highly useful for personal digital safety.",
      iconName: "Globe",
    },
    {
      title: "Confident Tool Operation",
      capability: "Operate professional tools like OpenClaw comfortably without the fear of making mistakes.",
      industry: "Boosts your market value in recruiters' eyes (from zero knowledge to active operator).",
      iconName: "Fingerprint",
    },
    {
      title: "Safe System Scanning",
      capability: "Perform system scanning safely and learn how to read and interpret scanned results.",
      industry: "Core prerequisite skill for carrying out digital security assessments.",
      iconName: "Activity",
    },
    {
      title: "Reading Technical Reports",
      capability: "Read and comprehend technical security reports that previously looked completely confusing.",
      industry: "A highly valued asset in technical coordination or general business roles.",
      iconName: "Bug",
    },
    {
      title: "Critical Security Thinking",
      capability: "Ask smart, analytical questions and detect potential security loopholes at work or at home.",
      industry: "Assists personal development with deep intuition: \"Knowing what you need to look for.\"",
      iconName: "Cpu",
    },
    {
      title: "Tech Skill Confidence",
      capability: "Enhance your self-confidence to keep learning and exploring digital landscapes.",
      industry: "Shifts mindsets from \"I am not a tech person\" to \"I can master technology too.\"",
      iconName: "Eye",
    },
    {
      title: "New Career Opportunities",
      capability: "Build a strong foundational pillar to transition into promising cybersecurity career pathways.",
      industry: "Excellent headstart before deep specialization (DevSecOps, SOC Analyst, Security Auditor).",
      iconName: "FileCheck",
    }
  ]
};

export const weeklyModules: { id: WeeklyModule[]; en: WeeklyModule[] } = {
  id: [
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
  ],
  en: [
    {
      week: "Week 1",
      title: "Introduction & Setup (Understand the basics)",
      description: "Demystify OpenClaw. In this first week, we guide you from the installation process to safely running your very first scan.",
      details: [
        "Module 1.1: What is OpenClaw? Why learn it? (Dispelling Hollywood hacker myths)",
        "Module 1.2: Internet & Network Basics (How computers communicate - IP, Port, Protocols with easy analogies)",
        "Module 1.3: OpenClaw Installation & Setup (Step-by-step walkthrough for Windows, Mac, and Linux)",
        "Module 1.4: Interface Tour (Get familiar with primary menus and controls without fearing you will break anything)"
      ],
      labName: "Lab 1: Hello OpenClaw - Executing your first scan on a safe target environment"
    },
    {
      week: "Week 2",
      title: "Reconnaissance Basics (Learning to collect information safely)",
      description: "Learn to discover initial information about targets legally and ethically. Here, you will understand how actual system discovery works.",
      details: [
        "Module 2.1: Legal & Ethical Guidelines (Crucial! Differentiating ethical learning from illegal activities)",
        "Module 2.2: Information Gathering Concepts (Passive vs Active Reconnaissance explained simply)",
        "Module 2.3: Operating OpenClaw Scanning Features (Step-by-step scanning operations)",
        "Module 2.4: Analyzing Your First Scan (Reading outputs and understanding risk levels/severity)"
      ],
      labName: "Lab 2: Scan & Report - Performing discovery and documenting findings"
    },
    {
      week: "Week 3",
      title: "Understanding Vulnerabilities (What does it mean when OpenClaw finds something?)",
      description: "Unravel the meaning behind findings. You will learn to recognize common digital vulnerabilities using relatable daily examples.",
      details: [
        "Module 3.1: What is a Vulnerability? (Real-world analogies instead of complex technical jargon)",
        "Module 3.2: 10 Common Vulnerabilities Detected by OpenClaw (Real examples and detection paths)",
        "Module 3.3: Interpreting Vulnerability Reports (Reading risk details, severity ratings, and impact)",
        "Module 3.4: Writing Simple Assessment Reports (Documenting findings and recommending basic fixes)"
      ],
      labName: "Lab 3: Full Scan & Analysis - Conducting a complete digital security audit inside cloud sandbox"
    },
    {
      week: "Week 4",
      title: "Integration, Best Practices & Next Steps (Putting it all together)",
      description: "Combine all your acquired skills to apply them in real-world scenarios and map out your tech career goals.",
      details: [
        "Module 4.1: Building Your Workspace (Creating scanning templates for optimal efficiency)",
        "Module 4.2: OpenClaw in the Security Ecosystem (How it operates alongside modern industry standards)",
        "Module 4.3: Career Pathways & Job Openings (Exploring roles, writing resumes, and preparing for interviews)",
        "Module 4.4: Continuous Learning & Community (Free resources, forums, and tips to stay updated in tech)"
      ],
      labName: "Lab 4: Capstone Project - Simulating a comprehensive digital audit and reflecting on findings"
    }
  ]
};

export const FAQs: { id: FAQItem[]; en: FAQItem[] } = {
  id: [
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
  ],
  en: [
    {
      question: "Do I need an IT or programming background?",
      answer: "Not at all! Our curriculum is designed from scratch for pure beginners. All you need is curiosity and a willingness to follow along step-by-step."
    },
    {
      question: "I am afraid I won't understand. Are the instructors patient?",
      answer: "Incredibly patient! Our instructors understand exactly what it feels like to learn a new field from zero. No question is ever silly, and there are dedicated Q&A sessions in each class."
    },
    {
      question: "Will there be a lot of coding or programming?",
      answer: "No coding is required. OpenClaw is a user-friendly program/tool. You only need to understand the primary menus, buttons, and overall logic of usage."
    },
    {
      question: "How many hours per week should I allocate?",
      answer: "Around 15-20 hours a week. The schedule is highly flexible—you can spread it out (e.g., 3 hours a day), making it very compatible with jobs or university courses."
    },
    {
      question: "What happens if I miss a live session?",
      answer: "All live classes are recorded in high quality and uploaded to the Student Portal within 2 hours. You can review them anytime and ask questions in our active community."
    },
    {
      question: "Is this legal to learn? Will I learn how to hack illegally?",
      answer: "This training is 100% legal and ethical. We practice inside isolated cloud sandbox environments (simulations). We also include dedicated sections on cyber law so you know legal boundaries."
    },
    {
      question: "Are the practical labs safe for my computer?",
      answer: "Completely safe! Our labs run on cloud sandbox servers. Your computer is never exposed to viruses or other hazards when performing scan experiments."
    },
    {
      question: "Do I get lifetime access to the materials?",
      answer: "It depends on your selected package. Starter grants 4 weeks access (during course), Standard grants an extra 2 months, and Premium grants 6 full months of portal access. All packages get lifetime alumni community access."
    },
    {
      question: "Is there a guaranteed job placement after graduation?",
      answer: "We do not promise instant jobs, but we support you 100% in building your portfolio, doing mock interviews, polishing your CV, and matching your profile directly with FEDUCATION's network."
    },
    {
      question: "What if I find out the course isn't suitable for me?",
      answer: "We offer a risk-free 30-day 100% money-back guarantee from the moment you sign up, with zero hassle or complicated procedures if it does not meet your expectations."
    },
    {
      question: "Do I need to buy any expensive hardware or software?",
      answer: "No! OpenClaw is free and open-source. All necessary materials, sandbox configurations, and learning resources are included in the tuition fee."
    },
    {
      question: "Can I learn while working full-time?",
      answer: "Absolutely! Most of our alumni are busy working professionals. Relive recordings and support forums are available 24/7 to suit your personal schedule."
    },
    {
      question: "Is there 1-on-1 private mentoring available?",
      answer: "1-on-1 private mentoring is included in Standard (1x per month) and Premium (2x per month). For all tiers, you are free to consult in our weekly group Q&As."
    },
    {
      question: "How do I register? Is the process complicated?",
      answer: "Extremely simple! It takes less than a minute to fill out the form below. Our enrollment advisor will then reach out to guide you through payment and onboarding."
    },
    {
      question: "Is there a community to join after the course?",
      answer: "Yes, indeed! You will be invited to our lifetime alumni group where you can network, share job opportunities, talk about projects, and support each other's tech journeys."
    }
  ]
};

export const testimonials: { id: Testimonial[]; en: Testimonial[] } = {
  id: [
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
  ],
  en: [
    {
      id: "t1",
      name: "Adi Pratama",
      role: "Non-IT Graduate / Self-taught",
      company: "Now in Tech Support",
      quote: "I used to think security is only for math geniuses. The instructors' explanations here are so simple, using relatable day-to-day analogies. I am now extremely confident operating professional digital scanning tools!",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80&referrerpolicy=no-referrer"
    },
    {
      id: "t2",
      name: "Rina Wijaya",
      role: "Career Changer",
      company: "Former Administrative Staff",
      quote: "As a pure beginner, I was afraid of looking foolish when asking questions. But at OpenClaw, the vibe is extremely encouraging, friendly, and non-judgmental. The perfect course for pivoting into tech!",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80&referrerpolicy=no-referrer"
    },
    {
      id: "t3",
      name: "Kevin Sanjaya",
      role: "Final Year Student",
      company: "Private University",
      quote: "College courses are often filled with abstract theory. The 70% hands-on exercises in the OpenClaw labs showed me how network architecture actually runs in real life. Highly recommended for IT beginners!",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80&referrerpolicy=no-referrer"
    }
  ]
};
