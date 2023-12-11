import React, { useEffect } from "react";
import { useUserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";


const ProtectedRoute = ({children}) =>
{
    const user = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {

        if(!user) navigate("/");
    }, []);

    return children;
}

export default ProtectedRoute