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
  text-align: center;
  margin: 0;
  background-color: rgb(44, 41, 41);
  height: 100vh;
  width: 100vw;
`;

export default Activities;
