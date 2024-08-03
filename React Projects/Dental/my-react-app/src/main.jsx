import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import About from "./About.jsx";
import Map from "./Map.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";
import DentalQuotes from "./DentalQuotes.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <About/>
    <Services/>
    <Map/>
    <DentalQuotes/>
    <Contact/>
  </React.StrictMode>
);
