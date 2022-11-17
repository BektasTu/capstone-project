import React from "react";
import styled from "styled-components";
import Card from "../components/card/Card.js";

function Activities({ cards, onDelete, onToggle }) {
  return (
    <CardContainer>
      {cards.map((card) => {
        return (
          <Card
            id={card.id}
            question={card.question}
            tags={card.tags}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        );
      })}
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 auto;
  justify-content: center;
  align-items: top;
  gap: 0 20px;
  margin: 0 auto;
`;

export default Activities;
