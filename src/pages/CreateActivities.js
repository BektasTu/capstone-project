import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function CreateActivities({ onHandleSubmit }) {
  const navigate = useNavigate();

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
    <>
      <CreateForm onSubmit={onSubmit}>
        <Subheader>New activity</Subheader>
        <label htmlFor="newActivity">Your activity:</label>
        <textarea
          name="newActivity"
          id="newActivity"
          cols="30"
          rows="5"
          placeholder="max. 50 letters"
          maxLength="50"
          required
        ></textarea>

        <label htmlFor="newTag1">Tags:</label>
        <input
          type="text"
          maxLength="30"
          id="newCity"
          name="newCity"
          placeholder="city ..."
        />
        <input
          type="date"
          value={today}
          min={today}
          id="newDate"
          name="newDate"
          required
        />
        <input type="time" id="newTime" name="newTime" required />

        <button type="submit">Add Activity</button>
      </CreateForm>
      <Container></Container>
    </>
  );
}

const Subheader = styled.h2`
  text-align: center;
`;

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const Container = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 auto;
  justify-content: center;
  align-items: top;
  gap: 0 20px;
  margin: 0 auto;
`;
