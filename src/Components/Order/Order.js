import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../Checkout/CheckoutProduct";
// import numeral from "numeral";
import numeral from "numeral";
import { useStateValue } from "../StateProvider";

function Order({ order }) {
  // eslint-disable-next-line
  const [{ basket, user }, dispatch] = useStateValue();
  const getBasketTotal = (basket) =>
    order.data.basket?.reduce((amount, item) => item.price + amount, 0);
  const totalAmount = getBasketTotal(basket);
  const formattedAmount = numeral(totalAmount).format("$0,0.00");
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <h3 className="order__total">Order Total: {formattedAmount}</h3>
    </div>
  );
}

export default Order;
