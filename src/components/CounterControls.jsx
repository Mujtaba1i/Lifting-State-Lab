import "./counter.css";

function CounterControls({increaseCount, decreaseCount}) {
  return (
    <div className="counter-controls">
      <button
        className="btn secondary"
        onClick={decreaseCount}
      >
        -
      </button>

      <button
        className="btn primary"
        onClick={increaseCount}
      >
        +
      </button>
    </div>
  );
}

export default CounterControls;
