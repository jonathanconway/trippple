import styled from "styled-components/native";

import { colors } from "@trippple/common/src/theme";

const Styled = {
  Container: styled.View`
    justify-content: space-between;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    height: 100%;
  `,
  Years: styled.View`
    flex-direction: row;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border-bottom: solid 1px ${colors.border};
  `,
  Year: styled.View`
    padding: 1rem;
    ${(props: { selected: boolean }) => props.selected
      ? `background-color: ${colors.highlight};`
      : ``}
  `,
  Months: styled.View`
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border-bottom: solid 1px ${colors.border};
  `,
  Month: styled.View`
    padding: 1rem;
    flex: 0 0 auto;

    ${(props: { selected: boolean }) => props.selected
      ? `background-color: ${colors.highlight};`
      : ``}
  `,
  Days: styled.View`
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  `,
  Day: styled.View`
    // padding: 1rem;
    border-bottom: solid 1px ${colors.border};

    ${(props: { selected: boolean }) => props.selected
    ? `background-color: ${colors.highlight};`
    : ``}
  `,
  DayNumber: styled.View`
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: solid 1px ${colors.default};
    border-radius: 100%;
    margin: 0.4rem;
  `
};

export { Styled };