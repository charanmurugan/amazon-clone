const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51IK2FCBl6Bo1DJ4odeWSuhbBREPlOyzKXyIPuk6B9JsW2i5jlaPcd4pR6W6HnwkRU3yIPn077j8NPVyJUKqJSgkj00uOfg4bW4"
);
// APi
// app configuration
const app = express();
// Middlewares
app.use(cors({ origins: true }));
app.use(express.json());
//Api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log(total);
  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "INR",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
