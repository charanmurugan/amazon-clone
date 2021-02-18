import { combineReducers, createStore } from "redux";
import ClickReducer from "./Duck/Clicker";
import BasketReducer from "./Duck/Basket";

const reducer = combineReducers({
  click: ClickReducer,
  basket: BasketReducer,
});

const store = createStore(reducer);

export default store;
