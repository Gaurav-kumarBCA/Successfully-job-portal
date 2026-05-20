import { useContext } from "react";
import { ThemeStore } from "../stores/themeStore";

export const useTheme = () => {
   return useContext(ThemeStore);
};