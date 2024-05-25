<script setup lang='ts'>
import { onMounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/services/firebase';
import { useRouter } from 'vue-router';
import Rentas from '../rentas/RentasView.vue';
import Renta from '@/entities/Renta';
import Ubi from '@/entities/Ubicacion';

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

function agregarInfoCuarto() {
    // router.push("/rentas/new");
}

/** Obtener de la base de datos */
let rentaArray = [
    new Renta(1, new Ubi(0, 0, "Calle 1", "Monterrey", "Nuevo Leon", 69420) , 6000, 1000, 2, 1, ['https://canalhogar.com/wp-content/uploads/2023/10/25-planos-y-Disenos-de-Casas-de-2-Pisos-Modernas-800x600.jpg']),
    new Renta(1, new Ubi(0, 0, "Calle 1", "Monterrey", "Nuevo Leon", 69420) , 6000, 1000, 2, 1, ['https://canalhogar.com/wp-content/uploads/2023/10/25-planos-y-Disenos-de-Casas-de-2-Pisos-Modernas-800x600.jpg']),
    new Renta(1, new Ubi(0, 0, "Calle 1", "Monterrey", "Nuevo Leon", 69420) , 6000, 1000, 2, 1, ['https://canalhogar.com/wp-content/uploads/2023/10/25-planos-y-Disenos-de-Casas-de-2-Pisos-Modernas-800x600.jpg']),
    new Renta(1, new Ubi(0, 0, "Calle 2", "Monterrey", "Nuevo Leon", 69420) , 6000, 1000, 2, 1, ['https://canalhogar.com/wp-content/uploads/2023/10/25-planos-y-Disenos-de-Casas-de-2-Pisos-Modernas-800x600.jpg']),
    new Renta(1, new Ubi(0, 0, "Calle 1", "Monterrey", "Nuevo Leon", 69420) , 6000, 1000, 2, 1, ['https://canalhogar.com/wp-content/uploads/2023/10/25-planos-y-Disenos-de-Casas-de-2-Pisos-Modernas-800x600.jpg']),
    new Renta(1, new Ubi(0, 0, "Calle 2", "Monterrey", "Nuevo Leon", 69420) , 6000, 1000, 2, 1, ['https://canalhogar.com/wp-content/uploads/2023/10/25-planos-y-Disenos-de-Casas-de-2-Pisos-Modernas-800x600.jpg'])
]
</script>

<template>
    <div class="main-container">
        <div class="content py-20">
            <div class="landlordInfo">
                <h6><a href="">Editar Perfil</a></h6>
                <div class="info">
                    <p>Nombre:</p>
                    <div class="field">
                        <p>Este es el nombre</p>
                    </div>
                    <p>Whatsapp:</p>
                    <div class="field">
                        <p>Este es el nombre</p>
                    </div>
                    <p>Dirección:</p>
                    <div class="field">
                        <p>Este es el nombre</p>
                    </div>
                    <p>Código Postal:</p>
                    <div class="field">
                        <p>Este es el nombre</p>
                    </div>
                    <p>Ciudad:</p>
                    <div class="field">
                        <p>Este es el nombre</p>
                    </div>
                    <p>Estado:</p>
                    <div class="field">
                        <p>Este es el nombre</p>
                    </div>
                    <p>Correo:</p>
                    <div class="field">
                        <p>Este es el nombre</p>
                    </div>
                </div>
            </div>
            <div class="rentas-container">
                <h2>Mis Rentas</h2>
                <Rentas v-for="renta of rentaArray" :renta="renta"/>
            </div>
        </div>
        <button type="button" onclick="agregarInfoCuarto()">Agregar nuevo cuarto</button>
    </div>
</template>

<style scoped>

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
        flex: 2;
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