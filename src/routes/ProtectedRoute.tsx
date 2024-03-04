import React from "react";
import { useAppContext } from "@context/AppContext";
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const ctx = useAppContext();
  return !ctx?.user ? <Navigate to="/auth/signin" /> : children;
};

export default ProtectedRoute;
