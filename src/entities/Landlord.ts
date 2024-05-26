import type { DocumentData } from 'firebase/firestore'

export type landLord = {
    id: string;
    fullName: string;
    email: string;
    whatsapp: string;
    role: Role;
    livingPlace: livingPlace[];
    genero: Gender;
    bornDate: string;
    residenceId: string; // base64
    rfc: string;
    hasCompleteProfile: boolean;
}

export type Role = {
    rol: 'arrendador' | 'estudiante'
}

type Gender = {
    rol: 'masculino' | 'estudiante'
}

type livingPlace = {
    name: string;
    price: number;
    percentage: number;
    furnished: boolean;
    sharedBathroom: boolean;
    bathrooms: number;
    location: Location;
    photos: string[];
    rooms: number;
    bathrooms: number;
}

export type Location = {
    address: string;
    city: string;
    country: string;
    zipCode: string;
    latitude: number;
    longitude: number;
<<<<<<< HEAD
}
=======
}
>>>>>>> 146a3bde4bcf50be040f446d0a54b281c51b1d13
