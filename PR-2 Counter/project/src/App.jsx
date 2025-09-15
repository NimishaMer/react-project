import { useEffect, useState } from "react";
import "./App.css";

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let count = JSON.parse(localStorage.getItem("count"));
    if (count !== null) {
      setCount(count);
    }
  }, []);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("count", JSON.stringify(newCount));
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      localStorage.setItem("count", JSON.stringify(newCount));
    } else {
      alert("Counter 0 se niche nahi ja sakta!");
    }
  };

  const reset = () => {
    setCount(0);
    localStorage.setItem("count", JSON.stringify(0));
  };

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Count;