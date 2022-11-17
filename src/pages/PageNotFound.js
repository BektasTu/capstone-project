import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PageNotFound() {
  return (
    <Error>
      <h1>404</h1>
      <h2> We can't find that page</h2>
      <GoHome to="/">Go Home</GoHome>
    </Error>
  );
}

const Error = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: xx-large;
`;

const GoHome = styled(Link)`
  color: grey;
  text-decoration: none;
  border-radius: 5px;
  &:hover,
  &:focus {
    color: red;
  }
`;

export default PageNotFound;
