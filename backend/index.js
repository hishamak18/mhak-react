const express = require('express')
const app = express() 
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require('../backend/routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const stripeRoute = require('./routes/stripe')
const cors = require('cors');





dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
  app.use(express.json( ))
  app.use(cors());
  app.use('/backend/users',userRoute);
  app.use('/backend/auth',authRoute)
  app.use('/backend/products',productRoute)
  app.use("/backend/carts", cartRoute);
  app.use("/backend/orders", orderRoute);
  app.use("/backend/checkout", stripeRoute);

  app.listen( process.env.PORT, () => {
    console.log(`Backend server is running at ${process.env.PORT}!`);
  });