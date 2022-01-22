import styled from "styled-components";

import { colors } from "../theme";

export const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${colors.brand};
    color: ${colors.inverse};
    font-size: 1.5rem;

    >:first-child {
      flex: 1;
    }
  `,
  Brand: styled.div`
    padding: 0.5rem;
    align-self: stretch;
  `,
  Actions: styled.div`
    display: flex;
  `,
  Button: styled.button`
    margin: 0.25rem;
    padding: 0.25rem 1rem;
    font-size: 1.5rem;
    border: solid 1px ${colors.inverse};
    border-radius: 0.25rem;
    background-color: ${colors.action}
    color: ${colors.inverse};
  `
};