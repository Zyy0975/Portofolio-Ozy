/**
 * Muhammad Ghozy - Portfolio Interaktif (SMKN 6 Surakarta)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Data Proyek untuk Modal Detail
  const projectsData = {
    sims: {
      title: "Sistem Informasi Manajemen Sekolah",
      badge: "Proyek Sekolah",
      version: "SMK // v1.2",
      image: "assets/images/project-nexus.jpg",
      tags: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "Chart.js"],
      tagline: "Aplikasi pengelolaan data siswa, guru, dan rekapitulasi absensi berbasis web dengan dashboard interaktif serta laporan otomatis.",
      description: "Sistem Informasi Manajemen Sekolah dikembangkan untuk memodernisasi tata kelola administrasi di lingkungan sekolah. Dilengkapi dengan otentikasi multi-role (Admin, Guru, Siswa), visualisasi grafik statistik kehadiran secara real-time, pencatatan nilai akademik, serta ekspor laporan ke format PDF dan Excel.",
      highlights: [
        "Dashboard rekapitulasi data akademik terintegrasi dengan filter dinamis",
        "Otentikasi multi-level dengan proteksi data siswa dan hak akses ketat",
        "Modul absensi digital dengan generate laporan otomatis per periode semester"
      ],
      demoUrl: "https://github.com",
      githubUrl: "https://github.com"
    },
    umkm: {
      title: "Platform E-Commerce UMKM Lokal",
      badge: "UMKM Surakarta",
      version: "LIVE // PROD",
      image: "assets/images/project-finpulse.jpg",
      tags: ["Laravel", "PHP", "Tailwind CSS", "Alpine.js", "MySQL", "WhatsApp API"],
      tagline: "Toko online responsif untuk UMKM Surakarta dengan integrasi katalog produk, manajemen keranjang belanja, dan direct checkout WhatsApp.",
      description: "Platform e-commerce yang dirancang untuk membantu para pelaku UMKM di area Surakarta memasarkan produk secara digital. Sistem ini menyediakan manajemen inventaris barang, penghitungan ongkos kirim otomatis, serta fitur pesanan instan langsung terhubung ke WhatsApp penjual.",
      highlights: [
        "Sistem katalog produk interaktif dengan pencarian instan dan filter kategori",
        "Direct checkout WhatsApp otomatis dengan format pesan pesanan terstruktur",
        "Panel admin intuitif untuk pengelolaan stok, pesanan masuk, dan promosi diskon"
      ],
      demoUrl: "https://github.com",
      githubUrl: "https://github.com"
    },
    landing: {
      title: "Aplikasi Landing Page Interaktif",
      badge: "Front-End Showcase",
      version: "WEB // v2.0",
      image: "assets/images/project-aether.jpg",
      tags: ["HTML5", "Tailwind CSS", "JavaScript ES6", "CSS Grid", "AOS"],
      tagline: "Showcase produk digital modern dengan animasi mikro halus, navigasi dinamis, dan skor Core Web Vitals optimal di seluruh perangkat seluler.",
      description: "Proyek eksplorasi frontend dengan fokus pada performa maksimal dan estetika modern cyber-minimalis. Mengadopsi prinsip Mobile-First, tipografi harmonis, dan animasi mikro berbasis CSS murni untuk menghadirkan pengalaman pengguna yang interaktif dan memikat.",
      highlights: [
        "Skor Core Web Vitals 95+ pada Lighthouse Google dengan ukuran bundle super ringan",
        "Desain sepenuhnya responsif mulai dari resolusi 320px hingga monitor 4K",
        "Navigasi dinamis dengan smooth scroll dan deteksi posisi halaman real-time"
      ],
      demoUrl: "https://github.com",
      githubUrl: "https://github.com"
    },
    todo: {
      title: "Aplikasi Catatan & To-Do List",
      badge: "Produktivitas",
      version: "APP // v1.0",
      image: "assets/images/project-terminal.jpg",
      tags: ["JavaScript", "Tailwind CSS", "LocalStorage", "HTML5", "UX/UI"],
      tagline: "Aplikasi web produktivitas sederhana dengan fitur filter kategori tugas, dark mode toggle, serta penyimpanan data browser berbasis LocalStorage.",
      description: "Aplikasi manajemen tugas harian yang cepat dan ringan. Memungkinkan pengguna mencatat to-do list, menandai tugas selesai, memfilter berdasarkan status (Semua, Aktif, Selesai), serta menyimpan data secara persisten di browser tanpa perlu registrasi akun.",
      highlights: [
        "Penyimpanan offline persisten menggunakan Web LocalStorage API",
        "Fitur pencarian dan filter status tugas dengan pembaruan DOM instan",
        "Dukungan mode gelap (Dark Mode) bawaan yang tersinkronisasi otomatis"
      ],
      demoUrl: "https://github.com",
      githubUrl: "https://github.com"
    }
  };

  // Toast Notification Helper
  const toastEl = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  let toastTimer = null;

  function showToast(message, duration = 3000) {
    if (!toastEl || !toastMsg) return;
    toastMsg.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, duration);
  }

  // Theme Management (Dark / Light)
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  
  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      if (themeIcon) themeIcon.textContent = 'dark_mode';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      if (themeIcon) themeIcon.textContent = 'light_mode';
      localStorage.setItem('theme', 'light');
    }
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    applyTheme(false);
  } else {
    applyTheme(true);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isCurrentlyDark = document.documentElement.classList.contains('dark');
      applyTheme(!isCurrentlyDark);
      showToast(!isCurrentlyDark ? 'Mode Gelap Aktif' : 'Mode Terang Aktif', 2000);
    });
  }

  // Mobile Menu Drawer
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('hidden');
      setTimeout(() => {
        mobileDrawer.classList.add('active');
      }, 10);
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('active');
      setTimeout(() => {
        mobileDrawer.classList.add('hidden');
        document.body.style.overflow = '';
      }, 250);
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileMenu);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  // Active Link Highlighting with IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav[data-nav="desktop"] a');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-primary-container', 'bg-surface-container-high');
            link.classList.remove('text-on-surface-variant');
            link.setAttribute('aria-current', 'page');
          } else {
            link.classList.remove('text-primary-container', 'bg-surface-container-high');
            link.classList.add('text-on-surface-variant');
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  }, { root: null, rootMargin: '-20% 0px -60% 0px', threshold: 0 });

  sections.forEach(section => navObserver.observe(section));

  // Animated Numbers Counter for Credibility Ribbon
  const counterElements = document.querySelectorAll('.stat-counter');
  let countersAnimated = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        counterElements.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const duration = 1500;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOut * target);

            counter.textContent = currentVal;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target;
            }
          }

          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.3 });

  const ribbonEl = document.querySelector('.credibility-ribbon');
  if (ribbonEl) counterObserver.observe(ribbonEl);

  // Project Details Modal Handling
  const projectModal = document.getElementById('project-modal');
  const projectCloseBtn = document.getElementById('modal-close-btn');
  const projectModalImg = document.getElementById('modal-project-img');
  const projectModalTitle = document.getElementById('modal-project-title');
  const projectModalBadge = document.getElementById('modal-project-badge');
  const projectModalVersion = document.getElementById('modal-project-version');
  const projectModalTagline = document.getElementById('modal-project-tagline');
  const projectModalDesc = document.getElementById('modal-project-desc');
  const projectModalTags = document.getElementById('modal-project-tags');
  const projectModalHighlights = document.getElementById('modal-project-highlights');

  function openProjectModal(key) {
    const data = projectsData[key];
    if (!data || !projectModal) return;

    if (projectModalImg) projectModalImg.src = data.image;
    if (projectModalTitle) projectModalTitle.textContent = data.title;
    if (projectModalBadge) projectModalBadge.textContent = data.badge;
    if (projectModalVersion) projectModalVersion.textContent = data.version;
    if (projectModalTagline) projectModalTagline.textContent = data.tagline;
    if (projectModalDesc) projectModalDesc.textContent = data.description;

    if (projectModalTags) {
      projectModalTags.innerHTML = data.tags
        .map(t => `<span class="px-2.5 py-1 rounded-md bg-surface-container-high font-label-mono-xs text-label-mono-xs text-primary font-mono">${t}</span>`)
        .join('');
    }

    if (projectModalHighlights) {
      projectModalHighlights.innerHTML = data.highlights
        .map(h => `<li class="flex items-start gap-2.5 text-body-sm text-on-surface-variant"><span class="text-primary-container font-bold">•</span><span>${h}</span></li>`)
        .join('');
    }

    projectModal.classList.remove('hidden');
    setTimeout(() => {
      projectModal.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    setTimeout(() => {
      projectModal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 250);
  }

  document.querySelectorAll('[data-project-key]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-project-key');
      openProjectModal(key);
    });
  });

  if (projectCloseBtn) projectCloseBtn.addEventListener('click', closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  // Quick Message Form Submission
  const quickMsgForm = document.getElementById('quick-msg-form');
  if (quickMsgForm) {
    quickMsgForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = quickMsgForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="material-symbols-outlined text-[18px] animate-spin">refresh</span> Mengirim...`;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        quickMsgForm.reset();
        showToast("Pesan berhasil dikirim! Muhammad Ghozy akan segera merespons.", 4000);
      }, 1000);
    });
  }

  // Copy Email to Clipboard
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = "mghozy@gmail.com";
      try {
        await navigator.clipboard.writeText(email);
        showToast("Alamat email berhasil disalin (mghozy@gmail.com)!");
      } catch (err) {
        showToast("Email: mghozy@gmail.com");
      }
    });
  });

  // ESC Key Modal Closer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeMobileMenu();
    }
  });

  // Resume Download Button feedback
  const resumeBtn = document.getElementById('download-resume-btn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      showToast("Mengunduh CV / Resume Muhammad Ghozy (PDF)...", 3000);
    });
  }
});
