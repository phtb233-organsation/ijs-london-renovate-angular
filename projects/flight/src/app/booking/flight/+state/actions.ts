import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Flight } from "../logic/model/flight";
import { FlightFilter } from "../logic/model/flight-filter";

// The createActionGroup function returns a dictionary of action creators where the name of each
// action creator is created by camel-casing the event name, and the action type is created
// using the "[Source] Event Name" pattern.
export const ticketActions = createActionGroup({
  source: 'tickets',
  events: {
    // ask application to load flights, using the specified FlightFilter
    'flights load': props<FlightFilter>(),
    // the api call to load flights was successful.         
    'flights loaded': props<{ flights: Flight[] }>(),
    'flights loaded by passenger': props<{ flights: Flight[] }>(),
    'flight update': props<{ flight: Flight }>(),
    'flights clear': emptyProps()
  }
});
