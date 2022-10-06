import React from "react";
import { HomeContainer, HomeMain } from "./HomeElements";

const Home = ({ children }) => {
  return (
    <HomeMain>
      <HomeContainer>{children}</HomeContainer>
    </HomeMain>
  );
};

export default Home;
