import { configure } from "@storybook/react";

import "../src/index.css";

function loadStories() {
  const contextRequire = require.context('../src', true, /^.*\.stories\.tsx$/);
  contextRequire.keys().forEach(filename => contextRequire(filename));
}

configure(loadStories, module);