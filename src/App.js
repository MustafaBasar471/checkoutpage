import React from "react";
import Router from "./Router/Router";
import { MainProvider } from "./Context/MainContext";
const App = () => {
  return (
    <MainProvider>
      <Router />
    </MainProvider>
  );
};

export default App;
