<script setup lang='ts'>
    import { RouterLink } from 'vue-router';
    import { useUserStore } from '../stores/useUserStore';
</script>

<template>
    <nav class="lg:px-16 px-6 bg-[#6C63FF] text-white shadow-md flex flex-wrap items-center lg:py-0 py-2" data-svelte-h="svelte-1lsm3ud">
        <div class="flex-1 flex justify-between items-center">
            <RouterLink to="/app" class="flex text-lg font-semibold">
                <img src="#" width="50" height="50" class="p-2" alt="LOGO"/>
            </RouterLink>
        </div>
        <label for="menu-toggle" class="cursor-pointer lg:hidden block">
            <svg class="fill-current text-white" width="20" height="20" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
        </label>
        <input class="hidden svelte-1ah0gke" type="checkbox" id="menu-toggle" />
        <div class="hidden lg:flex lg:items-center lg:w-auto w-full svelte-1ah0gke" id="menu">

            <ul class="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0">
                <li class="py-2 lg:py-0">
                    <RouterLink class="inline-flex flex-col items-center justify-center px-5" to="/app">
                        <span class="font-bold text-white hover:text-[#000000]">Inicio</span>
                    </RouterLink>
                </li>
                <!-- Este siempre abajo -->
                <li class="py-2 lg:py-0">
                    <span @click="useUserStore().logOut" class="cursor-pointer font-bold text-white hover:text-[#000000] inline-flex flex-col items-center justify-center px-5">Cerrar sesión</span>
                </li>
            </ul>

        </div>
    </nav>
</template>

<style scoped>
    #menu-toggle:checked + #menu {
        display: block;
    }
</style>