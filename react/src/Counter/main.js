import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Application } from "./Application";

const Counter = () => {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
};

export default Counter;
