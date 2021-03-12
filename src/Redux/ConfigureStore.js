import { combineReducers, createStore } from "redux";
import BasketReducer from "./Duck/Basket";

const reducer = combineReducers({
  basket: BasketReducer,
});

const store = createStore(reducer);

export default store;
