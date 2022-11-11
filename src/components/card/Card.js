import React, { useState } from "react";
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
    <div className="App">
      <div className="Input-Components">
        <AddActivity
          add={AddActivityHandler}
          id={activities.activityList[activities.activityList.length - 1].id}
        />
        <DeleteActivity delete={DeleteActivityHandler} />
      </div>

      <div className="All-Cards">
        {activities.activityList.map((element) => (
          <ActivityCards
            key={element.id}
            name={element.name}
            date={element.date}
            city={element.city}
            time={element.time}
          />
        ))}
      </div>
    </div>
  );
}
