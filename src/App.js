import React from "react";

import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

import cartItems from "./cart-items";

import { createStore } from "redux";

// const store = createStore(() => {})

// initial store
const initialStore = {
  count: 0,
  name: "john"
};

const DECREASE = "DECREASE";
const INCREASE = "INCREASE";
const RESET = "DECREASE";
const CHANGE_NAME = "CHANGE_NAME";

const reducer = (state, action) => {
  console.log({ state, action });
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 };
  }

  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === RESET) {
    return { ...state, count: 0 };
  }

  if (action.type === CHANGE_NAME) {
    return { ...state, name: "liem" };
  }

  return state;
};

const store = createStore(
  reducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.dispatch({ type: DECREASE });
store.dispatch({ type: CHANGE_NAME });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: RESET });

console.log(store.getState());

const App = () => {
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
};

export default App;
