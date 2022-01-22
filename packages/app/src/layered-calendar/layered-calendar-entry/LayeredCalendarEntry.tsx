import React from "react";
import { Text, FlatList } from "react-native";

import { Styled } from "./LayeredCalendarEntry.styles";

interface LayeredCalendarEntryProps {
  readonly from?: Date;
  readonly to?: Date;
  readonly title: string;
}

const LayeredCalendarEntry = (props: LayeredCalendarEntryProps) => {
  return (
    <Styled.Container>
    </Styled.Container>
  );
};

export { LayeredCalendarEntry };
