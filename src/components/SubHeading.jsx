import React from "react";
import styled from "styled-components";

function SubHeading({ text }) {
  return (
    <StyledSubHeading>
      <h2>{text}</h2>
    </StyledSubHeading>
  );
}

export default SubHeading;

const StyledSubHeading = styled.div`
  margin: 40px 0px;

  h2 {
    font-size: 23px;
    font-weight: 500;
    position: relative;
    padding: 0px 30px;

    &::before {
      content: "";
      position: absolute;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 2px;
      height: 120%;
      width: 6px;
      background: #f04b41;
    }
  }
`;
