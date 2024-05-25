<script setup lang='ts'>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps(["text", "route"]);
</script>

<template>
    <RouterLink :to="props.route"> {{ props.text }} </RouterLink>
</template>

<style scoped>
a {
    border-radius: 3rem;
    background-color: #4B44B9;
    padding: 0 1rem;
}
</style>