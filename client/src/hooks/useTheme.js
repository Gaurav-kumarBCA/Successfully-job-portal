import { useContext } from "react"
import { ThemeStore } from "../store/theme.store"

export const useTheme = () =>{
    return useContext(ThemeStore);
};