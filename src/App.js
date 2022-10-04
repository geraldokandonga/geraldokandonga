import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HashRouter basename="/">
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Header />
      <Portfolio isOpen={isOpen} toggle={toggle} />
      <Footer />
    </HashRouter>
  );
}

export default App;
