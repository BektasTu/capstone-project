import React, { useState } from "react";
import styled from "styled-components";

const DeleteActivity = (props) => {
  const [activity, setActivity] = useState("");
  return (
    <DeleteComponents>
      <Inputs
        type="text"
        name=""
        id=""
        placeholder="Name ..."
        onChange={(event) => setActivity(event.target.value)}
      />
      <FunctionButtons
        value="Delete Activity"
        onClick={() => props.delete(activity)}
      />
    </DeleteComponents>
  );
};

const DeleteComponents = styled.div`
  margin-top: 30px;
`;

const Inputs = styled.input`
  width: 15%;
  margin: 10px;
`;

const FunctionButtons = styled.button`
  border: none;
  padding: 6px 20px;
  border-radius: 25px;
  color: white;
  background-image: linear-gradient(to right, #464646 7%, #ff0000 100%);
`;

export default DeleteActivity;
