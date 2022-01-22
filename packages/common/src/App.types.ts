export interface Plan {
  readonly startDateTime: Date;
  readonly endDateTime: Date;
  readonly id: string;
}

export interface Flight {
  readonly airlineName: string;
  readonly flightCode: string;
  readonly confirmationCode: string;
  readonly departingAirportCode: string;
  readonly arrivingAirportCode: string;
}

export interface Hotel {
  readonly hotelName: string;
  readonly hotelAddress: string;
}

export interface Range<T> {
  readonly from: T;
  readonly to: T;
}

export interface AppState {
  readonly plans: readonly Plan[];
  readonly navigatedDate: Date;
}

export interface AppStateHook extends AppState {
  readonly createPlan: (plan: Plan) => void;
  readonly updatePlan: (plan: Plan) => void;
  readonly getPlansWithinRange: (range: Range<Date>) => Plan[];
  readonly setNavigatedDate: (date: Date) => void;
}

export type DateRange = Range<Date>;
