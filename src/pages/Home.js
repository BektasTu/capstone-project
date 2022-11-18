import CityButtons from "../components/button/CityButtons";
import SearchBar from "../components/searchbar/SearchBar";
import TemperatureAndDetails from "../components/weather-card/TemperatureAndDetails";
import TimeAndLocation from "../components/weather-card/TimeAndLocation";
import getFormattedWeatherData from "../services/weatherService.js";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Map from "../components/map/Map";

export default function Home() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "linear-gradient(to top, #334155 0%, #3f3f46 100%)";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold)
      return "linear-gradient(to top, #0E7490 0%, #1D4ED8 100%)";

    return "linear-gradient(to top, #A16207 0%, #C2410C 100%)";
  };

  return (
    <Container variant={formatBackground()}>
      <CityButtons setQuery={setQuery} />
      <SearchBar setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
        </>
      )}

      <Map />

      <ToastContainer
        autoClose={1500}
        type="success"
        theme="colored"
        newestOnTop={true}
      />
    </Container>
  );
}

const Container = styled.div`
  background-image: ${({ variant }) => variant};
  width: 100%;
  height: 100%;
`;
