import { auth } from "@/services/firebase";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("user", () => {
    const router = useRouter();
    const user = ref<User | null>(getLocalStorageUser());

    onAuthStateChanged(auth, async (currentUser) => {
        if (!currentUser) {
            router.push("/login");
            return;
        }
        localStorage.setItem("user", JSON.stringify(user.value));
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
