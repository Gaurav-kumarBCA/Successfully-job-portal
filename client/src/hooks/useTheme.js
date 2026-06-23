import { useContext } from "react"
import { ThemeStore } from "../store/themp.store"

export const useTheme = () =>{
    return useContext(ThemeStore);
};