import React from "react";
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";
import CardProduct from "./CartProduct";
import { useSelector } from "react-redux";
function Checkout() {
  let basket = useSelector((state) => state.basket.basket);
  let user = useSelector((state) => state.basket.user);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad image"
        />
        <div>
          <h3>{user ? ` Hello${user.email}` : `Hello , Guest`}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
        {basket.map((ele) => {
          return (
            <CardProduct
              id={ele.id}
              title={ele.title}
              price={ele.price}
              image={ele.image}
              rating={ele.rating}
            />
          );
        })}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
