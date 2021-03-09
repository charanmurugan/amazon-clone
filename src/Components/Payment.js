import { Link, useHistory } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import "../styles/Payment.css";
import CartProduct from "./CartProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Redux/Duck/Basket";
import axios from "axios";
import { useEffect } from "react";

function Payment() {
  let user = useSelector((state) => state.basket.user);
  let basket = useSelector((state) => state.basket.basket);
  const Identity = require("fake-identity");
  const fakeAddress = Identity.generate();
  const stripe = useStripe();
  const history = useHistory();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        url: `/payment/create?total=${getBasketTotal(basket)}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent=payment confirmation

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("/orders");
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          <Link style={{ textDecoration: "none" }} to="/checkout">
            {basket?.length} items
          </Link>
          )
        </h1>
        {/* Payment section -delivery address*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>
              {fakeAddress.firstName} {fakeAddress.lastName}
            </p>
            <p>{fakeAddress.street}</p>
            <p>{fakeAddress.zipCode}</p>
            <p>{fakeAddress.state}</p>
            <p>{fakeAddress.phoneNumber}</p>
          </div>
        </div>
        {/* Payment section -Review Items*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((ele) => {
              return (
                <CartProduct
                  id={ele.id}
                  title={ele.title}
                  price={ele.price}
                  image={ele.image}
                  rating={ele.rating}
                />
              );
            })}
          </div>
        </div>
        {/* Payment section -Payment method*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total :{value}</h3>
                    </>
                  )}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"  ₹  "}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now "}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
