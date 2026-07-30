document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. SYSTÈME DE DÉVERROUILLAGE & PARTICULES
    // ==========================================
    const unlockBtn = document.getElementById("unlock-btn");
    const passwordInput = document.getElementById("password-input");
    const lockScreen = document.getElementById("lock-screen");
    const mainUniverse = document.getElementById("main-universe");
    const errorMsg = document.getElementById("error-msg");

    const TARGET_DATE = "10092025"; 

    // Si tu utilises l'écran de déverrouillage
    if (unlockBtn) {
        unlockBtn.addEventListener("click", () => {
            if (passwordInput.value === TARGET_DATE) {
                // Disparition de l'écran de verrouillage
                lockScreen.style.opacity = "0";
                
                setTimeout(() => {
                    lockScreen.classList.add("hidden");
                    mainUniverse.classList.remove("hidden");
                    mainUniverse.style.opacity = "1";
                    
                    // Lancement des particules une fois déverrouillé
                    initParticles();
                }, 1000);
            } else {
                errorMsg.classList.remove("hidden");
            }
        });
    } else {
        // Si tu n'utilises pas l'écran de déverrouillage, on lance l'effet grandiose directement
        initParticles();
    }

    // Fonction d'initialisation des particules
    function initParticles() {
        if (typeof particlesJS !== "undefined") {
            // Configuration pour un effet "Ciel étoilé / Galaxie" riche et interactif
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
                <div class="counter-item">
                    <span>${days}</span>
                    <span class="counter-label">Jours</span>
                </div>
                <div class="counter-item">
                    <span>${hours}</span>
                    <span class="counter-label">Heures</span>
                </div>
                <div class="counter-item">
                    <span>${minutes}</span>
                    <span class="counter-label">Minutes</span>
                </div>
                <div class="counter-item">
                    <span>${seconds}</span>
                    <span class="counter-label">Secondes</span>
                </div>
            `;
        }
    }

    // On lance le compteur au chargement, puis on l'actualise toutes les secondes
    updateCounter();
    setInterval(updateCounter, 1000);
});