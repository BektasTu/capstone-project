import Home from "./pages/Home.js";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Activities from "./pages/Activities.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
