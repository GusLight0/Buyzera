/* ========================================
   BUYZERA - Enhanced JavaScript
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
  // ========================================
  // MOBILE MENU
  // ========================================
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mobileNav = document.querySelector(".mobile-nav")

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", function () {
      const isOpen = mobileNav.classList.toggle("active")
      const icon = this.querySelector("svg")

      icon.innerHTML = isOpen
        ? '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'
        : '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>'
    })

    // Close menu on link click
    mobileNav.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("svg")
        icon.innerHTML =
          '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>'
      })
    })
  }

  // ========================================
  // HEADER SCROLL EFFECT
  // ========================================
  const header = document.querySelector(".header")
  let lastScroll = 0

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 100) {
      header.style.boxShadow = "0 4px 24px -4px rgba(255, 107, 53, 0.15)"
    } else {
      header.style.boxShadow = "none"
    }

    lastScroll = currentScroll
  })

  // ========================================
  // SMOOTH SCROLL
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")

      if (targetId === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" })
        return
      }

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight + 40
        const announcementBar = document.querySelector(".announcement-bar")
        const announcementHeight = announcementBar ? announcementBar.offsetHeight : 0
        const targetPosition = targetElement.offsetTop - headerHeight - announcementHeight

        window.scrollTo({ top: targetPosition, behavior: "smooth" })
      }
    })
  })

  // ========================================
  // ACTIVE NAV LINK
  // ========================================
  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll("section[id]")
  
  // Verifica se estamos na página inicial para ativar o comportamento de scroll spy
  const isHomePage = window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/") || window.location.pathname.includes("/Buyzera/");

  function setActiveNav() {
    if (!isHomePage) return; // Não executa a lógica de scroll se não for a home

    const scrollPos = window.scrollY + 250
    
    let currentSectionId = "home"

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = sectionId
      }
    })

    if (window.scrollY < 100) {
      currentSectionId = "home"
    }

    navLinks.forEach((link) => {
      link.classList.remove("active")
      const href = link.getAttribute("href")

      if (currentSectionId === "home") {
        if ((href === "index.html" || href === "#" || link.textContent.trim() === "Início") && !link.classList.contains("nav-link-flash")) {
          link.classList.add("active")
        }
      } else {
        if (href === "#" + currentSectionId) {
          link.classList.add("active")
        }
      }
    })
  }

  window.addEventListener("scroll", setActiveNav)
  setActiveNav()

  // ========================================
  // INTERSECTION OBSERVER ANIMATIONS
  // ========================================
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Animate categories
  document.querySelectorAll(".category-card").forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(24px)"
    card.style.transition = `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`
    observer.observe(card)
  })

  // Animate products
  document.querySelectorAll(".product-card").forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(24px)"
    card.style.transition = `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s`
    observer.observe(card)
  })

  // Animate partners
  document.querySelectorAll(".partner-card").forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(24px)"
    card.style.transition = `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
    observer.observe(card)
  })

  // ========================================
  // FAVORITE BUTTONS
  // ========================================
  document.querySelectorAll(".favorite-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault()
      e.stopPropagation()

      this.classList.toggle("active")

      // Add pop animation
      this.style.transform = "scale(1.2)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 150)
    })
  })

  // ========================================
  // SEARCH FUNCTIONALITY
  // ========================================
  const searchInput = document.querySelector(".search-bar input")
  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const searchTerm = this.value.trim()
        if (searchTerm) {
          // Redireciona para a página de ofertas com o termo de busca
          window.location.href = `ofertas.html?busca=${encodeURIComponent(searchTerm)}`
        }
      }
    })
  }
})


const openTerms = document.getElementById('openTerms');
  const termsModal = document.getElementById('termsModal');
  const termsOverlay = document.getElementById('termsOverlay');
  const acceptBtn = document.getElementById('acceptTerms');

  openTerms.addEventListener('click', () => {
    termsOverlay.style.display = 'block';
    termsModal.style.display = 'block';
  });

  acceptBtn.addEventListener('click', () => {
    termsOverlay.style.display = 'none';
    termsModal.style.display = 'none';
    localStorage.setItem('termsAccepted', 'true');
  });

  const cookieBanner = document.getElementById('cookieBanner');
  const acceptCookies = document.getElementById('acceptCookies');

  if (localStorage.getItem('cookiesAccepted')) {
    cookieBanner.style.display = 'none';
  }

  acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.style.display = 'none';
  });

  // ========================================
  // NOTIFICATIONS SYSTEM
  // ========================================
  document.querySelectorAll('.btn-close').forEach(btn => {
    btn.addEventListener('click', function() {
      const card = this.closest('.notification-card');
      card.style.animation = 'notificationSlideOut 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards';
      setTimeout(() => {
        card.remove();
      }, 400); // Tempo da animação
    });
  });
