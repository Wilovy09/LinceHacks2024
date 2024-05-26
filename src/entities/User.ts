import type { DocumentData } from 'firebase/firestore'

export type Student = {
    id: string;
    fullName: string;
    email: string;
    whatsapp: string;
<<<<<<< HEAD
    role: 'arrendador' | 'estudiante';
    collegiate: Collegiate;
    genero: 'masculino' | 'femenino' | 'otro';
=======
    role: Role;
    collegiate: Collegiate;
    genero: Gender;
>>>>>>> 146a3bde4bcf50be040f446d0a54b281c51b1d13
    bornDate: string;
    studentId: string; // base64
    residenceId: string; // base64
    familyName: string;
    familyNumber: string;
    hasCompleteProfile: boolean;
}

<<<<<<< HEAD
export type Role = {
    rol: 'arrendador' | 'estudiante'
}

export type Gender = {
    rol: 'masculino' | 'femenino' | 'otro'
}

export type Collegiate = {
=======
type Role = {
    rol: 'arrendador' | 'estudiante'
}

type Gender = {
    rol: 'masculino' | 'estudiante'
}

type Collegiate = {
>>>>>>> 146a3bde4bcf50be040f446d0a54b281c51b1d13
    name: string;
    location: Location;
}

<<<<<<< HEAD
export type Location = {
=======
type Location = {
>>>>>>> 146a3bde4bcf50be040f446d0a54b281c51b1d13
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
