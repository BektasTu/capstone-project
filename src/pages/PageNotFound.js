import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PageNotFound() {
  return (
    <Error>
      <h1>404</h1>
      <h4> We can't find that page</h4>
      <GoHome to="/">Go Home</GoHome>
    </Error>
  );
}

const Error = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: xx-large;
  margin-top: 50%;
`;

const GoHome = styled(Link)`
  color: grey;
  text-decoration: none;
  border-radius: 5px;
  &:hover,
  &:focus {
    color: palevioletred;
    text-shadow: 3px 3px 20px #ff99cc, -2px 1px 30px #ff99cc;
  }
`;

export default PageNotFound;
