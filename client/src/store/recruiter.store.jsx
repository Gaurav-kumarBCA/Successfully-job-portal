import { createContext, useState, useEffect, useContext } from "react";

export const recruiterStore = createContext();

export const useRecruiter = () => {
  return useContext(recruiterStore);
};


const RecruiterProvider = ({ children }) => {
  const [recruiter, setRecruiter] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchRecruiter = async () => {
      try {
        const url = import.meta.env.VITE_SERVER_URL;

        const res = await fetch(`${url}/recruiter/profile`, {
          method: "GET",
          credentials: "include", 
        });

        const data = await res.json();

        if (data.success) {
          setRecruiter(data.data);
        } else {
          setRecruiter(null);
        }
      } catch (error) {
        console.log("Recruiter fetch error:", error);
        setRecruiter(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRecruiter();
  }, []);

  // 🔥 LOGOUT (COOKIE BASED)
  const logout = async () => {
    try {
      const url = import.meta.env.VITE_SERVER_URL;

      await fetch(`${url}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      setRecruiter(null);
      window.location.href = "/recruiter/login";
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <recruiterStore.Provider
      value={{ recruiter, setRecruiter, loading, logout }}
    >
      {children}
    </recruiterStore.Provider>
  );
};

export default RecruiterProvider;