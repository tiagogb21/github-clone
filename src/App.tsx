import React from "react";
import "./App.css";
import MyProvider from "./MyContext/Provider";
import Router from "./Router";

function App() {
  return (
    <MyProvider>
      <Router />
    </MyProvider>
  );
}

export default App;
