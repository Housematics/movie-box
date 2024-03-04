import React from "react";
import "./Signup.css";
import { useAppContext } from "@/context/AppContext";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const ctx = useAppContext();
  if (ctx?.user) {
    return <Navigate to="/" />;
  }
  return (
    <section className="signup" id="signup">
      Signup
    </section>
  );
};

export default Signup;
