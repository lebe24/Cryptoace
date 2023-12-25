import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContractsProvider } from "./context/ContractsContext";

ReactDOM.render(
  // <BrowserRouter>
  //     <ContractsProvider>
        <App />,
  document.getElementById("root")
);
