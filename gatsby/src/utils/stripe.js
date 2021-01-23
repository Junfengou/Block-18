/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { loadStripe } from "@stripe/stripe-js"


let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51I5w86L6WESAJmN2ZO48bwEU8u16s8npi8Gii4KYBLPEQkpZdVlDjr6YHSJrEfTaQotgKs27tBxJQhWvRrixuLNp00q8G6TZ3S')
  }
  return stripePromise
}

export default getStripe