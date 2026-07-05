import { create } from "zustand";




const useAuthStore = create((set) => ({
    token: localStorage.getItem('accessToken'),
    setToken: (newToken) => {
        localStorage.setItem('accessToken', newToken);
        set({
            token: newToken
        });
        localStorage.setItem('accessToken', newToken);
    },
    Logout: () => {
       set({
            token: null
        });
        localStorage.removeItem('accessToken');
    }
}));

export default useAuthStore;