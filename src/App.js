import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AboutMe from "./conponents/AboutMe";
import Company from "./conponents/Company";
import Footer from "./conponents/Footer";
import Header from "./conponents/Header";
import Home from "./conponents/Home";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <AboutMe />
      <Company />
      <Footer />
    </Router>
  );
}

export default App;
