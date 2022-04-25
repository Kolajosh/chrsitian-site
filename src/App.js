import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AboutMe from "./conponents/AboutMe";
import Footer from "./conponents/Footer";
import Header from "./conponents/Header";
import Home from "./conponents/Home";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <AboutMe />
      <Footer />
    </Router>
  );
}

export default App;
