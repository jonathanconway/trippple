import React from "react";
import { Text, FlatList } from "react-native";

import { Styled } from "./LayeredCalendar.styles";

interface LayeredCalendarProps {
  readonly navigatedDate?: Date;
  readonly setNavigatedDate?: (newDate: Date) => void;
}

const LayeredCalendar = (props: LayeredCalendarProps) => {

  return (
    <Styled.Container>
      <FlatList
        renderItem={({item}) => <Text>{item.key}</Text>}
        data={[{key: 'a'}, {key: 'b'}]}
      />
    </Styled.Container>
  );
};

export { LayeredCalendar };
