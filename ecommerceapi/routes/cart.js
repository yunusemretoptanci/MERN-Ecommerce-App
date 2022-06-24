const Cart = require("../models/Cart");
const router = require("express").Router();
const {verifyToken,verifyTokenAndAuthorization} = require("./verifyToken");


router.post("/", veriifyToken, async(req,res)=>{
    const newCart= new Cart(req.body);
    
    try{ 
    const savedCart= await newCart.save();
    res.status(200).json(savedCart)
    }catch(err){
    res.status(500).json(err);
    }
    });

    router.put("/:id", verifyTokenAndAuthorization, async(req,res)=>{
        try{
            const updatedCart=await Cart.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                {new:true}
            );
            res.status(200).json(updatedCart);
        }catch(err){
            res.status(500).json(err);
        }
    });

    router.delete("/:userId", verifyTokenAndAuthorization, async(req,res)=>{
        try{
            const cart= await Cart.findOne({userId: req.params.userId});
            res.status(200).json(cart);
        }catch(err){
            res.status(500).json(err);
        }
    });

    router.get("/:userId", verifyTokenAndAuthorization, async(req,res)=>{
        try{
            const cart= await Cart.findOne({userId: req.params.userId});
            res.status(200).json(cart);
        }catch(err){
            res.status(500).json(err);
        }
    });
    




module.exports =router;