import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css"; // ✅ Correct path to index.css
import App from "./pages/App"; // ✅ Correct path to App.js
import reportWebVitals from "./assets/reportWebVitals"; // ✅ Correct path to reportWebVitals.js
//import AppRoutes from "./routes/AppRoutes"; // ✅ Correct path

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
