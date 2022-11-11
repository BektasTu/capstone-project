import React from "react";
import styled from "styled-components";
import { iconUrlFromCode } from "../../services/weatherService";

function Forecast({ title, items }) {
  return (
    <>
      <ForecastPosition>
        <HourlyText>{title}</HourlyText>
      </ForecastPosition>
      <Break />
      <HourlyContent>
        {items.map((item, index) => (
          <Details key={index}>
            <DetailsHour>{item.title}</DetailsHour>
            <DetailsIcon />
            <DetailsDegree>{`${item.temp.toFixed()}˚`}</DetailsDegree>
          </Details>
        ))}
      </HourlyContent>
    </>
  );
}

const ForecastPosition = styled.div`
  display: flex;
  margin-top: 1.5rem;
  justify-content: flex-start;
  align-items: center;
`;

const HourlyText = styled.p`
  color: white;
  font-weight: 500;
`;

const Break = styled.hr`
  margin: 0.5rem auto;
  color: white;
`;

const HourlyContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DetailsHour = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const DetailsIcon = styled(iconUrlFromCode)`
  margin: 0.25rem auto;
  width: 3rem;
`;

const DetailsDegree = styled.p``;
export default Forecast;
