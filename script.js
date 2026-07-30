document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. SCÈNE D'INTRODUCTION (LA LETTRE)
    // ==========================================
    const envelopeWrapper = document.getElementById("envelope-wrapper");
    const loveMessage = document.getElementById("love-message");
    const enterSiteBtn = document.getElementById("enter-site-btn");
    const introScreen = document.getElementById("intro-screen");
    const mainUniverse = document.getElementById("main-universe");

    if (envelopeWrapper) {
        envelopeWrapper.addEventListener("click", () => {
            envelopeWrapper.classList.add("is-open");
            setTimeout(() => {
                envelopeWrapper.classList.add("hidden");
                loveMessage.classList.remove("hidden");
            }, 1500); 
        });
    }

    if (enterSiteBtn) {
        enterSiteBtn.addEventListener("click", () => {
            introScreen.style.opacity = "0";
            setTimeout(() => {
                introScreen.classList.add("hidden");
                if(mainUniverse) {
                    mainUniverse.classList.remove("hidden");
                    mainUniverse.style.opacity = "1";
                    initParticles();
                }
            }, 1000);
        });
    }

    function initParticles() {
        if (typeof particlesJS !== "undefined") {
            particlesJS("particles-container", {
                "particles": {
                    "number": { "value": 150 },
                    "color": { "value": "#ffffff" },
                    "shape": { "type": "circle" },
                    "opacity": { "value": 0.8, "random": true },
                    "size": { "value": 3, "random": true },
                    "line_linked": { "enable": true, "distance": 150, "color": "#ff4d85", "opacity": 0.4, "width": 1 },
                    "move": { "enable": true, "speed": 2 }
                },
                "interactivity": {
                    "events": { 
                        "onhover": { "enable": true, "mode": "grab" }, 
                        "onclick": { "enable": true, "mode": "push" } 
                    }
                }
            });
        }
    }

    // ==========================================
    // 2. LE COMPTEUR TEMPOREL
    // ==========================================
    const startDate = new Date("2025-09-10T00:00:00").getTime();
    const counterElement = document.getElementById("live-counter");

    function updateCounter() {
        const now = new Date().getTime();
        const difference = now - startDate;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if (counterElement) {
            counterElement.innerHTML = `
                <div class="counter-item"><span>${days}</span><span class="counter-label">Jours</span></div>
                <div class="counter-item"><span>${hours}</span><span class="counter-label">Heures</span></div>
                <div class="counter-item"><span>${minutes}</span><span class="counter-label">Minutes</span></div>
                <div class="counter-item"><span>${seconds}</span><span class="counter-label">Secondes</span></div>
            `;
        }
    }

    updateCounter();
    setInterval(updateCounter, 1000);

    // ==========================================
    // 3. GESTION DES MODALES (BOUQUET & PHOTOS)
    // ==========================================
    const btnBouquet = document.getElementById("btn-bouquet");
    const btnGallery = document.getElementById("btn-gallery");
    const modalBouquet = document.getElementById("bouquet-modal");
    const modalGallery = document.getElementById("gallery-modal");
    const closeBtns = document.querySelectorAll(".close-btn");

    // Ouvrir le bouquet
    if(btnBouquet) {
        btnBouquet.addEventListener("click", () => {
            modalBouquet.classList.remove("hidden");
        });
    }

    // Ouvrir la galerie
    if(btnGallery) {
        btnGallery.addEventListener("click", () => {
            modalGallery.classList.remove("hidden");
        });
    }

    // Fermer les modales avec la croix
    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            modalBouquet.classList.add("hidden");
            modalGallery.classList.add("hidden");
        });
    });

    // Fermer en cliquant en dehors de la fenêtre
    window.addEventListener("click", (e) => {
        if (e.target === modalBouquet) {
            modalBouquet.classList.add("hidden");
        }
        if (e.target === modalGallery) {
            modalGallery.classList.add("hidden");
        }
    });
});
