import React, { useState } from "react";
import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";

const AddActivity = (props) => {
  const [activityName, setActivityName] = useState("");
  const [activityFrom, setActivityFrom] = useState();
  const [activityCity, setActivityCity] = useState("");
  const [activityTime, setActivityTime] = useState();
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;

  return (
    <>
      <TextComponents>
        <InputName>Activity Name:</InputName>
        <Inputs
          type="text"
          required
          name=""
          id="activityName"
          placeholder="Name ..."
          minLength={3}
          maxLength={50}
          onChange={(event) => setActivityName(event.target.value)}
        />
        <InputName>Date:</InputName>
        <Inputs
          type="date"
          required
          min={today}
          name=""
          id="activityDate"
          onChange={(event) => setActivityFrom(event.target.value)}
        />
        <InputName>City:</InputName>
        <Inputs
          type="text"
          required
          name=""
          id="activityCity"
          placeholder="City ..."
          onChange={(event) => setActivityCity(event.target.value)}
          minLength={3}
          maxLength={50}
        />
        <InputName>Time:</InputName>
        <Inputs
          type="time"
          required
          name=""
          id="activityTime"
          onChange={(event) => setActivityTime(event.target.value)}
        />
      </TextComponents>

      <AddButton
        size={30}
        type="submit"
        value="Add Activity"
        onClick={() =>
          props.add(
            props.id + 1,
            activityName,
            activityFrom,
            activityCity,
            activityTime
          )
        }
      />
    </>
  );
};

const TextComponents = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
`;

const Inputs = styled.input`
  align-self: center;
  text-transform: capitalize;
`;

const AddButton = styled(IoIosAddCircle)`
  border: none;
  border-radius: 25px;
  color: white;
  background-image: linear-gradient(to right, #464646 7%, #00ff00 100%);
  width: 6rem;
  margin: 1rem;
  align-self: center;
`;

const InputName = styled.p``;
export default AddActivity;
