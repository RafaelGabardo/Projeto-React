import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "./footer.jsx";
import { NavBar } from "./navbar.jsx";

export function BodyTemplate() {
  return (
    <body>
      <NavBar />
      <Footer />
    </body>
  );
}