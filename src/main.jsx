import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Colors from "./GlobalStyles/Settings/Colors";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
