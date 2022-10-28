import { UilClouds } from "@iconscout/react-unicons";
import React from "react";
import styled from "styled-components";

function TemperatureAndDetails() {
  return (
    <>
      <WeatherDescription>Cloudy</WeatherDescription>
      <WeatherDetailsLocation>
        <WeatherIcon size={90} />
        <Degree>18˚C</Degree>
      </WeatherDetailsLocation>
    </>
  );
}

const WeatherDescription = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem auto;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #bbdefb;
`;

const WeatherDetailsLocation = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const WeatherIcon = styled(UilClouds)`
  width: 5rem;
`;

const Degree = styled.p`
  font-size: 3rem;
  line-height: 1;
`;

export default TemperatureAndDetails;
