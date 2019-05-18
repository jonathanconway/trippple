import React from "react";
import { shallow } from "enzyme";
import { renderHook, act } from "react-hooks-testing-library";

import { App } from "./App";
import { useAppState } from "./App.state";

describe("<App /> component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });
});

describe("useAppState hook", () => {
  describe("createPlan", () => {
    it("creates a plan and allows it to be retrieved", () => {
      const appStateWrapper = renderHook(() => useAppState({ plans: [] })).result,
            dummyPlan = {
              id: "TEST",
              startDateTime: new Date(2019, 7, 5, 15, 59, 0),
              endDateTime: new Date(2019, 7, 5, 19, 29, 0),
            } as const;

      act(() => {
        appStateWrapper.current.createPlan(dummyPlan);
      });

      const plans = appStateWrapper.current.getPlansWithinRange({
        from: new Date(2019, 7, 5, 15, 59, 0),
        to: new Date(2019, 7, 5, 19, 29, 0)
      });

      expect(plans).toEqual([dummyPlan]);
    });
  });

  describe("updatePlan", () => {
    it("updates a plan and allows it to be retrieved", () => {
      const dummyPlan = {
              id: "TEST",
              startDateTime: new Date(2019, 7, 5, 15, 59, 0),
              endDateTime: new Date(2019, 7, 5, 19, 29, 0),
            } as const,
            appStateWrapper = renderHook(() => useAppState({ plans: [dummyPlan] })).result,
            dummyPlanUpdated = {
              ...dummyPlan,
              endDateTime: new Date(2019, 7, 5, 19, 29, 30)
            } as const;

      act(() => appStateWrapper.current.updatePlan(dummyPlanUpdated));

      const plans = appStateWrapper.current.getPlansWithinRange({
        from: new Date(2019, 7, 5, 15, 59, 0),
        to: new Date(2019, 7, 5, 19, 29, 30)
      });

      expect(plans).toEqual([dummyPlanUpdated]);
    });
  });

  describe("getPlansWithinRange", () => {
    const dummyPlans = [
            {
              id: "TEST1",
              startDateTime: new Date(2019, 6, 5, 15, 59, 0),
              endDateTime: new Date(2019, 6, 5, 19, 29, 0),
            },
            {
              id: "TEST2",
              startDateTime: new Date(2019, 7, 5, 15, 59, 0),
              endDateTime: new Date(2019, 7, 5, 19, 29, 0),
            }
          ],
          appStateWrapper = renderHook(() => useAppState({ plans: dummyPlans })).result;

    it("gets only plans within the range", () => {
      const result1 = appStateWrapper.current.getPlansWithinRange({
        from: new Date(2019, 7, 5, 15, 59, 0),
        to: new Date(2019, 7, 5, 19, 29, 30)
      });

      expect(result1.map(p => p.id)).toEqual(["TEST2"]);

      const result2 = appStateWrapper.current.getPlansWithinRange({
        from: new Date(2019, 6, 5, 15, 59, 0),
        to: new Date(2019, 6, 5, 19, 29, 30)
      });

      expect(result2.map(p => p.id)).toEqual(["TEST1"]);

      const result3 = appStateWrapper.current.getPlansWithinRange({
        from: new Date(2019, 6, 5, 15, 59, 0),
        to: new Date(2019, 7, 5, 19, 29, 30)
      });

      expect(result3.map(p => p.id)).toEqual(["TEST1", "TEST2"]);
    });
  });
});
