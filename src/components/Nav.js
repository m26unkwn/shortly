import React from "react";
import styled from "styled-components";
const NavElement = styled.nav`
  display: none;
  position: absolute;
  top: 3.5rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em 1.5em 2.5em;
  background-color: var(--darkViolet);
  border-radius: 0.625em;
  @media screen and (min-width: 1120px) {
    position: relative;
    display: flex;
    background-color: transparent;
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    top: 0;
    width: auto;
    flex-direction: row;
    align-items: center;
    flex: 0 0 calc(100% - 160px);
  }
  &.active {
    display: flex;
  }
  hr {
    width: 100%;
    height: 1px;
    border: 0;
    margin-bottom: 2em;
    background-color: var(--grayishViolet);
    @media screen and (min-width: 1120px) {
      display: none;
    }
  }
  ul {
    position: relative;
    width: 100%;
    @media screen and (min-width: 1120px) {
      display: flex;
      width: auto;
      align-items: center;
    }
    li {
      list-style: none;
      text-align: center;
      @media screen and (min-width: 1120px) {
        margin-right: 2em;
      }
      a {
        color: white;
        text-decoration: none;
        font-size: 1.125rem;
        margin-bottom: 2em;
        display: block;
        @media screen and (min-width: 1120px) {
          color: var(--grayishViolet);
          font-size: 0.938rem;
          margin-bottom: auto;
          font-weight: 700;
          &:hover {
            color: var(--darkViolet);
          }
        }
      }
      button {
        color: white;
        background-color: var(--cyan);
        width: 100%;
        display: block;
        border: none;
        padding: 0.75em;
        font-size: 1.125rem;
        border-radius: 1.75em;
        @media screen and (min-width: 1120px) {
          padding: 0.5em 1.5em;
        }
        &:hover {
          opacity: 0.8;
          cursor: pointer;
        }
      }
    }
  }
`;

export const Nav = () => {
  return (
    <NavElement>
      <ul>
        <li>
          <a href='#'>Features</a>
        </li>
        <li>
          <a href='#'>Pricing</a>
        </li>
        <li>
          <a href='#'>Resources</a>
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <a href='#' rel='no-opener'>
            Login
          </a>
        </li>
        <li>
          <button className='btn' type='button'>
            Sign up
          </button>
        </li>
      </ul>
    </NavElement>
  );
};
