import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "@routes/routes";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Routes>
        {routes.map((route, key) => (
          <Route path={route.path} element={route.element} key={key} />
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default App;
