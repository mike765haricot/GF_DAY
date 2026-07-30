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
        // Clic pour ouvrir l'enveloppe
        envelopeWrapper.addEventListener("click", () => {
            envelopeWrapper.classList.add("is-open");
            
            // Attendre la fin de l'animation pour afficher le message
            setTimeout(() => {
                envelopeWrapper.classList.add("hidden");
                loveMessage.classList.remove("hidden");
            }, 1500); 
        });
    }

    if (enterSiteBtn) {
        // Clic sur le bouton du message pour entrer dans le site
        enterSiteBtn.addEventListener("click", () => {
            introScreen.style.opacity = "0";
            
            setTimeout(() => {
                introScreen.classList.add("hidden");
                if(mainUniverse) {
                    mainUniverse.classList.remove("hidden");
                    mainUniverse.style.opacity = "1";
                    // On lance les particules seulement quand on arrive sur le site
                    initParticles();
                }
            }, 1000);
        });
    }

    // Fonction d'initialisation des particules
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
