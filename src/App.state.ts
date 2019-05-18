import { Plan, DateRange } from "./App.types";
import { useReducer } from "react";

export interface CreatePlan {
  readonly type: "CREATE_PLAN";
  readonly plan: Plan;
}

export interface UpdatePlan {
  readonly type: "UPDATE_PLAN";
  readonly planId: string;
  readonly plan: Plan;
}

export interface DeletePlan {
  readonly type: "DELETE_PLAN";
  readonly planId: string;
}

export type Action
  = CreatePlan
  | UpdatePlan
  | DeletePlan;

export interface AppState {
  readonly plans: readonly Plan[];
}

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "CREATE_PLAN":
      return {
        ...state,
        plans: [
          ...state.plans,
          action.plan
        ]
      };

    case "UPDATE_PLAN":
      return {
        ...state,
        plans: state.plans.map(plan =>
          plan.id === action.planId
            ? { ...plan, ...action.plan }
            : plan)
      };

    case "DELETE_PLAN":
      return {
        ...state,
      };
  }
  return state;
};

export interface AppStateHook {
  readonly createPlan: (plan: Plan) => void;
  readonly updatePlan: (plan: Plan) => void;
  readonly deletePlan: (plan: Plan) => void;
  readonly getPlansWithinRange: (dateRange: DateRange) => readonly Plan[];
}

export const useAppState = (initialState: AppState): AppStateHook => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return {
    createPlan: (plan: Plan) =>
      dispatch({
        type: "CREATE_PLAN",
        plan
      }),
    updatePlan: (plan: Plan) =>
      dispatch({
        type: "UPDATE_PLAN",
        planId: plan.id,
        plan
      }),
    deletePlan: (plan: Plan) => {},
    getPlansWithinRange: (dateRange: DateRange): readonly Plan[] =>
      state.plans.filter(plan =>
        new Date(plan.startDateTime).getTime() >= dateRange.from.getTime() &&
          new Date(plan.endDateTime).getTime() <= dateRange.to.getTime())
  };
};
