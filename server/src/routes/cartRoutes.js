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

module.exports = router;