import CityButtons from "../components/button/CityButtons";
import SearchBar from "../components/searchbar/SearchBar";
import Forecast from "../components/weather-card/Forecast";
import TemperatureAndDetails from "../components/weather-card/TemperatureAndDetails";
import TimeAndLocation from "../components/weather-card/TimeAndLocation";
import getFormattedWeatherData from "../services/weatherService.js";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

export default function Home() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);
  console.log(weather);
  return (
    <Container>
      <CityButtons setQuery={setQuery} />
      <SearchBar setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />

          <Forecast title="HOURLY FORECAST" items={weather.hourly} />
          <Forecast title="DAILY FORECAST" items={weather.daily} />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  background-image: linear-gradient(to top, #334155 0%, #3f3f46 100%);
`;
