const express = require('express');
const PORT = 3000;
const app = express() ;
const mongoose =  require('mongoose');
const authRouter = require('./routes/auth');
const DB ="mongodb+srv://vashudev8777:1111111111@cluster0.gnfdlhi.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());
app.use(authRouter);

mongoose.connect(DB).then( () => {
 console.log("connect");
}).catch((e) => {
  console.log(e);
});
app.listen(PORT , "0.0.0.0", () => {
  console.log(`connected at ${PORT}`);
});