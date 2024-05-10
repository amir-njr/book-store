// Hooks
import { useEffect, useState } from "react";

const Timer = ({ sec, min }) => {
  const [seconds, setSeconds] = useState(+sec);
  const [minutes, setMinutes] = useState(+min);

  useEffect(() => {
    if (minutes <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
      if (seconds === 0) {
        setMinutes((prevMinutes) => prevMinutes - 1);
        setSeconds(60)
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes]);

  return (
    <div className={`${minutes === 0 && "hidden"}`}>
      <span>{minutes}</span>:
      <span >{seconds}</span>
    </div>
  );
};

export default Timer;
