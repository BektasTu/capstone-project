import Home from "./pages/Home.js";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Activities from "./pages/Activities.js";
import CreateActivities from "./pages/CreateActivities.js";
import PageNotFound from "./pages/PageNotFound.js";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { setLocalStorage, loadLocalStorage } from "./hook/localStorage";

const cards = [{}];

function App() {
  const [currentActivity, setCurrentActivity] = useState({});
  const [cardArray, setCards] = useState(
    loadLocalStorage("cardArray") ?? cards
  );

  useEffect(() => {
    setLocalStorage("cardArray", cardArray);
  }, [cardArray]);

  function appendCard(newAcivity, newTags) {
    setCards([
      ...cardArray,
      { id: nanoid(), question: newAcivity, tags: newTags },
    ]);
  }

  function deleteCard(cardId) {
    setCards(cardArray.filter((card) => card.id !== cardId));
  }

  function handleEditInputChange(e) {
    setCurrentActivity({ ...currentActivity, text: e.target.value });
  }

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/activities"
          element={
            <Activities
              cards={cardArray}
              onDelete={deleteCard}
              onChange={handleEditInputChange}
            />
          }
        />
        <Route
          path="/createActivities"
          element={<CreateActivities onHandleSubmit={appendCard} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Navbar />
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export default App;
