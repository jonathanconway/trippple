import React, { useRef, useEffect } from "react";
import * as shortid from "shortid";
import { format } from "date-fns";

import { Styled } from "./LayeredCalendar.styles";

interface LayeredCalendarProps {
  readonly navigated: {
    readonly year: number;
    readonly month: number;
  }
}

const generateYears = () => {
  const currentYear = new Date().getFullYear(),
        numberOfYears = 20;
  return Array(numberOfYears).fill(0).map((_, yearOffsetIndex) => (
    currentYear + (yearOffsetIndex - ((numberOfYears / 2) - 1))
  ));
};

const generateMonths = () => {
  return Array(16).fill(0).map((_, monthOffsetIndex) => {
    const date = new Date();
    date.setMonth(date.getMonth() + (monthOffsetIndex - 4));
    return { name: format(date, "MMM"), index: date.getMonth() };
  });
};

const generateDays = () => {
  return Array(100).fill(0).map((_, dayOffsetIndex) => {
    const date = new Date();
    date.setDate(date.getDate() + (dayOffsetIndex - 50));
    return date.getDate();
  });
};

const LayeredCalendar = (props: LayeredCalendarProps) => {
  const yearsRef = useRef<HTMLDivElement>(null),
        currentYearRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (yearsRef.current) {
      // Scroll to the middle on first mount
      const middle = (yearsRef.current.scrollWidth - yearsRef.current.clientWidth) / 2;
      yearsRef.current.scrollTo(middle, 0);
    }
  });

  return (
    <Styled.Container>
      <Styled.Years ref={yearsRef}>
        {generateYears().map(year => (
          <Styled.Year
            key={shortid.generate()}
            selected={year === props.navigated.year}
            ref={year === props.navigated.year ? currentYearRef : undefined}>
            {year}
          </Styled.Year>
        ))}
      </Styled.Years>
      <Styled.Months>
        {generateMonths().map(month => (
          <Styled.Month
            key={shortid.generate()}
            selected={month.index === props.navigated.month}>
            {month.name}
          </Styled.Month>
        ))}
      </Styled.Months>
      <Styled.Days>
        {generateDays().map(day => (
          <Styled.Day key={shortid.generate()}>
            <Styled.DayNumber>{day}</Styled.DayNumber>
          </Styled.Day>
        ))}
      </Styled.Days>
    </Styled.Container>
  );
};

export { LayeredCalendar };
