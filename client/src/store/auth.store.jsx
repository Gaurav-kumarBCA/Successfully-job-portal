import { createContext, useState } from "react";

export const authStore = createContext();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);

    const logout = async () => {
        try {
            const url = import.meta.env.VITE_SERVER_URL;

            await fetch (`${url}/api/auth/logout`,{
                method : "POST",
                credentials:"include",
            })
            setUser(null);
             window.location.href = "/login";

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <authStore.Provider value={{
            user,setUser,logout
        }}>
            {children}
        </authStore.Provider>
    );
};

export default AuthProvider;