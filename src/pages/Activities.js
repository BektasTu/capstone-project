import React from "react";
import styled from "styled-components";
import Card from "../components/card/Card.js";

function Activities({ cards, onDelete, onToggle }) {
  return (
    <Background>
      <StyledHeader>Your Activities</StyledHeader>
      <CardContainer>
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              activity={card.activity}
              tags={card.tags}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          );
        })}
      </CardContainer>
    </Background>
  );
}

const Background = styled.div`
  background: blue;
`;

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
  color: #333333;
  background: #ffffff;
  text-shadow: 2px 2px 0px #ffffff, 5px 4px 0px rgba(0, 0, 0, 0.15);
  color: #333333;
  background: #ffffff;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: top;
  gap: 0 20px;
  margin: 0 auto;
  background-color: aquamarine;
`;

export default Activities;
