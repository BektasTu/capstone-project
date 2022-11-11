import React, { useState } from "react";
import styled from "styled-components";
import ActivityCards from "./ActivityCards";
import AddActivity from "./AddActivity";
import DeleteActivity from "./DeleteActivity";

export default function Card() {
  const [activities, setActivities] = useState({
    activityList: [
      {
        id: 1,
        name: "",
        date: "",
        city: "",
        time: "",
      },
    ],
  });

  const AddActivityHandler = (
    activityID,
    activityName,
    activityDate,
    activityCity,
    activityTime
  ) => {
    setActivities({
      activityList: [
        ...activities.activityList,
        {
          id: activityID,
          name: activityName,
          date: activityDate,
          city: activityCity,
          time: activityTime,
        },
      ],
    });
  };

  const DeleteActivityHandler = (activityName) => {
    let index,
      count = 0;
    let activitiesList = [...activities.activityList];
    activities.activityList.map((element) =>
      element.name === activityName ? (index = count) : count++
    );
    activitiesList.splice(index, 1);
    setActivities({ activityList: activitiesList });
  };

  return (
    <>
      <InputComponent>
        <AddActivity
          add={AddActivityHandler}
          id={activities.activityList[activities.activityList.length - 1].id}
        />
        <DeleteActivity delete={DeleteActivityHandler} />
      </InputComponent>

      <AllCards>
        {activities.activityList.map((element) => (
          <ActivityCards
            key={element.id}
            name={element.name}
            date={element.date}
            city={element.city}
            time={element.time}
          />
        ))}
      </AllCards>
    </>
  );
}

const InputComponent = styled.div`
  background-color: rgba(0, 0, 0, 0.404);
  padding: 20px;
  margin-bottom: 20px;
`;

const AllCards = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
