import Stripe from 'stripe';

const stripe = new Stripe(process.env.stripeSk);

export async function createPaymentIntent(amount: number) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'usd',
  });

  return paymentIntent;
}
