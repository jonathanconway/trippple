import React, { useRef, useEffect, CSSProperties } from "react";
import * as shortid from "shortid";
import { format } from "date-fns";
import { List } from "react-virtualized";

import { Styled } from "./LayeredCalendar.styles";

interface LayeredCalendarProps {
  readonly navigatedDate: Date;
  readonly setNavigatedDate?: (newDate: Date) => void;
}

const numberOfDays = 3600,
      generateYears = () => {
        const currentYear = new Date().getFullYear(),
              numberOfYears = 20;
        return Array(numberOfYears).fill(0).map((_, yearOffsetIndex) => (
          currentYear + (yearOffsetIndex - ((numberOfYears / 2) - 1))
        ));
      },
      generateMonths = () => {
        const numberOfMonths = 16;
        return Array(numberOfMonths).fill(0).map((_, monthOffsetIndex) => {
          const date = new Date();
          date.setMonth(date.getMonth() + (monthOffsetIndex - (numberOfMonths / 2)));
          return { name: format(date, "MMM"), index: date.getMonth() };
        })
      },
      generateDays = () => {
        return Array(numberOfDays).fill(0).map((_, dayOffsetIndex) => {
          const date = new Date();
          date.setDate(date.getDate() + (dayOffsetIndex - (numberOfDays / 2)));
          return date.getDate();
        })
      },
      isElementInViewport = (el: HTMLDivElement) => {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      };

const LayeredCalendar = (props: LayeredCalendarProps) => {
  const yearsRef = useRef<HTMLDivElement>(null),
        currentYearRef = useRef<HTMLDivElement>(null),
        currentDateRef = useRef<HTMLDivElement>(null),
        currentMonthRef = useRef<HTMLDivElement>(null),
        daysListRef = useRef<List>(null),

        navigatedYear = props.navigatedDate.getFullYear(),
        navigatedMonth = props.navigatedDate.getMonth(),
        navigatedDate = props.navigatedDate.getDate(),

        days = generateDays(),
        dayRowHeight = 45,

        handleYearClick = (yearIndex: number) => {
          if (props.setNavigatedDate) {
            const date = props.navigatedDate;
            date.setFullYear(yearIndex);
            props.setNavigatedDate(date);
          }
        },
        handleMonthClick = (monthIndex: number) => {
          if (props.setNavigatedDate) {
            const date = props.navigatedDate;
            date.setMonth(monthIndex);
            props.setNavigatedDate(date);
          }
        },
        handleDayClick = (dateIndex: number) => {
          if (props.setNavigatedDate) {
            const date = props.navigatedDate;
            date.setDate(dateIndex);
            props.setNavigatedDate(date);
          }
        },
        handleDaysListScroll = ({ scrollTop }: { scrollTop: number }) => {
          console.log(Math.round(scrollTop / dayRowHeight));
          // handleDayClick(Math.round(scrollTop / dayRowHeight));
        };

  useEffect(() => {
    if (yearsRef.current) {
      // Scroll to the middle on first mount
      const middle = (yearsRef.current.scrollWidth - yearsRef.current.clientWidth) / 2;
      yearsRef.current.scrollTo(middle, 0);
    }
    if (currentMonthRef.current && !isElementInViewport(currentMonthRef.current)) {
      currentMonthRef.current.scrollIntoView();
    }
    if (daysListRef.current) {
      daysListRef.current.scrollToRow(numberOfDays / 2);
    }
  });

  return (
    <Styled.Container>
      <Styled.Years ref={yearsRef}>
        {generateYears().map(year => (
          <Styled.Year
            key={shortid.generate()}
            selected={year === navigatedYear}
            ref={year === navigatedYear ? currentYearRef : undefined}
            onClick={() => handleYearClick(year)}>
            {year}
          </Styled.Year>
        ))}
      </Styled.Years>
      <Styled.Months>
        {generateMonths().map(month => (
          <Styled.Month
            key={shortid.generate()}
            selected={month.index === navigatedMonth}
            ref={month.index === navigatedMonth ? currentMonthRef : undefined}
            onClick={() => handleMonthClick(month.index)}>
            {month.name}
          </Styled.Month>
        ))}
      </Styled.Months>
      <Styled.Days>
        <List
          ref={daysListRef}
          height={519}
          rowCount={numberOfDays}
          rowHeight={dayRowHeight}
          rowRenderer={({ index, style }: { index: number, style: CSSProperties }) => {
            const day = days[index];
            return (
              <Styled.Day
                style={style}
                key={shortid.generate()}
                ref={day === navigatedDate ? currentDateRef : undefined}
                selected={day === navigatedDate}
                onTouchStart={() => handleDayClick(day)}>
                <Styled.DayNumber>{day}</Styled.DayNumber>
              </Styled.Day>
            );
          }}
          width={375}
          onScroll={handleDaysListScroll}
        />

        {/* {generateDays().map(day => (
          <Styled.Day
            key={shortid.generate()}
            ref={day === navigatedDate ? currentDateRef : undefined}
            selected={day === navigatedDate}
            onTouchStart={() => handleDayClick(day)}>
            <Styled.DayNumber>{day}</Styled.DayNumber>
          </Styled.Day>
        ))} */}
      </Styled.Days>
    </Styled.Container>
  );
};

export { LayeredCalendar };
