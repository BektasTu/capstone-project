import React from "react";
import styled from "styled-components";
import Card from "../components/card/Card.js";
import HeaderActivities from "../components/header/HeaderActivities.js";

function Activities({ cards, onDelete, onToggle, onEdit }) {
  return (
    <>
      <StyledBackground>
        <HeaderActivities />
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
      </StyledBackground>
    </>
  );
}

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
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
