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
      name: "Fones Bluetooth TWS Pro",
      image: "/wireless-bluetooth-earbuds.png",
      priceOld: 199.9,
      priceCurrent: 119.9,
      discount: 40,
      store: "shopee",
      category: "eletronicos",
      link: "#",
      featured: false,
    },
    {
      id: 2,
      name: "Smartwatch Monitor Cardíaco",
      image: "/smartwatch-fitness-tracker.png",
      priceOld: 299.9,
      priceCurrent: 194.9,
      discount: 35,
      store: "mercado-livre",
      category: "eletronicos",
      link: "#",
      featured: false,
    },
    {
      id: 3,
      name: "Caixa de Som Portátil 20W",
      image: "/portable-bluetooth-speaker.jpg",
      priceOld: 249.9,
      priceCurrent: 124.9,
      discount: 50,
      store: "shopee",
      category: "eletronicos",
      link: "#",
      featured: true,
    },
    {
      id: 4,
      name: "Teclado Mecânico Gamer RGB",
      image: "/rgb-mechanical-gaming-keyboard.png",
      priceOld: 349.9,
      priceCurrent: 244.9,
      discount: 30,
      store: "mercado-livre",
      category: "games",
      link: "#",
      featured: false,
    },
    {
      id: 5,
      name: "Air Fryer Digital 4.5L",
      image: "/digital-air-fryer-kitchen.jpg",
      priceOld: 499.9,
      priceCurrent: 274.9,
      discount: 45,
      store: "shopee",
      category: "casa",
      link: "#",
      featured: false,
    },
    {
      id: 6,
      name: "Aspirador Robô Inteligente",
      image: "/robot-vacuum-cleaner-smart.jpg",
      priceOld: 899.9,
      priceCurrent: 404.9,
      discount: 55,
      store: "mercado-livre",
      category: "casa",
      link: "#",
      featured: true,
    },
    {
      id: 7,
      name: "Tênis Esportivo Running Pro",
      image: "/running-sport-shoes.jpg",
      priceOld: 399.9,
      priceCurrent: 219.9,
      discount: 45,
      store: "shopee",
      category: "esportes",
      link: "#",
      featured: false,
    },
    {
      id: 8,
      name: "Kit Maquiagem Profissional",
      image: "/professional-makeup-kit.jpg",
      priceOld: 189.9,
      priceCurrent: 99.9,
      discount: 47,
      store: "mercado-livre",
      category: "beleza",
      link: "#",
      featured: false,
    },
    {
      id: 9,
      name: "Mouse Gamer RGB 12000 DPI",
      image: "/rgb-gaming-mouse.jpg",
      priceOld: 199.9,
      priceCurrent: 89.9,
      discount: 55,
      store: "amazon",
      category: "games",
      link: "#",
      featured: true,
    },
    {
      id: 10,
      name: "Camisa Polo Premium",
      image: "/premium-polo-shirt.png",
      priceOld: 149.9,
      priceCurrent: 79.9,
      discount: 47,
      store: "shopee",
      category: "moda",
      link: "#",
      featured: false,
    },
    {
      id: 11,
      name: "Headset Gamer 7.1 Surround",
      image: "/rgb-gaming-headset.jpg",
      priceOld: 299.9,
      priceCurrent: 159.9,
      discount: 47,
      store: "aliexpress",
      category: "games",
      link: "#",
      featured: false,
    },
    {
      id: 12,
      name: "Panela Elétrica Multifuncional",
      image: "/electric-pressure-cooker.jpg",
      priceOld: 599.9,
      priceCurrent: 349.9,
      discount: 42,
      store: "mercado-livre",
      category: "casa",
      link: "#",
      featured: false,
    },
    // ========================================
    // ADICIONE MAIS PRODUTOS ABAIXO
    // ========================================
    // Copie este modelo:
    // {
    //     id: 13,
    //     name: 'Nome do Produto',
    //     image: '/descricao-do-produto.jpg',
    //     priceOld: 100.00,
    //     priceCurrent: 50.00,
    //     discount: 50,
    //     store: 'shopee', // shopee, mercado-livre, amazon ou aliexpress
    //     category: 'eletronicos', // eletronicos, moda, casa, esportes, games ou beleza
    //     link: '#',
    //     featured: false
    // },
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
    storeFilters.forEach((cb) => (cb.checked = true))
    categoryFilters.forEach((cb) => (cb.checked = true))
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
