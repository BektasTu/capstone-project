import {
  UilClouds,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import React from "react";
import styled from "styled-components";

function TemperatureAndDetails() {
  return (
    <>
      <WeatherDescription>Cloudy</WeatherDescription>
      <Container>
        <WeatherIcon size={90} />
        <Degree>18˚C</Degree>
        <WeatherDetails>
          <DetailsSide>
            <TemperatureIcon size={18} />
            <p>Real Feal:</p>
            <RealFeal>17˚C</RealFeal>
          </DetailsSide>
          <DetailsSide>
            <HumidityIcon size={18} />
            <p>Humidity:</p>
            <RealFeal>69%</RealFeal>
          </DetailsSide>
          <DetailsSide>
            <WindIcon size={18} />
            <p>Wind:</p>
            <RealFeal>10 km/h</RealFeal>
          </DetailsSide>
        </WeatherDetails>
      </Container>

      <DetailsBottom>
        <UilSun />
        <TextDetails>
          Rise: <NumberDetails>06:45 |</NumberDetails>
        </TextDetails>
        <UilSunset />
        <TextDetails>
          Set: <NumberDetails>17:45 |</NumberDetails>
        </TextDetails>
        <UilSun />
        <TextDetails>
          High: <NumberDetails>20˚ |</NumberDetails>
        </TextDetails>
        <UilSun />
        <TextDetails>
          Low: <NumberDetails>12˚</NumberDetails>
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

const WeatherIcon = styled(UilClouds)`
  width: 5rem;
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
  margin-left: 0.5rem;
  font-size: 0.88rem;
  flex-direction: row;
  justify-content: center;
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
