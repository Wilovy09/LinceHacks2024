<script setup lang='ts'>
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { CheckCircleIcon } from '@heroicons/vue/24/outline';
import { auth } from '@/services/firebase';
import NavbarAuth from '@/components/NavbarAuth.vue';
import SVG from './components/SVG.vue';
import FormInput from '@/components/FormInput.vue';
import { showError } from '@/helpers/showError';
import { type Rol} from '@/entities/CreateAccount';

const router = useRouter()

const fullName = ref<string>('')
const email = ref<string>('')
const whatsapp = ref<string>('')
const rol = ref<Rol>()
const userPassword = ref<string>('')
const confirmPassword = ref<string>('')
const isValidPassword = ref(false)

const regexMinimumCaracters = /^.{8,}$/
const regexUpperCase = /.*[A-Z].*/
const regexLowerCase = /(?=.*[a-z].*)/
const regexNumber = /.*\d.*/
const regexSpecial = /.*[!@#$%^&.].*/
const regexNotSpaces = /^\S*$/

const regexRules = computed(() => {
    return [
        { name: 'Minimo de caracteres', isValid: regexMinimumCaracters.test(userPassword.value) },
        { name: 'Minimo una mayúscula', isValid: regexUpperCase.test(userPassword.value) },
        { name: 'Minimo una minúscula', isValid: regexLowerCase.test(userPassword.value) },
        { name: 'Minimo un número', isValid: regexNumber.test(userPassword.value) },
        { name: 'Minimo un caracter especial', isValid: regexSpecial.test(userPassword.value) },
        { name: 'No espacios', isValid: regexNotSpaces.test(userPassword.value) }
    ]
})

watch(regexRules, () => {
    isValidPassword.value = regexRules.value.every((rule) => rule.isValid)
})

async function createAccount() {
    if(!isValidPassword.value) return showError('La contraseña no cumple con los requisitos')
    /* TODO: Verficar # de whatsapp */
    /* if(!regexWhatsappCaracters.test(whatsapp.value)) return showError('El número de whatsapp no es válido') */
    if (userPassword.value !== confirmPassword.value || confirmPassword.value !== userPassword.value) {
        showError('Las contraseñas no son iguales')
    } else {
        try {
            await createUserWithEmailAndPassword(auth, email.value, userPassword.value)
            router.push('/app')
        } catch (error) {
            showError(`No fue posible crear cuenta`)
        }
    }
}
</script>

<template>
    <NavbarAuth route="/" text="Regresar a inicio"></NavbarAuth>
    <section class="grid justify-center lg:flex min-h-full">
        <div class="flex justify-center w-80 lg:min-w-max items-center">
            <SVG></SVG>
        </div>

        <form @submit.prevent="createAccount()"
        class="bg-[#F9F9F9] p-4">
            <div class="flex flex-col">
                <FormInput v-model="fullName" type="text" :optional=true label-text="Nombre completo" name-and-id="fullName"></FormInput>
                <FormInput v-model="email" type="email":optional=true label-text="Correo" name-and-id="email"></FormInput>
                <FormInput v-model="whatsapp" type="tel" :optional=true label-text="Whatsapp" name-and-id="whatsapp"></FormInput>
                <div class="lg:flex lg:gap-4">
                    <div>
                        <FormInput v-model="userPassword" :optional=true label-text="Contraseña" name-and-id="Password" type="password"></FormInput>
                    </div>
                    <div>
                        <FormInput v-model="confirmPassword" :optional=true label-text="Confirmar contraseña" name-and-id="confirmPassword" type="password"></FormInput>
                    </div>
                </div>
                <label for="rolSelect">Seleccione su rol</label>
                <select name="rolSelect" id="rolSelect" class="mb-2" v-model="rol">
                    <option value="arrendador">Arrendador</option>
                    <option value="estudiante">Estudiante</option>
                </select>
            </div>
            <div class="flex justify-center">
                <div class="bg-[#f7fbfb] lg:p-3 p-1">
                    <p class="text-xs mt-1 mb-2">Tu contraseña debe cumplir con:</p>
                    <div v-for="(rule, index) in regexRules" :key="index" class="flex items-center">
                        <CheckCircleIcon class="w-4" :class="rule.isValid ? 'stroke-green-500' : 'stroke-red-500'"/>
                        <p class="ml-3 text-xs" :class="rule.isValid ? 'text-green-500' : 'text-red-500'">
                            {{ rule.name }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="grid">
                <button>Crear cuenta</button>
            </div>
        </form>

    </section>
</template>