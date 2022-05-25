import React, { useEffect, useState } from "react";

const defaultCountDown = {
  seconds: "30",
  minutes: "01",
};
function Counter({
  startRemaining,
  setStart,
  pointsCount,
  correctOnes,
  setModalStatus,
}) {
  const [countDown, setCountDown] = useState(defaultCountDown);

  useEffect(() => {
    if (countDown.minutes == "0" && countDown.seconds == "0")
      setStart((st) => !st);

    if (correctOnes == 8) {
      setStart((st) => !st);
      setModalStatus((sta) => !sta);
    }
  }, [countDown]);

  useEffect(() => {
    if (startRemaining) {
      const interval = setInterval(updateCountDown, 1000);
      return () => clearInterval(interval);
    }
  }, [startRemaining, countDown]);
  function updateCountDown() {
    setCountDown((count) => ({
      seconds: count.seconds == "0" ? "60" : count.seconds - 1,
      minutes: count.seconds == "0" ? count.minutes - 1 : count.minutes,
    }));
    console.log(countDown.minutes);
  }

  return (
    <div className="counter-container">
      <span>{countDown.minutes}</span>
      <span> : </span>
      <span>{countDown.seconds}</span>
      <button className="start-timer" onClick={() => setStart((st) => !st)}>
        {startRemaining == true ? "Pause" : "Start"}
      </button>
      <span
        style={{
          margin: "0px 1rem",
          backgroundColor: "red",
          padding: "0.4rem",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
      >
        Points: {pointsCount} / 8
      </span>
    </div>
  );
}

export default Counter;
