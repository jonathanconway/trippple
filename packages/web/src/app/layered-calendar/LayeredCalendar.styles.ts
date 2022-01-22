import styled from "styled-components";

import { colors } from "@trippple/common/src/theme";

const Styled = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    height: 100%;
  `,
  Years: styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border-bottom: solid 1px ${colors.border};
  `,
  Year: styled.div`
    padding: 1rem;
    ${(props: { selected: boolean }) => props.selected
      ? `background-color: ${colors.highlight};`
      : ``}
  `,
  Months: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border-bottom: solid 1px ${colors.border};
  `,
  Month: styled.div`
    padding: 1rem;
    flex: 0 0 auto;

    ${(props: { selected: boolean }) => props.selected
      ? `background-color: ${colors.highlight};`
      : ``}
  `,
  Days: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  `,
  Day: styled.div`
    // padding: 1rem;
    border-bottom: solid 1px ${colors.border};

    ${(props: { selected: boolean }) => props.selected
    ? `background-color: ${colors.highlight};`
    : ``}
  `,
  DayNumber: styled.div`
    display: flex;
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