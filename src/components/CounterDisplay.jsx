import { useState } from "react";
import "./counter.css";

function CounterDisplay() {
    const [count, setCount] = useState(0)
  return (
    <div className="counter-display">
      <p className="counter-label">Current Count</p>
      <h2 className="counter-value">{count}</h2>
    </div>
  );
}

export default CounterDisplay;