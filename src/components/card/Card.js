import styled from "styled-components";
import useLocalStorage from "../../hooks/useLocalStorage";
import ActivityCards from "./ActivityCards";
import AddActivity from "./AddActivity";
import DeleteActivity from "./DeleteActivity";

export default function Card() {
  const [activities, setActivities] = useLocalStorage("activities", {
    activityList: [
      {
        id: 1,
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
  display: flex;
  flex-direction: column;
`;

const AllCards = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
`;
