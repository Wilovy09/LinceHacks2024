<script setup lang='ts'>
import { RouterLink } from 'vue-router'
import Button from '@/components/ButtonLink.vue'
</script>

<template>
    <nav>
        <RouterLink to='/'>LOGO</RouterLink>
        <h1>EstuDepa</h1>
        <RouterLink to='/login'>Iniciar Sesión</RouterLink>
    </nav>
</template>

<style scoped>
nav {
    background-color: #6C63FF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    font-size: 1rem;
    color: #fff;

    & a, h1 {
        text-align: center;
        width: 7rem;
    }
}
</style>