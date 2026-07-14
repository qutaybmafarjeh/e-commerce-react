import { create } from "zustand";





const useAuthStore = create((set) => ({
    token: localStorage.getItem('accessToken'),
    
    setToken: (token) => {
        set({
            token: token
        });
        localStorage.setItem('accessToken', token);
    },



    Logout: () => {
       set({
            token: null
        });
        localStorage.removeItem('accessToken');
    }
}));

export default useAuthStore;