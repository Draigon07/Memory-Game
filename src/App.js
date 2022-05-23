import { useState } from "react";
import Cards from "./components/cards";
import Counter from "./components/Counter";

function App() {
  const [startRemaining, setStart] = useState(false);
  const [pointsCount, setPointsCount] = useState(0);
  const [correctCards, setCorrectCards] = useState(0);
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
    </div>
  );
}

export default App;
