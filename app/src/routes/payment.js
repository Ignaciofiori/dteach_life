const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post("/create-order",paymentController.createOrder)
router.get("/success",(req,res)=> res.send("el usuario ya pago"))
router.get("/failure",(req,res)=> res.send("el usuario no pago"))
router.get("/pending",(req,res)=> res.send("el usuario esta por pagar"))
router.post("/webhook",paymentController.recieveWebhook)
module.exports = router;
