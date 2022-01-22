import React from "react";
import { Header as RNEHeader } from "react-native-elements";

import { Styled } from "./Header.styles";

export const Header = () => (
  <RNEHeader
    centerComponent={{ text: "Trippple" }}
  />
);
