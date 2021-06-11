import React from "react";
import { useState, useEffect } from "react";

import { Header } from "./components/Header";
import Footer from "./screen/Footer";
import Banner from "./screen/Banner";
import { Hero } from "./screen/Hero";
import Info from "./screen/Info";
import Card from "./components/Card";
import Form from "./components/Form";

const App = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [cards, setCards] = useState(() => {
    const localData = localStorage.getItem("cards");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  function isValid(url) {
    const regex =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    const result = url.match(regex);
    if (result) {
      return true;
    }
    return false;
  }

  const shorten = () => {
    if (!isValid(url)) {
      return setError("Please add a link");
    }

    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((response) => response.json())
      .then((json) =>
        setCards([
          ...cards,
          { url: json.result.short_link, code: json.result.code },
        ])
      );

    return setUrl("");
  };

  const inputValue = (e) => {
    setUrl(e.target.value);
    if (e.target.value) {
      setError("");
    }
  };

  return (
    <>
      <section className='white'>
        <Header />
        <Hero />
      </section>
      <section className='grey'>
        <Form
          url={url}
          handleChange={inputValue}
          handleClick={shorten}
          error={error}
        />
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
        <Info />
        <Banner />
        <Footer />
      </section>
    </>
  );
};

export default App;
