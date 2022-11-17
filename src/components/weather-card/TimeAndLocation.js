import React from "react";
import styled from "styled-components";
import { formatToLocalTime } from "../../services/weatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <>
      <TimeAndDatePosition>
        <DateAndTime>{formatToLocalTime(dt, timezone)}</DateAndTime>
      </TimeAndDatePosition>

      <LocationPosition>
        <Location>{`${name}, ${country}`}</Location>
      </LocationPosition>
    </>
  );
}

const TimeAndDatePosition = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem auto;
`;

const DateAndTime = styled.p`
  color: white;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 200;
`;

const LocationPosition = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.75rem auto;
`;

const Location = styled.p`
  color: white;
  font-size: 1.9rem;
  line-height: 2.2rem;
  font-weight: 500;
`;

export default TimeAndLocation;
