import "./counter.css";
import { useState } from "react";

function CounterControls() {
    const [count, setCount] = useState(0)
  return (
    <div className="counter-controls">
      <button
        className="btn secondary"
        onClick={() => setCount(count-1)}
      >
        −
      </button>

      <button
        className="btn primary"
        onClick={() => setCount(count+1)}
      >
        +
      </button>
    </div>
  );
}

export default CounterControls;
