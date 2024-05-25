import type { DocumentData } from 'firebase/firestore'

export type Student = {
    id: string;
    fullName: string;
    email: string;
    whatsapp: string;
    role: 'arrendador' | 'estudiante';
    collegiate: Collegiate;
    genero: 'masculino' | 'femenino' | 'otro';
    bornDate: string;
    studentId: string; // base64
    residenceId: string; // base64
    familyName: string;
    familyNumber: string;
    hasCompleteProfile: boolean;
}

export type Role = {
    rol: 'arrendador' | 'estudiante'
}

export type Gender = {
    rol: 'masculino' | 'femenino' | 'otro'
}

export type Collegiate = {
    name: string;
    location: Location;
}

export type Location = {
    address: string;
    city: string;
    country: string;
    zipCode: string;
    latitude: number;
    longitude: number;
}
