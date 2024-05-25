<script setup lang='ts'>
import { RouterLink } from 'vue-router';
import SVG from './components/HomeSVG.vue'
import EditSVG from './components/EditSVG.vue'
import TrashSVG from './components/TrashSVG.vue'
/** Obtener de la base de datos */
let renta = {
    id: 1,
    direccion: 'Calle 1',
    costo: 1000,
    costoServicios: 200,
    cuartos: 2,
    banos: 1
}
</script>

<template>
    <div class="container">
        <div class="svgs">
            <SVG :width="150" :height="150" viewBox="0 0 100 100" fill="none"/>
            <div class="btns">
                <RouterLink to="/rentas/edit"><EditSVG :width="40" :height="40" viewBox="0 0 40 40" fill="none"/></RouterLink>
                <button><TrashSVG :width="40" :height="40" viewBox="0 0 40 40" fill="none"/></button>
            </div>
        </div>
        <div class="info">
            <p id="dir"> Dirección: {{ renta.direccion }} </p>
            <p> Costo: ${{ renta.costo }} </p>
            <p> Servicios: ${{ renta.costoServicios }} </p>
            <p> Cuartos: {{ renta.cuartos }} Baños: {{ renta.banos }} </p>
        </div>
    </div>
</template>

<style scoped>
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
</style>