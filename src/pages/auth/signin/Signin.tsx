import React from "react";
import "./Signin.css";
import { useAppContext } from "@/context/AppContext";
import { Navigate } from "react-router-dom";

const Signin = () => {
  const ctx = useAppContext();
  if (ctx?.user) {
    return <Navigate to="/" />;
  }
  return (
    <section className="signin" id="signin">
      Signin
    </section>
  );
};

export default Signin;
