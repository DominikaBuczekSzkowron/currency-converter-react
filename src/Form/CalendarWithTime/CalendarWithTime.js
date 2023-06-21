import { useCurrentDate } from "./useCurrentDate";
import { Date } from "./styled";

export const CalendarWithTime = () => {
  const date = useCurrentDate();

  return (
    <Date>
      Dzisiaj jest {date.day} {date.time}
    </Date>
  );
};
export default CalendarWithTime;
