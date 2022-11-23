import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isGoal, setIsGoal] = useState(false);

  const incrementHandler = () => {
    setCount((previous) => previous + 1);
  };

  useEffect(() => {
    setIsGoal(!isGoal);
  }, [count]);

  return (
    <div className="App">
      <h2>Count: {count}</h2>
      <h2>{isGoal ? "Goal" : "No Goal"}</h2>
      <button onClick={incrementHandler}>increment</button>
    </div>
  );
}

export default App;
