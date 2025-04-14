import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./contexts/Contexto";
import App from "./App";
import "@fontsource/roboto"; 
import "./styles/App.css";  

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
