<script setup lang='ts'>
import {RouterView} from 'vue-router'
import NavBar from '@/components/LandingNavbar.vue'
</script>

<template>
    <NavBar route="/login" text="Iniciar sesión"/>
    <RouterView />
</template>

<style scoped>
</style>