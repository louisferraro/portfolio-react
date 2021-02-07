import React from "react";
import Top from "../components/payment/Top";
import Slider from "../components/payment/Slider";
import Stripe from "../components/payment/Stripe";
import Grow from "../components/payment/Grow";
import Global from "../components/payment/Global";
import Platform from "../components/payment/Platform";
import Flipcard from "../components/payment/Flipcard";

export default function PaymentPage() {
  return (
    <div className="payment">
      <Top />
      <Slider />
      <Stripe />
      <Grow />
      <Global />
      <Platform />
      {/* <Flipcard/> */}
    </div>
  );
}
