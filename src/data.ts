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
      title: "Memahami Cara Kerja AI",
      capability: "Tahu bagaimana AI Agent, Large Language Model (LLM), dan sistem otomatisasi bekerja di balik layar.",
      industry: "Sangat mendasar dan penting: Memahami logika AI dan cara memberi perintah (prompting) efektif.",
      iconName: "Server",
    },
    {
      title: "Otomatisasi Tugas Rutin",
      capability: "Mengonfigurasi AI Agent untuk menyelesaikan pekerjaan rutin seperti merangkum email dan menyusun data.",
      industry: "Bisa diaplikasikan langsung untuk menghemat jam kerja harian Anda secara signifikan.",
      iconName: "Globe",
    },
    {
      title: "Percaya Diri Menggunakan Tool",
      capability: "Bisa menggunakan tools profesional seperti OpenClaw dengan nyaman tanpa rasa takut salah klik.",
      industry: "Meningkatkan nilai produktivitas dan keunggulan Anda di era kerja cerdas masa kini.",
      iconName: "Fingerprint",
    },
    {
      title: "Koneksi & Alur Kerja Pintar",
      capability: "Menghubungkan asisten virtual AI Anda dengan aplikasi produktivitas harian secara lancar.",
      industry: "Keterampilan bernilai tinggi dalam posisi koordinasi bisnis atau administratif apa pun.",
      iconName: "Activity",
    },
    {
      title: "Analisis Dokumen & Data Cepat",
      capability: "Memanfaatkan asisten pintar untuk membaca dokumen panjang dan mengekstrak data penting dalam hitungan detik.",
      industry: "Sangat menunjang efisiensi kerja di bidang marketing, administrasi, hingga manajemen.",
      iconName: "Bug",
    },
    {
      title: "Berpikir Logis & Sistematis",
      capability: "Melatih pola pikir computational thinking dalam merancang alur otomatisasi asisten virtual.",
      industry: "Membantu memecahkan masalah kerja dengan solusi teknologi pintar yang terstruktur.",
      iconName: "Cpu",
    },
    {
      title: "Confidence dengan Teknologi",
      capability: "Meningkatkan rasa percaya diri untuk berinteraksi dengan AI dan sistem asisten modern.",
      industry: "Mengubah pola pikir dari \"saya gaptek\" menjadi \"saya mampu mendelegasikan tugas ke AI.\"",
      iconName: "Eye",
    },
    {
      title: "Membuka Peluang Karir Baru",
      capability: "Membangun landasan kokoh untuk merambah ke dunia otomatisasi digital dan spesialisasi AI.",
      industry: "Langkah awal sempurna untuk meningkatkan daya saing karir Anda di era kecerdasan buatan.",
      iconName: "FileCheck",
    }
  ],
  en: [
    {
      title: "Understanding AI Workflows",
      capability: "Understand how AI Agents, Large Language Models (LLMs), and automation systems operate behind the scenes.",
      industry: "Essential knowledge: Grasping AI logic and crafting highly effective instructions.",
      iconName: "Server",
    },
    {
      title: "Repetitive Task Automation",
      capability: "Configure AI Agents to automate routine chores like summarizing emails and generating spreadsheets.",
      industry: "Can be deployed directly to save hours of manual operations every single day.",
      iconName: "Globe",
    },
    {
      title: "Confident Tool Deployment",
      capability: "Run powerful tools like OpenClaw smoothly to execute your custom daily automations.",
      industry: "Supercharges your efficiency as a highly valued modern digital worker.",
      iconName: "Fingerprint",
    },
    {
      title: "Smart App Integrations",
      capability: "Connect AI Agents with the software applications you use daily securely and seamlessly.",
      industry: "Future-proof skill essential for modern, highly efficient business operations.",
      iconName: "Activity",
    },
    {
      title: "Rapid Data Analysis",
      capability: "Utilize AI to read through massive documents and extract key data points within seconds.",
      industry: "Incredibly high-value skill for administrative, marketing, and management roles.",
      iconName: "Bug",
    },
    {
      title: "Computational Thinking",
      capability: "Train your logical mindset to design custom automated workflows and processes.",
      industry: "Helps you break down complex administrative hurdles logically and systematically.",
      iconName: "Cpu",
    },
    {
      title: "Tech Adaptability Confidence",
      capability: "Shift your mindset from \"I don't understand AI\" to \"I can successfully deploy AI to work for me\".",
      industry: "Gives you complete confidence in adapting to modern technological shifts.",
      iconName: "Eye",
    },
    {
      title: "AI-Driven Career Pathways",
      capability: "Build an impressive portfolio of custom automations to land modern AI-powered roles.",
      industry: "A solid foundation to transition into high-demand roles like Operations Specialist or AI Automation Consultant.",
      iconName: "FileCheck",
    }
  ]
};

export const weeklyModules: { id: WeeklyModule[]; en: WeeklyModule[] } = {
  id: [
    {
      week: "Minggu 1",
      title: "Pengenalan AI Agent & Setup (The Automation Mindset)",
      description: "Menghilangkan kebingungan seputar AI. Di minggu pertama ini, kami membimbing Anda memahami cara kerja AI Agent dasar serta mengonfigurasi OpenClaw dengan mudah.",
      details: [
        "Module 1.1: Apa itu OpenClaw? Bagaimana AI Agent membantu tugas harian dan bisnis? (Prinsip kerja cerdas vs kerja keras)",
        "Module 1.2: Memahami Aliran Otomatisasi (Bagaimana AI menerima instruksi dan menyelesaikan tugas mandiri)",
        "Module 1.3: Instalasi & Setup OpenClaw (Walkthrough lengkap langkah demi langkah untuk sistem Windows, Mac, dan Linux)",
        "Module 1.4: Tur Antarmuka (Interface Tour) OpenClaw (Mengenal dashboard kontrol AI Agent pertama Anda tanpa rasa takut salah klik)"
      ],
      labName: "Lab 1: Hello OpenClaw - Menjalankan otomatisasi instruksi sederhana pertama Anda"
    },
    {
      week: "Minggu 2",
      title: "Data & Task Automation (Mendelegasikan tugas administratif rutin)",
      description: "Belajar mendelegasikan tugas administratif harian Anda. Anda akan memahami cara menghubungkan dokumen dan memproses berbagai jenis data secara otomatis.",
      details: [
        "Module 2.1: Otomatisasi Dokumen (Merangkum laporan panjang, membaca PDF, dan mengekstrak data penting)",
        "Module 2.2: AI untuk Komunikasi & Email (Membuat draf balasan pesan cerdas otomatis berdasarkan kata kunci)",
        "Module 2.3: Logika Kondisional AI Agent (Mengajari asisten AI membuat keputusan sederhana: jika 'A' maka lakukan 'B')",
        "Module 2.4: Memantau Sesi AI (Memastikan AI Agent menyelesaikan seluruh rangkaian tugas dengan benar)"
      ],
      labName: "Lab 2: Assistant Builder - Membuat asisten perangkum email dan data laporan otomatis"
    },
    {
      week: "Minggu 3",
      title: "Web & API Integrations (Menghubungkan asisten dengan dunia luar)",
      description: "Belajar menghubungkan AI Agent Anda dengan web dan layanan cloud populer untuk mengambil atau menyimpan informasi secara real-time.",
      details: [
        "Module 3.1: Konsep Integrasi & Web Scraping Sederhana (Mengumpulkan info dari halaman web secara otomatis)",
        "Module 3.2: Sinkronisasi Google Workspace / Spreadsheet (Membaca dan menulis baris data langsung menggunakan asisten AI)",
        "Module 3.3: Memanfaatkan API AI (Mengintegrasikan API key untuk memperluas kemampuan berpikir asisten digital Anda)",
        "Module 3.4: Praktik Keamanan Data Otomatisasi (Tips menjaga data pribadi dan API key Anda tetap aman)"
      ],
      labName: "Lab 3: Sheet Sync - Membangun AI Agent pencari info produk lalu menyimpannya langsung ke spreadsheet"
    },
    {
      week: "Minggu 4",
      title: "Advanced Workflows & Capstone (Asisten otomatis mandiri 24/7)",
      description: "Menggabungkan seluruh keterampilan yang dipelajari untuk membuat sistem otomatisasi yang berjalan mandiri di latar belakang.",
      details: [
        "Module 4.1: Menjadwalkan Otomatisasi Tugas (Menjalankan tugas secara rutin setiap jam, harian, atau setiap pagi)",
        "Module 4.2: Penanganan Kesalahan (Error Handling) Pintar (Mengajari AI mendeteksi glitch dan mengulangi proses secara otomatis)",
        "Module 4.3: Menyusun Portofolio AI Produktivitas (Menampilkan asisten buatan sendiri ke rekan kerja, atasan, atau klien)",
        "Module 4.4: Langkah Belajar Lanjut & Komunitas (Resource gratis untuk terus mengoptimalkan performa AI Agent Anda)"
      ],
      labName: "Lab 4: Capstone Project - Simulasi otomatisasi tugas harian menyeluruh dan presentasi asisten mandiri Anda"
    }
  ],
  en: [
    {
      week: "Week 1",
      title: "AI Agent Introduction & Setup (The Automation Mindset)",
      description: "Erase any fear of learning AI. In this first week, we guide you through setting up OpenClaw and understanding how basic AI Agents work.",
      details: [
        "Module 1.1: What is OpenClaw? How can AI Agents assist in daily operations? (Work smart vs work hard principle)",
        "Module 1.2: Understanding Automation Flows (How AI receives instructions and runs tasks independently)",
        "Module 1.3: Installation & Configuration (Step-by-step beginner walkthrough for Windows, Mac, and Linux)",
        "Module 1.4: Interface Tour (Familiarize yourself with your first AI Agent control dashboard with confidence)"
      ],
      labName: "Lab 1: Hello OpenClaw - Executing your very first simple automation command"
    },
    {
      week: "Week 2",
      title: "Data & Task Automation (Delegating repetitive chores)",
      description: "Start delegating administrative tasks. Learn to connect documents and process various data files automatically.",
      details: [
        "Module 2.1: Document Automation (Summarizing PDF papers, parsing files, and moving data seamlessly)",
        "Module 2.2: AI-Powered Communications (Drafting smart email replies based on incoming keywords)",
        "Module 2.3: Conditional Agent Logic (Teaching your AI to make simple decisions: if 'A' then do 'B')",
        "Module 2.4: Monitoring Agent Sessions (Ensuring your AI Agent completes its assigned tasks correctly)"
      ],
      labName: "Lab 2: Assistant Builder - Creating an automatic email and document summarizer assistant"
    },
    {
      week: "Week 3",
      title: "Web & API Integrations (Connecting your assistant to the world)",
      description: "Connect your AI Agent with external web resources and popular cloud services to fetch or store real-time information.",
      details: [
        "Module 3.1: Simplified Web Integration Concepts (Harvesting info from web pages automatically)",
        "Module 3.2: Connecting Google Workspace / Spreadsheet (Reading and writing row data directly using AI)",
        "Module 3.3: Leveraging AI APIs (Integrating API keys to expand OpenClaw's intelligence capabilities)",
        "Module 3.4: Secure Automation Practices (Crucial guidelines to keep your private data and API keys safe)"
      ],
      labName: "Lab 3: Sheet Sync - Building an AI Agent that searches for product info and saves it into a spreadsheet"
    },
    {
      week: "Week 4",
      title: "Advanced Workflows & Capstone (Deploying 24/7 self-running assistants)",
      description: "Synthesize everything you have learned to build a personal automated assistant that works background tasks.",
      details: [
        "Module 4.1: Scheduling Task Operations (Setting up routines to trigger actions hourly or every morning)",
        "Module 4.2: Graceful Error Handling (Teaching your AI Agent to handle glitches and retry operations safely)",
        "Module 4.3: AI Productivity Portfolio (Organizing your self-made assistants to showcase to clients or team leaders)",
        "Module 4.4: Next Steps & Continuous Growth (Free tools, communities, and guidelines to keep building AI Agents)"
      ],
      labName: "Lab 4: Capstone Automation - Showcasing your custom self-built daily task automation system"
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
      answer: "Tidak ada keharusan bisa coding. OpenClaw adalah sebuah program/tool siap pakai yang ramah pengguna. Anda hanya perlu memahami logika dasarnya untuk melatih AI Agent buatan Anda."
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
      question: "Apakah ini legal untuk dipelajari? Apakah ada risiko penyalahgunaan?",
      answer: "Pelatihan ini 100% legal dan etis. Kita belajar mengotomatiskan produktivitas dan alur kerja menggunakan AI Agent resmi di lingkungan belajar terisolasi (sandbox). Tidak ada materi mengenai tindakan meretas atau eksploitasi ilegal."
    },
    {
      question: "Bagaimana dengan lab praktisnya? Apakah aman bagi komputer saya?",
      answer: "Sangat aman! Laboratorium otomatisasi kami berjalan di server cloud sandbox milik UnderOne Academy. Komputer Anda tidak akan mengalami gangguan apa pun saat bereksperimen dengan AI Agent."
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
      answer: "No coding is required. OpenClaw is a user-friendly program/tool. You only need to understand the fundamental logic of deploying your AI Agents."
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
      question: "Is this legal to learn? Are there any misuse risks?",
      answer: "Completely legal and 100% ethical! We learn productivity automation using official AI Agents inside isolated learning sandboxes. There are no malicious hacking or exploit materials."
    },
    {
      question: "Are the practical labs safe for my computer?",
      answer: "Completely safe! Our automation labs run on secure cloud sandboxes. Your computer is never exposed to any risks while experimenting with AI Agents."
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
      quote: "Dulu saya pikir belajar otomatisasi AI itu hanya untuk jenius pemrograman. Penjelasan instruktur di UnderOne Academy begitu sederhana, menggunakan analogi sehari-hari yang mudah diingat. Sekarang saya sangat percaya diri membuat asisten otomatis kerja sendiri!",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80&referrerpolicy=no-referrer"
    },
    {
      id: "t2",
      name: "Rina Wijaya",
      role: "Career Changer",
      company: "Mantan Pegawai Administrasi",
      quote: "Sebagai pemula murni, saya sempat takut merasa bodoh saat bertanya. Namun di UnderOne Academy, suasananya sangat mendukung, ramah, dan bebas menghakimi. Kursus terbaik untuk siapa saja yang ingin melipatgandakan produktivitas kerja harian!",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80&referrerpolicy=no-referrer"
    },
    {
      id: "t3",
      name: "Kevin Sanjaya",
      role: "Mahasiswa Tingkat Akhir",
      company: "Universitas Swasta",
      quote: "Kuliah seringkali terlalu banyak teori abstrak. Praktik langsung 70% di lab simulasi otomatisasi OpenClaw ini membuka mata saya tentang cara mendelegasikan tugas berulang ke AI secara nyata. Sangat merekomendasikan program ini untuk produktivitas kerja!",
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
      quote: "I used to think AI automation is only for programming geniuses. The instructors' explanations here are so simple, using relatable day-to-day analogies. I am now extremely confident creating my own automated work assistants!",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80&referrerpolicy=no-referrer"
    },
    {
      id: "t2",
      name: "Rina Wijaya",
      role: "Career Changer",
      company: "Former Administrative Staff",
      quote: "As a pure beginner, I was afraid of looking foolish when asking questions. But at UnderOne Academy, the vibe is extremely encouraging, friendly, and non-judgmental. The perfect course for doubling your daily work efficiency!",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80&referrerpolicy=no-referrer"
    },
    {
      id: "t3",
      name: "Kevin Sanjaya",
      role: "Final Year Student",
      company: "Private University",
      quote: "College courses are often filled with abstract theory. The 70% hands-on exercises in the OpenClaw labs showed me how to actually delegate routine tasks to AI in real life. Highly recommended for boosting productivity!",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80&referrerpolicy=no-referrer"
    }
  ]
};
