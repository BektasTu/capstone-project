import CityButtons from "../components/button/CityButtons";
import SearchBar from "../components/searchbar/SearchBar";
import Forecast from "../components/weather-card/Forecast";
import TemperatureAndDetails from "../components/weather-card/TemperatureAndDetails";
import TimeAndLocation from "../components/weather-card/TimeAndLocation";
import getFormattedWeatherData from "../services/weatherService.js";
import { useEffect, useState } from "react";

export default function Home() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query]);

  return (
    <>
      <CityButtons />
      <SearchBar />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />

          <Forecast title="HOURLY FORECAST" items={weather.hourly} />
          <Forecast title="DAILY FORECAST" items={weather.daily} />
        </>
      )}
    </>
  );
}
