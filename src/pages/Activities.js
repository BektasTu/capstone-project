import React from "react";
import styled from "styled-components";
import Card from "../components/card/Card.js";

function Activities({ cards, onDelete, onToggle }) {
  return (
    <>
      <StyledBackground>
        <StyledHeader>Your Activities</StyledHeader>
        <CardContainer>
          {cards.map((card) => {
            return (
              <Card
                id={card.id}
                activity={card.activity}
                tags={card.tags}
                onDelete={onDelete}
                onToggle={onToggle}
              />
            );
          })}
        </CardContainer>
      </StyledBackground>
    </>
  );
}

const StyledBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1d4ed8;
`;

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
  background: #1d4ed8;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: top;
  gap: 0 20px;
`;

export default Activities;
