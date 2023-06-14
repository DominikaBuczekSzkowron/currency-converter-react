import { useEffect, useState } from "react";
import "./CallendarWithTime.css";

export const CallendarWithTime = () => {
  const [date, setDate] = useState(new Date());

  const day = date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const time = date.toLocaleTimeString();

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <p className="callendarWithTime">
      Dzisiaj jest {day} {time}
    </p>
  );
};