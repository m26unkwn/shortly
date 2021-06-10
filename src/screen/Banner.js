import React from "react";
import styled from "styled-components";

const BannerElement = styled.section`
  background-color: var(--darkViolet);
  background-image: url("images/bg-boost-mobile.svg");
  text-align: center;
  padding: 5.625em 1.6em;
  margin-top: 4.563em;
  @media screen and (min-width: 1120px) {
    margin-top: 7.5em;
    background-image: url("images/bg-boost-desktop.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  h2 {
    font-size: 1.75rem;
    margin-bottom: 1em;
    color: white;
    @media screen and (min-width: 1120px) {
      font-size: 2.5rem;
      margin-bottom: 1em;
    }
  }
  a {
    border: 2px solid transparent;
    border-radius: 0.313em;
    padding: 0.6em 1.8em;
    font-size: 1.125rem;
    color: white;
    background-color: var(--cyan);
    font-weight: 700;
    text-decoration: none;
    border-radius: 25px;
    &:hover {
      opacity: 0.8;
    }
    @media screen and (min-width: 1120px) {
      font-size: 1.25rem;
    }
  }
`;

function Banner() {
  return (
    <BannerElement>
      <h2>Boost your links today</h2>
      <a href='#'>Get Started</a>
    </BannerElement>
  );
}

export default Banner;
