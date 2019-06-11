import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

class Store {
  constructor(updateState, state) {
    this._updateState = updateState;
    this._state = state;
  }

  get state() {
    return this._state;
  }
  update(action) {
    this._state = this._updateState(this._state, action);
  }
}

const updateState = (state, action) => {
  if (action.type === "ADD") {
    return state + action.amount;
  }
  if (action.type === "SUB") {
    return state - action.amount;
  } else {
    return state;
  }
};

const store = new Store(updateState, 0);

store.update({ type: "ADD", amount: 2 });
store.update({ type: "ADD", amount: 102 });
store.update({ type: "SUB", amount: 1002 });
console.log(store.state);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
