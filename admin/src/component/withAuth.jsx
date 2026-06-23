import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";


const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const { user, loading } = useAuth();

    useEffect(() => {
      if (!loading && !user) {
        navigate("/login", { replace: true });
      }
    }, [user, loading, navigate]);
    if(loading){
      return <div>loading...</div>
    }
    if(!user){
      return null;
    }

    return  <WrappedComponent {...props} /> ;
  };
};

export default withAuth;