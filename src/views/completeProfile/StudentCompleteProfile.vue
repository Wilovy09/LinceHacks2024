<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/useUserStore'
import {showConfirm} from '@/helpers/showConfirm'
import { StudentsRepository } from '@/repositories/StudentsRepositorys.ts'
import FormInput from '@/components/FormInput.vue'
import SVG from './components/SVG.vue'

const studentsRepository = new StudentsRepository()

const data = ref()
const base64ImageStudentId = ref('')
const base64ImageResidenceId = ref('')
const fullName = ref('')
const whatsapp = ref('')
const role = ref()
const university = ref('')
const gender = ref()
const bornDate = ref('')
const familyName = ref('')
const familyPhone = ref('')
const hasCompleteProfile = ref(false)

const genero = [
    { id: 1, name: 'Masculino' },
    { id: 2, name: 'Femenino' },
    { id: 3, name: 'Otro' }
]

const parentesco = [
    { id: 1, name: 'Padre' },
    { id: 2, name: 'Madre' },
    { id: 3, name: 'Hermano' },
    { id: 4, name: 'Hermana' },
    { id: 5, name: 'Tio' },
    { id: 6, name: 'Tia' },
    { id: 7, name: 'Abuelo' },
    { id: 8, name: 'Abuela' },
    { id: 9, name: 'Otro' }
]

const fetchData = async () => {
    const response = await fetch('http://localhost:3000/api/collegiates')
    const data = await response.json()
    return data
}

const uploadStudentImage = (event: Event) => {
    const input = event.target as HTMLInputElement
    if(base64ImageStudentId.value === '') {
        const file = input.files?.[0]
        const reader = new FileReader()
        reader.onload = () => {
            base64ImageStudentId.value = reader.result as string
        }
        reader.readAsDataURL(file as Blob)
    } else {

    }
}
const uploadResidenceImage = (event: Event) => {
    const input = event.target as HTMLInputElement
    if(base64ImageResidenceId.value === '') {
        const file = input.files?.[0]
        const reader = new FileReader()
        reader.onload = () => {
            base64ImageResidenceId.value = reader.result as string
        }
        reader.readAsDataURL(file as Blob)
    } else {

    }
}

const submitProfile = async() => {
    const user = useUserStore().user

    const url = "http://localhost:3000/api/users"
    const data = {
        _id: user?.uid,
        fullName: fullName.value,
        email: user?.email,
        whatsapp: whatsapp.value,
        role: role.value,
        gender: gender.value,
        bornDate: bornDate.value,
        hasCompleteProfile: hasCompleteProfile.value,
        studentId: base64ImageStudentId.value,
        reidenceId: base64ImageResidenceId.value,
        familyName: familyName.value,
        familyNumber: familyPhone.value,
        collegiate: university.value,
    }

    try{
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        const editCompleteUrl = `http://localhost:3000/api/users/${data}`
        const dataComplete = {
            hasCompleteProfile: true
        }
        await fetch(editCompleteUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataComplete)
        })
        studentsRepository.fetchStudent(user?.uid!)
        showConfirm('Perfil completado')
    } catch (error) {
        console.log(error)

    }
}

onMounted(async () => {
    const dataFetch = await fetchData()
    data.value = dataFetch
})
</script>

<template>
    <section class="grid w-full">
        <section class="justify-center align-middle items-center mx-auto">
            <SVG class=""></SVG>
        </section>
        <form class="m-4">

            <div class="">
                <FormInput label-text="Nombre completo" v-model="fullName" name-and-id="fullName" type="text"></FormInput>
            </div>

            <div class="">
                <FormInput label-text="Whatsapp" v-model="whatsapp" name-and-id="whatsaoo" type="tel"></FormInput>
            </div>

            <div class="">
                <p>Rol</p>
                <select name="selectRol" id="selectRol" v-model="role" class="w-full bg-[#f1f1f1] p-2 rounded-lg">
                    <option value="estudiante" default>Estudiante</option>
                    <option value="arrendero">Arrendero</option>
                </select>
            </div>

            <div class="">
                <p>Universidad</p>
                <select name="selectUni" id="selectUni" v-model="university" class="w-full bg-[#f1f1f1] p-2 rounded-lg">
                    <option value="select" default>Select...</option>
                    <option v-for="collegiate in data" :key="collegiate._id" :value="collegiate._id">{{ collegiate.name }}</option>
                </select>
            </div>
            <div class="">
                <p>Genero</p>
                <select name="genero" id="genero" v-model="gender" class="w-full bg-[#f1f1f1] p-2 rounded-lg">
                    <option value="select" default>Select...</option>
                    <option v-for="gender in genero" :key="gender.id" :value="gender.id">{{ gender.name }}</option>
                </select>
            </div>

            <div class="">
                <FormInput label-text="Fecha de nacimiento" v-model="bornDate" name-and-id="bornDate" type="date"></FormInput>
            </div>

            <div class="">
                <label for="resume">Credencial estudiantil</label>
                <input type="file" id="fileId" @change="uploadStudentImage" name="resume">
            </div>

            <div class="">
                <label for="residence">INE</label>
                <input type="file" id="fileId" @change="uploadResidenceImage" name="residence">
            </div>

            <div class="">
                <FormInput label-text="Nombre del familiar" v-model="familyName" name-and-id="familyName" type="text"></FormInput>
            </div>

            <div class="">
                <FormInput label-text="Whatsapp del familiar" v-model="familyPhone" name-and-id="familyPhone" type="text"></FormInput>
            </div>

            <div class="">
                <p>Parentesco</p>
                <select name="parentesco" id="parentesco" class="w-full bg-[#f1f1f1] p-2 rounded-lg">
                    <option value="select" default>Select...</option>
                    <option v-for="relacion in parentesco" :key="relacion.id" :value="relacion.id">{{ relacion.name }}</option>
                </select>
            </div>

            <div class="flex justify-center mt-4">
                <button class="bg-[#6C63FF] p-2 rounded-lg" type="button" @click="submitProfile">Completar</button>
            </div>
        </form>
    </section>
</template>
