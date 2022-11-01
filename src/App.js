import { useEffect, useState } from "react";
import styled from "styled-components";
import CityButtons from "./components/button/CityButtons";
import SearchBar from "./components/searchbar/SearchBar";
import Forecast from "./components/weather-card/Forecast";
import TemperatureAndDetails from "./components/weather-card/TemperatureAndDetails";
import TimeAndLocation from "./components/weather-card/TimeAndLocation";

function App() {
  const [state, setState] = useState({ topic: "" });

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch("/api/data-for-react");
      const data = await response.json();
      setState(data);
    }
  }, []);
  return (
    <Content>
      <CityButtons />
      <SearchBar />

      <TimeAndLocation />
      <TemperatureAndDetails />

      <Forecast title="HOURLY FORECAST" />
      <Forecast title="DAILY FORECAST" />
    </Content>
  );
}

const Content = styled.main`
  width: 100vw;
  padding: 1rem;
  background-image: linear-gradient(to bottom right, #0097a7, #1976d2);
  height: 100vh;
`;

export default App;
