const express  = require('express');
const adminRouter =  express.Router();
const admin  =  require('../middlewares/admin');
const Product = require('../models/product');
adminRouter.post('/admin/add-product' , admin , async (req , res) =>  {
   try {
     const {name , description  , quantity , images , category , price } = req.body; 
    let product  =  new Product({
   name , description , quantity , images , category , price
    });
   product =  await product.save();
   res.json(product);
   } catch (error) {
      res.status(500).json({msg: "something not good "});
   }
})

module.exports = adminRouter;
  