import React, { useState } from "react";
import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";

const AddActivity = (props) => {
  const [activityName, setActivityName] = useState("");
  const [activityDate, setActivityDate] = useState();
  const [activityCity, setActivityCity] = useState("");
  const [activityTime, setActivityTime] = useState();

  return (
    <>
      <TextComponents>
        <InputName>Activity Name:</InputName>
        <Inputs
          type="text"
          name=""
          id="activityName"
          placeholder="Name ..."
          onChange={(event) => setActivityName(event.target.value)}
        />
        <InputName>Date:</InputName>
        <Inputs
          type="date"
          name=""
          id="activityDate"
          onChange={(event) => setActivityDate(event.target.value)}
        />
        <InputName>City:</InputName>
        <Inputs
          type="text"
          name=""
          id="activityCity"
          placeholder="City ..."
          onChange={(event) => setActivityCity(event.target.value)}
        />
        <InputName>Time:</InputName>
        <Inputs
          type="time"
          name=""
          id="activityTime"
          onChange={(event) => setActivityTime(event.target.value)}
        />
      </TextComponents>

      <AddButton
        size={30}
        type="button"
        value="Add Activity"
        onClick={() =>
          props.add(
            props.id + 1,
            activityName,
            activityDate,
            activityCity,
            activityTime
          )
        }
      />
    </>
  );
};

const TextComponents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
`;

const Inputs = styled.input`
  width: 15%;
  margin: 10px;
  text-transform: capitalize;
`;

const AddButton = styled(IoIosAddCircle)`
  border: none;
  padding: 6px 20px 6px 20px;
  border-radius: 25px;
  color: white;
  background-image: linear-gradient(to right, #464646 7%, #00ff00 100%);
`;

const InputName = styled.p`
  display: flex;
  align-content: center;
  margin-top: 0.5rem;
`;
export default AddActivity;
