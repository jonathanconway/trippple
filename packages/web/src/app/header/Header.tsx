import React from "react";

import { Styled } from "./Header.styles";

export const Header = () => (
  <Styled.Container>
    <Styled.Brand>
      trippple
    </Styled.Brand>
    <Styled.Actions>
      <Styled.Button>
        + Add Plan
      </Styled.Button>
    </Styled.Actions>
  </Styled.Container>
);
