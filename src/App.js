import { useEffect, useState } from "react";
import Home from "./pages/Home.js";
import Planer from "./pages/Planer.js";
import Add from "./pages/Add.js";
import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";

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
