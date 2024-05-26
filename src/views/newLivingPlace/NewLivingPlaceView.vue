<script setup lang='ts'>
import FormInput from '@/components/FormInput.vue';
import FormSelect from '@/components/FormSelect.vue';
import { type livingPlace } from '@/entities/Landlord';

let newLivingPlace: livingPlace = {
    name: "",
    price: 0,
    percentage: 0,
    furnished: false,
    sharedBathroom: false,
    bathrooms: 0,
    location: {
        address: "",
        city: "",
        country: "",
        zipCode: "",
        latitude: 0,
        longitude: 0
    },
    rooms: 0,
    allowsPets: false,
    allowsRentPlans: false,
    rentPlans: null,
    parking: false,
    allowsTransfers: false,
    allowsCrypto: false,
    bankAccount: null,
    cryptoWallet: null,
    photos: []
};

</script>

<template>
    <div class="content">
        <h1 class="text-2xl font-bold">Nueva propiedad</h1>
        <div class="main-container">
            <form action="">
                <div class="left-inputs">
                    <h2>ola</h2>
                    <FormInput labelText="Dirección" type="text" nameAndId="address" :modelValue="newLivingPlace.location.address"></FormInput>
                    <FormInput labelText="Código Postal" type="text" nameAndId="zipCode" :modelValue="newLivingPlace.location.zipCode"></FormInput>
                    <FormInput labelText="Precio" type="number" nameAndId="price" :modelValue="newLivingPlace.price"></FormInput>
                    <FormInput labelText="Porcentaje para servicios" type="number" nameAndId="servicesPercentage" :modelValue="newLivingPlace.percentage"></FormInput>
                    <FormSelect labelText="Amueblado" nameAndId="isFurnished" :modelValue="newLivingPlace.furnished"</FormSelect>
                    <FormSelect labelText="Baño compartido" nameAndId="hasSharedBathroom" :modelValue="newLivingPlace.sharedBathroom"></FormSelect>
                    <FormInput labelText="Cantidad de baños" type="number" nameAndId="bathrooms" :modelValue="newLivingPlace.bathrooms"></FormInput>
                    <FormInput labelText="Cantidad de cuartos" type="number" nameAndId="rooms" :modelValue="newLivingPlace.rooms"></FormInput>
                    <FormSelect labelText="Acepta mascotas" nameAndId="allowsPets" :modelValue="newLivingPlace.allowsPets"></FormSelect>
                    <FormSelect labelText="Acepta planes de renta" nameAndId="allowsRentPlans" :modelValue="newLivingPlace.allowsRentPlans"></FormSelect>
                    <FormSelect labelText="Estacionamiento" nameAndId="hasParking" :modelValue="newLivingPlace.parking"></FormSelect>
                    <FormSelect labelText="Acepta pagos con criptomonedas" nameAndId="allowsCrypto" :modelValue="newLivingPlace.allowsCrypto"></FormSelect>
                    <FormSelect labelText="Acepta transferencias" nameAndId="allowsTransfers" :modelValue="newLivingPlace.allowsTransfers"></FormSelect>
                    <FormInput labelText="Cuenta bancaria" type="text" nameAndId="address" :modelValue="newLivingPlace.location.address"></FormInput>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
</style>