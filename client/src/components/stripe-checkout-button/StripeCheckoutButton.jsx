import React from "react";
import StripeCheckout from "react-stripe-checkout";

import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey =
    "pk_test_51JDsHvIjRXXkbrh9hrRghrTIAY3fl4IjyYmvJYBriuESdS6l1wioCMzAbaHWLJubmXkztDcFoMJ6oFoMo1m1IEmW004drT9VZB";

  function handleToken(token) {
    axios
      .post("/payment", {
        amount: priceInCents,
        token,
      })
      .then((response) => {
        alert("Successful payment");
        console.log(response);
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert("There was some issue with your payment!");
      });
  }

  return (
    <StripeCheckout
      token={handleToken}
      stripeKey={publishableKey}
      name="Maxks Ltd."
      description={`Your estimated total is $${price}`}
      amount={priceInCents}
      currency={"USD"}
      shippingAddress
      billingAddress
      panelLabel="Pay Now"
      image="https://svgshare.com/i/ZG1.svg"
    />
  );
};

export default StripeCheckoutButton;
