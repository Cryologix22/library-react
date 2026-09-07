import React from "react";
import Explore from "../components/Explore";
import Discounted from "../components/Discounted";
import Featured from "../components/Featured";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;
