import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilTemperatureEmpty,
} from "@iconscout/react-unicons";
import React from "react";
import styled from "styled-components";
import {
  formatToLocalTime,
  iconUrlFromCode,
} from "../../services/weatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  console.log(icon);
  return (
    <>
      <WeatherDescription>{details}</WeatherDescription>
      <Container>
        <WeatherIcon src={iconUrlFromCode(icon)} size={50} />
        <Degree>{`${temp.toFixed()}˚`}</Degree>
        <WeatherDetails>
          <DetailsSide>
            <TemperatureIcon size={18} />
            Real Feal:
            <RealFeal>{`${feels_like.toFixed()}˚`}</RealFeal>
          </DetailsSide>
          <DetailsSide>
            <HumidityIcon size={18} />
            Humidity:
            <RealFeal>{`${humidity.toFixed()}%`}</RealFeal>
          </DetailsSide>
          <DetailsSide>
            <WindIcon size={18} />
            Wind:
            <RealFeal>{`${speed.toFixed()}km/h`}</RealFeal>
          </DetailsSide>
        </WeatherDetails>
      </Container>

      <DetailsBottom>
        <UilSun />
        <TextDetails>
          Rise:{""}
          <NumberDetails>
            {formatToLocalTime(sunrise, timezone, "T")}
          </NumberDetails>
        </TextDetails>
        <UilSunset />
        <TextDetails>
          Set:{""}
          <NumberDetails>
            {formatToLocalTime(sunset, timezone, "T")}
          </NumberDetails>
        </TextDetails>
        <UilTemperature />
        <TextDetails>
          High: <NumberDetails>{`${temp_max.toFixed()}˚`}</NumberDetails>
        </TextDetails>
        <UilTemperatureEmpty />
        <TextDetails>
          Low: <NumberDetails>{`${temp_min.toFixed()}˚`}</NumberDetails>
        </TextDetails>
      </DetailsBottom>
    </>
  );
}

const WeatherDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem auto;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #bbdefb;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const WeatherIcon = styled.img`
  width: 7rem;
`;

const Degree = styled.p`
  font-size: 3rem;
  line-height: 1;
`;

const WeatherDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;

const DetailsSide = styled.div`
  display: flex;
  font-size: 0.875rem;
  justify-content: center;
  align-items: center;
  line-height: 1.25rem;
  font-weight: 300;
`;

const TemperatureIcon = styled(UilTemperature)`
  margin-right: 0.25rem;
`;

const RealFeal = styled.span`
  font-weight: 600;
  margin-left: 0.25rem;
`;

const WindIcon = styled(UilWind)`
  margin-right: 0.25rem;
`;

const HumidityIcon = styled(UilTear)`
  margin-right: 0.25rem;
`;

const DetailsBottom = styled.div`
  display: flex;
  padding: 0.75rem auto;
  font-size: 0.88rem;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;

const TextDetails = styled.p`
  font-weight: 300;
  margin-left: 0.25rem;
`;

const NumberDetails = styled.span`
  margin: 0.2rem;
  font-weight: 500;
`;

export default TemperatureAndDetails;
