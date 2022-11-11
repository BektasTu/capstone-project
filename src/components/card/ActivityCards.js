import React from "react";
import styled from "styled-components";

const ActivityCards = (props) => {
  return (
    <CardContainer>
      <ActivityName>{props.name}</ActivityName>
      <SubText>{"Date: " + props.date}</SubText>
      <SubText>{"City: " + props.city}</SubText>
      <SubText>{"Time: " + props.time}</SubText>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;
  border-radius: 7px;
  margin: 5px;
  padding: 10px;
  background-color: rgb(80, 80, 80);
`;

const SubText = styled.label`
  margin-bottom: 7px;
`;

const ActivityName = styled.h1`
  color: #ffff;
`;
export default ActivityCards;
