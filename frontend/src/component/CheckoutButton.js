import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const handleCheckout = async () => {
  const stripe = await stripePromise;

  const response = await fetch('http://localhost:8080/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const session = await response.json();

  // Redirect to Stripe Checkout
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });

  if (result.error) {
    console.error(result.error.message);
  }
};

export default function CheckoutButton() {
  return <button onClick={handleCheckout}>Pay Now</button>;
}
