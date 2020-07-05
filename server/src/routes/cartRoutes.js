const express   = require("express");
const Product     = require('../models/Product');
const Cart      = require('../models/Cart');
const router    = express.Router();

//auth check middleware
router.use((req, res, next) => {
    if(req.session.user) {
        next();
    } else {
        res.status(401).send("Please login");
    }
});

router.get("/", async (req, res) => {
    try {
        const Products = await Product.find({owner: req.session.user.id}).populate('items');
        res.json(Products);
    } catch {
        res.status(400).send("bad request");
    }
});

// router.post("/new")
// as soon as a user login, they should land on shopping, creat cart ID and redirect to homepage - workaround

// router.get("/buy", async (req, res) => {
//     // sample array to be replaced with frontend data
//     // get all the items sent from frontend
//     let arrary = [{ 
//         id: "5efc6174b66d08f204143c98",
//         quantity: 2
//     },
//     {
//         id: "5efc56be64493fefe8a201f2",
//         quantity: 1
//     }]
//     // check id and update stock status
//     arrary.forEach((i,v)=>{
//         Product.findOne({_id: arrary.id})
//     })
// });

module.exports = router;