import type { DocumentData } from 'firebase/firestore'

export type Student = {
    id: string;
    fullName: string;
    email: string;
    whatsapp: string;
    role: Role;
    collegiate: Collegiate;
    genero: Gender;
    bornDate: string;
    studentId: string; // base64
    residenceId: string; // base64
    familyName: string;
    familyNumber: string;
    hasCompleteProfile: boolean;
}

type Role = {
    rol: 'arrendador' | 'estudiante'
}

type Gender = {
    rol: 'masculino' | 'estudiante'
}

type Collegiate = {
    name: string;
    location: Location;
}

type Location = {
    address: string;
    city: string;
    country: string;
    zipCode: string;
    latitude: number;
    longitude: number;
}
