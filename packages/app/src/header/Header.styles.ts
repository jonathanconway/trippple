import styled from "styled-components/native";

import { colors } from "@trippple/common/src/theme";

export const Styled = {
  Container: styled.View`
    flex-direction: row;
    background-color: ${colors.brand};
    color: ${colors.inverse};
    font-size: 15;

    >:first-child {
      flex: 1;
    }
  `,
  Brand: styled.Text`
    padding-left: 5;
    align-self: stretch;
  `,
  Actions: styled.View`
  `,
  Button: styled.Text`
    margin-top: 5;
    margin-right: 5;
    margin-bottom: 5;
    margin-left: 5;
    padding-left: 5;
    padding-right: 10;
    font-size: 15;
    border: solid 1px ${colors.inverse};
    border-radius: 10;
    background-color: ${colors.action}
    color: ${colors.inverse};
  `
};