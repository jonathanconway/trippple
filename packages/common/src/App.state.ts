import { Plan, AppState, AppStateHook, Range } from "./App.types"

export const useAppState = (initialState: AppState): AppStateHook => ({
  plans: [],
  navigatedDate: new Date(),
  createPlan: (plan: Plan) => {},
  updatePlan: (plan: Plan) => {},
  getPlansWithinRange: (range: Range<Date>) => ([]),
  setNavigatedDate: (date: Date) => {}
});
