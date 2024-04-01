import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  function decrementCount() {
    setCount((c) => c - step);
  }
  function incrementCount() {
    setCount((c) => c + step);
  }
  function handleReset() {
    setCount(0);
    setStep(1);
  }
  console.log(count);
  const date = new Date();
  date.setDate(date.getDate() + count);
  const dateFormat = date.toDateString();
  return (
    <>
      <div>
        <input
          type="range"
          min={0}
          max={20}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step : {step}</span>
      </div>
      <div>
        <button onClick={decrementCount}>-</button>

        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={incrementCount}>+</button>
      </div>
      {count === 0 && <p>Today is {dateFormat}</p>}
      {count > 0 && (
        <p>
          {count} days from today is {dateFormat}
        </p>
      )}
      {count < 0 && (
        <p>
          {-count} days ago was {dateFormat}
        </p>
      )}
      {(count !== 0 || step !== 1) && (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </>
  );
}

export default Counter;
