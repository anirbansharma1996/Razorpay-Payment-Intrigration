const express = require("express");
const dotenv = require("dotenv");
const connect = require("./config/mongo.config.js");
const cors = require("cors");
const PaymentRouter = require("./routes/payment.route.js");
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("hello"));
app.use("/api", PaymentRouter);
app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY_ID })
);

app.listen(process.env.PORT, () => {
  connect();
  console.log("server started on " + process.env.PORT);
});
