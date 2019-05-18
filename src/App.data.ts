import { Plan, Flight, Hotel } from "./App.types";

export const dummyPlans: readonly Plan[] = [
  <Flight>{
    airlineName: "American Airlines",
    flightCode: "243",
    confirmationCode: "MZZGSY",
    departingAirportCode: "JFK",
    arrivingAirportCode: "MIA",
    startDateTime: new Date(2019, 7, 5, 15, 59, 0),
    endDateTime: new Date(2019, 7, 5, 19, 29, 0),
  },
  <Flight>{
    airlineName: "American Airlines",
    flightCode: "2421",
    confirmationCode: "MZZGSY",
    departingAirportCode: "MIA",
    arrivingAirportCode: "SFO",
    startDateTime: new Date(2019, 7, 14, 21, 0, 0),
    endDateTime: new Date(2019, 7, 14, 23, 47, 0),
  },
  <Flight>{
    airlineName: "American Airlines",
    flightCode: "6067",
    confirmationCode: "ZPJXHN",
    departingAirportCode: "SFO",
    arrivingAirportCode: "LAX",
    startDateTime: new Date(2019, 7, 21, 8, 0, 0),
    endDateTime: new Date(2019, 7, 21, 9, 42, 0),
  },
  <Hotel>{
    hotelName: "HI Los Angeles - Santa Monica",
    hotelAddress: "1436 2nd Street, CA 90401, Los Angeles, USA",
    startDateTime: new Date(2019, 7, 21, 15, 0, 0),
    endDateTime: new Date(2019, 7, 24, 9, 0, 0),
  },
  <Hotel>{
    hotelName: "Luxor",
    hotelAddress: "",
    startDateTime: new Date(2019, 7, 24, 15, 0, 0),
    endDateTime: new Date(2019, 7, 26, 9, 0, 0),
    costEstimate: { amount: 200, currency: "AUD" }
  },
  <Hotel>{
    hotelName: "Luxor",
    hotelAddress: "",
    startDateTime: new Date(2019, 7, 26, 15, 0, 0),
    endDateTime: new Date(2019, 7, 29, 9, 0, 0),
    costEstimate: { amount: 200, currency: "AUD" }
  },
  <Flight>{
    airlineName: "Hawaiian Airlines",
    flightCode: "1",
    confirmationCode: "YQOLDS",
    departingAirportCode: "LAX",
    arrivingAirportCode: "SYD",
    startDateTime: new Date(2019, 7, 31, 7, 0, 0),
    endDateTime: new Date(2019, 8, 1, 7, 45, 0),
  },
];