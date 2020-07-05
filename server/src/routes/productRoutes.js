const express   = require("express");
const Product = require("../models/Product");
const router    = express.Router();

// const products = [
//     {
//         id: "01", // add sku if time allows
//         name: "Poster",
//         price: "12.99", // change to cents
//         stock: 10,
//     },
//     {
//         id: "02",
//         name: "Flower Pot",
//         price: "4.99",
//         stock: 20,
//     },
//     {
//         id: "03",
//         name: "Vases",
//         price: "16.99",
//         stock: 30,
//     },
//     {
//         id: "04",
//         name: "Clocks",
//         price: "2.49",
//         stock: 40,
//     },
//     {
//         id: "05",
//         name: "Storage boxes",
//         price: "14.99",
//         stock: 25,
//     },
//     {
//         id: "06",
//         name: "Home fragrance",
//         price: "6.99",
//         stock: 15,
//     },
//     {
//         id: "07",
//         name: "Noticeboards",
//         price: "14.99",
//         stock: 35,
//     }
// ]


// Public routes
router.get('/', (req, res) => {
    Product.find().then((data) => {
        res.json(data);
    });    
});

// Admin routes
router.use((req, res, next) => {
    if(req.session.user.username == "admin") {
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

module.exports = router;