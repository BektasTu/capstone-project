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
      title: "New York",
    },
    {
      id: 5,
      title: "Johannesburg",
    },
  ];

  return (
    <>
      {cities.map((city) => (
        <Button key={city.id} onClick={() => setQuery({ q: city.title })}>
          {city.title}
        </Button>
      ))}
    </>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  background-color: transparent;
  border: unset;
`;

export default CityButtons;
