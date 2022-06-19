import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Invoices from "./router/invoices/Invoices";
import Projects from "./router/Projects";
import Reports from "./router/Reports";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Invoices" element={<Invoices />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Reports" element={<Reports />} />
    </Routes>
  </Router>
);
