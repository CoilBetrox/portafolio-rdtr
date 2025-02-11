<template>
    <div class="main-view">
        <h1 class="name">{{ message }}</h1>
        <img :src="gifSrc" :key="gifSrc" alt="Gif animado" class="gif"/>
        <div class="content-button">
            <button class="generic-button" :style="{ fontSize: yesButtonSize + 'rem' }" @click="actionForYes">Si</button>
            <button class="generic-button" :style="{ fontSize: noButtonSize + 'rem' }" @click="actionForNo">{{ noButtonText }}</button>
        </div>
        
    </div>
</template>

<script>
import { ref } from 'vue'
import inicial from '@/assets/valentine/inicial.gif'
import catscaric from '@/assets/valentine/catscaric.gif'
import catsinbox from '@/assets/valentine/catsinbox.gif'
import catslover from '@/assets/valentine/catslover.gif'
import twocats from '@/assets/valentine/twocats.gif'
import belindangel from '@/assets/valentine/belindangel.mp3'


export default {
    name: 'ValentineView',
    setup() {
        const message = ref("¿Quieres ser mi Valentín?");
        const gifSrc = ref(inicial);
        const noButtonText = ref("No");
        let noClickCount = 0;
        let hasStartedAudio = false;

        const yesButtonSize = ref(1.2);
        const noButtonSize = ref(1.2);

        const backgroundAudio = new Audio(belindangel);
        backgroundAudio.loop = true;
        backgroundAudio.volume = 0.2;

        const actionForYes = () => {
            message.value = "¡Sabía que dirías que sí!";
            gifSrc.value = catslover; // Cambiar a un nuevo GIF
        };

        const actionForNo = () => {
            noClickCount++;

            if (noClickCount === 1) {
                gifSrc.value = catscaric; 
                noButtonText.value = "Te prometo que será inolvidable";
            } else if (noClickCount === 2) {
                gifSrc.value = catsinbox; 
                noButtonText.value = "Piénsalo de nuevo";
            } else if (noClickCount === 3) {
                gifSrc.value = twocats
                noButtonText.value = "Una minina no diría que no";
            }

            gifSrc.value += "?t=" + new Date().getTime();
            yesButtonSize.value += 0.3;
            noButtonSize.value -= 0.2;

            if (!hasStartedAudio) {
                backgroundAudio.play().catch(() => {
                    console.log("El navegador bloqueó la reproducción automática. Se activará cuando el usuario interactúe.");
                });
                hasStartedAudio = true; // Evita que se vuelva a iniciar el audio
            }
        };

        return {
            message,
            gifSrc,
            noButtonText,
            actionForYes,
            actionForNo,
            yesButtonSize, 
            noButtonSize
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
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.generic-button:hover {
    background-color: #0056b3;
}

.content-button {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>