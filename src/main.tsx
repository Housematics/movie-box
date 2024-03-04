import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "swiper/css";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import AppContextProvider from "@context/AppContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppContextProvider>
    <Router>
      <App />
    </Router>
  </AppContextProvider>
);
