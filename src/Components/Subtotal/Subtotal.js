import React from "react";
import numeral from "numeral";
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  const totalAmount = getBasketTotal(basket);

  const formattedAmount = numeral(totalAmount).format("$0,0.00");
  const navigate = useNavigate();
  return (
    <div className="subtotal">
      <div>
        <p>
          Subtotal ({basket.length || 0} items):{" "}
          <strong>{formattedAmount}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
      </div>
      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
