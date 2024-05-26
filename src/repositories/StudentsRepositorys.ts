import type { User } from 'firebase/auth'

export class StudentsRepository{
    public async fetchStudent(id: string) {
        const url = `http://localhost:3000/api/users/${id}`
        const response = await fetch(url)
        console.log(response)
        const student = await response.json()
        if (student !== null) {
            return student
        } else return null
    }
}