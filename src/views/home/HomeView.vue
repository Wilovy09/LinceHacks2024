<script setup lang='ts'>
import { onMounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/services/firebase';
import { useRouter } from 'vue-router';

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
    <h1 class="text-center">Home</h1>
    <p>Welcome to the Home page!</p>
</template>

<style scoped>
</style>