import React from "react";
import styled from "styled-components";
import Working from "../assets/illustration-working.svg";

const HeroElement = styled.section`
  margin-left: 1.5em;
  overflow: hidden;
  img {
    width: 31em;
    @media screen and (min-width: 1120px) {
      position: absolute;
      width: 45em;
      right: -7%;
    }
  }
  @media screen and (min-width: 1120px) {
    display: flex;
    max-width: 1108px;
    justify-content: flex-end;
    margin: 0 auto;
    flex-direction: row-reverse;
    margin-top: 4em;
    padding-bottom: 3em;
    margin-left: auto;
    overflow: inherit;
  }
`;

const Container = styled.div`
  padding-top: 2.313em;
  text-align: center;
  margin-right: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1120px) {
    flex: 1 1 650px;
    max-width: 650px;
    text-align: left;
    align-items: flex-start;
  }
  h1 {
    color: var(--veryDarkBlue);
    font-size: 2.625rem;
    line-height: 3rem;
    padding-bottom: 0.4em;
    @media screen and (min-width: 1120px) {
      font-size: 5rem;
      line-height: 5.625rem;
    }
  }
  p {
    color: var(--grayishViolet);
    font-size: 1.125rem;
    line-height: 1.875rem;
    padding-bottom: 2em;
    @media screen and (min-width: 1120px) {
      font-size: 1.375rem;
      line-height: 2.25rem;
      max-width: 540px;
    }
  }
  button {
    color: white;
    background-color: var(--cyan);
    width: auto;
    display: block;
    border: none;
    padding: 0.75em 2.5em;
    font-size: 1.125rem;
    border-radius: 1.75em;
    cursor: pointer;
  }
`;

export const Hero = () => {
  return (
    <HeroElement>
      <img src={Working} alt='illustration' />
      <Container>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </Container>
    </HeroElement>
  );
};
