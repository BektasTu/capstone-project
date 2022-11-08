import { useEffect, useState } from "react";
import Home from "./pages/Home.js";
import Planer from "./pages/Planer.js";
import Add from "./pages/Add.js";
import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import getFormattedWeatherData from "./services/weatherService.js";

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "london" });
    console.log(data);
  };

  fetchWeather();

  return (
    <Content>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planer" element={<Planer />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      <Navbar />
    </Content>
  );
}

const Content = styled.main``;

export default App;
