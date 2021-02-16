import { combineReducers, createStore } from "redux";
import ClickReducer from "./Duck/Clicker";

const reducer = combineReducers({
  click: ClickReducer,
});

const store = createStore(reducer);

export default store;
