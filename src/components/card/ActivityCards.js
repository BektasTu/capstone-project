import React, { useState } from "react";
import styled from "styled-components";

const ActivityCards = (props) => {
  const [activity] = useState("");
  return (
    <CardContainer>
      <DeleteButton
        size={30}
        value="Delete Activity"
        onClick={() => props.delete(activity)}
      />
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
  border-radius: 10px;
  padding: 15px;
  align-items: flex-start;
  background-color: rgb(80, 80, 80);
  word-break: break-word;
  hyphens: auto;
`;

const SubText = styled.label`
  margin-bottom: 7px;
  color: #f8f8ff;
`;

const ActivityName = styled.h1`
  color: #f8f8ff;
  text-decoration: underline;
  text-transform: capitalize;
`;

const DeleteButton = styled.button`
  border: none;
  border-radius: 25px;
  color: white;
  background-image: linear-gradient(to right, #464646 7%, #ff0000 100%);
  width: 4rem;
`;

export default ActivityCards;
