import { useUserContext } from "@src/context/userContext";
import { Navigate } from "react-router-dom";

// Public Route Component
import React from "react";

interface PublicRouteProps {
    component: React.ComponentType<any>;
    redirectPath?: string;
    [key: string]: any;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, redirectPath = "/" }) => {
    const { isAuthenticated } = useUserContext();

    return isAuthenticated() ? <Navigate to={redirectPath} /> : <Component />;
};

export default PublicRoute;