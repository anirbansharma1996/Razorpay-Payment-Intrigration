const express = require("express");
const { checkout,paymentVarification } = require("../controller/payment.controller");

const router = express.Router();

router.post("/checkout",checkout)
router.post("/verification",paymentVarification)


module.exports = router;
