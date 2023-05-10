const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      email: req.body.email,
      source: req.body.tokenId,
    });
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      customer: customer.id,
      payment_method_types: ["card"],
      payment_method: customer.default_payment_method,
      confirm: true,
    });
    res.status(200).json(paymentIntent);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
