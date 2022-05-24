import { useState } from "react";
import Cards from "./components/cards";
import Counter from "./components/Counter";
import Modal from "./components/Modal";

function App() {
  const [startRemaining, setStart] = useState(false);
  const [pointsCount, setPointsCount] = useState(0);
  const [correctCards, setCorrectCards] = useState(0);
  const [modelStatus, setModalStatus] = useState(false);
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Counter
        startRemaining={startRemaining}
        setStart={setStart}
        pointsCount={pointsCount}
        correctOnes={correctCards}
      />
      <Cards
        start={startRemaining}
        setPoints={setPointsCount}
        correctOnes={correctCards}
        setCorrectOnes={setCorrectCards}
      />
      {modelStatus ? <Modal>{<h2>Hola</h2>}</Modal> : null}
    </div>
  );
}

export default App;
