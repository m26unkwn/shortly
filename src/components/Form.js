import React from "react";
import styled from "styled-components";

const FormElement = styled.section`
  margin: 11em auto -5.5em;
  width: 90%;
  max-width: 1110px;
  .form {
    position: relative;
    width: 100%;
    background-color: var(--darkViolet);
    background-image: url("images/bg-shorten-mobile.svg");
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 1.5rem;
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: 70%;
    border-radius: 0.625em;
    transform: translateY(-50%);
    @media screen and (min-width: 1120px) {
      flex-direction: row;
      margin-bottom: 4em;
      align-items: center;
    }
    input {
      border: 3px solid transparent;
      border-radius: 0.313em;
      padding: 0.6em 2em 0.6em 1em;
      color: var(--grayishViolet);
      font-size: 1.125rem;
      margin-bottom: 1em;
      @media screen and (min-width: 1120px) {
        flex-grow: 1;
        margin-right: 2em;
        margin-bottom: 0;
      }
      &::placeholder {
        color: var(--grayishViolet);
        opacity: 1;
      }
      &.error {
        color: var(--red);
        border: 3px solid var(--red);
        &::placeholder {
          opacity: 0.5;
          color: var(--red);
        }
      }
    }
    .error-message {
      color: var(--red);
      font-size: 0.75rem;
      font-style: italic;
      margin-top: -15px;
      margin-bottom: 20px;
    }
    button {
      border: 2px solid transparent;
      border-radius: 0.313em;
      padding: 0.6em 1em;
      font-size: 1.125rem;
      color: white;
      background-color: var(--cyan);
      font-weight: 700;
      @media screen and (min-width: 1120px) {
        flex-direction: row;
        height: 54.59px;
      }
    }
  }
`;

function Form({ url, handleChange, handleClick, error }) {
  return (
    <FormElement className={error ? "form form--error" : "form"}>
      <div className='form'>
        <input
          className={error ? "error" : ""}
          type='url'
          aria-label='URL'
          name='url'
          id='url'
          placeholder='Shorten a link here...'
          value={url}
          onChange={handleChange}
        />
        {error && <p className='error-message'>{error}</p>}
        <button onClick={handleClick}>Shorten It!</button>
      </div>
    </FormElement>
  );
}

export default Form;
