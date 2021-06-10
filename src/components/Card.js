import React, { useState } from "react";
import styled from "styled-components";

const CardElement = styled.div`
  margin: 1.5em auto 0em;
  width: 90%;
  border-radius: 0.313em;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 1110px;
  @media screen and (min-width: 1120px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1110px;
    padding: 0.5rem 2rem;
    font-size: 1.25rem;
  }
  .card-link {
    color: var(--veryDarkBlue);
    padding-bottom: 1em;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    @media screen and (min-width: 1120px) {
      padding-bottom: 0;
      max-width: 35em;
    }
  }
  .card-line {
    content: " ";
    margin: 0 -1em;
    max-width: 720px;
    height: 1px;
    background-color: var(--grayLight);
    @media screen and (min-width: 1120px) {
      display: none;
    }
  }
  .card-url {
    color: var(--cyan);
    padding-top: 1em;
    padding-bottom: 1em;
    @media screen and (min-width: 1120px) {
      margin-left: auto;
      margin-right: 2em;
    }
  }
  button {
    border: 2px solid transparent;
    border-radius: 0.313em;
    padding: 0.4em 1em;
    font-size: 1.125rem;
    color: white;
    background-color: var(--cyan);
    font-weight: 700;
    outline: none;
    &.btn-clicked {
      background-color: var(--darkViolet);
    }
  }
`;

function Card({ card }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(`https://rel.ink/${card.hashId}`);
  };

  return (
    <CardElement>
      <p className='card-link'>{card.url}</p>
      <div className='card-line'></div>
      <p className='card-url'>{`https://rel.ink/${card.hashId}`}</p>
      <button
        onClick={handleCopy}
        className={`btn-copy ${copied && "btn-clicked"}`}
        type='submit'>
        {copied ? "Copied" : "Copy"}
      </button>
    </CardElement>
  );
}

export default Card;
