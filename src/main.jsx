import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
// import AuthState from "./context/auth/authState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AuthState> */}
      <App />
    {/* </AuthState> */}
  </React.StrictMode>
);
