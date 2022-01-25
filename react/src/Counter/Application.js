import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, set } from "./actions";
export const Application = () => {
  const inputRef = React.useRef();
  // useSelector takes selector function basically that selects particular slice from the store
  const count = useSelector((state) => state.count);
  // use of useDispatch hook is similar to store.dispatch()
  const dispatch = useDispatch();
  return (
    <main>
      <p>
        This is the counter application built using react and redux. The entry
        file is main.js which is present in Counter folder and also Provider
        Component from 'react-redux' is present in this file. So main.js is the
        root of this application and main logic resides in Application.js
      </p>
      <h1>{count}</h1>
      <section>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(set(0))}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </section>
      <section className="controls">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(set(inputRef.current.value));
            inputRef.current.value = 0;
          }}
        >
          <label htmlFor="set-to">Set Count: </label>
          <input
            id="set-to"
            type="number"
            ref={inputRef}
            placeholder="enter count"
            onChange={(event) => {
              inputRef.current.value = event.target.value;
            }}
          />
          <input type="submit" />
        </form>
      </section>
    </main>
  );
};
