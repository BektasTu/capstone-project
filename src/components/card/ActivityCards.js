import React from "react";
import styled from "styled-components";
import { RiDeleteBin2Fill } from "react-icons/ri";

const ActivityCards = (props) => {
  return (
    <CardContainer>
      <Delete
        type="button"
        size={30}
        onClick={() => props.delete(ActivityCards)}
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
  width: 28%;
  border-radius: 7px;
  margin: 5px;
  padding: 10px;
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

const Delete = styled(RiDeleteBin2Fill)`
  border: none;
  padding: 6px 20px;
  border-radius: 25px;
  color: white;
  background-image: linear-gradient(to right, #464646 7%, #ff0000 100%);
`;
export default ActivityCards;
