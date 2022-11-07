import CityButtons from "../components/button/CityButtons";
import SearchBar from "../components/searchbar/SearchBar";
import Forecast from "../components/weather-card/Forecast";
import TemperatureAndDetails from "../components/weather-card/TemperatureAndDetails";
import TimeAndLocation from "../components/weather-card/TimeAndLocation";

export default function Home() {
  return (
    <>
      <CityButtons />
      <SearchBar />

      <TimeAndLocation />
      <TemperatureAndDetails />

      <Forecast title="HOURLY FORECAST" />
      <Forecast title="DAILY FORECAST" />
    </>
  );
}
