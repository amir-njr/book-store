import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Style
import "./styles/index.css";
import "./styles/fonts.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);
