// ====================================
// Redux Core concepts in single file
// =====================================

import { compose, createStore, bindActionCreators } from "redux";

const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();
const result = embolden(repeatThreeTimes(makeLouder("hello")));
// console.log(result);
// console.log(compose(embolden, repeatThreeTimes, makeLouder)("hello"));
// =====================================================

const initialState = { value: 0 };
const INCREMENT = "INCREMENT";
const ADD = "ADD";

// Action Creators
const increment = () => ({ type: INCREMENT });
const add = (number) => ({ type: ADD, payload: number });

// Reducer function
const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { value: state.value + 1 };
  }
  if (action.type === ADD) {
    return { value: state.value + action.payload };
  }

  return state;
};
const store = createStore(reducer);
const unsubscribe = store.subscribe(() =>
  console.log("State change detected", store.getState())
);
store.dispatch(increment());
store.dispatch(add(4));
store.dispatch(increment());
// another sytax
compose(store.dispatch, increment)();
// ===============Bind Action Creators===================

const actions = bindActionCreators(
  {
    increment,
    add,
  },
  store.dispatch
);
actions.increment();
//  value should be 8
console.log(store.getState());
