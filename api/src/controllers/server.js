// This is your test secret API key.
const stripe = require('stripe')('sk_test_7QiJIpFoU31AM8XAerpSzJyM');

exports.createProduct = async (req, res) => {
    const prix = req.body.prix *  req.body.nombreSeance * 100
    const paymentIntent = await stripe.paymentIntents.create({
        amount: prix,
        currency: "EUR",
        payment_method_types: ["card"],
        metadata: { name:"Session" },
      });
      const clientSecret = paymentIntent.client_secret;
      res.json({ message: "Payment init", clientSecret });
  }


  exports.stripe = async (req, res) => {
        const sig = req.headers["stripe-signature"];
        let event;
        try {
          event = await stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
          );
        } catch (err) {
          console.error(err);
          res.status(400).json({ message: err.message });
        }
      
        // Event when a payment is initiated
        if (event === "payment_intent.created") {
          console.log(`${event.data.object.metadata.name} invalid payment!`);
        }
        // Event when a payment is succeeded
        if (event === "payment_intent.succeeded") {
          console.log(`${event.data.object.metadata.name} accepted payment!`);
          // fulfilment
        }
        res.json({ ok: true });
  }
;

