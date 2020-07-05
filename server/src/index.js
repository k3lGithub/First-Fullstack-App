const express = require('express')
const session = require('express-session');
require('./mongo');

//variables
const port = 3000

//setup
const app = express();

//routes
const userRouter = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

//middleware
app.use(express.json());
app.use(session({
    secret: "marshmellow rainbow river",
    resave: false,
    saveUninitialized: false 
}));

app.use((req, res, next) => {
    console.log("Query");
    next();
})

// Routes
app.use("/user", userRouter);
app.use("/product", productRoutes);
app.use("/checkout", cartRoutes);

// Start server
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))