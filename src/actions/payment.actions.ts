import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_stripeSk);

export async function createPaymentIntent(amount: number) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: 'usd',
  });

  return paymentIntent;
}
