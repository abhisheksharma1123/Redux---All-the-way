// ====================================
// Redux Core concepts in single file
// =====================================

import {
  compose,
  createStore,
  bindActionCreators,
  combineReducers,
} from "redux";

const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();
const outcome = embolden(repeatThreeTimes(makeLouder("hello")));
// console.log(outcome);
// console.log(compose(embolden, repeatThreeTimes, makeLouder)("hello"));
// =====================================================
const INCREMENT = "INCREMENT";
const ADD = "ADD";
const CHANGEROLL = "CHANGEROLL";

const initialState = {
  value: 0,
  result: { name: "abhishek", role: "admin" },
};

// Action Creators
const increment = () => ({ type: INCREMENT });
const add = (number) => ({ type: ADD, payload: number });
const changeRoll = (role) => ({ type: CHANGEROLL, payload: role });

// Reducer functions = name of the individual reducer functions should be same as the slices.
const value = (state = initialState.value, action) => {
  if (action.type === INCREMENT) {
    // mistake which i was doing : value:state.value + 1 ; state is already intialstate.value
    return state + 1;
  }
  if (action.type === ADD) {
    return state + action.payload;
  }
  return state;
};

const result = (state = initialState.result, action) => {
  if (action.type === CHANGEROLL) {
    return { ...state, role: action.payload };
  }
  return state;
};
const rootReducer = combineReducers({ value, result });

const store = createStore(rootReducer);
const unsubscribe = store.subscribe(() =>
  console.log("State change detected", store.getState())
);

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(add(4));
store.dispatch(changeRoll("regular"));
// another sytax
compose(store.dispatch, increment)();
// // ===============Bind Action Creators===================

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
