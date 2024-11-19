import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthStateProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    // If loading true
    if (loading) {
        return <span className="loading loading-spinner text-success"></span>;
    }

    //  If user found
    if (user) return children;

    //  If no User found
    return <Navigate to="/user/login" />;
};

export default PrivateRoutes;
