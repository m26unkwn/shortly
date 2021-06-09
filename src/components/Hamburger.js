import React from "react";
import styled from "styled-components";

const HamburgerElement = styled.div`
  width: 1.5em;
  height: 1.313em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  span {
    position: relative;
    width: 100%;
    height: 3px;
    background-color: var(--grayishViolet);
  }
  @media screen and (min-width: 1120px) {
    display: none;
  }
`;

export const Hamburger = () => {
  const onClickHandler = () => {
    document.querySelector("nav").classList.toggle("active");
  };

  return (
    <HamburgerElement onClick={onClickHandler}>
      <span></span>
      <span></span>
      <span></span>
    </HamburgerElement>
  );
};
