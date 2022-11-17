import Home from "./pages/Home.js";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Activities from "./pages/Activities.js";
import PageNotFound from "./pages/PageNotFound.js";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Navbar />
    </Container>
  );
}
const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export default App;
