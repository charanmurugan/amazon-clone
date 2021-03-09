import React from "react";
import "../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { getBasketTotal } from "../Redux/Duck/Basket";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const history = useHistory();
  let basket = useSelector((state) => state.basket.basket);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal__list">
              Subtotal ({basket?.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"  ₹  "}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
