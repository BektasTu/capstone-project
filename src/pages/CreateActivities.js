import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function CreateActivities({ onHandleSubmit }) {
  const navigate = useNavigate();

  //This is a function to get the actual date
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

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { newActivity, newCity, newDate, newTime } = form.elements;
    let newTags = [newCity.value, newDate.value, newTime.value].filter(
      (tag) => tag.length > 0
    );
    onHandleSubmit(newActivity.value, newTags);
    navigate("/activities");
  }

  return (
    <Background>
      <CreateForm onSubmit={onSubmit}>
        <Subheader>New activity</Subheader>
        <label htmlFor="newActivity">Activity:</label>
        <textarea
          name="newActivity"
          id="newActivity"
          cols="30"
          rows="4"
          placeholder="max. 50 letters"
          maxLength="50"
          required
        ></textarea>

        <label htmlFor="newTag1">City:</label>
        <input
          type="text"
          maxLength="30"
          id="newCity"
          name="newCity"
          placeholder="e.g. New York ..."
          required
        />
        <label htmlFor="newTag1">Date:</label>
        <input
          type="date"
          value={today}
          min={today}
          id="newDate"
          name="newDate"
          required
        />
        <label htmlFor="newTag1">Time:</label>
        <input type="time" id="newTime" name="newTime" required />

        <AddButton type="submit">Add Activity</AddButton>
      </CreateForm>
    </Background>
  );
}

const Background = styled.div`
  background-color: #1d4ed8;
`;

const Subheader = styled.h2`
  text-align: center;
  text-shadow: 0 2px 25px 10px #d946ef;
`;

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);
`;

const AddButton = styled.button`
  display: inline-block;
  font-size: 1em;
  padding: 1em 2em;
  margin-top: 100px;
  margin-bottom: 60px;
  -webkit-appearance: none;
  appearance: none;
  background-color: #ff0081;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  position: relative;
  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);

  &:focus {
    outline: 0;
  }
`;
