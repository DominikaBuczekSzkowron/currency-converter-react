import { useCurrentDate } from "./useCurrentDate";
import { Date } from "./styled";

export const CalendarWithTime = () => {
  const date = useCurrentDate();

  const day = date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const time = date.toLocaleTimeString();

  return (
    <Date>
      Dzisiaj jest {day} {time}
    </Date>
  );
};
export default CalendarWithTime;
