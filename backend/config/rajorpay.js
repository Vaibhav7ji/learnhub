require('dotenv').config();
const Rajorpay = require('razorpay');


exports.instance = new Rajorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET
})