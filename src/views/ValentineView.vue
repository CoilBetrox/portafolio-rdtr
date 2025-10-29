<template>
    <div class="main-view">
        <h1 class="name">{{ message }}</h1>
        <img :src="gifSrc" :key="gifSrc" alt="Gif animado" class="gif"/>
        <div class="content-button">
            <button class="generic-button yes-button" :style="{ fontSize: yesButtonSize + 'rem' }" @click="actionForYes">Si</button>
            <button 
                v-if="showNoButton"
                class="generic-button no-button" 
                :style="{ 
                    fontSize: noButtonSize + 'rem', 
                    opacity: noButtonOpacity,
                    transform: `scale(${noButtonScale})`
                }" 
                @click="actionForNo"
            >
                {{ noButtonText }}
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import inicial from '@/assets/images/valentine/inicial.gif'
import catscaric from '@/assets/images/valentine/catscaric.gif'
import catsinbox from '@/assets/images/valentine/catsinbox.gif'
import catslover from '@/assets/images/valentine/catslover.gif'
import twocats from '@/assets/images/valentine/twocats.gif'
import belindangel from '@/assets/images/valentine/belindangel.mp3'

export default {
    name: 'ValentineView',
    setup() {
        const message = ref("¿Quieres ser mi Valentin?");
        const gifSrc = ref(inicial);
        const noButtonText = ref("No");
        const showNoButton = ref(true);
        let noClickCount = 0;
        let hasStartedAudio = false;

        // Límites para los tamaños de botones
        const yesButtonSize = ref(1.2);
        const noButtonSize = ref(1.2);
        const noButtonOpacity = ref(1);
        const noButtonScale = ref(1);
        
        const MIN_NO_BUTTON_SIZE = 0.5; // Tamaño mínimo del botón "No"
        const MAX_YES_BUTTON_SIZE = 3.5; // Tamaño máximo del botón "Sí"
        const MAX_CLICKS = 10; // Máximo número de clicks permitidos

        const backgroundAudio = new Audio(belindangel);
        backgroundAudio.loop = true;
        backgroundAudio.volume = 0.2;

        const actionForYes = () => {
            message.value = "¡Sabía que dirías que sí!";
            gifSrc.value = catslover;
            // Resetear tamaños cuando se acepta
            yesButtonSize.value = 1.2;
            noButtonSize.value = 1.2;
            noButtonOpacity.value = 1;
            noButtonScale.value = 1;
            showNoButton.value = true;
            noClickCount = 0;
        };

        const actionForNo = () => {
            noClickCount++;

            // Cambiar GIF y texto según el número de clicks
            const gifChanges = {
                1: { gif: catscaric, text: "¿Estás segura?" },
                2: { gif: catsinbox, text: "Piénsalo bien" },
                3: { gif: twocats, text: "Una minina no diría que no" },
                4: { gif: twocats, text: "¡Por favor! 🥺" },
                5: { gif: catsinbox, text: "Te prometo que será especial" },
                6: { gif: catscaric, text: "¿En serio? 😢" },
                7: { gif: twocats, text: "Mi corazón gatuno 💔" },
                8: { gif: catsinbox, text: "Última oportunidad..." },
                9: { gif: catscaric, text: "¡No me hagas esto!" },
                10: { gif: twocats, text: "😭" }
            };

            const change = gifChanges[noClickCount];
            if (change) {
                gifSrc.value = change.gif;
                noButtonText.value = change.text;
            }

            // Forzar actualización del GIF
            gifSrc.value += "?t=" + new Date().getTime();
            
            // Aumentar tamaño del botón "Sí" con límite
            if (yesButtonSize.value < MAX_YES_BUTTON_SIZE) {
                yesButtonSize.value += 0.25;
            }
            
            // Reducir tamaño del botón "No" con límite
            if (noButtonSize.value > MIN_NO_BUTTON_SIZE) {
                noButtonSize.value -= 0.08; // Reducción más gradual
            }
            
            // Reducir escala y opacidad progresivamente
            if (noClickCount >= 3) {
                noButtonOpacity.value = Math.max(0.1, 1 - (noClickCount - 2) * 0.1);
                noButtonScale.value = Math.max(0.3, 1 - (noClickCount - 2) * 0.08);
            }
            
            // Desaparecer completamente después del máximo de clicks
            if (noClickCount === MAX_CLICKS) {
                setTimeout(() => {
                    showNoButton.value = false;
                }, 500); // Pequeño delay para la animación
            }

            // Iniciar audio si no se ha hecho
            if (!hasStartedAudio) {
                backgroundAudio.play().catch(() => {
                    console.log("El navegador bloqueó la reproducción automática. Se activará cuando el usuario interactúe.");
                });
                hasStartedAudio = true;
            }
        };

        return {
            message,
            gifSrc,
            noButtonText,
            showNoButton,
            actionForYes,
            actionForNo,
            yesButtonSize, 
            noButtonSize,
            noButtonOpacity,
            noButtonScale
        }
    }
}
</script>

<style scoped>
.main-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background-color: #F894AF;
}

.name {
    color: #4A4A4A;
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.title {
    font-size: 1.2rem;
    color: #6c757d;
    margin-bottom: 2rem;
}

.generic-button {
    padding: 0.75rem 2rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 120px;
    min-height: 50px;
    font-weight: bold;
}

.yes-button {
    background-color: #28a745;
    box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3);
}

.yes-button:hover {
    background-color: #218838;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(40, 167, 69, 0.4);
}

.no-button {
    background-color: #dc3545;
    box-shadow: 0 4px 8px rgba(220, 53, 69, 0.3);
    transition: all 0.5s ease;
}

.no-button:hover {
    background-color: #c82333;
    transform: translateY(-2px) scale(var(--scale, 1));
    box-shadow: 0 6px 12px rgba(220, 53, 69, 0.4);
}

.content-button {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.gif {
    max-width: 300px;
    margin: 2rem 0;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Asegurar que los botones sean legibles incluso cuando son pequeños */
@media (max-width: 768px) {
    .name {
        font-size: 3rem;
    }
    
    .generic-button {
        min-width: 100px;
        min-height: 45px;
        padding: 0.5rem 1.5rem;
    }
    
    .gif {
        max-width: 250px;
    }
}
</style>