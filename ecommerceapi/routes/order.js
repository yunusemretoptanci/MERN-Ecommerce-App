const Order = require("../models/order");
const router = require("express").Router();
const {verifyToken,verifyTokenAndAuthorization} = require("./verifyToken");


router.post("/", veriifyToken, async(req,res)=>{
    const newOrder= new Order(req.body);
    
    try{ 
    const savedOrder= await newOrder.save();
    res.status(200).json(savedOrder)
    }catch(err){
    res.status(500).json(err);
    }
    });

    router.get("/:userId", verifyTokenAndAuthorization, async(req,res)=>{
        try{
            const orders= await Order.find({userId: req.params.userId});
            res.status(200).json(cart);
        }catch(err){
            res.status(500).json(err);
        }
    });
    




module.exports =router;