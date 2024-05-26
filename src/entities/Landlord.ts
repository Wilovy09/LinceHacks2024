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

type Role = {
    rol: 'arrendador' | 'estudiante'
}

type Gender = {
<<<<<<< HEAD
    rol: 'masculino' | 'femenino' | 'otro'
}

type livingPlace = {
    id: string;
=======
    rol: 'masculino' | 'estudiante'
}

type livingPlace = {
>>>>>>> 146a3bde4bcf50be040f446d0a54b281c51b1d13
    name: string;
    price: number;
    percentage: number;
    location: Location;
<<<<<<< HEAD
    bathrooms: string;
    rooms: number;
    userId: string;
=======
    photos: string[];
    rooms: number;
    bathrooms: number;
>>>>>>> 146a3bde4bcf50be040f446d0a54b281c51b1d13
}

type Location = {
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
