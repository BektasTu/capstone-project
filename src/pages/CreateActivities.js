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

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { newActivity, newCity, newDate, newTime } = form.elements;
    let newTags = [
      newActivity.value,
      newCity.value,
      newDate.value,
      newTime.value,
    ].filter((tag) => tag.length > 0);
    onHandleSubmit(newActivity.value, newTags);
    navigate("/activities");
  }

  return (
    <StyledBackground>
      <CreateForm onSubmit={handleSubmit}>
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

        <label htmlFor="newCity">City:</label>
        <input
          type="text"
          maxLength="30"
          id="newCity"
          name="newCity"
          placeholder="e.g. New York ..."
          required
        />
        <label htmlFor="newDate">Date:</label>
        <input
          type="date"
          value={today}
          min={today}
          id="newDate"
          name="newDate"
          required
        />
        <label htmlFor="newTime">Time:</label>
        <input type="time" id="newTime" name="newTime" required />

        <AddButton type="submit">Add Activity</AddButton>
      </CreateForm>
    </StyledBackground>
  );
}

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Subheader = styled.h2`
  text-align: center;
  font-size: 2rem;
`;

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const AddButton = styled.button`
  display: inline-block;
  font-size: 1em;
  padding: 1em 2em;
  margin-top: 90px;
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
