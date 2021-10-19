import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import toDoReducer from "./reducers/ToDoReducer";

const toDoStore = createStore(toDoReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={toDoStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
