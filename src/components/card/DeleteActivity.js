import React, { useState } from "react";
import styled from "styled-components";
import { RiDeleteBin2Fill } from "react-icons/ri";

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
      <DeleteButton
        size={30}
        value="Delete Activity"
        onClick={() => props.delete(activity)}
      />
    </DeleteComponents>
  );
};

const DeleteComponents = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-self: center;
`;

const Inputs = styled.input`
  width: auto;
  text-transform: capitalize;
`;

const DeleteButton = styled(RiDeleteBin2Fill)`
  border: none;
  border-radius: 25px;
  color: white;
  background-image: linear-gradient(to right, #464646 7%, #ff0000 100%);
  width: 6rem;
`;

export default DeleteActivity;
