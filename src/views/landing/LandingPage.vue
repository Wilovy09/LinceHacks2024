<script setup lang='ts'>
import LandingVector from './LandingVector.vue'
import ButtonLink from '@/components/ButtonLink.vue';
</script>

<template>
    <LandingNavbar />
    <div class="center">
        <div class="main-container">
            <LandingVector :width="350" :height="360" view-box="0 0 611 490" fill="none"/>
            <div class="text-container">
                <p>¿Eres estudiante foráneo y no encuentras departamento? <br>
                    EstuDepa es la opción para ti <br>
                    Te ayudamos a encontrar un departamento en renta para que puedas tener un acceso más fácil a tu universidad. <br>
                    Aquí podrás explorar muchas opciones de viviendas acordes a tus necesidades. <br>
                    No esperes más. <br>
                    ¡Regístrate y explora todas las opciones!</p>
                <ButtonLink to="/register" text="Crear cuenta" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.center {
    height: fit-content;
    display: flex;
    align-items: start;
    justify-content: center;
}
.main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem 1rem 2rem;
}
.text-container {
    flex: 1;
    padding: 0 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: start;
    gap: 1rem;
}
a {
    font-size: 1rem;
    padding: 0.5rem 2rem;
}

@media (min-width: 1375px) {
    .center {
        align-items: center;
        height: calc(100vh - 4rem);
    }
    svg {
        width: 610px;
        height: 490px;
    }
    .main-container {
        flex-direction: row-reverse;
    }
    .text-container {
        padding: 0 2rem;
        font-size: 2rem;
        gap: 2rem;
    }
    a {
        font-size: 1.5rem;
        padding: 0.5rem 2rem;
    }
}
</style>