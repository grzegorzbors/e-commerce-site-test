import Commerce from "@chec/commerce.js";

// store
export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);
