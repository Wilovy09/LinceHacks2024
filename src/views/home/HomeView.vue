<script setup lang='ts'>
import { onMounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/services/firebase';
import { useRouter } from 'vue-router';
import Rentas from '../rentas/Rentas.vue';

const router = useRouter();

onMounted(() => {
    onAuthStateChanged(auth, async (currentUser) => {
        if (!currentUser) {
            router.push("/login");
            return;
        }
        localStorage.setItem("user", JSON.stringify(currentUser));
    });
});
</script>

<template>
    <Rentas />
</template>

<style scoped>
</style>