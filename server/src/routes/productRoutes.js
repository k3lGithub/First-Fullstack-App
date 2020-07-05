const express = require("express");
const Product = require("../models/Product");
const router = express.Router();


// Public routes
router.get('/', (req, res) => {
    Product.find().then((data) => {
        res.json(data);
    });
});

// Admin routes
router.use((req, res, next) => {
    if (req.session.user.username == "admin") {
        console.log(req.session);
        next();
    } else {
        res.status(401).send("Admin Access is required");
    }
});

router.post("/new", (req, res) => {
    Product.create(req.body).then((data) => {
        res.send(data);
    });
});


//Update Product by - Admin or Checkout Process
router.patch("/update/:id", (req, res) => {
    console.log("id: " + req.params.id);
    console.log(req.body);
    // update the stock according to order quantity
    let newStock;
    // Calculate new stock with quantity
    Product.findById({ _id: req.params.id })
        .then((data) => {
            newStock = { "stock": data.stock - req.body.quantity };

            if (req.body.quantity < data.stock) {
                updateProduct(newStock);
            } else {
                res.status(401).send("Stock on low. Try again.")
            }
        })

    function updateProduct(newStock) {
        Product.findByIdAndUpdate({ _id: req.params.id }, req.body && newStock, { new: true })
            .then((data) => {
                res.json(data);
            })
            .catch(() => {
                res.status(404).send("Product not found");
            });
    }
});

module.exports = router;