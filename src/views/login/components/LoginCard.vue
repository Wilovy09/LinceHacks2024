<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/services/firebase'
import { useUserStore } from '@/stores/useUserStore'
import SVG from './SVG.vue'
import ButtonLink from '@/components/ButtonLink.vue'

const email = ref('')
const password = ref('')
const router = useRouter()

const user = useUserStore().user

async function LogIn(){
    if(!user){
        await signInWithEmailAndPassword(auth, email.value, password.value)
        router.push('/app')
    } else {
        router.push('/app')
    }
}

</script>

<template>
    <section class="flex justify-center items-center min-h-[100%dvh]">
        <div class="bg-[#F9F9F9] w-[400px] h-[450px] rounded-[35px] drop-shadow-md mt-14">
            <div class="flex-grid justify-center -mt-10">
                <SVG></SVG>
                <form @submit.prevent="LogIn">
                    <div class="grid m-4">
                        <label for="email">Email</label>
                        <input v-model="email" class="p-1 rounded-xl bg-[#f1f1f1]" type="text" name="email" id="email" required>
                    </div>
                    <div class="grid m-4">
                        <label for="password">Password</label>
                        <input v-model="password" class="p-1 rounded-xl bg-[#f1f1f1]" type="password" name="password" id="password" required>
                    </div>
                    <div class="grid m-4">
                        <button class="bg-[#6C63FF] p-2 rounded-xl hover:bg-[#524cc4] hover:text-white transition-all">Login</button>
                        <RouterLink to="/register" class="text-center text-black mt-2">Crear cuenta</RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
