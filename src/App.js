import React from "react";
import "./App.css";

import {
  Footer,
  Blog,
  Features,
  Header,
  Possibility,
  WhatGpt3,
} from "./containers";
import { Brand, Cta, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatGpt3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
