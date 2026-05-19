import { useContext, useEffect, useState } from "react";
import { authStore } from "../stores/auth.store";

export const useAuth = () => {
  const { user, setUser } = useContext(authStore);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchUser = async () => {
      try {

        const url = import.meta.env.VITE_SERVER_URL;

        const res = await fetch(
          `${url}/admin/profile`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        const data = await res.json();

        if (data.success) {
          setUser(data.data);
        } else {
          throw new Error("Unauthorized");
        }

      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

  }, [setUser]);

  return {
    user,
    loading
  };
};