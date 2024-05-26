import { auth } from "@/services/firebase";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { StudentsRepository } from "@/repositories/StudentsRepositorys";

export const useUserStore = defineStore("user", () => {
    const router = useRouter();
    const user = ref<User | null>(getLocalStorageUser());
    const studentsRepository = new StudentsRepository();

    onAuthStateChanged(auth, async (currentUser) => {
        if (!currentUser) {
            router.push("/login");
            return;
        }
        const userDB = studentsRepository.fetchStudent(currentUser.uid);

        localStorage.setItem("user", JSON.stringify(userDB));
    });

    function getLocalStorageUser() {
            const localUser = localStorage.getItem("user");
            return localUser ? JSON.parse(localUser) : null;
    }

    function removeLocalStorageUser() {
        user.value = null;
        localStorage.removeItem("user");
        return
    }

    function logOut() {
        signOut(auth);
        removeLocalStorageUser();
        return
    }

    return { user, getLocalStorageUser, removeLocalStorageUser, logOut };
});
