import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import "../styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  " pk_test_51IK2FCBl6Bo1DJ4oUer0KkRTTAL9Fj21vhzqJz8xkCyE1eTm0DW5L39opmBWbBI7NRexOJTaNbzSWN6BITBnw67a00FtdvsFmQ"
);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log(authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
