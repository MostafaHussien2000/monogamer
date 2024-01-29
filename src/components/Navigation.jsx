import React from "react";
import styled from "styled-components";

function Navigation({ view, setView }) {
  return (
    <StyledNav>
      <span
        className={view === "popular" ? "active" : null}
        onClick={() => {
          setView("popular");
        }}
      >
        Popular Games
      </span>
      <span
        className={view === "upcoming" ? "active" : null}
        onClick={() => {
          setView("upcoming");
        }}
      >
        Upcoming Games
      </span>
      <span
        className={view === "new" ? "active" : null}
        onClick={() => {
          setView("new");
        }}
      >
        New Releases
      </span>
    </StyledNav>
  );
}

export default Navigation;

const StyledNav = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  * {
    display: block;
    text-align: center;
    color: #ffffff81;
    padding: 10px 5px;
    border-bottom: 2px solid #fff;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #fff;
    }

    &::before {
      position: absolute;
      content: "";
      background: #fff;
      top: 0px;
      right: 0px;
      left: 0px;
      bottom: -4px;
      transition: 0.2s transform ease-in-out;
      transform: translateY(100%);
      z-index: -1;
      display: block;
    }
  }

  .active {
    color: #131620;
    font-weight: 600;

    &::before {
      transform: translateY(0px);
    }
  }

  @media only screen and (max-width: 550px) {
    * {
      font-size: 15px;
    }
  }
`;
