import React from "react";

import { Styled } from "./App.styles";
// import { useAppState } from "../../common/src/App.state";
import { Header } from "./header/Header";
import { LayeredCalendar } from "./layered-calendar/LayeredCalendar";

const BLANK_STATE = { plans: [], navigatedDate: new Date() };

export const App = () => {
  // const appState = useAppState(BLANK_STATE);
  return (
    <Styled.Container>
      <Header />
      <LayeredCalendar />
    </Styled.Container>
  );
};
