import React from "react";
import styled from "styled-components";

function CityButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Istanbul",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Miami",
    },
    {
      id: 5,
      title: "Johannesburg",
    },
  ];

  return (
    <ButtonPosition>
      {cities.map((city) => (
        <Button key={city.id} onClick={() => setQuery({ q: city.title })}>
          {city.title}
        </Button>
      ))}
    </ButtonPosition>
  );
}

const ButtonPosition = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  color: white;
  font-size: medium;
  background-color: transparent;
  border: unset;
`;

export default CityButtons;
