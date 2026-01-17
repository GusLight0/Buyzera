/* ========================================
   OFERTAS PAGE - JavaScript
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
  // ========================================
  // PRODUCTS DATA - ADICIONE MAIS PRODUTOS AQUI
  // ========================================
  const products = [
    {
      id: 1,
      name: "Frigideira Multifuncional Antiaderente 4 Em 1 Para Ovos",
      image: "https://down-br.img.susercontent.com/file/cn-11134207-7ras8-m3celow5ym7j3e.webp",
      priceOld: 38.88,
      priceCurrent: 35.88,
      discount: 55,
      store: "shopee",
      category: "casa",
      link: "https://s.shopee.com.br/9UvHCsuj2s",
      featured: false,
    },
    {
      id: 2,
      name: "Espelho Oval Com Led orgânico Lapidado Luxo",
      image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-maldtkjlxwqhd8.webp",
      priceOld: 89.90,
      priceCurrent: 46.90,
      discount: 48,
      store: "shopee",
      category: "casa",
      link: "https://s.shopee.com.br/8V2k18N33J",
      featured: false,
    },
    {
      id: 3,
      name: "Teclado Gamer Mecânico Blue/Red Switch Rgb Usb",
      image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m03cjluhgxnrd7.webp",
      priceOld: 149.99,
      priceCurrent: 129.99,
      discount: 13,
      store: "shopee",
      category: "games",
      link: "https://s.shopee.com.br/5q1yqQJU6k",
      featured: true,
    },
    {
      id: 4,
      name: "Projetor 4K HD 150 Polegadas TV Para Xbox PS PC Wifi",
      image: "https://down-br.img.susercontent.com/file/sg-11134201-7ra2s-m59f6253wps00e.webp",
      priceOld: 300.00,
      priceCurrent: 104.86,
      discount: 65,
      store: "shopee",
      category: "eletronicos",
      link: "https://s.shopee.com.br/AAAy0RWduy",
      featured: false,
    },
    {
      id: 5,
      name: "Kit 4 Camiseta Dry Masculina Manga Curta",
      image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mgnrunp3320w17.webp",
      priceOld: 99.90,
      priceCurrent: 59.94,
      discount: 40,
      store: "shopee",
      category: "moda",
      link: "https://s.shopee.com.br/3LKdsYb9as",
      featured: false,
    },
    {
      id: 6,
      name: "Copo Garrafa Térmica 1200ml Resistente",
      image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mggmzdke6sjr26.webp",
      priceOld: 80.00,
      priceCurrent: 37.60,
      discount: 53,
      store: "shopee",
      category: "casa",
      link: "#",
      featured: true,
    },
    {
      id: 7,
      name: "Kit 3 Camisetas Algodão Premium",
      image: "https://down-br.img.susercontent.com/file/sg-11134201-7rd6p-m7tr3fd4re7b02.webp",
      priceOld: 69.90,
      priceCurrent: 66.40,
      discount: 5,
      store: "shopee",
      category: "moda",
      link: "https://s.shopee.com.br/7pn3Ev08ad",
      featured: false,
    },
    {
      id: 8,
      name: "Kit 5pçs Toalha de Banho Bela e Confortável",
      image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mh6hlmozxpts51.webp",
      priceOld: 163.00,
      priceCurrent: 80.50,
      discount: 51,
      store: "shopee",
      category: "casa",
      link: "https://s.shopee.com.br/8pfaQppqIK",
      featured: false,
    },
    {
      id: 9,
      name: "Kit Skin Care Clareador Facial Vitamina C para Manchas",
      image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mdey6kyy76pld6.webp",
      priceOld: 59.90,
      priceCurrent: 23.90,
      discount: 60,
      store: "shopee",
      category: "beleza",
      link: "https://s.shopee.com.br/4VWbGuj84N",
      featured: false,
    },
    {
      id: 10,
      name: "Quadro Decorativos Trio Moderno Exclusivo Flores",
      image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-maoj2fvk5tkpd4.webp",
      priceOld: 59.90,
      priceCurrent: 28.99,
      discount: 52,
      store: "shopee",
      category: "casa",
      link: "https://s.shopee.com.br/3Ve459tmfq",
      featured: false,
    },
    {
      id: 11,
      name: "INOVA Drone Com Camera Drone Profissional 1080p Alta Distância",
      image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mer1vaqrqozk88.webp",
      priceOld: 499.00,
      priceCurrent: 269.99,
      discount: 46,
      store: "shopee",
      category: "eletronicos",
      link: "https://s.shopee.com.br/1qVq6Ay6pc",
      featured: false,
    },
    {
      id: 12,
      name: "Videogame Stick 4K 64gb 2 Controles Sem Fio Console Portatil",
      image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-max01co95lh54f.webp",
      priceOld: 299.99,
      priceCurrent: 84.99,
      discount: 72,
      store: "shopee",
      category: "games",
      link: "https://s.shopee.com.br/7pn3FF57YE",
      featured: true,
    },
    {
      id: 13,
      name: "Caixa Térmica Cooler Pequeno 5 Litros com Alça Soprano",
      image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-meefydrae7lt83.webp",
      priceOld: 54.90,
      priceCurrent: 42.99,
      discount: 22,
      store: "shopee",
      category: "casa",
      link: "https://s.shopee.com.br/8pfaR7Zluy",
      featured: false,
    },
    {
      id: 14,
      name: "Balança de cozinha digital Alta precisão com pilhas inclusas AA",
      image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lv99oc9kb53j90.webp",
      priceOld: 29.90,
      priceCurrent: 17.99,
      discount: 40,
      store: "shopee",
      category: "casa",
      link: "https://s.shopee.com.br/9UvHEO1IEc",
      featured: false,
    },
    {
      id: 15,
      name: "Jogo de Panelas Teflon Munique 11 Pçs com Panela de Pressão",
      image: "https://down-br.img.susercontent.com/file/sg-11134201-7rdx9-m0uhupvpbqlh8d.webp",
      priceOld: 399.90,
      priceCurrent: 279.90,
      discount: 30,
      store: "shopee",
      category: "casa",
      link: "https://s.shopee.com.br/7VACqn6kXS",
      featured: false,
    },
    {
      id: 16,
      name: "Rack Bancada com pés 1.10 NEW LIFE VINI 2 Portas Com Nicho Moderno",
      image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mfj2cx55gav457.webp",
      priceOld: 159.90,
      priceCurrent: 139.00,
      discount: 13,
      store: "shopee",
      category: "casa",
      link: "https://s.shopee.com.br/4VWbHIrAcV",
      featured: false,
    },
    {
      id: 17,
      name: "Tapete Belga Estampado Para Sala Quarto De Luxo",
      image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-meq6c1qewzya7b.webp",
      priceOld: 109.99,
      priceCurrent: 59.99,
      discount: 45,
      store: "shopee",
      category: "casa",
      link: "https://s.shopee.com.br/2g4x5xb8Yz",
      featured: false,
    },
    {
      id: 18,
      name: "Tapete Belga Estampado Para Sala Quarto De Luxo",
      image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mhspu0ph2jgh84@resize_w1080_nl.webp",
      priceOld: 888.00,
      priceCurrent: 229.98,
      discount: 74,
      store: "shopee",
      category: "casa",
      link: "https://s.shopee.com.br/3Ve5cVClUK",
      featured: false,
    },
  ]

  // ========================================
  // DOM ELEMENTS
  // ========================================
  const productsGrid = document.getElementById("productsGrid")
  const searchInput = document.getElementById("headerSearchInput") // Usando a busca do cabeçalho como principal
  const storeFilters = document.querySelectorAll(".store-filter")
  const categoryFilters = document.querySelectorAll(".category-filter")
  const priceMin = document.getElementById("priceMin")
  const priceMax = document.getElementById("priceMax")
  const discountSlider = document.getElementById("discountSlider")
  const discountValue = document.getElementById("discountValue")
  const sortSelect = document.getElementById("sortSelect")
  const resultsCount = document.getElementById("resultsCount")
  const emptyState = document.getElementById("emptyState")
  const clearFiltersBtn = document.getElementById("clearFilters")
  const resetFiltersBtn = document.getElementById("resetFiltersBtn")
  const mobileFilterToggle = document.getElementById("mobileFilterToggle")
  const filtersSidebar = document.querySelector(".filters-sidebar")
  const applyFiltersMobile = document.getElementById("applyFiltersMobile")

  // ========================================
  // ========================================
  function getUrlParams() {
    const params = new URLSearchParams(window.location.search)
    return {
      categoria: params.get("categoria"),
      loja: params.get("loja"),
    }
  }

  function applyUrlFilters() {
    const { categoria, loja } = getUrlParams()

    // Se tem categoria na URL, desmarcar todas e marcar só a selecionada
    if (categoria) {
      categoryFilters.forEach((cb) => {
        cb.checked = cb.value === categoria
      })
    }

    // Se tem loja na URL, desmarcar todas e marcar só a selecionada
    if (loja) {
      storeFilters.forEach((cb) => {
        cb.checked = cb.value === loja
      })
    }
  }

  // ========================================
  // NORMALIZE TEXT (remove acentos e espaços)
  // ========================================
  function normalizeText(text) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "")
      .trim()
  }

  // ========================================
  // GET STORE DISPLAY NAME
  // ========================================
  function getStoreDisplayName(store) {
    const names = {
      shopee: "Shopee",
      "mercado-livre": "Mercado Livre",
      amazon: "Amazon",
      aliexpress: "AliExpress",
    }
    return names[store] || store
  }

  // ========================================
  // RENDER PRODUCTS
  // ========================================
  function renderProducts(filteredProducts) {
    productsGrid.innerHTML = ""

    if (filteredProducts.length === 0) {
      productsGrid.style.display = "none"
      emptyState.style.display = "flex"
      resultsCount.textContent = "0"
      return
    }

    productsGrid.style.display = "grid"
    emptyState.style.display = "none"
    resultsCount.textContent = filteredProducts.length

    filteredProducts.forEach((product, index) => {
      const productCard = document.createElement("div")
      productCard.className = `product-card${product.featured ? " featured" : ""}`
      productCard.style.opacity = "0"
      productCard.style.transform = "translateY(20px)"
      productCard.style.transition = `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.03}s`

      productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <span class="discount-badge${product.discount >= 50 ? " hot" : ""}">-${product.discount}%</span>
                    <button class="favorite-btn" aria-label="Adicionar aos favoritos">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                        </svg>
                    </button>
                </div>
                <div class="product-info">
                    <span class="product-brand">${getStoreDisplayName(product.store)}</span>
                    <h3>${product.name}</h3>
                    <div class="product-price">
                        <span class="price-old">R$ ${product.priceOld.toFixed(2).replace(".", ",")}</span>
                        <span class="price-current">R$ ${product.priceCurrent.toFixed(2).replace(".", ",")}</span>
                    </div>
                    <a href="${product.link}" class="btn-product" target="_blank" rel="noopener noreferrer">
                        Ver oferta
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
                        </svg>
                    </a>
                </div>
            `

      productsGrid.appendChild(productCard)

      requestAnimationFrame(() => {
        productCard.style.opacity = "1"
        productCard.style.transform = "translateY(0)"
      })
    })

    document.querySelectorAll(".favorite-btn").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault()
        e.stopPropagation()
        this.classList.toggle("active")
        this.style.transform = "scale(1.2)"
        setTimeout(() => {
          this.style.transform = "scale(1)"
        }, 150)
      })
    })
  }

  // ========================================
  // FILTER PRODUCTS
  // ========================================
  function filterProducts() {
    const searchTerm = normalizeText(searchInput.value)
    const selectedStores = Array.from(storeFilters)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value)
    const selectedCategories = Array.from(categoryFilters)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value)
    const minPrice = Number.parseFloat(priceMin.value) || 0
    const maxPrice = Number.parseFloat(priceMax.value) || Number.POSITIVE_INFINITY
    const minDiscount = Number.parseInt(discountSlider.value) || 0
    const sortBy = sortSelect.value

    const filtered = products.filter((product) => {
      const normalizedName = normalizeText(product.name)
      const matchesSearch = searchTerm === "" || normalizedName.includes(searchTerm)
      const matchesStore = selectedStores.length === 0 || selectedStores.includes(product.store)
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const matchesPrice = product.priceCurrent >= minPrice && product.priceCurrent <= maxPrice
      const matchesDiscount = product.discount >= minDiscount

      return matchesSearch && matchesStore && matchesCategory && matchesPrice && matchesDiscount
    })

    switch (sortBy) {
      case "menor-preco":
        filtered.sort((a, b) => a.priceCurrent - b.priceCurrent)
        break
      case "maior-preco":
        filtered.sort((a, b) => b.priceCurrent - a.priceCurrent)
        break
      case "maior-desconto":
        filtered.sort((a, b) => b.discount - a.discount)
        break
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    renderProducts(filtered)
  }

  // ========================================
  // CLEAR FILTERS
  // ========================================
  function clearFilters() {
    searchInput.value = ""
    storeFilters.forEach((cb) => (cb.checked = false))
    categoryFilters.forEach((cb) => (cb.checked = false))
    priceMin.value = ""
    priceMax.value = ""
    discountSlider.value = 0
    discountValue.textContent = "0"
    sortSelect.value = "relevancia"

    // Limpar URL params
    window.history.replaceState({}, "", window.location.pathname)

    filterProducts()
  }

  // ========================================
  // EVENT LISTENERS
  // ========================================
  searchInput.addEventListener("input", (e) => {
    // O searchInput agora é o headerSearchInput
    filterProducts()
  })

  storeFilters.forEach((cb) => {
    cb.addEventListener("change", filterProducts)
  })

  categoryFilters.forEach((cb) => {
    cb.addEventListener("change", filterProducts)
  })

  priceMin.addEventListener("input", filterProducts)
  priceMax.addEventListener("input", filterProducts)

  discountSlider.addEventListener("input", function () {
    discountValue.textContent = this.value
    filterProducts()
  })

  sortSelect.addEventListener("change", filterProducts)

  clearFiltersBtn.addEventListener("click", clearFilters)
  resetFiltersBtn.addEventListener("click", clearFilters)

  mobileFilterToggle.addEventListener("click", () => {
    filtersSidebar.classList.add("active")
    document.body.style.overflow = "hidden"
  })

  applyFiltersMobile.addEventListener("click", () => {
    filtersSidebar.classList.remove("active")
    document.body.style.overflow = ""
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && filtersSidebar.classList.contains("active")) {
      filtersSidebar.classList.remove("active")
      document.body.style.overflow = ""
    }
  })

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
  }

  // ========================================
  // INITIAL RENDER
  // ========================================
  applyUrlFilters() // Aplicar filtros da URL primeiro
  filterProducts()
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
