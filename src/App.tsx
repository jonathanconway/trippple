import React from "react";

import { Styled } from "./App.styles";
import { LayeredCalendar } from "./layered-calendar/LayeredCalendar";

const defaultProps = {
  navigated: {
    year: new Date().getFullYear(),
    month: new Date().getMonth()
  }
};

const App = () => (
  <Styled.Container>
    <LayeredCalendar {...defaultProps} />
  </Styled.Container>
);

export { App };
