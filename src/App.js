import { useState } from "react";
import Cards from "./components/cards";
import Counter from "./components/Counter";

function App() {
  const [startRemaining, setStart] = useState(false);
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Counter startRemaining={startRemaining} setStart={setStart} />

      <Cards start={startRemaining} />
    </div>
  );
}

export default App;
