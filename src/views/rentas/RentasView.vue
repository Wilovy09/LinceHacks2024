<script setup lang='ts'>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
import EditSVG from './components/EditSVG.vue'
import TrashSVG from './components/TrashSVG.vue'
import type Renta from '@/entities/Renta';
/** Obtener de la base de datos */
let inputRenta: Renta;

const isLargeScreen = ref(window.innerWidth > 768);

const checkWindowSize = () => {
    isLargeScreen.value = window.innerWidth > 768;
};

onMounted(() => {
    window.addEventListener('resize', checkWindowSize);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkWindowSize);
});

const props = defineProps(['renta']);

</script>

<template>
    <div class="container">
        <div class="svgs">
            <img :src="props.renta.photosURL[0]" alt="Fotos del departamento">
            <div v-if="isLargeScreen" class="info">
                <p id="dir"> Dirección: {{ props.renta.ubicacion.calle }} </p>
                <p> Costo: ${{ props.renta.costo }} </p>
                <p> Servicios: ${{ props.renta.costoServicios }} </p>
                <p> Cuartos: {{ props.renta.cuartos }} Baños: {{ props.renta.banos }} </p>
            </div>
            <div class="btns">
                <RouterLink to="/rentas/edit"><EditSVG :width="40" :height="40" viewBox="0 0 40 40" fill="none"/></RouterLink>
                <button><TrashSVG :width="40" :height="40" viewBox="0 0 40 40" fill="none"/></button>
            </div>
        </div>
        <div v-if="!isLargeScreen" class="info">
            <p id="dir"> Dirección: {{ props.renta.ubicacion.calle }} </p>
            <p> Costo: ${{ props.renta.costo }} </p>
            <p> Servicios: ${{ props.renta.costoServicios }} </p>
            <p> Cuartos: {{ props.renta.cuartos }} Baños: {{ props.renta.banos }} </p>
        </div>
    </div>
</template>

<style scoped>
    img {
        max-width: 150px;
        max-height: 150px;
    }
    a {
        max-width: fit-content;
        max-height: fit-content;
    }
    .container {
        background-color: #D9D9D9;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        margin: 0 10%;
        width: 80%;
        margin-bottom: 1rem;
        padding: 1rem 0;
    }
    .svgs {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
    .btns {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .info {
        width: 80%;
        font-size: 1.5rem;
    }
    #dir {
        font-size: 2rem;
    }
    @media (min-width: 768px) {
        .svgs {
            justify-content: space-between;
            padding: 0 2rem;
            align-items: center;
        }
        .btns {
            align-self: normal;
        }
        .info {
            padding-left: 1rem;
            font-size: 1rem;
        }
        #dir {
            font-size: 1.5rem;
        }
    }

</style>