import { useUserContext } from "@src/context/userContext";
import { Navigate } from "react-router-dom";

interface IProtectedRoutesProps {
  redirectPath?: string;
  component: JSX.Element;
}

const ProtectedRoute = ({ redirectPath = "/login", component }: IProtectedRoutesProps) => {
  const { isAuthenticated } = useUserContext();
  
  if (!isAuthenticated()) {
    return <Navigate to={redirectPath} replace />;
  }
  return component;
};

export default ProtectedRoute;
