import "./CalendarWithTime.css";
import { useCurrentDate } from "./useCurrentDate";

export const CalendarWithTime = () => {
  const date = useCurrentDate();

  return (
    <p className="calendarWithTime">
      Dzisiaj jest {date.day} {date.time}
    </p>
  );
};
export default CalendarWithTime;
