import React, { useState } from "react";

const AddActivity = (props) => {
  const [activityName, setActivityName] = useState("");
  const [activityDate, setActivityDate] = useState();
  const [activityCity, setActivityCity] = useState("");
  const [activityTime, setActivityTime] = useState();

  return (
    <div>
      <div className="Text-Components">
        <input
          type="text"
          name=""
          id="activityName"
          className="Inputs"
          placeholder="Name"
          onChange={(event) => setActivityName(event.target.value)}
        />
        <input
          type="date"
          name=""
          id="activityDate"
          className="Inputs"
          onChange={(event) => setActivityDate(event.target.value)}
        />
        <input
          type="text"
          name=""
          id="activityCity"
          className="Inputs"
          placeholder="City"
          onChange={(event) => setActivityCity(event.target.value)}
        />
        <input
          type="time"
          name=""
          id="activityTime"
          className="Inputs"
          onChange={(event) => setActivityTime(event.target.value)}
        />
      </div>

      <input
        type="button"
        value="Add Activity"
        className="Function-Buttons"
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
    </div>
  );
};

export default AddActivity;
