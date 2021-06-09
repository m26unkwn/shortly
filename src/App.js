import React from "react";

import { Header } from "./components/Header";
import { Hero } from "./screen/Hero";

const App = () => {
  return (
    <>
      <section className='white'>
        <Header />
        <Hero />
      </section>
    </>
  );
};

export default App;
