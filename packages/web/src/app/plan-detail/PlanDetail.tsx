import React from "react";

import { Styled } from "./PlanDetail.styles";
import { Plan } from "@trippple/common/src/App.types";

interface PlanDetailProps {
  readonly plan: Plan;
}

const PlanDetail = (props: PlanDetailProps) => {
  return (
    <Styled.Container>
      <Styled.DateTimeRange>
      </Styled.DateTimeRange>
    </Styled.Container>
  );
};
