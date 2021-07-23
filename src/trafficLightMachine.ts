// As shorthand, in XState, events that only have a type can be represented just by their string type:
// equivalent to { type: 'TIMER' }
// const timerEvent = 'TIMER';

        // state transition (shorthand)
        // this is equivalent to { target: 'resolved' }
        // RESOLVE: 'resolved',

import { createMachine } from "xstate";

type TrafficLightEvent = { type: "NEXT" };

type TraffiLightState =
  | { value: "green"; context: undefined }
  | { value: "yellow"; context: undefined }
  | { value: "red"; context: undefined };

export const trafficLightMachine = createMachine<
  undefined, // We don’t have context, so we type it as undefined
  TrafficLightEvent,
  TraffiLightState
>({
  id: "trafficLight",
  initial: "red",
  states: {
    green: {
      on: { NEXT: "yellow" }
    },
    yellow: {
      on: { NEXT: "red" }
    },
    red: {
      on: { NEXT: "green" }
    }
  }
});
