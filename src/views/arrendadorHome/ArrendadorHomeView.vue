<script setup lang='ts'>
import { onMounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/services/firebase';
import { useRouter } from 'vue-router';
import Rentas from '../rentas/RentasView.vue';
import { type landLord } from '@/entities/Landlord';

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

/** Obtener de la base de datos */
let landlordInfo: landLord = {
    id: "1",
    fullName: "Juanito Banana",
    email: "juanito123@gmail.com",
    whatsapp: "81 2773 7829",
    role: {rol: 'arrendador'},
    livingPlace: [
        {
            name: "Depa 1",
            price: 6000,
            percentage: 10,
            location: {
                address: "Av Los Angeles 123",
                city: 'Monterrey',
                country: 'México',
                zipCode: '69420',
                latitude: 0,
                longitude: 0
            },
            photos: ['https://canalhogar.com/wp-content/uploads/2023/10/25-planos-y-Disenos-de-Casas-de-2-Pisos-Modernas-800x600.jpg'],
            rooms: 2,
            bathrooms: 1
        }
    ],
    genero: {rol: 'masculino'},
    bornDate: '1999-12-12',
    residenceId: 'base64string', // base64
    rfc: 'RFC123456789',
    hasCompleteProfile: true
}
</script>

<template>
    <div class="main-container">
        <div class="content py-20">
            <div class="landlordInfo">
                <h6><a href="">Editar Perfil</a></h6>
                <div class="info">
                    <p>Nombre:</p>
                    <div class="field">
                        <p>{{landlordInfo.fullName}}</p>
                    </div>
                    <p>Whatsapp:</p>
                    <div class="field">
                        <p>{{landlordInfo.whatsapp}}</p>
                    </div>
                    <p>Correo:</p>
                    <div class="field">
                        <p>{{landlordInfo.email}}</p>
                    </div>
                    <p>RFC:</p>
                    <div class="field">
                        <p>{{ landlordInfo.rfc }}</p>
                    </div>
                </div>
            </div>
            <div class="rentas-container">
                <h2>Mis Rentas</h2>
                <Rentas v-for="renta of landlordInfo.livingPlace" :renta="renta"/>
            </div>
        </div>
        <RouterLink to="/app/newLivingPlace"><button>Agregar Nuevo Cuarto</button></RouterLink>
    </div>
</template>

<style scoped>
    button {
        background-color: #6C63FF;
        border-radius: 8px;
        border-style: none;
        box-sizing: border-box;
        color: #FFFFFF;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        height: 40px;
        line-height: 20px;
        list-style: none;
        margin: 0;
        outline: none;
        padding: 10px 16px;
        position: relative;
        text-align: center;
        text-decoration: none;
        transition: color 100ms;
        vertical-align: baseline;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        }

        .button-1:hover,
        .button-1:focus {
        background-color: #F082AC;
    }
    .content {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .landlordInfo {
        padding: 0 2rem;
        flex: 1;
    }
    .rentas-container {
        flex: 6;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        overflow: scroll;
        scrollbar-width: thin;
    }
    .info {
        padding: 1rem;
    }
    .field {
        border: 1px solid black;
        padding: 0.5rem 1rem;
        margin-bottom: 1rem;
    }
    h2 {
        text-align: center;
        font-size: 2rem;
    }
    h6 {
        text-align: end;
        padding-right: 1rem;
        color: #0500F8;
    }
    .main-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 2rem;
    }
    .content > div {
        max-height: 50rem;
    }
    @media (min-width: 1024px) {
        .content {
            flex-direction: row;
        }
    }
</style>