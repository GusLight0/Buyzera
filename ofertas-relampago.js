/* ========================================
   OFERTAS RELÂMPAGO - JS Básico
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // ========================================
    // 1. DADOS DOS PRODUTOS RELÂMPAGO
    // ========================================
    const flashProducts = [
        {
            id: 9,
            name: "Kit Skin Care Clareador Facial Vitamina C para Manchas",
            image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mdey6kyy76pld6.webp",
            priceOld: 59.90,
            priceCurrent: 23.90,
            discount: 60,
            sold: "1mil+",
            link: "https://s.shopee.com.br/4VWbGuj84N"
        },
    ];

    // ========================================
    // 2. RENDERIZAR PRODUTOS
    // ========================================
    const grid = document.getElementById("relampagoGrid");
    
    if (grid) {
        grid.innerHTML = "";
        
        flashProducts.forEach((product, index) => {
            const card = document.createElement("div");
            card.className = "product-card";
            
            // Adiciona delay aleatório para o efeito de flutuação parecer orgânico e não robótico
            card.style.animationDelay = `${Math.random() * 2}s`;
            
            card.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <span class="discount-badge hot">-${product.discount}%</span>
                </div>
                <div class="product-info">
                    <!-- Removido brand tag para visual mais limpo -->
                    <h3>${product.name}</h3>
                    <div class="product-price">
                        <span class="price-old">R$ ${product.priceOld.toFixed(2).replace('.', ',')}</span>
                        <span class="price-current">R$ ${product.priceCurrent.toFixed(2).replace('.', ',')}</span>
                    </div>
                    
                    <a href="${product.link}" target="_blank" class="btn-product" style="margin-top:auto; background: transparent; border: 1px solid rgba(255, 230, 0, 0.5); color: var(--neon-yellow); text-transform: uppercase; letter-spacing: 1px; border-radius: 4px;">
                        Comprar
                    </a>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // Adicionar efeito hover no botão via JS para garantir compatibilidade
    document.querySelectorAll('.btn-product').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.background = 'var(--neon-yellow)';
            btn.style.color = '#000';
            btn.style.boxShadow = '0 0 20px var(--neon-yellow)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.background = 'transparent';
            btn.style.color = 'var(--neon-yellow)';
            btn.style.boxShadow = 'none';
        });
    });

    // ========================================
    // 3. LÓGICA DO TIMER (CONTAGEM REGRESSIVA)
    // ========================================
    function startTimer(durationInSeconds) {
        // A chave agora inclui a duração. Se você mudar o tempo no código, o timer reseta automaticamente!
        const storageKey = `buyzera_flash_end_time_${durationInSeconds}`;
        let endTime = localStorage.getItem(storageKey);
        const now = new Date().getTime();

        // Se não houver tempo salvo, define o tempo de término baseado na duração atual
        if (!endTime) {
            endTime = now + (durationInSeconds * 1000);
            localStorage.setItem(storageKey, endTime);
        }

        const hoursElem = document.getElementById("hours");
        const minutesElem = document.getElementById("minutes");
        const secondsElem = document.getElementById("seconds");
        const countdownWrapper = document.querySelector(".countdown-wrapper");

        const update = () => {
            const currentTime = new Date().getTime();
            const distance = endTime - currentTime;

            if (distance < 0) {
                if (countdownWrapper) {
                    countdownWrapper.innerHTML = '<div style="font-size: clamp(1.5rem, 4vw, 2.5rem); font-weight: 800; color: var(--neon-red); text-transform: uppercase; letter-spacing: 2px; text-shadow: 0 0 20px rgba(255, 0, 60, 0.6); animation: blink 1s infinite;">FIM DAS OFERTAS</div>';
                }
                return true; // Indica que acabou
            }

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(hoursElem) hoursElem.textContent = hours < 10 ? "0" + hours : hours;
            if(minutesElem) minutesElem.textContent = minutes < 10 ? "0" + minutes : minutes;
            if(secondsElem) secondsElem.textContent = seconds < 10 ? "0" + seconds : seconds;
            return false;
        };

        // Executa uma vez imediatamente para evitar delay visual
        if (!update()) {
            const interval = setInterval(() => {
                if (update()) clearInterval(interval);
            }, 1000);
        }
    }

    // Inicia com 4 horas e 10 minutos
    startTimer((4 * 3600) + (13 * 60));
});