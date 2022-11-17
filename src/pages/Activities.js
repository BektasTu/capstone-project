import React from "react";
import styled from "styled-components";
import Card from "../components/card/Card.js";

function Activities() {
  return (
    <>
      <Position>
        <Card />
      </Position>
    </>
  );
}

const Position = styled.div`
  background-color: rgb(44, 41, 41);
`;

export default Activities;
