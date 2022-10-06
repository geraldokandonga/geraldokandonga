import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";

import { blogs } from "./data";
import { BlogsContainer } from "./components/Blog/BlogElements";
import Blog from "./components/Blog";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HashRouter basename="/">
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Home>
        <Header toggle={toggle} />
        <BlogsContainer>
          {blogs.map((blog) => (
            <>
              <Blog
                date={blog.date}
                url={blog.url}
                title={blog.title}
                description={blog.description.substring(0, 60) + "..."}
              />
            </>
          ))}
        </BlogsContainer>
      </Home>
      <Footer />
      <Portfolio isOpen={isOpen} toggle={toggle} />
    </HashRouter>
  );
}

export default App;
