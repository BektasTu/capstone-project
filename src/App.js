import { useEffect, useState } from "react";
import styled from "styled-components";
import TopButtons from "./components/button/TopButtons";

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
    <Header>
      <TopButtons />
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 768px;
  margin-top: 1rem;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  padding-left: 8rem;
  padding-right: 8rem;
  background-image: linear-gradient(to bottom right, #0097a7, #1976d2);
  height: fit-content;
  box-shadow: 0 20px 25px -5px #bdbdbd, 0 8px 10px -6px #bdbdbd;
  border-radius: 15px;
`;

export default App;
