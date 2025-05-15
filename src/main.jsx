import React from "react";
import ReactDOM from "react-dom/client";

// import { BrowserRouter } from "react-router-dom";
import Approuter from "./AppRouter";

// CSS & Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/select2.min.css";

// Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";

// JS Bootstrap (optional, only if needed)
import "bootstrap/dist/js/bootstrap.bundle.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Wrap with BrowserRouter if you plan to use routing
  // <BrowserRouter>
  //   <Approuter />
  // </BrowserRouter>
  <Approuter />
);
