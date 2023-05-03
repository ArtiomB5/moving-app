import { fixDateOrMonth } from "./fixDateOrMonth";

export const dateCheck = (date: string) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDate = now.getDate();

  const splittedSelectedDate = date.split("-");
  const selectedYear = Number(splittedSelectedDate[0]);
  const selectedMonth = Number(splittedSelectedDate[1]) - 1;
  const selectedDate = Number(splittedSelectedDate[2]);

  if (selectedYear < currentYear || selectedYear === currentYear) {
    splittedSelectedDate[0] = String(currentYear);

    if (selectedMonth < currentMonth || selectedMonth === currentMonth) {
      splittedSelectedDate[1] = String(fixDateOrMonth(currentMonth));

      if (selectedDate <= currentDate) {
        splittedSelectedDate[2] = String(fixDateOrMonth(currentDate));
      }

      return splittedSelectedDate.join("-");
    }
  }

  return date;
};
