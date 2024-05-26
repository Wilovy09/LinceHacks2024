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

export type Gender = {
    rol: 'femenino' | 'masculino' | 'otro'
}

export type livingPlace = {
    name: string;
    price: number;
    percentage: number;
    furnished: boolean;
    sharedBathroom: boolean;
    bathrooms: number;
    location: Location;
    rooms: number;
    allowsPets: boolean;
    allowsRentPlans: boolean;
    rentPlans: string[] | null;
    parking: boolean;
    allowsTransfers: boolean;
    allowsCrypto: boolean;
    bankAccount: string | null;
    cryptoWallet: string | null;
    photos: string[];
}

export type Location = {
    address: string;
    city: string;
    country: string;
    zipCode: string;
    latitude: number;
    longitude: number;
}