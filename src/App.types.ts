type Currency = string;

export interface Money {
  readonly amount: number;
  readonly currency: Currency;
}

export interface Plan {
  readonly id: string; // GUID

  readonly startDateTime: Date;
  readonly endDateTime: Date;

  readonly linkUrl?: string;

  readonly costEstimate?: Money;
  readonly costActual?: Money;
  readonly isBooked?: false;
}

export interface Flight extends Plan {
  readonly airlineName: string;
  readonly flightCode: string;
  readonly confirmationCode: string;
  readonly departingAirportCode: string;
  readonly arrivingAirportCode: string;
}

export interface Coordinates {
  readonly latitude: string;
  readonly longitude: string;
}

export interface Hotel extends Plan {
  readonly hotelName: string;
  readonly hotelAddress: string;
  readonly hotelCoordinates?: Coordinates;
}

export interface DateRange {
  readonly from: Date;
  readonly to: Date
}