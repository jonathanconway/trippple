import React from "react";
import { storiesOf } from "@storybook/react";

import { LayeredCalendar } from "./LayeredCalendar";

storiesOf("LayeredCalendar", module)
  .add("default", () => (
    <LayeredCalendar
      navigatedDate={new Date()}
    />
  ));
