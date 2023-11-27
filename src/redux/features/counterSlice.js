import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  /**
   * The slice's name. Used to namespace the generated action types.
   */
  name: "counter",
  /**
   * The initial state that should be used when the reducer is called the first time.
   * This may also be a "lazy initializer" function,
   * which should return an initial state value when called.
   * This will be used whenever the reducer is called with `undefined` as its state value,
   * and is primarily useful for cases like reading initial state from `localStorage`.
   */
  initialState: {
    counter: 0,
  },
  /**
   * A mapping from action types to action-type-specific *case reducer*
   * functions. For every action type, a matching action creator will be
   * generated using `createAction()`.
   */
  reducers: {
    increment: (state) => {
      debugger;
      state.counter = state.counter + 1;
    },
    decrement: (state) => {
      debugger;
      state.counter = state.counter - 1;
    },
    //TODO: Own Action Increment by five and decrement by five
    incrementfive: (state) => {
      state.counter = state.counter + 5;
    },
    decrementfive: (state) => {
      state.counter = state.counter - 5;
    },
  },
});

console.log(counterSlice, "check what is in counter slice");
//* now see in console there are two actions increment and decrement need to export that
export const { increment, decrement, incrementfive, decrementfive } =
  counterSlice.actions;
export default counterSlice.reducer;
