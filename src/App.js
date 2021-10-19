import React from "react";
import { useState, useEffect, useCallback } from "react";

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
  const [loading, setLoading] = useState(false);
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

  const shorten = useCallback(async () => {
    if (!isValid(url)) {
      return setError("Please add a link");
    }
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      const data = await response.json();
      setCards([
        ...cards,
        { url_org: url, url: data.result.short_link, code: data.result.code },
      ]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    setUrl(" ");
  }, [cards, url]);
  // )() => {
  //   if (!isValid(url)) {
  //     return setError("Please add a link");
  //   }
  //   setLoading(true);
  //   fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
  //     .then((response) => response.json())
  //     .then((json) =>
  //       setCards([
  //         ...cards,
  //         { url_org: url, url: json.result.short_link, code: json.result.code },
  //       ])
  //     );

  console.log(loading);
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
        {loading && <div className='loader'></div>}
        {cards.reverse().map((card, index) => (
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
