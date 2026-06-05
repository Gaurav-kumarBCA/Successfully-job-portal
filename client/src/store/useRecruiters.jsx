import { useContext } from "react";
import { recruiterStore } from "./recruiter.store";

// 🔥 CLEAN ACCESS HOOK
export const useRecruiter = () => {
  return useContext(recruiterStore);
};