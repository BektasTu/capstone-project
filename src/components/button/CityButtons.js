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
      title: "Naples",
    },
    {
      id: 4,
      title: "Paris",
    },
    {
      id: 5,
      title: "Madrid",
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
  padding-bottom: 0.1rem;
`;

const Button = styled.button`
  color: white;
  font-size: medium;
  background-color: inherit;
  border: unset;
  text-shadow: 1px 1px 2px black;
`;

export default CityButtons;
