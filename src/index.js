import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "../src/Routes/Home/Home";
import About from "../src/Routes/About/About";
import Contact from "../src/Routes/Contact/Contact";
import Productivity from "./Routes/Productivity/Productivity";
import Testimonials from "./Routes/Testimonials/Testimonials";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./Routes/Productivity/WelcomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
          <Route path="productivity" element={<Productivity />} />
          <Route path="welcome" element={<WelcomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
