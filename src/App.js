import "./App.css";
import Checkout from "./Components/Checkout/Checkout";
import SharedLayout from "./Components/SharedLayout";
// import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import { useStateValue } from "./Components/StateProvider";
import { useEffect } from "react";
import { auth } from "./Components/firebase";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Header from "./Components/Header/Header";
import Orders from "./Components/Orders/Orders";

const promise = loadStripe(
  "pk_test_51OP4hIFKUwCba3AkUSCEvdIXtnxrM93fNSWr2NEYFyowLHmojtDXlQMKTC5JSybfsc2ekilROEpZdSZVRbWPEMjG00fbwjmXt4"
);

function App() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
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
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="checkout" element={<Checkout />} />
          <Route path="orders" element={<Orders />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route
          path="payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
      </Routes>
    </>
  );
}
export default App;
