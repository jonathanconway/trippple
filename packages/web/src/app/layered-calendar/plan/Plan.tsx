import React from "react";

import { Styled } from "./Plan.styles";
import { Plan } from "@trippple/common/src/App.types";

interface PlanProps {
  readonly plan: Plan;
}

const Plan = (props: PlanProps) => {
  return (
    <Styled.Container></Styled.Container>
  );
};
