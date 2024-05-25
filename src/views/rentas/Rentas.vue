<script setup lang='ts'>
import { RouterLink } from 'vue-router';
import SVG from './components/SVG.vue'
import EditSVG from './components/EditSVG.vue'
import TrashSVG from './components/TrashSVG.vue'
/** Obtener de la base de datos */
let renta = {
    id: 1,
    direccion: 'Calle 1',
    costo: 1000,
    costoServicios: '2021-10-10',
    cuartos: 2,
    banos: 1
}
</script>

<template>
    <div class="container">
        <SVG :width="150" :height="150" viewBox="0 0 611 490" fill="none"/>
        <div class="info">
            <p> Dirección: {{ renta.direccion }} <br>
                Costo: {{ renta.costo }} Servicios: {{ renta.costoServicios }}<br>
                Cuartos: {{ renta.cuartos }} Baños: {{ renta.banos }}
            </p>
        </div>
        <div class="btns">
            <RouterLink to="/rentas/edit"><EditSVG :width="40" :height="40" viewBox="0 0 36 36" fill="none"/></RouterLink>
            <button><TrashSVG :width="40" :height="40" viewBox="0 0 611 490" fill="none"/></button>
        </div>
    </div>
</template>

<style scoped>
    .container {
        background-color: #D9D9D9;
    }
</style>