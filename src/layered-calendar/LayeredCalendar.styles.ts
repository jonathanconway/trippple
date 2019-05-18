import styled from "styled-components";

import { colors } from "../theme";

const Styled = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
  `,
  Years: styled.div`
    display: flex;
    flex-direction: row;
    overflow: auto;
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
    overflow: auto;
    margin-top: 1rem;
  `,
  Day: styled.div`
    padding: 0 0.5rem 0.5rem 0.5rem;
    margin: 0 0.5rem 0.5rem 0.5rem;
    border-bottom: solid 1px ${colors.border};
  `,
  DayNumber: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: solid 1px ${colors.default};
    border-radius: 100%;
  `
};

export { Styled };