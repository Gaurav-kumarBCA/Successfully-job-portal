import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth";
import {  useEffect } from "react";


const withAuth = (WrappedComponent) =>{
    return (props) => {
        const navigate = useNavigate();
        const {user,loading} = useAuth();

        useEffect(()=>{
            if(!loading && !user){
                navigate("/login",{replace:true});
            }
        },[user,loading,navigate]);

        return user ? <WrappedComponent {...props}/>:null;
    };
};
export default withAuth;